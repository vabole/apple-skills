#!/usr/bin/env node

import { readFile, rm, writeFile } from "node:fs/promises"
import path from "node:path"
import process from "node:process"

import { renderSourceToArtifacts } from "./apple-docs/index.ts"
import type { AttributionMode } from "./apple-docs/types.ts"
import {
  collectMarkdownFiles,
  extractSourceUrl,
  isAppleSourceUrl,
  normalizeForCompare,
} from "./apple-docs/utils.ts"

type RefreshChange = {
  file: string
  markdown: string
  videoSidecar: string | null
}

async function main() {
  const rawArgs = process.argv.slice(2)
  const command = rawArgs[0] && !rawArgs[0].startsWith("-") ? rawArgs[0] : "refresh"
  const args = command === "refresh" ? rawArgs : rawArgs.slice(1)

  if (command === "fetch" || command === "render") {
    await runFetch(args)
    return
  }

  if (command === "refresh") {
    await runRefresh(args)
    return
  }

  if (command === "attribution-report") {
    await runAttributionReport(args)
    return
  }

  printHelp()
  if (command !== "help" && command !== "--help" && command !== "-h") {
    throw new Error(`Unknown command: ${command}`)
  }
}

async function runFetch(args: string[]) {
  const target = args.find((arg) => !arg.startsWith("-"))
  if (!target) {
    throw new Error("Missing source URL or path.")
  }

  const outputIndex = args.indexOf("--output")
  const outputPath = outputIndex >= 0 ? args[outputIndex + 1] : null
  const attributionMode = parseAttributionMode(args)
  const artifacts = await renderSourceToArtifacts(target, { attributionMode })

  if (outputPath) {
    await writeFile(outputPath, artifacts.markdown, "utf8")
    await writeVideoSidecar(outputPath, artifacts.videoSidecar)
    console.log(`Wrote ${outputPath}`)
    return
  }

  process.stdout.write(artifacts.markdown)
}

async function runRefresh(args: string[]) {
  const apply = args.includes("--apply")
  const matchIndex = args.indexOf("--match")
  const match = matchIndex >= 0 ? (args[matchIndex + 1]?.toLowerCase() ?? null) : null
  const attributionMode = parseAttributionMode(args)
  const files = (await collectMarkdownFiles(path.resolve("skills"))).filter(
    (file) => !file.endsWith(`${path.sep}SKILL.md`) && !file.endsWith(".videos.md"),
  )

  let changed = 0
  let unchanged = 0
  let failed = 0
  const changes: RefreshChange[] = []

  console.log("📥 Refreshing Apple docs directly from developer.apple.com...")
  console.log(`   apply=${apply ? "yes" : "no"}`)
  console.log(`   attribution=${attributionMode}`)
  if (match) console.log(`   match=${match}`)
  console.log("")

  for (const file of files) {
    if (match && !file.toLowerCase().includes(match)) continue

    const current = await readFile(file, "utf8")
    const sourceUrl = extractSourceUrl(current)
    if (!isAppleSourceUrl(sourceUrl)) continue

    try {
      const next = await renderSourceToArtifacts(sourceUrl, { attributionMode })
      const sidecarPath = getVideoSidecarPath(file)
      const currentVideoSidecar = await readOptionalFile(sidecarPath)
      const mainUnchanged = normalizeForCompare(current) === normalizeForCompare(next.markdown)
      const videoUnchanged = currentVideoSidecar === next.videoSidecar

      if (mainUnchanged && videoUnchanged) {
        unchanged += 1
        continue
      }

      changed += 1
      console.log(`🔄 CHANGED: ${path.relative(process.cwd(), file)}`)
      changes.push({ file, markdown: next.markdown, videoSidecar: next.videoSidecar })
      if (apply) {
        console.log("   Queued")
      }
    } catch (error) {
      failed += 1
      const message = error instanceof Error ? error.message : String(error)
      console.log(`❌ FAILED: ${path.relative(process.cwd(), file)} (${message})`)
    }
  }

  console.log("")
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
  console.log("📊 Results:")
  console.log(`   Unchanged: ${unchanged}`)
  console.log(`   Changed:   ${changed}`)
  console.log(`   Failed:    ${failed}`)
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━")

  if (changed > 0 && !apply) {
    console.log("")
    console.log("Run with --apply to update changed files.")
  }

  if (failed > 0) {
    console.log("")
    console.log("Refresh failed; no files were updated.")
    process.exitCode = 1
    return
  }

  if (apply) {
    for (const change of changes) {
      await writeFile(change.file, change.markdown, "utf8")
      await writeVideoSidecar(change.file, change.videoSidecar)
      console.log(`✅ Updated: ${path.relative(process.cwd(), change.file)}`)
    }
  }
}

async function runAttributionReport(args: string[]) {
  const matchIndex = args.indexOf("--match")
  const match = matchIndex >= 0 ? (args[matchIndex + 1]?.toLowerCase() ?? null) : null
  const modes = parseReportModes(args)
  const files = (await collectMarkdownFiles(path.resolve("skills"))).filter(
    (file) => !file.endsWith(`${path.sep}SKILL.md`) && !file.endsWith(".videos.md"),
  )

  const report = new Map<
    AttributionMode,
    {
      charDelta: number
      filesChanged: number
      lineDelta: number
      sampleFile: string | null
      sampleFrontMatter: string[]
    }
  >()

  for (const mode of modes) {
    report.set(mode, {
      charDelta: 0,
      filesChanged: 0,
      lineDelta: 0,
      sampleFile: null,
      sampleFrontMatter: [],
    })
  }

  let inspected = 0

  for (const file of files) {
    if (match && !file.toLowerCase().includes(match)) continue

    const current = await readFile(file, "utf8")
    const sourceUrl = extractSourceUrl(current)
    if (!isAppleSourceUrl(sourceUrl)) continue

    inspected += 1
    const baseline = await renderSourceToArtifacts(sourceUrl, { attributionMode: "current" })
    const baselineMarkdown = normalizeForCompare(baseline.markdown)

    for (const mode of modes) {
      const next = await renderSourceToArtifacts(sourceUrl, { attributionMode: mode })
      const nextMarkdown = normalizeForCompare(next.markdown)
      if (nextMarkdown === baselineMarkdown) continue

      const item = report.get(mode)
      if (!item) continue

      item.filesChanged += 1
      item.charDelta += nextMarkdown.length - baselineMarkdown.length
      item.lineDelta += nextMarkdown.split("\n").length - baselineMarkdown.split("\n").length

      if (!item.sampleFile) {
        item.sampleFile = path.relative(process.cwd(), file)
        item.sampleFrontMatter = nextMarkdown.split("\n").slice(0, 8)
      }
    }
  }

  console.log("📐 Attribution report")
  console.log(`   inspected=${inspected}`)
  if (match) console.log(`   match=${match}`)
  console.log("")

  for (const mode of modes) {
    const item = report.get(mode)
    if (!item) continue

    console.log(`## ${mode}`)
    console.log(`changed files: ${item.filesChanged}`)
    console.log(`line delta:    ${item.lineDelta}`)
    console.log(`char delta:    ${item.charDelta}`)
    console.log(`rough tokens:  ${Math.ceil(item.charDelta / 4)}`)
    if (item.sampleFile) {
      console.log(`sample:        ${item.sampleFile}`)
      console.log(item.sampleFrontMatter.join("\n"))
    }
    console.log("")
  }
}

function getVideoSidecarPath(markdownPath: string): string {
  return markdownPath.endsWith(".md")
    ? markdownPath.replace(/\.md$/, ".videos.md")
    : `${markdownPath}.videos.md`
}

async function readOptionalFile(filePath: string): Promise<string | null> {
  try {
    return await readFile(filePath, "utf8")
  } catch {
    return null
  }
}

async function writeVideoSidecar(markdownPath: string, content: string | null): Promise<void> {
  const sidecarPath = getVideoSidecarPath(markdownPath)
  if (!content) {
    await rm(sidecarPath, { force: true })
    return
  }

  await writeFile(sidecarPath, content, "utf8")
}

function printHelp() {
  console.log(`apple-docs.ts

Usage:
  pnpm refresh-docs -- [--apply] [--match <pattern>] [--attribution-mode <mode>]
  pnpm fetch-doc -- <source-url-or-path> [--output <file>] [--attribution-mode <mode>]
  node scripts/apple-docs.ts attribution-report [--match <pattern>] [--modes <csv>]

Examples:
  pnpm fetch-doc -- /documentation/swiftui/navigationstack
  pnpm fetch-doc -- /design/human-interface-guidelines/buttons --output skills/hig/buttons.md
  pnpm refresh-docs
  pnpm refresh-docs -- --apply --match swiftui
  node scripts/apple-docs.ts attribution-report --match xcuitest --modes annotated,expanded

Attribution modes:
  current    Original frontmatter (legacy)
  annotated  Adds source_kind
  expanded   Adds source_kind + source_json (default)
`)
}

function parseAttributionMode(args: string[]): AttributionMode {
  const modeIndex = args.indexOf("--attribution-mode")
  const rawMode = modeIndex >= 0 ? args[modeIndex + 1] : null
  return parseMode(rawMode)
}

function parseReportModes(args: string[]): AttributionMode[] {
  const modesIndex = args.indexOf("--modes")
  const rawModes = modesIndex >= 0 ? (args[modesIndex + 1] ?? "") : "annotated,expanded"
  return rawModes
    .split(",")
    .map((value) => parseMode(value.trim()))
    .filter((value, index, items) => items.indexOf(value) === index)
}

function parseMode(rawMode: string | null): AttributionMode {
  if (!rawMode) return "expanded"
  if (rawMode === "current" || rawMode === "annotated" || rawMode === "expanded") {
    return rawMode
  }

  throw new Error(`Unsupported attribution mode: ${rawMode}`)
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error))
  process.exit(1)
})

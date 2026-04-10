#!/usr/bin/env node

import { readFile, rm, writeFile } from "node:fs/promises"
import path from "node:path"
import process from "node:process"

import { renderSourceToArtifacts } from "./apple-docs/index.ts"
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
  const artifacts = await renderSourceToArtifacts(target)

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
  const files = (await collectMarkdownFiles(path.resolve("skills"))).filter(
    (file) => !file.endsWith(`${path.sep}SKILL.md`) && !file.endsWith(".videos.md"),
  )

  let changed = 0
  let unchanged = 0
  let failed = 0
  const changes: RefreshChange[] = []

  console.log("📥 Refreshing Apple docs directly from developer.apple.com...")
  console.log(`   apply=${apply ? "yes" : "no"}`)
  if (match) console.log(`   match=${match}`)
  console.log("")

  for (const file of files) {
    if (match && !file.toLowerCase().includes(match)) continue

    const current = await readFile(file, "utf8")
    const sourceUrl = extractSourceUrl(current)
    if (!isAppleSourceUrl(sourceUrl)) continue

    try {
      const next = await renderSourceToArtifacts(sourceUrl)
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
  pnpm refresh-docs -- [--apply] [--match <pattern>]
  pnpm fetch-doc -- <source-url-or-path> [--output <file>]

Examples:
  pnpm fetch-doc -- /documentation/swiftui/navigationstack
  pnpm fetch-doc -- /design/human-interface-guidelines/buttons --output skills/hig/buttons.md
  pnpm refresh-docs
  pnpm refresh-docs -- --apply --match swiftui
`)
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error))
  process.exit(1)
})

#!/usr/bin/env node

import { readFile, writeFile } from "node:fs/promises"
import path from "node:path"
import process from "node:process"

import { renderSourceToMarkdown } from "./apple-docs/index"
import {
  collectMarkdownFiles,
  extractSourceUrl,
  isAppleSourceUrl,
  normalizeForCompare,
} from "./apple-docs/utils"

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
  const markdown = await renderSourceToMarkdown(target)

  if (outputPath) {
    await writeFile(outputPath, markdown, "utf8")
    console.log(`Wrote ${outputPath}`)
    return
  }

  process.stdout.write(markdown)
}

async function runRefresh(args: string[]) {
  const apply = args.includes("--apply")
  const matchIndex = args.indexOf("--match")
  const match = matchIndex >= 0 ? (args[matchIndex + 1]?.toLowerCase() ?? null) : null
  const files = (await collectMarkdownFiles(path.resolve("skills"))).filter(
    (file) => !file.endsWith(`${path.sep}SKILL.md`),
  )

  let changed = 0
  let unchanged = 0
  let failed = 0

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
      const next = await renderSourceToMarkdown(sourceUrl)
      if (normalizeForCompare(current) === normalizeForCompare(next)) {
        unchanged += 1
        continue
      }

      changed += 1
      console.log(`🔄 CHANGED: ${path.relative(process.cwd(), file)}`)
      if (apply) {
        await writeFile(file, next, "utf8")
        console.log("   ✅ Updated")
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

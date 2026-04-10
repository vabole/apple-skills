import { readdir } from "node:fs/promises"
import path from "node:path"

import { APPLE_BASE_URL, TITLE_OVERRIDES } from "./config.ts"

export function normalizeSourceInput(input: string): string {
  if (/^https?:\/\//i.test(input)) {
    return input
  }

  if (input.startsWith("/")) {
    return `${APPLE_BASE_URL}${input}`
  }

  if (input.startsWith("documentation/") || input.startsWith("design/")) {
    return `${APPLE_BASE_URL}/${input}`
  }

  throw new Error(`Unsupported source input: ${input}`)
}

export function normalizeDocumentationPath(docPath: string): string {
  return docPath.trim().replace(/^\/?(?:documentation\/?)?/, "")
}

export function extractSourceUrl(markdown: string): string | null {
  const match = markdown.match(/^source:\s*(.+)$/m)
  return match ? match[1].trim() : null
}

export function isAppleSourceUrl(sourceUrl: string | null): sourceUrl is string {
  return typeof sourceUrl === "string" && sourceUrl.startsWith("https://developer.apple.com/")
}

export function normalizeForCompare(markdown: string): string {
  return markdown
    .replace(/^timestamp:\s*.+$/m, "timestamp: <ignored>")
    .replace(/[ \t]+$/gm, "")
    .trim()
}

export function oneLine(value: string): string {
  return String(value).replace(/\s+/g, " ").trim()
}

export function cleanTitle(value: string): string {
  return oneLine(String(value || "").replace(/\s+\|\s+Apple Developer Documentation$/, ""))
}

export function titleize(value: string): string {
  if (TITLE_OVERRIDES[value]) {
    return TITLE_OVERRIDES[value]
  }

  return oneLine(
    value
      .split("-")
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" "),
  )
}

export async function collectMarkdownFiles(rootDir: string): Promise<string[]> {
  const entries = await readdir(rootDir, { withFileTypes: true })
  const files: string[] = []

  for (const entry of entries) {
    const fullPath = path.join(rootDir, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await collectMarkdownFiles(fullPath)))
      continue
    }

    if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(fullPath)
    }
  }

  return files
}

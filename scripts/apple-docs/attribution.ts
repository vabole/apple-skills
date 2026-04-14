import type { AttributionMode } from "./types.ts"
import { sourceUrlToAppleJsonUrl } from "./utils.ts"

export function appendAttributionLines(
  lines: string[],
  {
    attributionMode,
    source,
    sourceJson,
    sourceKind,
  }: {
    attributionMode: AttributionMode
    source: string
    sourceJson?: string | null
    sourceKind?: string
  },
): void {
  if (attributionMode === "current") return

  const resolvedSourceKind = sourceKind || inferSourceKind(source)
  if (resolvedSourceKind) lines.push(`source_kind: ${resolvedSourceKind}`)

  if (attributionMode !== "expanded") return

  const resolvedSourceJson = sourceJson ?? sourceUrlToAppleJsonUrl(source)
  if (resolvedSourceJson) lines.push(`source_json: ${resolvedSourceJson}`)
}

function inferSourceKind(source: string): string | null {
  if (source.startsWith("https://developer.apple.com/")) return "apple-docc"
  if (source === "project") return "local-guide"
  return null
}

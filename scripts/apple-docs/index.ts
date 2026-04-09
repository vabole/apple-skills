import { fetchHIGIndexJSON, fetchHIGPageJSON, fetchReferenceJSON } from "./fetch.ts"
import type { RenderArtifacts } from "./media.ts"
import { renderHIGIndexMarkdown, renderHIGPageArtifacts } from "./render-hig.ts"
import { renderReferenceArtifacts } from "./render-reference.ts"
import { normalizeSourceInput } from "./utils.ts"

export async function renderSourceToMarkdown(input: string): Promise<string> {
  return (await renderSourceToArtifacts(input)).markdown
}

export async function renderSourceToArtifacts(input: string): Promise<RenderArtifacts> {
  const sourceUrl = normalizeSourceInput(input)
  const url = new URL(sourceUrl)

  if (url.pathname.startsWith("/documentation/")) {
    return renderReferenceArtifacts(await fetchReferenceJSON(url), sourceUrl)
  }

  if (
    url.pathname === "/design/human-interface-guidelines" ||
    url.pathname === "/design/human-interface-guidelines/"
  ) {
    return { markdown: renderHIGIndexMarkdown(await fetchHIGIndexJSON()), videoSidecar: null }
  }

  if (url.pathname.startsWith("/design/human-interface-guidelines/")) {
    return renderHIGPageArtifacts(await fetchHIGPageJSON(url), sourceUrl)
  }

  throw new Error(`Unsupported Apple docs URL: ${sourceUrl}`)
}

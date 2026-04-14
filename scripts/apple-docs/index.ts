import { fetchHIGIndexJSON, fetchHIGPageJSON, fetchReferenceJSON } from "./fetch.ts"
import type { RenderArtifacts } from "./media.ts"
import { renderHIGIndexMarkdown, renderHIGPageArtifacts } from "./render-hig.ts"
import { renderReferenceArtifacts } from "./render-reference.ts"
import type { RenderOptions } from "./types.ts"
import { normalizeSourceInput } from "./utils.ts"

export async function renderSourceToMarkdown(
  input: string,
  options: RenderOptions = {},
): Promise<string> {
  return (await renderSourceToArtifacts(input, options)).markdown
}

export async function renderSourceToArtifacts(
  input: string,
  options: RenderOptions = {},
): Promise<RenderArtifacts> {
  const sourceUrl = normalizeSourceInput(input)
  const url = new URL(sourceUrl)

  if (url.pathname.startsWith("/documentation/")) {
    return renderReferenceArtifacts(await fetchReferenceJSON(url), sourceUrl, options)
  }

  if (
    url.pathname === "/design/human-interface-guidelines" ||
    url.pathname === "/design/human-interface-guidelines/"
  ) {
    return {
      markdown: renderHIGIndexMarkdown(await fetchHIGIndexJSON(), options),
      videoSidecar: null,
    }
  }

  if (url.pathname.startsWith("/design/human-interface-guidelines/")) {
    return renderHIGPageArtifacts(await fetchHIGPageJSON(url), sourceUrl, options)
  }

  throw new Error(`Unsupported Apple docs URL: ${sourceUrl}`)
}

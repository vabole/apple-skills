import { fetchHIGIndexJSON, fetchHIGPageJSON, fetchReferenceJSON } from "./fetch"
import { renderHIGIndexMarkdown, renderHIGPageMarkdown } from "./render-hig"
import { renderReferenceMarkdown } from "./render-reference"
import { normalizeSourceInput } from "./utils"

export async function renderSourceToMarkdown(input: string): Promise<string> {
  const sourceUrl = normalizeSourceInput(input)
  const url = new URL(sourceUrl)

  if (url.pathname.startsWith("/documentation/")) {
    return renderReferenceMarkdown(await fetchReferenceJSON(url), sourceUrl)
  }

  if (
    url.pathname === "/design/human-interface-guidelines" ||
    url.pathname === "/design/human-interface-guidelines/"
  ) {
    return renderHIGIndexMarkdown(await fetchHIGIndexJSON())
  }

  if (url.pathname.startsWith("/design/human-interface-guidelines/")) {
    return renderHIGPageMarkdown(await fetchHIGPageJSON(url), sourceUrl)
  }

  throw new Error(`Unsupported Apple docs URL: ${sourceUrl}`)
}

import { APPLE_JSON_BASE_URL, DEFAULT_RETRIES, DEFAULT_TIMEOUT_MS, USER_AGENT } from "./config.ts"
import type { AppleDocJson } from "./types.ts"
import { normalizeDocumentationPath, sourceUrlToAppleJsonUrl } from "./utils.ts"

export async function fetchReferenceJSON(url: URL): Promise<AppleDocJson> {
  const jsonUrl = sourceUrlToAppleJsonUrl(url.toString())
  if (!jsonUrl) {
    const normalizedPath = normalizeDocumentationPath(url.pathname)
    throw new Error(`Unsupported Apple reference URL: ${normalizedPath}`)
  }

  return fetchJsonWithRetries(jsonUrl)
}

export async function fetchHIGIndexJSON(): Promise<AppleDocJson> {
  return fetchJsonWithRetries(`${APPLE_JSON_BASE_URL}/index/design--human-interface-guidelines`)
}

export async function fetchHIGPageJSON(url: URL): Promise<AppleDocJson> {
  const normalizedPath = url.pathname
    .replace(/^\/design\/human-interface-guidelines\/?/, "")
    .replace(/^\/+|\/+$/g, "")

  return fetchJsonWithRetries(
    `${APPLE_JSON_BASE_URL}/design/human-interface-guidelines/${normalizedPath}.json`,
  )
}

async function fetchJsonWithRetries(url: string): Promise<AppleDocJson> {
  let lastError: unknown = null

  for (let attempt = 0; attempt <= DEFAULT_RETRIES; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: {
          Accept: "application/json",
          "Cache-Control": "no-cache",
          "User-Agent": USER_AGENT,
        },
        signal: AbortSignal.timeout(DEFAULT_TIMEOUT_MS),
      })

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }

      return (await response.json()) as AppleDocJson
    } catch (error) {
      lastError = error
    }
  }

  if (lastError instanceof Error) {
    throw lastError
  }

  throw new Error(`Failed to fetch ${url}`)
}

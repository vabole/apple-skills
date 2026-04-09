import type { ContentNode, DocReference, ReferenceMap } from "./types.ts"
import { oneLine } from "./utils.ts"

export interface RenderArtifacts {
  markdown: string
  videoSidecar: string | null
}

interface MediaAsset {
  alt: string
  posterUrl: string
  title: string
  url: string
}

export function renderImageMarkdown(node: ContentNode, references?: ReferenceMap): string {
  const resolved = resolveMediaNode(node, references)
  const url = selectVariantUrl(resolved)
  if (!url) return resolved.alt ? oneLine(resolved.alt) : ""

  const alt = oneLine(resolved.alt || resolved.title || "Image")
  return `![${escapeLabel(alt)}](${url})`
}

export function renderVideoSidecar(
  title: string,
  sourceUrl: string,
  items: ContentNode[] = [],
  references?: ReferenceMap,
): string | null {
  const videos = collectVideos(items, references)
  if (videos.length === 0) return null

  let markdown = `# ${oneLine(title || "Videos")} videos\n\n`
  markdown += `Source: ${sourceUrl}\n\n`
  markdown +=
    "Video links extracted from the Apple DocC page. These are kept out of the main doc to avoid bloating default agent context.\n\n"

  for (const video of videos) {
    markdown += `- [${escapeLabel(video.title)}](${video.url})`
    if (video.posterUrl) markdown += ` Poster: [Poster image](${video.posterUrl})`
    if (video.alt) markdown += ` Alt: ${video.alt}`
    markdown += "\n"
  }

  return `${markdown}`
}

function collectVideos(items: ContentNode[], references?: ReferenceMap): MediaAsset[] {
  const videos: MediaAsset[] = []
  const seen = new Set<string>()

  const walk = (value: unknown) => {
    if (Array.isArray(value)) {
      for (const item of value) walk(item)
      return
    }

    if (!value || typeof value !== "object") return
    const node = value as ContentNode
    if (node.type === "video") {
      const resolved = resolveMediaNode(node, references)
      const url = selectVariantUrl(resolved)
      if (url && !seen.has(url)) {
        seen.add(url)
        videos.push({
          alt: oneLine(resolved.alt || ""),
          posterUrl: resolvePosterUrl(resolved, references),
          title: resolveVideoTitle(resolved),
          url,
        })
      }
    }

    for (const child of Object.values(node)) walk(child)
  }

  walk(items)
  return videos
}

function resolveMediaNode(node: ContentNode, references?: ReferenceMap): DocReference {
  const reference = node.identifier ? references?.[node.identifier] : undefined
  return {
    ...reference,
    ...node,
    alt: node.alt ?? reference?.alt,
    identifier: node.identifier ?? reference?.identifier,
    poster: node.poster ?? reference?.poster,
    title: node.title ?? reference?.title,
    variants: node.variants ?? reference?.variants,
    metadata: node.metadata ?? reference?.metadata,
  }
}

function resolvePosterUrl(node: DocReference, references?: ReferenceMap): string {
  if (!node.poster) return ""
  if (/^https?:\/\//i.test(node.poster)) return node.poster

  const poster = references?.[node.poster]
  return selectVariantUrl(poster)
}

function resolveVideoTitle(node: DocReference): string {
  const metadataTitle = node.metadata?.abstract
    ?.map((item) => item.text || "")
    .join("")
    .trim()
  if (metadataTitle) return oneLine(metadataTitle)
  if (node.title) return oneLine(node.title)
  if (node.alt) return oneLine(node.alt)
  if (node.identifier) return oneLine(node.identifier)
  return "Video"
}

function selectVariantUrl(node?: DocReference): string {
  const variants = Array.isArray(node?.variants) ? node.variants : []
  if (variants.length === 0) {
    return typeof node?.url === "string" ? node.url : ""
  }

  const sorted = [...variants].sort((left, right) => scoreVariant(right) - scoreVariant(left))
  return sorted[0]?.url || ""
}

function scoreVariant(variant: { traits?: string[] }): number {
  const traits = Array.isArray(variant.traits) ? variant.traits : []
  let score = 0
  if (traits.includes("light")) score += 4
  if (traits.includes("2x")) score += 2
  if (traits.includes("1x")) score += 1
  return score
}

function escapeLabel(value: string): string {
  return value.replace(/[[\]]/g, "\\$&")
}

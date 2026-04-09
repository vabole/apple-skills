import type {
  ContentNode,
  DocReference,
  FrontMatter,
  IndexNode,
  InlineNode,
  ReferenceMap,
  SectionNode,
} from "./types"
import { cleanTitle, oneLine, titleize } from "./utils"

export function renderFrontMatter({ title, description, source }: FrontMatter): string {
  const lines = ["---"]
  if (title) lines.push(`title: ${oneLine(title)}`)
  if (description) lines.push(`description: ${oneLine(description)}`)
  lines.push(`source: ${source}`)
  lines.push(`timestamp: ${new Date().toISOString()}`)
  lines.push("---", "")
  return `${lines.join("\n")}\n`
}

export function renderInlineArray(items: InlineNode[] = [], references?: ReferenceMap): string {
  return items.map((item) => renderInlineItem(item, references)).join("")
}

export function renderBlocks(items: ContentNode[] = [], references?: ReferenceMap): string {
  let markdown = ""

  for (const item of items) {
    if (!item || typeof item !== "object") continue

    switch (item.type) {
      case "heading":
        markdown += `${"#".repeat(Math.min(item.level || 2, 6))} ${item.text || ""}\n\n`
        break
      case "paragraph": {
        const text = renderInlineArray(item.inlineContent || [], references).trim()
        if (text) markdown += `${text}\n\n`
        break
      }
      case "codeListing": {
        const syntax = item.syntax || "swift"
        const code = Array.isArray(item.code) ? item.code.join("\n") : String(item.code || "")
        markdown += `\`\`\`${syntax}\n${code}\n\`\`\`\n\n`
        break
      }
      case "unorderedList":
        markdown += renderList(item.items || [], references, false)
        break
      case "orderedList":
        markdown += renderList(item.items || [], references, true)
        break
      case "aside": {
        const label = item.name || titleize(item.style || "Note")
        const body = renderBlocks(item.content || [], references).trim()
        if (body) markdown += `> **${label}:** ${body.replace(/\n/g, "\n> ")}\n\n`
        break
      }
      case "links": {
        const bullets = renderLinkList((item.items || []) as string[], references)
        if (bullets) markdown += `${bullets}\n`
        break
      }
      case "table":
        markdown += renderTable(item, references)
        break
      default:
        if (Array.isArray(item.content)) markdown += renderBlocks(item.content, references)
        else if (Array.isArray(item.items)) markdown += renderList(item.items, references, false)
        else if (Array.isArray(item.inlineContent)) {
          const text = renderInlineArray(item.inlineContent, references).trim()
          if (text) markdown += `${text}\n\n`
        }
    }
  }

  return markdown
}

export function renderIdentifierSections(
  sections: SectionNode[] = [],
  references?: ReferenceMap,
): string {
  let markdown = ""

  for (const section of sections) {
    if (!section.title || !Array.isArray(section.identifiers) || section.identifiers.length === 0) {
      continue
    }

    markdown += `## ${section.title}\n\n`
    for (const identifier of section.identifiers) {
      const reference = references?.[identifier]
      if (!reference) {
        markdown += `- ${resolveReferenceLabelFromIdentifier(identifier)}\n`
        continue
      }

      const title = resolveReferenceLabel(reference, references)
      const url = resolveUrl(reference.url || identifier)
      const abstract = renderInlineArray(reference.abstract || [], references).trim()
      markdown += `- ${url ? `[${title}](${url})` : title}`
      if (abstract && section.kind !== "relationships") markdown += ` ${abstract}`
      markdown += "\n"
    }
    markdown += "\n"
  }

  return markdown
}

export function renderIndexTree(items: IndexNode[] = [], level = 2): string {
  let markdown = ""
  for (const item of items) {
    if (item.type === "groupMarker") {
      markdown += `${"#".repeat(Math.min(level, 6))} ${item.title}\n\n`
      continue
    }

    if (item.path && item.title) markdown += `- [${item.title}](${item.path})\n`
    if (Array.isArray(item.children) && item.children.length > 0) {
      markdown += renderIndexTree(item.children, level + 1)
    }
  }
  return markdown ? `${markdown}\n` : ""
}

export function finalizeMarkdown(markdown: string, kind: "documentation" | "hig"): string {
  const footer =
    kind === "hig"
      ? "*Extracted from Apple DocC JSON by apple-skills tooling.*\n*This is unofficial content. All Human Interface Guidelines belong to Apple Inc.*\n"
      : "*Extracted from Apple DocC JSON by apple-skills tooling.*\n*This is unofficial content. All documentation belongs to Apple Inc.*\n"

  return `${markdown.trim()}\n\n---\n\n${footer}`
}

export function renderPlatforms(
  platforms: Array<{ name: string; introducedAt?: string; beta?: boolean }> = [],
): string {
  if (platforms.length === 0) return ""
  return platforms
    .map((platform) => {
      const introduced = platform.introducedAt ? `${platform.introducedAt}+` : ""
      const beta = platform.beta ? " Beta" : ""
      return `${platform.name} ${introduced}${beta}`.trim()
    })
    .join(", ")
}

export function renderDeclarations(
  declarations: Array<{ tokens?: Array<{ text?: string }> }> = [],
): string {
  let markdown = ""
  for (const declaration of declarations) {
    const code = (declaration.tokens || [])
      .map((token) => token?.text || "")
      .join("")
      .trim()
    if (code) markdown += `\`\`\`swift\n${code}\n\`\`\`\n\n`
  }
  return markdown
}

export function renderParameters(
  parameters: Array<{ name: string; content?: ContentNode[] }> = [],
  references?: ReferenceMap,
): string {
  let markdown = "## Parameters\n\n"
  for (const parameter of parameters) {
    markdown += `**${parameter.name}**\n\n${renderBlocks(parameter.content || [], references)}`
  }
  return markdown
}

export function renderProperties(
  properties: ContentNode[] = [],
  references?: ReferenceMap,
): string {
  let markdown = "## Properties\n\n"
  for (const property of properties) {
    const typeText = renderPropertyType(
      (property.type as unknown as InlineNode[]) || [],
      references,
    )
    const requiredText = property.required ? "required" : "optional"
    const meta = [typeText, requiredText].filter(Boolean).join(", ")
    markdown += `### \`${property.name}\`${meta ? ` *(${meta})*` : ""}\n\n`
    markdown += renderBlocks(property.content || [], references)
  }
  return markdown
}

function renderPropertyType(typeParts: InlineNode[], references?: ReferenceMap): string {
  return typeParts
    .map((part) => {
      if (part.kind === "typeIdentifier" && part.identifier) {
        const label = part.text || resolveReferenceLabelFromIdentifier(part.identifier)
        const url = resolveReferenceUrl(part.identifier, references)
        return url ? `[${label}](${url})` : label
      }
      return part.text || ""
    })
    .join("")
    .trim()
}

function renderList(items: unknown[] = [], references?: ReferenceMap, ordered = false): string {
  let markdown = ""
  items.forEach((item, index) => {
    const node = item as ContentNode
    const body = renderBlocks(node.content || [], references).trim()
    if (!body) return
    markdown += `${ordered ? `${index + 1}. ` : "- "}${body.replace(/\n/g, "\n   ")}\n`
  })
  return markdown ? `${markdown}\n` : ""
}

function renderLinkList(items: string[] = [], references?: ReferenceMap): string {
  let markdown = ""
  for (const identifier of items) {
    const reference = references?.[identifier]
    if (!reference) continue
    const title = resolveReferenceLabel(reference, references)
    const url = resolveUrl(reference.url || identifier)
    const abstract = renderInlineArray(reference.abstract || [], references).trim()
    markdown += `- ${url ? `[${title}](${url})` : title}`
    if (abstract) markdown += ` - ${abstract}`
    markdown += "\n"
  }
  return markdown
}

function renderTable(item: ContentNode, references?: ReferenceMap): string {
  const rows = Array.isArray(item.rows) ? item.rows : []
  if (rows.length === 0) return ""

  const tableRows = rows.map((row) =>
    row.map((cell) => {
      if (typeof cell === "string") return cell
      if (Array.isArray(cell)) return renderBlocks(cell, references).trim().replace(/\n/g, " ")
      if (Array.isArray(cell?.content))
        return renderBlocks(cell.content, references).trim().replace(/\n/g, " ")
      if (Array.isArray(cell?.inlineContent))
        return renderInlineArray(cell.inlineContent, references).trim()
      return ""
    }),
  )

  const header = tableRows[0]
  if (!header || header.length === 0) return ""

  let markdown = `| ${header.join(" | ")} |\n`
  markdown += `| ${header.map(() => "---").join(" | ")} |\n`
  for (const row of tableRows.slice(1)) markdown += `| ${row.join(" | ")} |\n`
  return `${markdown}\n`
}

function renderInlineItem(item: InlineNode, references?: ReferenceMap): string {
  if (!item || typeof item !== "object") return ""
  if (item.type === "text") return item.text || ""
  if (item.type === "codeVoice") return `\`${item.code || item.text || ""}\``
  if (item.type === "reference") {
    const label = resolveReferenceLabel(item, references)
    const url = resolveReferenceUrl(item.identifier, references)
    return url ? `[${label}](${url})` : label
  }
  if (item.type === "strong")
    return `**${renderInlineArray(item.inlineContent || [], references)}**`
  if (item.type === "emphasis")
    return `*${renderInlineArray(item.inlineContent || [], references)}*`
  if (item.type === "image") return item.alt || ""
  if (Array.isArray(item.inlineContent)) return renderInlineArray(item.inlineContent, references)
  if (Array.isArray(item.content)) return renderBlocks(item.content, references).trim()
  return item.text || ""
}

export function resolveReferenceLabel(reference: DocReference, references?: ReferenceMap): string {
  if (
    reference.identifier &&
    references?.[reference.identifier] &&
    references[reference.identifier] !== reference
  ) {
    return resolveReferenceLabel(references[reference.identifier], references)
  }
  if (reference.overridingTitle) return reference.overridingTitle
  if (Array.isArray(reference.overridingTitleInlineContent)) {
    return renderInlineArray(reference.overridingTitleInlineContent, references)
  }
  if (reference.title) return cleanTitle(reference.title)
  if (Array.isArray(reference.titleInlineContent))
    return renderInlineArray(reference.titleInlineContent, references)
  if (Array.isArray(reference.navigatorTitle))
    return reference.navigatorTitle.map((item) => item.text || "").join("")
  if (Array.isArray(reference.fragments)) {
    const joined = reference.fragments
      .map((item) => item.text || "")
      .join("")
      .trim()
    if (joined) return joined
  }
  return reference.identifier ? resolveReferenceLabelFromIdentifier(reference.identifier) : ""
}

function resolveReferenceLabelFromIdentifier(identifier: string): string {
  return decodeURIComponent(String(identifier).split("/").pop() || identifier)
}

function resolveReferenceUrl(identifier?: string, references?: ReferenceMap): string {
  if (!identifier) return ""
  if (/^https?:\/\//i.test(identifier)) return identifier
  return resolveUrl(references?.[identifier]?.url || "")
}

function resolveUrl(url: string): string {
  if (!url) return ""
  if (/^https?:\/\//i.test(url)) return url
  if (url.startsWith("/")) return url
  return `/${url}`
}

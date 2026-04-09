import {
  finalizeMarkdown,
  renderBlocks,
  renderFrontMatter,
  renderIdentifierSections,
  renderInlineArray,
} from "./render-shared.ts"
import type { AppleDocJson, IndexNode } from "./types.ts"
import { cleanTitle, titleize } from "./utils.ts"

export function renderHIGPageMarkdown(json: AppleDocJson, sourceUrl: string): string {
  let markdown = renderFrontMatter({
    title: cleanTitle(json.metadata?.title || ""),
    description: renderInlineArray(json.abstract || [], json.references).trim(),
    source: sourceUrl,
  })

  const breadcrumbs = renderHIGBreadcrumbs(sourceUrl)
  if (breadcrumbs) markdown += `${breadcrumbs}\n\n`

  const role = json.metadata?.role
  if (role) markdown += `**${role === "collectionGroup" ? "Guide Collection" : role}**\n\n`

  const title = cleanTitle(json.metadata?.title || "")
  if (title) markdown += `# ${title}\n\n`

  const abstract = renderInlineArray(json.abstract || [], json.references).trim()
  if (abstract) markdown += `> ${abstract}\n\n`

  for (const section of json.primaryContentSections || []) {
    if (section.kind === "content") markdown += renderBlocks(section.content, json.references)
  }

  markdown += renderBlocks(json.sections, json.references)
  if (json.topicSectionsStyle !== "hidden") {
    markdown += renderIdentifierSections(json.topicSections, json.references)
  }

  return finalizeMarkdown(markdown, "hig")
}

export function renderHIGIndexMarkdown(json: AppleDocJson): string {
  let markdown = renderFrontMatter({
    title: "Human Interface Guidelines",
    description: "Apple's Human Interface Guidelines - Complete table of contents",
    source: "https://developer.apple.com/design/human-interface-guidelines/",
  })

  markdown += "# Human Interface Guidelines\n\n"
  markdown += "> Apple's comprehensive guide to designing interfaces for all Apple platforms.\n\n"
  markdown += renderHIGIndexItems(json.interfaceLanguages?.swift || [], 2)
  return finalizeMarkdown(markdown, "hig")
}

function renderHIGBreadcrumbs(sourceUrl: string): string {
  const url = new URL(sourceUrl)
  const parts = url.pathname.split("/").filter(Boolean)
  if (parts.length < 2) return ""

  let breadcrumbs = `**Navigation:** [Human Interface Guidelines](/design/human-interface-guidelines)`
  for (let i = 3; i < parts.length; i += 1) {
    const crumbPath = `/${parts.slice(0, i + 1).join("/")}`
    breadcrumbs += ` › [${titleize(parts[i])}](${crumbPath})`
  }

  return breadcrumbs
}

function renderHIGIndexItems(items: IndexNode[], level: number): string {
  let markdown = ""

  for (const item of items) {
    if (item.path && item.title && item.type === "module") {
      markdown += `## ${item.title}\n\n`
      markdown += renderHIGIndexItems(item.children || [], level + 1)
      continue
    }

    if (item.path && item.title && Array.isArray(item.children) && item.children.length > 0) {
      markdown += `${"#".repeat(Math.min(level, 6))} ${item.title}\n\n`
      for (const child of item.children) {
        markdown += `- [${child.title}](${child.path})\n`
        if (Array.isArray(child.children) && child.children.length > 0) {
          markdown += renderNestedHIGBullets(child.children, 1)
        }
      }
      continue
    }

    if (item.path && item.title) markdown += `- [${item.title}](${item.path})\n`
  }

  return markdown ? `${markdown}\n` : ""
}

function renderNestedHIGBullets(items: IndexNode[], depth: number): string {
  let markdown = ""
  const indent = "  ".repeat(depth)

  for (const item of items) {
    if (!item.path || !item.title) continue
    markdown += `${indent}- [${item.title}](${item.path})\n`
    if (Array.isArray(item.children) && item.children.length > 0) {
      markdown += renderNestedHIGBullets(item.children, depth + 1)
    }
  }

  return markdown
}

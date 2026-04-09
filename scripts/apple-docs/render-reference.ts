import {
  finalizeMarkdown,
  renderBlocks,
  renderDeclarations,
  renderFrontMatter,
  renderIdentifierSections,
  renderIndexTree,
  renderInlineArray,
  renderParameters,
  renderPlatforms,
  renderProperties,
} from "./render-shared"
import type { AppleDocJson } from "./types"
import { cleanTitle, titleize } from "./utils"

export function renderReferenceMarkdown(json: AppleDocJson, sourceUrl: string): string {
  let markdown = renderFrontMatter({
    title: cleanTitle(json.metadata?.title || json.interfaceLanguages?.swift?.[0]?.title || ""),
    description: renderInlineArray(json.abstract || [], json.references).trim(),
    source: sourceUrl,
  })

  const breadcrumbs = renderReferenceBreadcrumbs(sourceUrl)
  if (breadcrumbs) markdown += `${breadcrumbs}\n\n`

  const roleHeading = json.metadata?.roleHeading || json.metadata?.role
  if (roleHeading) markdown += `**${roleHeading}**\n\n`

  const title = cleanTitle(json.metadata?.title || "")
  if (title) markdown += `# ${title}\n\n`

  const platforms = renderPlatforms(json.metadata?.platforms || [])
  if (platforms) markdown += `**Available on:** ${platforms}\n\n`

  const abstract = renderInlineArray(json.abstract || [], json.references).trim()
  if (abstract) markdown += `> ${abstract}\n\n`

  for (const section of json.primaryContentSections || []) {
    if (section.kind === "declarations") markdown += renderDeclarations(section.declarations)
    if (section.kind === "parameters")
      markdown += renderParameters(section.parameters, json.references)
    if (section.kind === "properties") markdown += renderProperties(section.items, json.references)
    if (section.kind === "content") markdown += renderBlocks(section.content, json.references)
  }

  markdown += renderIdentifierSections(json.relationshipsSections, json.references)
  markdown += renderIdentifierSections(json.topicSections, json.references)

  const swiftChildren = json.interfaceLanguages?.swift?.[0]?.children
  if (Array.isArray(swiftChildren) && swiftChildren.length > 0) {
    markdown += renderIndexTree(swiftChildren)
  }

  markdown += renderIdentifierSections(json.seeAlsoSections, json.references)
  return finalizeMarkdown(markdown, "documentation")
}

function renderReferenceBreadcrumbs(sourceUrl: string): string {
  const url = new URL(sourceUrl)
  const parts = url.pathname.split("/").filter(Boolean)
  const index = parts.indexOf("documentation")
  if (index < 0 || parts.length <= index + 1) return ""

  const framework = parts[index + 1]
  let breadcrumbs = `**Navigation:** [${titleize(framework)}](/documentation/${framework})`

  for (let i = index + 2; i < parts.length - 1; i += 1) {
    const crumbPath = `/${parts.slice(0, i + 1).join("/")}`
    breadcrumbs += ` › [${titleize(parts[i])}](${crumbPath})`
  }

  return breadcrumbs
}

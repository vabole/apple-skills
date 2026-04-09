export interface InlineNode {
  type?: string
  text?: string
  code?: string
  alt?: string | null
  poster?: string
  name?: string
  style?: string
  syntax?: string
  identifier?: string
  url?: string
  title?: string
  overridingTitle?: string
  overridingTitleInlineContent?: InlineNode[]
  titleInlineContent?: InlineNode[]
  navigatorTitle?: Array<{ text?: string }>
  fragments?: Array<{ text?: string }>
  inlineContent?: InlineNode[]
  content?: ContentNode[]
  items?: ContentNode[] | string[]
  rows?: Array<Array<string | ContentNode | ContentNode[]>>
  columns?: Array<{ content?: ContentNode[]; size?: number }>
  tabs?: Array<{ title?: string; content?: ContentNode[] }>
  variants?: Array<{ url?: string; traits?: string[] }>
  metadata?: { abstract?: InlineNode[] }
  children?: IndexNode[]
  [key: string]: unknown
}

export interface ContentNode extends InlineNode {
  level?: number
}

export interface IndexNode {
  path?: string
  title?: string
  type?: string
  children?: IndexNode[]
}

export interface DocReference extends InlineNode {
  abstract?: InlineNode[]
}

export type ReferenceMap = Record<string, DocReference>

export interface SectionNode {
  kind?: string
  title?: string
  type?: string
  declarations?: Array<{ tokens?: Array<{ text?: string }> }>
  parameters?: Array<{ name: string; content?: ContentNode[] }>
  items?: ContentNode[]
  content?: ContentNode[]
  identifiers?: string[]
}

export interface AppleDocJson {
  metadata?: {
    title?: string
    role?: string
    roleHeading?: string
    platforms?: Array<{
      name: string
      introducedAt?: string
      beta?: boolean
    }>
  }
  abstract?: InlineNode[]
  references?: ReferenceMap
  primaryContentSections?: SectionNode[]
  relationshipsSections?: SectionNode[]
  topicSections?: SectionNode[]
  seeAlsoSections?: SectionNode[]
  sections?: ContentNode[]
  topicSectionsStyle?: string
  interfaceLanguages?: {
    swift?: Array<{
      title?: string
      children?: IndexNode[]
    }>
  }
}

export interface FrontMatter {
  title: string
  description: string
  source: string
}

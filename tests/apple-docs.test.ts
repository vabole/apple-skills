import { describe, expect, it } from "vitest"

import { renderHIGPageMarkdown } from "../scripts/apple-docs/render-hig.ts"
import { renderReferenceMarkdown } from "../scripts/apple-docs/render-reference.ts"
import type { AppleDocJson } from "../scripts/apple-docs/types.ts"

describe("renderReferenceMarkdown", () => {
  it("renders key reference sections", () => {
    const json: AppleDocJson = {
      metadata: {
        title: "NavigationStack",
        roleHeading: "Structure",
        platforms: [{ name: "iOS", introducedAt: "16.0" }],
      },
      abstract: [{ type: "text", text: "A stack of navigation destinations." }],
      references: {
        "doc://example/view": {
          identifier: "doc://example/view",
          title: "View",
          url: "/documentation/swiftui/view",
          abstract: [{ type: "text", text: "A visual element." }],
        },
      },
      primaryContentSections: [
        {
          kind: "declarations",
          declarations: [{ tokens: [{ text: "struct NavigationStack" }] }],
        },
        {
          kind: "content",
          content: [
            { type: "heading", level: 2, text: "Overview" },
            {
              type: "paragraph",
              inlineContent: [{ type: "text", text: "Use it for app navigation." }],
            },
          ],
        },
      ],
      relationshipsSections: [
        {
          title: "Conforms To",
          kind: "relationships",
          identifiers: ["doc://example/view"],
        },
      ],
    }

    const markdown = renderReferenceMarkdown(
      json,
      "https://developer.apple.com/documentation/swiftui/navigationstack",
    )

    expect(markdown).toContain("# NavigationStack")
    expect(markdown).toContain("## Overview")
    expect(markdown).toContain("struct NavigationStack")
    expect(markdown).toContain("## Conforms To")
    expect(markdown).toContain("[View](/documentation/swiftui/view)")
  })
})

describe("renderHIGPageMarkdown", () => {
  it("renders HIG notes and content", () => {
    const json: AppleDocJson = {
      metadata: { title: "Buttons", role: "article" },
      abstract: [{ type: "text", text: "A button initiates an action." }],
      references: {
        "doc://hig/toggles": {
          identifier: "doc://hig/toggles",
          title: "Toggles",
          url: "/design/human-interface-guidelines/toggles",
        },
      },
      primaryContentSections: [
        {
          kind: "content",
          content: [
            {
              type: "paragraph",
              inlineContent: [
                { type: "text", text: "Buttons are familiar controls." },
                { type: "text", text: " See " },
                { type: "reference", identifier: "doc://hig/toggles" },
                { type: "text", text: "." },
              ],
            },
            {
              type: "aside",
              name: "Note",
              content: [
                {
                  type: "paragraph",
                  inlineContent: [{ type: "text", text: "Keep tap targets large enough." }],
                },
              ],
            },
          ],
        },
      ],
    }

    const markdown = renderHIGPageMarkdown(
      json,
      "https://developer.apple.com/design/human-interface-guidelines/buttons",
    )

    expect(markdown).toContain("# Buttons")
    expect(markdown).toContain("[Toggles](/design/human-interface-guidelines/toggles)")
    expect(markdown).toContain("> **Note:** Keep tap targets large enough.")
  })

  it("renders nested DocC tables with text cells", () => {
    const json: AppleDocJson = {
      metadata: { title: "Buttons", role: "article" },
      primaryContentSections: [
        {
          kind: "content",
          content: [
            {
              type: "table",
              rows: [
                [
                  [
                    {
                      type: "paragraph",
                      inlineContent: [{ type: "text", text: "Shape" }],
                    },
                  ],
                  [
                    {
                      type: "paragraph",
                      inlineContent: [{ type: "text", text: "Regular" }],
                    },
                  ],
                ],
                [
                  [
                    {
                      type: "paragraph",
                      inlineContent: [{ type: "text", text: "Circular" }],
                    },
                  ],
                  [
                    {
                      type: "paragraph",
                      inlineContent: [{ type: "text", text: "Supported" }],
                    },
                  ],
                ],
              ],
            },
          ],
        },
      ],
    }

    const markdown = renderHIGPageMarkdown(
      json,
      "https://developer.apple.com/design/human-interface-guidelines/buttons",
    )

    expect(markdown).toContain("| Shape | Regular |")
    expect(markdown).toContain("| Circular | Supported |")
  })
})

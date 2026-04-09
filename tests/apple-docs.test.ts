import { describe, expect, it } from "vitest"

import { renderHIGPageArtifacts, renderHIGPageMarkdown } from "../scripts/apple-docs/render-hig.ts"
import { renderReferenceMarkdown } from "../scripts/apple-docs/render-reference.ts"
import type { AppleDocJson } from "../scripts/apple-docs/types.ts"

function createMediaRichHIGJson(): AppleDocJson {
  return {
    metadata: { title: "App icons", role: "article" },
    references: {
      "icon.png": {
        identifier: "icon.png",
        type: "image",
        alt: "An app icon example.",
        variants: [{ url: "https://docs-assets.example/icon.png", traits: ["2x", "light"] }],
      },
      "demo.mp4": {
        identifier: "demo.mp4",
        type: "video",
        alt: "A short icon animation.",
        poster: "poster.png",
        variants: [{ url: "https://docs-assets.example/demo.mp4", traits: ["1x", "light"] }],
      },
      "poster.png": {
        identifier: "poster.png",
        type: "image",
        alt: "The poster frame.",
        variants: [{ url: "https://docs-assets.example/poster.png", traits: ["2x", "light"] }],
      },
    },
    primaryContentSections: [
      {
        kind: "content",
        content: [
          {
            type: "paragraph",
            inlineContent: [{ type: "image", identifier: "icon.png" }],
          },
          {
            type: "tabNavigator",
            tabs: [
              {
                title: "iOS",
                content: [
                  {
                    type: "row",
                    columns: [
                      {
                        content: [
                          {
                            type: "paragraph",
                            inlineContent: [{ type: "image", identifier: "icon.png" }],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: "video",
            identifier: "demo.mp4",
            metadata: {
              abstract: [{ type: "text", text: "iOS app icon" }],
            },
          },
        ],
      },
    ],
  }
}

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

  it("keeps images in the main doc and extracts videos to a sidecar", () => {
    const json = createMediaRichHIGJson()
    const artifacts = renderHIGPageArtifacts(
      json,
      "https://developer.apple.com/design/human-interface-guidelines/app-icons",
    )

    expect(artifacts.markdown).toContain(
      "![An app icon example.](https://docs-assets.example/icon.png)",
    )
    expect(artifacts.markdown).toContain("### iOS")
    expect(artifacts.markdown).not.toContain("https://docs-assets.example/demo.mp4")
    expect(artifacts.videoSidecar).toContain("# App icons videos")
    expect(artifacts.videoSidecar).toContain("[iOS app icon](https://docs-assets.example/demo.mp4)")
    expect(artifacts.videoSidecar).toContain(
      "[Poster image](https://docs-assets.example/poster.png)",
    )
  })
})

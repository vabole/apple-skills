---
title: ZStack
description: A view that overlays its subviews, aligning them in both axes.
source: https://developer.apple.com/documentation/swiftui/zstack
timestamp: 2026-02-19T07:56:07.626Z
---

**Navigation:** [Swiftui](/documentation/swiftui)

**Structure**

# ZStack

**Available on:** iOS 13.0+, iPadOS 13.0+, Mac Catalyst 13.0+, macOS 10.15+, tvOS 13.0+, visionOS 1.0+, watchOS 6.0+

> A view that overlays its subviews, aligning them in both axes.

```swift
@frozen struct ZStack<Content> where Content : View
```

## Overview

The `ZStack` assigns each successive subview a higher z-axis value than the one before it, meaning later subviews appear “on top” of earlier ones.

The following example creates a `ZStack` of 100 x 100 point [Rectangle](/documentation/swiftui/rectangle) views filled with one of six colors, offsetting each successive subview by 10 points so they don’t completely overlap:

```swift
let colors: [Color] =
    [.red, .orange, .yellow, .green, .blue, .purple]

var body: some View {
    ZStack {
        ForEach(0..<colors.count) {
            Rectangle()
                .fill(colors[$0])
                .frame(width: 100, height: 100)
                .offset(x: CGFloat($0) * 10.0,
                        y: CGFloat($0) * 10.0)
        }
    }
}
```

![Six squares of different colors, stacked atop each other, with a 10-point](https://docs-assets.developer.apple.com/published/5ce47ef59a84b346d733bcf2f4a7853e/SwiftUI-ZStack-offset-rectangles%402x.png)

The `ZStack` uses an [Alignment](/documentation/swiftui/alignment) to set the x- and y-axis coordinates of each subview, defaulting to a [center](/documentation/swiftui/alignment/center) alignment. In the following example, the `ZStack` uses a [bottom Leading](/documentation/swiftui/alignment/bottomleading) alignment to lay out two subviews, a red 100 x 50 point rectangle below, and a blue 50 x 100 point rectangle on top. Because of the alignment value, both rectangles share a bottom-left corner with the `ZStack` (in locales where left is the leading side).

```swift
var body: some View {
    ZStack(alignment: .bottomLeading) {
        Rectangle()
            .fill(Color.red)
            .frame(width: 100, height: 50)
        Rectangle()
            .fill(Color.blue)
            .frame(width:50, height: 100)
    }
    .border(Color.green, width: 1)
}
```

![A green 100 by 100 square containing two overlapping rectangles: on the](https://docs-assets.developer.apple.com/published/b18f4156c9780e8200b05194bff17db4/SwiftUI-ZStack-alignment%402x.png)

> [!NOTE]
> If you need a version of this stack that conforms to the [Layout](/documentation/swiftui/layout) protocol, like when you want to create a conditional layout using [Any Layout](/documentation/swiftui/anylayout), use [ZStack Layout](/documentation/swiftui/zstacklayout) instead.

## Conforms To

- [View](/documentation/swiftui/view)

## Creating a stack

- [init(alignment:content:)](/documentation/swiftui/zstack/init(alignment:content:)) Creates an instance with the given alignment.

## Supporting symbols

- [ZStackContent3D](/documentation/swiftui/zstackcontent3d) A type that adds spacing to a .

## Initializers

- [init(alignment:spacing:content:)](/documentation/swiftui/zstack/init(alignment:spacing:content:)) Creates an instance with the given spacing and alignment.

## Layering views

- [Adding a background to your view](/documentation/swiftui/adding-a-background-to-your-view)
- [zIndex(_:)](/documentation/swiftui/view/zindex(_:))
- [background(alignment:content:)](/documentation/swiftui/view/background(alignment:content:))
- [background(_:ignoresSafeAreaEdges:)](/documentation/swiftui/view/background(_:ignoressafeareaedges:))
- [background(ignoresSafeAreaEdges:)](/documentation/swiftui/view/background(ignoressafeareaedges:))
- [background(_:in:fillStyle:)](/documentation/swiftui/view/background(_:in:fillstyle:))
- [background(in:fillStyle:)](/documentation/swiftui/view/background(in:fillstyle:))
- [overlay(alignment:content:)](/documentation/swiftui/view/overlay(alignment:content:))
- [overlay(_:ignoresSafeAreaEdges:)](/documentation/swiftui/view/overlay(_:ignoressafeareaedges:))
- [overlay(_:in:fillStyle:)](/documentation/swiftui/view/overlay(_:in:fillstyle:))
- [backgroundMaterial](/documentation/swiftui/environmentvalues/backgroundmaterial)
- [containerBackground(_:for:)](/documentation/swiftui/view/containerbackground(_:for:))
- [containerBackground(for:alignment:content:)](/documentation/swiftui/view/containerbackground(for:alignment:content:))
- [ContainerBackgroundPlacement](/documentation/swiftui/containerbackgroundplacement)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

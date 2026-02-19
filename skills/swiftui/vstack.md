---
title: VStack
description: A view that arranges its subviews in a vertical line.
source: https://developer.apple.com/documentation/swiftui/vstack
timestamp: 2026-02-19T07:56:08.629Z
---

**Navigation:** [Swiftui](/documentation/swiftui)

**Structure**

# VStack

**Available on:** iOS 13.0+, iPadOS 13.0+, Mac Catalyst 13.0+, macOS 10.15+, tvOS 13.0+, visionOS 1.0+, watchOS 6.0+

> A view that arranges its subviews in a vertical line.

```swift
@frozen struct VStack<Content> where Content : View
```

## Overview

Unlike [Lazy VStack](/documentation/swiftui/lazyvstack), which only renders the views when your app needs to display them, a `VStack` renders the views all at once, regardless of whether they are on- or offscreen. Use the regular `VStack` when you have a small number of subviews or don’t want the delayed rendering behavior of the “lazy” version.

The following example shows a simple vertical stack of 10 text views:

```swift
var body: some View {
    VStack(
        alignment: .leading,
        spacing: 10
    ) {
        ForEach(
            1...10,
            id: \.self
        ) {
            Text("Item \($0)")
        }
    }
}
```

![Ten text views, named Item 1 through Item 10, arranged in a](https://docs-assets.developer.apple.com/published/93d31b000cb6f5419689a7b765474401/SwiftUI-VStack-simple%402x.png)

> [!NOTE]
> If you need a vertical stack that conforms to the [Layout](/documentation/swiftui/layout) protocol, like when you want to create a conditional layout using [Any Layout](/documentation/swiftui/anylayout), use [VStack Layout](/documentation/swiftui/vstacklayout) instead.

## Conforms To

- [View](/documentation/swiftui/view)

## Creating a stack

- [init(alignment:spacing:content:)](/documentation/swiftui/vstack/init(alignment:spacing:content:)) Creates an instance with the given spacing and horizontal alignment.

## Statically arranging views in one dimension

- [Building layouts with stack views](/documentation/swiftui/building-layouts-with-stack-views)
- [HStack](/documentation/swiftui/hstack)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

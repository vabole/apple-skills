---
title: HStack
description: A view that arranges its subviews in a horizontal line.
source: https://developer.apple.com/documentation/swiftui/hstack
timestamp: 2026-04-09T12:04:36.018Z
---

**Navigation:** [SwiftUI](/documentation/swiftui)

**Structure**

# HStack

**Available on:** iOS 13.0+, iPadOS 13.0+, Mac Catalyst 13.0+, macOS 10.15+, tvOS 13.0+, visionOS 1.0+, watchOS 6.0+

> A view that arranges its subviews in a horizontal line.

```swift
@frozen struct HStack<Content> where Content : View
```

## Overview

Unlike [LazyHStack](/documentation/swiftui/lazyhstack), which only renders the views when your app needs to display them onscreen, an `HStack` renders the views all at once, regardless of whether they are on- or offscreen. Use the regular `HStack` when you have a small number of subviews or don’t want the delayed rendering behavior of the “lazy” version.

The following example shows a simple horizontal stack of five text views:

```swift
var body: some View {
    HStack(
        alignment: .top,
        spacing: 10
    ) {
        ForEach(
            1...5,
            id: \.self
        ) {
            Text("Item \($0)")
        }
    }
}
```

> **Note:** If you need a horizontal stack that conforms to the [Layout](/documentation/swiftui/layout) protocol, like when you want to create a conditional layout using [AnyLayout](/documentation/swiftui/anylayout), use [HStackLayout](/documentation/swiftui/hstacklayout) instead.

## Conforms To

- [View](/documentation/swiftui/view)

## Creating a stack

- [init(alignment:spacing:content:)](/documentation/swiftui/hstack/init(alignment:spacing:content:)) Creates a horizontal stack with the given spacing and vertical alignment.

## Statically arranging views in one dimension

- [Building layouts with stack views](/documentation/swiftui/building-layouts-with-stack-views) Compose complex layouts from primitive container views.
- [VStack](/documentation/swiftui/vstack) A view that arranges its subviews in a vertical line.

---

*Extracted from Apple DocC JSON by apple-skills tooling.*
*This is unofficial content. All documentation belongs to Apple Inc.*

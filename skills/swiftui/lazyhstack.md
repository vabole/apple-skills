---
title: LazyHStack
description: A view that arranges its children in a line that grows horizontally, creating items only as needed.
source: https://developer.apple.com/documentation/swiftui/lazyhstack
timestamp: 2026-01-19T10:23:13.901Z
---

**Navigation:** [Swiftui](/documentation/swiftui)

**Structure**

# LazyHStack

**Available on:** iOS 14.0+, iPadOS 14.0+, Mac Catalyst 14.0+, macOS 11.0+, tvOS 14.0+, visionOS 1.0+, watchOS 7.0+

> A view that arranges its children in a line that grows horizontally, creating items only as needed.

```swift
struct LazyHStack<Content> where Content : View
```

## Overview

The stack is “lazy,” in that the stack view doesn’t create items until it needs to render them onscreen.

In the following example, a [Scroll View](/documentation/swiftui/scrollview) contains a `LazyHStack` that consists of a horizontal row of text views. The stack aligns to the top of the scroll view and uses 10-point spacing between each text view.

```swift
ScrollView(.horizontal) {
    LazyHStack(alignment: .top, spacing: 10) {
        ForEach(1...100, id: \.self) {
            Text("Column \($0)")
        }
    }
}
```

## Conforms To

- [View](/documentation/swiftui/view)

## Creating a lazy-loading horizontal stack

- [init(alignment:spacing:pinnedViews:content:)](/documentation/swiftui/lazyhstack/init(alignment:spacing:pinnedviews:content:)) Creates a lazy horizontal stack view with the given spacing, vertical alignment, pinning behavior, and content.

## Dynamically arranging views in one dimension

- [Grouping data with lazy stack views](/documentation/swiftui/grouping-data-with-lazy-stack-views)
- [Creating performant scrollable stacks](/documentation/swiftui/creating-performant-scrollable-stacks)
- [LazyVStack](/documentation/swiftui/lazyvstack)
- [PinnedScrollableViews](/documentation/swiftui/pinnedscrollableviews)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

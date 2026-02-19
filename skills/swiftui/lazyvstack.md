---
title: LazyVStack
description: A view that arranges its children in a line that grows vertically, creating items only as needed.
source: https://developer.apple.com/documentation/swiftui/lazyvstack
timestamp: 2026-01-19T10:23:13.239Z
---

**Navigation:** [Swiftui](/documentation/swiftui)

**Structure**

# LazyVStack

**Available on:** iOS 14.0+, iPadOS 14.0+, Mac Catalyst 14.0+, macOS 11.0+, tvOS 14.0+, visionOS 1.0+, watchOS 7.0+

> A view that arranges its children in a line that grows vertically, creating items only as needed.

```swift
struct LazyVStack<Content> where Content : View
```

## Overview

The stack is “lazy,” in that the stack view doesn’t create items until it needs to render them onscreen.

In the following example, a [Scroll View](/documentation/swiftui/scrollview) contains a `LazyVStack` that consists of a vertical row of text views. The stack aligns to the leading edge of the scroll view, and uses default spacing between the text views.

```swift
ScrollView {
    LazyVStack(alignment: .leading) {
        ForEach(1...100, id: \.self) {
            Text("Row \($0)")
        }
    }
}
```

## Conforms To

- [View](/documentation/swiftui/view)

## Creating a lazy-loading vertical stack

- [init(alignment:spacing:pinnedViews:content:)](/documentation/swiftui/lazyvstack/init(alignment:spacing:pinnedviews:content:)) Creates a lazy vertical stack view with the given spacing, vertical alignment, pinning behavior, and content.

## Dynamically arranging views in one dimension

- [Grouping data with lazy stack views](/documentation/swiftui/grouping-data-with-lazy-stack-views)
- [Creating performant scrollable stacks](/documentation/swiftui/creating-performant-scrollable-stacks)
- [LazyHStack](/documentation/swiftui/lazyhstack)
- [PinnedScrollableViews](/documentation/swiftui/pinnedscrollableviews)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

---
title: LazyHStack
description: A view that arranges its children in a line that grows horizontally, creating items only as needed.
source: https://developer.apple.com/documentation/swiftui/lazyhstack
timestamp: 2026-04-09T12:04:36.669Z
---

**Navigation:** [SwiftUI](/documentation/swiftui)

**Structure**

# LazyHStack

**Available on:** iOS 14.0+, iPadOS 14.0+, Mac Catalyst 14.0+, macOS 11.0+, tvOS 14.0+, visionOS 1.0+, watchOS 7.0+

> A view that arranges its children in a line that grows horizontally, creating items only as needed.

```swift
struct LazyHStack<Content> where Content : View
```

## Overview

The stack is “lazy,” in that the stack view doesn’t create items until it needs to render them onscreen.

In the following example, a [ScrollView](/documentation/swiftui/scrollview) contains a `LazyHStack` that consists of a horizontal row of text views. The stack aligns to the top of the scroll view and uses 10-point spacing between each text view.

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

- [Grouping data with lazy stack views](/documentation/swiftui/grouping-data-with-lazy-stack-views) Split content into logical sections inside lazy stack views.
- [Creating performant scrollable stacks](/documentation/swiftui/creating-performant-scrollable-stacks) Display large numbers of repeated views efficiently with scroll views, stack views, and lazy stacks.
- [LazyVStack](/documentation/swiftui/lazyvstack) A view that arranges its children in a line that grows vertically, creating items only as needed.
- [PinnedScrollableViews](/documentation/swiftui/pinnedscrollableviews) A set of view types that may be pinned to the bounds of a scroll view.

---

*Extracted from Apple DocC JSON by apple-skills tooling.*
*This is unofficial content. All documentation belongs to Apple Inc.*

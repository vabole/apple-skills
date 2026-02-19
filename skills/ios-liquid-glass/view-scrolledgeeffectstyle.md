---
title: scrollEdgeEffectStyle(_:for:)
description: Configures the scroll edge effect style for scroll views within this hierarchy.
source: https://developer.apple.com/documentation/swiftui/view/scrolledgeeffectstyle(_:for:)
timestamp: 2026-01-17T15:42:39.152Z
---

**Navigation:** [Swiftui](/documentation/swiftui) › [view](/documentation/swiftui/view)

**Instance Method**

# scrollEdgeEffectStyle(_:for:)

**Available on:** iOS 26.0+, iPadOS 26.0+, Mac Catalyst 26.0+, macOS 26.0+, tvOS 26.0+, watchOS 26.0+

> Configures the scroll edge effect style for scroll views within this hierarchy.

```swift
nonisolated func scrollEdgeEffectStyle(_ style: ScrollEdgeEffectStyle?, for edges: Edge.Set) -> some View
```

## Discussion

By default, a scroll view renders an automatic edge effect. Use this modifier to change the scroll edge effect style.

```swift
ScrollView {
    LazyVStack {
        ForEach(data) { item in
            RowView(item)
        }
    }
}
.scrollEdgeEffectStyle(.hard, for: .all)
```

## Configuring scroll edge effects

- [scrollEdgeEffectHidden(_:for:)](/documentation/swiftui/view/scrolledgeeffecthidden(_:for:))
- [ScrollEdgeEffectStyle](/documentation/swiftui/scrolledgeeffectstyle)
- [safeAreaBar(edge:alignment:spacing:content:)](/documentation/swiftui/view/safeareabar(edge:alignment:spacing:content:))

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

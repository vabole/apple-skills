---
title: glassEffectID(_:in:)
description: Associates an identity value to Liquid Glass effects defined within this view.
source: https://developer.apple.com/documentation/swiftui/view/glasseffectid(_:in:)
timestamp: 2026-01-17T15:42:39.748Z
---

**Navigation:** [Swiftui](/documentation/swiftui) › [view](/documentation/swiftui/view)

**Instance Method**

# glassEffectID(_:in:)

**Available on:** iOS 26.0+, iPadOS 26.0+, Mac Catalyst 26.0+, macOS 26.0+, tvOS 26.0+, watchOS 26.0+

> Associates an identity value to Liquid Glass effects defined within this view.

```swift
nonisolated func glassEffectID(_ id: (some Hashable & Sendable)?, in namespace: Namespace.ID) -> some View
```

## Discussion

You use this modifier with the [glassEffect(_:in:)](/documentation/swiftui/view/glasseffect(_:in:)) view modifier and a [Glass Effect Container](/documentation/swiftui/glasseffectcontainer) view. When used together, SwiftUI uses the identifier to animate shapes to and from each other during transitions.

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

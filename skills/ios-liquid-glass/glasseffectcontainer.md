---
title: GlassEffectContainer
description: A view that combines multiple Liquid Glass shapes into a single shape that can morph individual shapes into one another.
source: https://developer.apple.com/documentation/swiftui/glasseffectcontainer
timestamp: 2026-01-17T15:42:15.206Z
---

**Navigation:** [Swiftui](/documentation/swiftui)

**Structure**

# GlassEffectContainer

**Available on:** iOS 26.0+, iPadOS 26.0+, Mac Catalyst 26.0+, macOS 26.0+, tvOS 26.0+, watchOS 26.0+

> A view that combines multiple Liquid Glass shapes into a single shape that can morph individual shapes into one another.

```swift
@MainActor @preconcurrency struct GlassEffectContainer<Content> where Content : View
```

## Overview

Use a container with the [glassEffect(_:in:)](/documentation/swiftui/view/glasseffect(_:in:)) modifier. Each view with a Liquid Glass effect contributes a shape rendered with the effect to a set of shapes. SwiftUI renders the effects together, improving rendering performance and allowing the effects to interact with and morph into one another.

Configure how shapes interact with one another by customizing the default spacing value of the container. As shapes near one another, their paths start to blend into one another. The higher the spacing, the sooner blending begins as the shapes approach each other.

## Conforms To

- [Sendable](/documentation/Swift/Sendable)
- [SendableMetatype](/documentation/Swift/SendableMetatype)
- [View](/documentation/swiftui/view)

## Initializers

- [init(spacing:content:)](/documentation/swiftui/glasseffectcontainer/init(spacing:content:)) Creates a glass effect container with the provided spacing, extracting glass shapes from the provided content.

## Styling views with Liquid Glass

- [Applying Liquid Glass to custom views](/documentation/swiftui/applying-liquid-glass-to-custom-views)
- [Landmarks: Building an app with Liquid Glass](/documentation/swiftui/landmarks-building-an-app-with-liquid-glass)
- [glassEffect(_:in:)](/documentation/swiftui/view/glasseffect(_:in:))
- [interactive(_:)](/documentation/swiftui/glass/interactive(_:))
- [GlassEffectTransition](/documentation/swiftui/glasseffecttransition)
- [GlassButtonStyle](/documentation/swiftui/glassbuttonstyle)
- [GlassProminentButtonStyle](/documentation/swiftui/glassprominentbuttonstyle)
- [DefaultGlassEffectShape](/documentation/swiftui/defaultglasseffectshape)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

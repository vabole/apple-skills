---
title: Glass
description: A structure that defines the configuration of the Liquid Glass material.
source: https://developer.apple.com/documentation/swiftui/glass
timestamp: 2026-01-17T15:42:14.210Z
---

**Navigation:** [Swiftui](/documentation/swiftui)

**Structure**

# Glass

**Available on:** iOS 26.0+, iPadOS 26.0+, Mac Catalyst 26.0+, macOS 26.0+, tvOS 26.0+, watchOS 26.0+

> A structure that defines the configuration of the Liquid Glass material.

```swift
struct Glass
```

## Overview

You provide instances of a variant of Liquid Glass to the [glassEffect(_:in:)](/documentation/swiftui/view/glasseffect(_:in:)) view modifier:

```swift
Text("Hello, World!")
    .font(.title)
    .padding()
    .glassEffect()
```

You can combine Liquid Glass effects using a [Glass Effect Container](/documentation/swiftui/glasseffectcontainer), which supports morphing views with this effect into each other based on the geometry of their associated views.

## Conforms To

- [Equatable](/documentation/Swift/Equatable)
- [Sendable](/documentation/Swift/Sendable)
- [SendableMetatype](/documentation/Swift/SendableMetatype)

## Instance Methods

- [interactive(_:)](/documentation/swiftui/glass/interactive(_:)) Returns a copy of the structure configured to be interactive.
- [tint(_:)](/documentation/swiftui/glass/tint(_:)) Returns a copy of the structure with a configured tint color.

## Type Properties

- [clear](/documentation/swiftui/glass/clear) The clear variant of glass.
- [identity](/documentation/swiftui/glass/identity) The identity variant of glass. When applied, your content remains unaffected as if no glass effect was applied.
- [regular](/documentation/swiftui/glass/regular) The regular variant of the Liquid Glass material.

## Styling content

- [border(_:width:)](/documentation/swiftui/view/border(_:width:))
- [foregroundStyle(_:)](/documentation/swiftui/view/foregroundstyle(_:))
- [foregroundStyle(_:_:)](/documentation/swiftui/view/foregroundstyle(_:_:))
- [foregroundStyle(_:_:_:)](/documentation/swiftui/view/foregroundstyle(_:_:_:))
- [backgroundStyle(_:)](/documentation/swiftui/view/backgroundstyle(_:))
- [backgroundStyle](/documentation/swiftui/environmentvalues/backgroundstyle)
- [ShapeStyle](/documentation/swiftui/shapestyle)
- [AnyShapeStyle](/documentation/swiftui/anyshapestyle)
- [Gradient](/documentation/swiftui/gradient)
- [MeshGradient](/documentation/swiftui/meshgradient)
- [AnyGradient](/documentation/swiftui/anygradient)
- [ShadowStyle](/documentation/swiftui/shadowstyle)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

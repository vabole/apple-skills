---
title: Color
description: A representation of a color that adapts to a given context.
source: https://developer.apple.com/documentation/swiftui/color
timestamp: 2026-01-19T10:23:17.434Z
---

**Navigation:** [Swiftui](/documentation/swiftui)

**Structure**

# Color

**Available on:** iOS 13.0+, iPadOS 13.0+, Mac Catalyst 13.0+, macOS 10.15+, tvOS 13.0+, visionOS 1.0+, watchOS 6.0+

> A representation of a color that adapts to a given context.

```swift
@frozen struct Color
```

## Overview

You can create a color in one of several ways:

- Load a color from an Asset Catalog:

```swift
let aqua = Color("aqua") // Looks in your app's main bundle by default.
```
- Specify component values, like red, green, and blue; hue, saturation, and brightness; or white level:

```swift
let skyBlue = Color(red: 0.4627, green: 0.8392, blue: 1.0)
let lemonYellow = Color(hue: 0.1639, saturation: 1, brightness: 1)
let steelGray = Color(white: 0.4745)
```
- Create a color instance from another color, like a [UIColor](/documentation/UIKit/UIColor) or an [NSColor](/documentation/AppKit/NSColor):

```swift
#if os(iOS)
let linkColor = Color(uiColor: .link)
#elseif os(macOS)
let linkColor = Color(nsColor: .linkColor)
#endif
```
- Use one of a palette of predefined colors, like [black](/documentation/swiftui/shapestyle/black), [green](/documentation/swiftui/shapestyle/green), and [purple](/documentation/swiftui/shapestyle/purple).

Some view modifiers can take a color as an argument. For example, [foregroundStyle(_:)](/documentation/swiftui/view/foregroundstyle(_:)) uses the color you provide to set the foreground color for view elements, like text or [sf](/design/Human-Interface-Guidelines/sf-symbols):

```swift
Image(systemName: "leaf.fill")
    .foregroundStyle(Color.green)
```



Because SwiftUI treats colors as [View](/documentation/swiftui/view) instances, you can also directly add them to a view hierarchy. For example, you can layer a rectangle beneath a sun image using colors defined above:

```swift
ZStack {
    skyBlue
    Image(systemName: "sun.max.fill")
        .foregroundStyle(lemonYellow)
}
.frame(width: 200, height: 100)
```

A color used as a view expands to fill all the space it’s given, as defined by the frame of the enclosing [ZStack](/documentation/swiftui/zstack) in the above example:



SwiftUI only resolves a color to a concrete value just before using it in a given environment. This enables a context-dependent appearance for system defined colors, or those that you load from an Asset Catalog. For example, a color can have distinct light and dark variants that the system chooses from at render time.

## Conforms To

- [Copyable](/documentation/Swift/Copyable)
- [CustomStringConvertible](/documentation/Swift/CustomStringConvertible)
- [Equatable](/documentation/Swift/Equatable)
- [Hashable](/documentation/Swift/Hashable)
- [Sendable](/documentation/Swift/Sendable)
- [SendableMetatype](/documentation/Swift/SendableMetatype)
- [ShapeStyle](/documentation/swiftui/shapestyle)
- [Transferable](/documentation/CoreTransferable/Transferable)
- [View](/documentation/swiftui/view)

## Creating a color

- [init(_:bundle:)](/documentation/swiftui/color/init(_:bundle:)) Creates a color from a color set that you indicate by name.
- [init(_:)](/documentation/swiftui/color/init(_:)) Creates a constant color with the values specified by the resolved color.
- [resolve(in:)](/documentation/swiftui/color/resolve(in:)) Evaluates this color to a resolved color given the current .

## Creating a color from component values

- [init(hue:saturation:brightness:opacity:)](/documentation/swiftui/color/init(hue:saturation:brightness:opacity:)) Creates a constant color from hue, saturation, and brightness values.
- [init(_:white:opacity:)](/documentation/swiftui/color/init(_:white:opacity:)) Creates a constant grayscale color.
- [init(_:red:green:blue:opacity:)](/documentation/swiftui/color/init(_:red:green:blue:opacity:)) Creates a constant color from red, green, and blue component values.
- [Color.RGBColorSpace](/documentation/swiftui/color/rgbcolorspace) A profile that specifies how to interpret a color value for display.

## Creating a color from another color

- [init(uiColor:)](/documentation/swiftui/color/init(uicolor:)) Creates a color from a UIKit color.
- [init(nsColor:)](/documentation/swiftui/color/init(nscolor:)) Creates a color from an AppKit color.
- [init(cgColor:)](/documentation/swiftui/color/init(cgcolor:)) Creates a color from a Core Graphics color.

## Getting standard colors

- [black](/documentation/swiftui/color/black) A black color suitable for use in UI elements.
- [blue](/documentation/swiftui/color/blue) A context-dependent blue color suitable for use in UI elements.
- [brown](/documentation/swiftui/color/brown) A context-dependent brown color suitable for use in UI elements.
- [clear](/documentation/swiftui/color/clear) A clear color suitable for use in UI elements.
- [cyan](/documentation/swiftui/color/cyan) A context-dependent cyan color suitable for use in UI elements.
- [gray](/documentation/swiftui/color/gray) A context-dependent gray color suitable for use in UI elements.
- [green](/documentation/swiftui/color/green) A context-dependent green color suitable for use in UI elements.
- [indigo](/documentation/swiftui/color/indigo) A context-dependent indigo color suitable for use in UI elements.
- [mint](/documentation/swiftui/color/mint) A context-dependent mint color suitable for use in UI elements.
- [orange](/documentation/swiftui/color/orange) A context-dependent orange color suitable for use in UI elements.
- [pink](/documentation/swiftui/color/pink) A context-dependent pink color suitable for use in UI elements.
- [purple](/documentation/swiftui/color/purple) A context-dependent purple color suitable for use in UI elements.
- [red](/documentation/swiftui/color/red) A context-dependent red color suitable for use in UI elements.
- [teal](/documentation/swiftui/color/teal) A context-dependent teal color suitable for use in UI elements.
- [white](/documentation/swiftui/color/white) A white color suitable for use in UI elements.
- [yellow](/documentation/swiftui/color/yellow) A context-dependent yellow color suitable for use in UI elements.

## Getting semantic colors

- [accentColor](/documentation/swiftui/color/accentcolor) A color that reflects the accent color of the system or app.
- [primary](/documentation/swiftui/color/primary) The color to use for primary content.
- [secondary](/documentation/swiftui/color/secondary) The color to use for secondary content.

## Modifying a color

- [opacity(_:)](/documentation/swiftui/color/opacity(_:)) Multiplies the opacity of the color by the given amount.
- [gradient](/documentation/swiftui/color/gradient) Returns the standard gradient for the color .
- [mix(with:by:in:)](/documentation/swiftui/color/mix(with:by:in:)) Returns a version of self mixed with  by the amount specified by .
- [exposureAdjust(_:)](/documentation/swiftui/color/exposureadjust(_:)) Returns a new color with an exposure adjustment applied.
- [headroom(_:)](/documentation/swiftui/color/headroom(_:)) Creates a new color with specified HDR content headroom.

## Working with high dynamic range (HDR) colors

- [resolveHDR(in:)](/documentation/swiftui/color/resolvehdr(in:)) Evaluates this color to a resolved color with content headroom, given a set of environment values.
- [Color.ResolvedHDR](/documentation/swiftui/color/resolvedhdr) A concrete color value, including HDR headroom information.

## Describing a color

- [description](/documentation/swiftui/color/description) A textual representation of the color.

## Comparing colors

- [==(_:_:)](/documentation/swiftui/color/==(_:_:)) Indicates whether two colors are equal.
- [hash(into:)](/documentation/swiftui/color/hash(into:)) Hashes the essential components of the color by feeding them into the given hash function.

## Deprecated symbols

- [cgColor](/documentation/swiftui/color/cgcolor) A Core Graphics representation of the color, if available.

## Default Implementations

- [ShapeStyle Implementations](/documentation/swiftui/color/shapestyle-implementations)
- [Transferable Implementations](/documentation/swiftui/color/transferable-implementations)

## Setting a color

- [tint(_:)](/documentation/swiftui/view/tint(_:))

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

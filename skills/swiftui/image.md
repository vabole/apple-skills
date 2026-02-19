---
title: Image
description: A view that displays an image.
source: https://developer.apple.com/documentation/swiftui/image
timestamp: 2026-02-19T07:56:06.903Z
---

**Navigation:** [Swiftui](/documentation/swiftui)

**Structure**

# Image

**Available on:** iOS 13.0+, iPadOS 13.0+, Mac Catalyst 13.0+, macOS 10.15+, tvOS 13.0+, visionOS 1.0+, watchOS 6.0+

> A view that displays an image.

```swift
@frozen struct Image
```

## Overview

Use an `Image` instance when you want to add images to your SwiftUI app. You can create images from many sources:

- Image files in your app’s asset library or bundle. Supported types include PNG, JPEG, HEIC, and more.
- Instances of platform-specific image types, like [UIImage](/documentation/UIKit/UIImage) and [NSImage](/documentation/AppKit/NSImage).
- A bitmap stored in a Core Graphics [CGImage](/documentation/CoreGraphics/CGImage) instance.
- System graphics from the SF Symbols set.

The following example shows how to load an image from the app’s asset library or bundle and scale it to fit within its container:

```swift
Image("Landscape_4")
    .resizable()
    .aspectRatio(contentMode: .fit)
Text("Water wheel")
```

![An image of a water wheel and its adjoining building, resized to fit the](https://docs-assets.developer.apple.com/published/5d218460da75fc53e2a4398f3ab30a3b/Image-1%402x.png)

You can use methods on the `Image` type as well as standard view modifiers to adjust the size of the image to fit your app’s interface. Here, the `Image` type’s [resizable(capInsets:resizingMode:)](/documentation/swiftui/image/resizable(capinsets:resizingmode:)) method scales the image to fit the current view. Then, the [aspectRatio(_:contentMode:)](/documentation/swiftui/view/aspectratio(_:contentmode:)) view modifier adjusts this resizing behavior to maintain the image’s original aspect ratio, rather than scaling the x- and y-axes independently to fill all four sides of the view. The article [Fitting-Images-into-Available](/documentation/swiftui/fitting-images-into-available-space) shows how to apply scaling, clipping, and tiling to `Image` instances of different sizes.

An `Image` is a late-binding token; the system resolves its actual value only when it’s about to use the image in an environment.

### Making images accessible

To use an image as a control, use one of the initializers that takes a `label` parameter. This allows the system’s accessibility frameworks to use the label as the name of the control for users who use features like VoiceOver. For images that are only present for aesthetic reasons, use an initializer with the `decorative` parameter; the accessibility systems ignore these images.

## Conforms To

- [Copyable](/documentation/Swift/Copyable)
- [Equatable](/documentation/Swift/Equatable)
- [Escapable](/documentation/Swift/Escapable)
- [JournalingSuggestionAsset](/documentation/JournalingSuggestions/JournalingSuggestionAsset)
- [Sendable](/documentation/Swift/Sendable)
- [SendableMetatype](/documentation/Swift/SendableMetatype)
- [Transferable](/documentation/CoreTransferable/Transferable)
- [View](/documentation/swiftui/view)

## Creating an image

- [init(_:bundle:)](/documentation/swiftui/image/init(_:bundle:)) Creates a labeled image that you can use as content for controls.
- [init(_:variableValue:bundle:)](/documentation/swiftui/image/init(_:variablevalue:bundle:)) Creates a labeled image that you can use as content for controls, with a variable value.
- [init(_:)](/documentation/swiftui/image/init(_:)) Initialize an  with an image resource.

## Creating an image for use as a control

- [init(_:bundle:label:)](/documentation/swiftui/image/init(_:bundle:label:)) Creates a labeled image that you can use as content for controls, with the specified label.
- [init(_:variableValue:bundle:label:)](/documentation/swiftui/image/init(_:variablevalue:bundle:label:)) Creates a labeled image that you can use as content for controls, with the specified label and variable value.
- [init(_:scale:orientation:label:)](/documentation/swiftui/image/init(_:scale:orientation:label:)) Creates a labeled image based on a Core Graphics image instance, usable as content for controls.

## Creating an image for decorative use

- [init(decorative:bundle:)](/documentation/swiftui/image/init(decorative:bundle:)) Creates an unlabeled, decorative image.
- [init(decorative:variableValue:bundle:)](/documentation/swiftui/image/init(decorative:variablevalue:bundle:)) Creates an unlabeled, decorative image, with a variable value.
- [init(decorative:scale:orientation:)](/documentation/swiftui/image/init(decorative:scale:orientation:)) Creates an unlabeled, decorative image based on a Core Graphics image instance.

## Creating a system symbol image

- [init(systemName:)](/documentation/swiftui/image/init(systemname:)) Creates a system symbol image.
- [init(systemName:variableValue:)](/documentation/swiftui/image/init(systemname:variablevalue:)) Creates a system symbol image with a variable value.

## Creating an image from another image

- [init(uiImage:)](/documentation/swiftui/image/init(uiimage:)) Creates a SwiftUI image from a UIKit image instance.
- [init(nsImage:)](/documentation/swiftui/image/init(nsimage:)) Creates a SwiftUI image from an AppKit image instance.

## Creating an image from drawing instructions

- [init(size:label:opaque:colorMode:renderer:)](/documentation/swiftui/image/init(size:label:opaque:colormode:renderer:)) Initializes an image of the given size, with contents provided by a custom rendering closure.

## Resizing images

- [resizable(capInsets:resizingMode:)](/documentation/swiftui/image/resizable(capinsets:resizingmode:)) Sets the mode by which SwiftUI resizes an image to fit its space.

## Specifying rendering behavior

- [antialiased(_:)](/documentation/swiftui/image/antialiased(_:)) Specifies whether SwiftUI applies antialiasing when rendering the image.
- [symbolRenderingMode(_:)](/documentation/swiftui/image/symbolrenderingmode(_:)) Sets the rendering mode for symbol images within this view.
- [renderingMode(_:)](/documentation/swiftui/image/renderingmode(_:)) Indicates whether SwiftUI renders an image as-is, or by using a different mode.
- [interpolation(_:)](/documentation/swiftui/image/interpolation(_:)) Specifies the current level of quality for rendering an image that requires interpolation.
- [Image.TemplateRenderingMode](/documentation/swiftui/image/templaterenderingmode) A type that indicates how SwiftUI renders images.
- [Image.Interpolation](/documentation/swiftui/image/interpolation) The level of quality for rendering an image that requires interpolation, such as a scaled image.

## Specifying dynamic range

- [allowedDynamicRange(_:)](/documentation/swiftui/image/alloweddynamicrange(_:)) Returns a new image configured with the specified allowed dynamic range.
- [allowedDynamicRange](/documentation/swiftui/environmentvalues/alloweddynamicrange) The allowed dynamic range for the view, or nil.
- [Image.DynamicRange](/documentation/swiftui/image/dynamicrange)

## Instance Methods

- [symbolColorRenderingMode(_:)](/documentation/swiftui/image/symbolcolorrenderingmode(_:)) Sets the color rendering mode of the image.
- [symbolVariableValueMode(_:)](/documentation/swiftui/image/symbolvariablevaluemode(_:)) Sets the variable value mode mode for symbol images within this view.
- [widgetAccentedRenderingMode(_:)](/documentation/swiftui/image/widgetaccentedrenderingmode(_:)) Specifies the how to render an  when using the  mode.

## Enumerations

- [Image.Orientation](/documentation/swiftui/image/orientation) The orientation of an image.
- [Image.ResizingMode](/documentation/swiftui/image/resizingmode) The modes that SwiftUI uses to resize an image to fit within its containing view.
- [Image.Scale](/documentation/swiftui/image/scale) A scale to apply to vector images relative to text.

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

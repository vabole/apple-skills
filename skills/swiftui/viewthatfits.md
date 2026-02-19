---
title: ViewThatFits
description: A view that adapts to the available space by providing the first child view that fits.
source: https://developer.apple.com/documentation/swiftui/viewthatfits
timestamp: 2026-02-19T07:52:37.455Z
---

**Navigation:** [Swiftui](/documentation/swiftui)

**Structure**

# ViewThatFits

**Available on:** iOS 16.0+, iPadOS 16.0+, Mac Catalyst 16.0+, macOS 13.0+, tvOS 16.0+, visionOS 1.0+, watchOS 9.0+

> A view that adapts to the available space by providing the first child view that fits.

```swift
@frozen struct ViewThatFits<Content> where Content : View
```

## Overview

`ViewThatFits` evaluates its child views in the order you provide them to the initializer. It selects the first child whose ideal size on the constrained axes fits within the proposed size. This means that you provide views in order of preference. Usually this order is largest to smallest, but since a view might fit along one constrained axis but not the other, this isn’t always the case. By default, `ViewThatFits` constrains in both the horizontal and vertical axes.

The following example shows an `UploadProgressView` that uses `ViewThatFits` to display the upload progress in one of three ways. In order, it attempts to display:

- An [HStack](/documentation/swiftui/hstack) that contains a [Text](/documentation/swiftui/text) view and a [Progress View](/documentation/swiftui/progressview).
- Only the `ProgressView`.
- Only the `Text` view.

The progress views are fixed to a 100-point width.

```swift
struct UploadProgressView: View {
    var uploadProgress: Double

    var body: some View {
        ViewThatFits(in: .horizontal) {
            HStack {
                Text("\(uploadProgress.formatted(.percent))")
                ProgressView(value: uploadProgress)
                    .frame(width: 100)
            }
            ProgressView(value: uploadProgress)
                .frame(width: 100)
            Text("\(uploadProgress.formatted(.percent))")
        }
    }
}
```

This use of `ViewThatFits` evaluates sizes only on the horizontal axis. The following code fits the `UploadProgressView` to several fixed widths:

```swift
VStack {
    UploadProgressView(uploadProgress: 0.75)
        .frame(maxWidth: 200)
    UploadProgressView(uploadProgress: 0.75)
        .frame(maxWidth: 100)
    UploadProgressView(uploadProgress: 0.75)
        .frame(maxWidth: 50)
}
```

![A vertical stack showing three expressions of progress, constrained by](https://docs-assets.developer.apple.com/published/2b5e67f3b1922018a42dec9df80df304/ViewThatFits-1%402x.png)

## Conforms To

- [View](/documentation/swiftui/view)

## Creating a view that fits

- [init(in:content:)](/documentation/swiftui/viewthatfits/init(in:content:)) Produces a view constrained in the given axes from one of several alternatives provided by a view builder.

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

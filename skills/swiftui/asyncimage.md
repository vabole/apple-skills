---
title: AsyncImage
description: A view that asynchronously loads and displays an image.
source: https://developer.apple.com/documentation/swiftui/asyncimage
timestamp: 2026-02-19T07:52:36.964Z
---

**Navigation:** [Swiftui](/documentation/swiftui)

**Structure**

# AsyncImage

**Available on:** iOS 15.0+, iPadOS 15.0+, Mac Catalyst 15.0+, macOS 12.0+, tvOS 15.0+, visionOS 1.0+, watchOS 8.0+

> A view that asynchronously loads and displays an image.

```swift
struct AsyncImage<Content> where Content : View
```

## Overview

This view uses the shared [URLSession](/documentation/Foundation/URLSession) instance to load an image from the specified URL, and then display it. For example, you can display an icon that’s stored on a server:

```swift
AsyncImage(url: URL(string: "https://example.com/icon.png"))
    .frame(width: 200, height: 200)
```

Until the image loads, the view displays a standard placeholder that fills the available space. After the load completes successfully, the view updates to display the image. In the example above, the icon is smaller than the frame, and so appears smaller than the placeholder.

![A diagram that shows a grey box on the left, the SwiftUI icon on the](https://docs-assets.developer.apple.com/published/7a8d82fa0ae80e1c40ba9a151d56c704/AsyncImage-1%402x.png)

You can specify a custom placeholder using [init(url:scale:content:placeholder:)](/documentation/swiftui/asyncimage/init(url:scale:content:placeholder:)). With this initializer, you can also use the `content` parameter to manipulate the loaded image. For example, you can add a modifier to make the loaded image resizable:

```swift
AsyncImage(url: URL(string: "https://example.com/icon.png")) { image in
    image.resizable()
} placeholder: {
    ProgressView()
}
.frame(width: 50, height: 50)
```

For this example, SwiftUI shows a [Progress View](/documentation/swiftui/progressview) first, and then the image scaled to fit in the specified frame:

![A diagram that shows a progress view on the left, the SwiftUI icon on the](https://docs-assets.developer.apple.com/published/d288fdb7e0fd01131459d0fa071516aa/AsyncImage-2%402x.png)

> [!IMPORTANT]
> You can’t apply image-specific modifiers, like [resizable(capInsets:resizingMode:)](/documentation/swiftui/image/resizable(capinsets:resizingmode:)), directly to an `AsyncImage`. Instead, apply them to the [Image](/documentation/swiftui/image) instance that your `content` closure gets when defining the view’s appearance.

To gain more control over the loading process, use the [init(url:scale:transaction:content:)](/documentation/swiftui/asyncimage/init(url:scale:transaction:content:)) initializer, which takes a `content` closure that receives an [Async Image Phase](/documentation/swiftui/asyncimagephase) to indicate the state of the loading operation. Return a view that’s appropriate for the current phase:

```swift
AsyncImage(url: URL(string: "https://example.com/icon.png")) { phase in
    if let image = phase.image {
        image // Displays the loaded image.
    } else if phase.error != nil {
        Color.red // Indicates an error.
    } else {
        Color.blue // Acts as a placeholder.
    }
}
```

## Conforms To

- [View](/documentation/swiftui/view)

## Loading an image

- [init(url:scale:)](/documentation/swiftui/asyncimage/init(url:scale:)) Loads and displays an image from the specified URL.
- [init(url:scale:content:placeholder:)](/documentation/swiftui/asyncimage/init(url:scale:content:placeholder:)) Loads and displays a modifiable image from the specified URL using a custom placeholder until the image loads.

## Loading an image in phases

- [init(url:scale:transaction:content:)](/documentation/swiftui/asyncimage/init(url:scale:transaction:content:)) Loads and displays a modifiable image from the specified URL in phases.

## Loading images asynchronously

- [AsyncImagePhase](/documentation/swiftui/asyncimagephase)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

---
title: AsyncImage
description: A view that asynchronously loads and displays an image.
source: https://developer.apple.com/documentation/swiftui/asyncimage
source_kind: apple-docc
source_json: https://developer.apple.com/tutorials/data/documentation/swiftui/asyncimage.json
timestamp: 2026-06-26T06:39:36.589Z
---

**Navigation:** [SwiftUI](/documentation/swiftui)

**Structure**

# AsyncImage

**Available on:** iOS 15.0+, iPadOS 15.0+, Mac Catalyst 15.0+, macOS 12.0+, tvOS 15.0+, visionOS 1.0+, watchOS 8.0+

> A view that asynchronously loads and displays an image.

```swift
nonisolated struct AsyncImage<Content> where Content : View
```

## Overview

This view uses the shared [URLSession](/documentation/Foundation/URLSession) instance to load an image from a URL that you specify, and then display it. For example, you can display an icon that’s stored on a server:

```swift
AsyncImage(url: URL(string: "https://example.com/icon.png"))
    .frame(width: 200, height: 200)
```

Until the image loads, the view displays a standard placeholder that fills the available space. After the load completes successfully, the view updates to display the image. In the example above, the icon is smaller than the frame, and so appears smaller than the placeholder.

![A diagram that shows a grey box on the left, the SwiftUI icon on the](https://docs-assets.developer.apple.com/published/7a8d82fa0ae80e1c40ba9a151d56c704/AsyncImage-1%402x.png)

> **Important:** You can’t apply image-specific modifiers, like [resizable(capInsets:resizingMode:)](/documentation/swiftui/image/resizable(capinsets:resizingmode:)), directly to an `AsyncImage`. Instead, apply them to the [Image](/documentation/swiftui/image) instance that your `content` closure gets when defining the view’s appearance.

You can manipulate the loaded image in the `content` parameter using [init(url:scale:content:placeholder:)](/documentation/swiftui/asyncimage/init(url:scale:content:placeholder:)). For example, you can add a modifier to make the loaded image resizable:

```swift
AsyncImage(url: URL(string: "https://example.com/icon.png")) { image in
    image.resizable()
} placeholder: {
    ProgressView()
}
.frame(width: 50, height: 50)
```

With this initializer, you can also specify a custom placeholder. In the code in the previous example, SwiftUI shows a [ProgressView](/documentation/swiftui/progressview) first, and then the image scaled to fit in the specified frame:

![A diagram that shows a progress view on the left, the SwiftUI icon on the](https://docs-assets.developer.apple.com/published/d288fdb7e0fd01131459d0fa071516aa/AsyncImage-2%402x.png)

If you use an [Image](/documentation/swiftui/image) as a placeholder view and it doesn’t load, SwiftUI doesn’t show anything as a placeholder and doesn’t report an error.

To gain more control over the loading process, use the [init(url:scale:transaction:content:)](/documentation/swiftui/asyncimage/init(url:scale:transaction:content:)) initializer, which takes a `content` closure that receives an [AsyncImagePhase](/documentation/swiftui/asyncimagephase) to indicate the state of the loading operation. Return a view that’s appropriate for the current phase:

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

In iOS 27, macOS 27, watchOS 27, tvOS 27, and visionOS 27 and later, `AsyncImage` caches downloaded image data following the transport protocol. The system creates the cache with a default [URLSessionConfiguration](/documentation/Foundation/URLSessionConfiguration). To change the cache policy, specify the change in [URLRequest](/documentation/Foundation/URLRequest), and pass it to [init(request:scale:transaction:content:)](/documentation/swiftui/asyncimage/init(request:scale:transaction:content:)). To customize the download process in a specific view hierarchy, use [asyncImageURLSession(_:)](/documentation/swiftui/view/asyncimageurlsession(_:)) to specify a [URLSession](/documentation/Foundation/URLSession). `AsyncImage` uses this session to perform data tasks when downloading the image data.

## Conforms To

- [View](/documentation/swiftui/view)

## Loading an image

- [init(url:scale:)](/documentation/swiftui/asyncimage/init(url:scale:)) Loads and displays an image from the specified URL.
- [init(url:scale:content:placeholder:)](/documentation/swiftui/asyncimage/init(url:scale:content:placeholder:)) Loads and displays a modifiable image from the specified URL using a custom placeholder until the image loads.

## Loading an image in phases

- [init(url:scale:transaction:content:)](/documentation/swiftui/asyncimage/init(url:scale:transaction:content:)) Loads and displays a modifiable image from the specified URL in phases.

## Loading an image with a URL request

- [init(request:scale:)](/documentation/swiftui/asyncimage/init(request:scale:)) Loads and displays an image from the specified URL load request.
- [init(request:scale:content:placeholder:)](/documentation/swiftui/asyncimage/init(request:scale:content:placeholder:)) Loads and displays a modifiable image from the specified URL load request using a custom placeholder until the image loads.
- [init(request:scale:transaction:content:)](/documentation/swiftui/asyncimage/init(request:scale:transaction:content:)) Loads and displays a modifiable image from the specified URL load request in phases.

## Loading images asynchronously

- [AsyncImagePhase](/documentation/swiftui/asyncimagephase) The current phase of the asynchronous image loading operation.

---

*Extracted from Apple DocC JSON by apple-skills tooling.*
*This is unofficial content. All documentation belongs to Apple Inc.*

---
title: PhotosPicker
description: A view that displays a Photos picker for choosing assets from the photo library.
source: https://developer.apple.com/documentation/photosui/photospicker
timestamp: 2026-01-19T11:03:11.932Z
---

**Navigation:** [Photosui](/documentation/photosui)

**Structure**

# PhotosPicker

**Available on:** iOS 16.0+, iPadOS 16.0+, Mac Catalyst undefined+, macOS 13.0+, visionOS undefined+, watchOS 9.0+

> A view that displays a Photos picker for choosing assets from the photo library.

```swift
@MainActor @preconcurrency struct PhotosPicker<Label> where Label : View
```

## Overview

Use the Photos picker view to browse and select images and videos from the photo library. The view contains methods for single selection and multiple selection. For example, the following code displays a button that — when pressed — shows a picker in multiple selection mode.

```swift
import SwiftUI
import PhotosUI

struct PhotosSelector: View {
    @State var selectedItems: [PhotosPickerItem] = []

    var body: some View {
        PhotosPicker(selection: $selectedItems,
                     matching: .images) {
            Text("Select Multiple Photos")
        }
    }
}
```

When displaying the picker, you can use [PHPicker Filter-swift.struct](/documentation/photosui/phpickerfilter-swift.struct) options to customize what it displays. For example, the following code displays [images](/documentation/photosui/phpickerfilter-swift.struct/images) and excludes [screenshots](/documentation/photosui/phpickerfilter-swift.struct/screenshots).

```swift
PhotosPicker(selection: $selectedItems,
             matching: .any(of: [.images, .not(.screenshots)])) {
    Text("Select Photos")
}
```

The selection results you get are placeholder objects. A [Photos Picker Item](/documentation/photosui/photospickeritem) conforms to [Transferable](/documentation/CoreTransferable/Transferable), and allows you to load a representation you request. To load a SwiftUI [Image](/documentation/SwiftUI/Image) and track progress, use [loadTransferable(type:completionHandler:)](/documentation/photosui/photospickeritem/loadtransferable(type:completionhandler:)).

```swift
func loadTransferable(from imageSelection: PhotosPickerItem) -> Progress {
    return imageSelection.loadTransferable(type: Image.self) { result in
        DispatchQueue.main.async {
            guard imageSelection == self.imageSelection else { return }
            switch result {
            case .success(let image?):
                // Handle the success case with the image.
            case .success(nil):
                // Handle the success case with an empty value.
            case .failure(let error):
                // Handle the failure case with the provided error.
            }
        }
    }
}
```

A failure can occur when the system attempts to retrieve the data. For example, if the picker tries to download data from iCloud Photos without a network connection.

> [!IMPORTANT]
> [Image](/documentation/SwiftUI/Image) only supports `PNG` file types through its [Transferable](/documentation/CoreTransferable/Transferable) conformance, so you need to create a custom `Transferable` model to support other image types. See [bringing-photos-picker-to-your-swiftui](/documentation/photokit/bringing-photos-picker-to-your-swiftui-app) to learn more.

## Conforms To

- [Sendable](/documentation/Swift/Sendable)
- [SendableMetatype](/documentation/Swift/SendableMetatype)
- [View](/documentation/SwiftUI/View)

## Creating a picker

- [init(selection:matching:preferredItemEncoding:label:)](/documentation/photosui/photospicker/init(selection:matching:preferreditemencoding:label:)) Creates a picker that selects an item and optionally configures the types of items to show, item encoding, and label behavior.
- [init(selection:maxSelectionCount:selectionBehavior:matching:preferredItemEncoding:label:)](/documentation/photosui/photospicker/init(selection:maxselectioncount:selectionbehavior:matching:preferreditemencoding:label:)) Creates a picker that selects a collection of items and optionally configures the max selection count, selection behavior, types of items to show, item encoding, and label behavior.
- [init(selection:matching:preferredItemEncoding:photoLibrary:label:)](/documentation/photosui/photospicker/init(selection:matching:preferreditemencoding:photolibrary:label:)) Creates a picker that selects an item from the photo library you specify and optionally configures the types of items to show, item encoding, and label behavior.
- [init(selection:maxSelectionCount:selectionBehavior:matching:preferredItemEncoding:photoLibrary:label:)](/documentation/photosui/photospicker/init(selection:maxselectioncount:selectionbehavior:matching:preferreditemencoding:photolibrary:label:)) Creates a picker that selects a collection of items from the photo library you specify and optionally configures the max selection count, selection behavior, types of items to show, item encoding, and label behavior.

## Creating a picker with a title

- [init(_:selection:matching:preferredItemEncoding:)](/documentation/photosui/photospicker/init(_:selection:matching:preferreditemencoding:)-7jbef) Creates a picker with a title key and selection, and optionally configures the types of items to show and item encoding behavior.
- [init(_:selection:matching:preferredItemEncoding:)](/documentation/photosui/photospicker/init(_:selection:matching:preferreditemencoding:)-48f7l) Creates a picker with a title and selection, and optionally configures the types of items to show and item encoding behavior.
- [init(_:selection:maxSelectionCount:selectionBehavior:matching:preferredItemEncoding:)](/documentation/photosui/photospicker/init(_:selection:maxselectioncount:selectionbehavior:matching:preferreditemencoding:)-8ac23) Creates a picker with a title key and selection, and optionally configures the max selection count, selection behavior, types of items to show, item encoding, and label behavior.
- [init(_:selection:maxSelectionCount:selectionBehavior:matching:preferredItemEncoding:)](/documentation/photosui/photospicker/init(_:selection:maxselectioncount:selectionbehavior:matching:preferreditemencoding:)-6m11r) Creates a picker with a title and selection, and optionally configures the max selection count, selection behavior, types of items to show, item encoding, and label behavior.
- [init(_:selection:matching:preferredItemEncoding:photoLibrary:)](/documentation/photosui/photospicker/init(_:selection:matching:preferreditemencoding:photolibrary:)-bu7c) Creates a picker with a title key and selection from the photo library you specify, and optionally configures the types of items to show, item encoding, and label behavior.
- [init(_:selection:matching:preferredItemEncoding:photoLibrary:)](/documentation/photosui/photospicker/init(_:selection:matching:preferreditemencoding:photolibrary:)-6bm2n) Creates a picker with a title and selection from the photo library you specify, and optionally configures the types of items to show, item encoding, and label behavior.
- [init(_:selection:maxSelectionCount:selectionBehavior:matching:preferredItemEncoding:photoLibrary:)](/documentation/photosui/photospicker/init(_:selection:maxselectioncount:selectionbehavior:matching:preferreditemencoding:photolibrary:)-5tpfd) Creates a picker with a title key and selection from the photo library you specify, and optionally configures the max selection count, selection behavior, types of items to show, item encoding, and label behavior.
- [init(_:selection:maxSelectionCount:selectionBehavior:matching:preferredItemEncoding:photoLibrary:)](/documentation/photosui/photospicker/init(_:selection:maxselectioncount:selectionbehavior:matching:preferreditemencoding:photolibrary:)-6fwsc) Creates a picker with a title and selection from the photo library you specify, and optionally configures the max selection count, selection behavior, types of items to show, item encoding, and label behavior.

## Photos picker for SwiftUI

- [Bringing Photos picker to your SwiftUI app](/documentation/photokit/bringing-photos-picker-to-your-swiftui-app)
- [Implementing an inline Photos picker](/documentation/photokit/implementing-an-inline-photos-picker)
- [PhotosPickerItem](/documentation/photosui/photospickeritem)
- [PhotosPickerSelectionBehavior](/documentation/photosui/photospickerselectionbehavior)
- [PhotosPickerStyle](/documentation/photosui/photospickerstyle)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

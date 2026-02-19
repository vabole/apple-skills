---
title: Landmarks: Extending horizontal scrolling under a sidebar or inspector
description: Improve your horizontal scrollbar’s appearance by extending it under a sidebar or inspector.
source: https://developer.apple.com/documentation/swiftui/landmarks-extending-horizontal-scrolling-under-a-sidebar-or-inspector
timestamp: 2026-02-19T07:56:03.254Z
---

**Navigation:** [Swiftui](/documentation/swiftui)

**Sample Code**

# Landmarks: Extending horizontal scrolling under a sidebar or inspector

**Available on:** iOS 26.0+, iPadOS 26.0+, Mac Catalyst 26.0+, macOS 26.0+, Xcode 26.0+

> Improve your horizontal scrollbar’s appearance by extending it under a sidebar or inspector.

## Overview

The Landmarks app lets people explore interesting sites around the world. Whether it’s a national park near their home or a far-flung location on a different continent, the app provides a way for people to organize and mark their adventures and receive custom activity badges along the way.

This sample demonstrates how to extend horizontal scrolling under a sidebar or inspector. Within each continent section in `LandmarksView`, an instance of `LandmarkHorizontalListView` shows a horizontally scrolling list of landmark views. When open, the landmark views can scroll underneath the sidebar or inspector.

![An image of the landmarks view on an iPad, with the sidebar visible and some landmarks visible under the sidebar.](https://docs-assets.developer.apple.com/published/709551ab6017da3888bbb3b9b1620fed/Landmarks-Building-an-app-with-Liquid-Glass-3%402x.png)

## Configure the scroll view

To achieve this effect, the sample configures the `LandmarkHorizontalListView` so it touches the leading and trailing edges. When a scroll view touches the sidebar or inspector, the system automatically adjusts it to scroll under the sidebar or inspector and then off the edge of the screen.

The sample adds a [Spacer](/documentation/swiftui/spacer) at the beginning of the [Scroll View](/documentation/swiftui/scrollview) to inset the content so it aligns with the title padding:

```swift
ScrollView(.horizontal, showsIndicators: false) {
    LazyHStack(spacing: Constants.standardPadding) {
        Spacer()
            .frame(width: Constants.standardPadding)
        ForEach(landmarkList) { landmark in
            //...
        }
    }
}
```

## App features

- [Landmarks: Applying a background extension effect](/documentation/swiftui/landmarks-applying-a-background-extension-effect)
- [Landmarks: Refining the system provided Liquid Glass effect in toolbars](/documentation/swiftui/landmarks-refining-the-system-provided-glass-effect-in-toolbars)
- [Landmarks: Displaying custom activity badges](/documentation/swiftui/landmarks-displaying-custom-activity-badges)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

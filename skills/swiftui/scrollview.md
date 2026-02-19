---
title: ScrollView
description: A scrollable view.
source: https://developer.apple.com/documentation/swiftui/scrollview
timestamp: 2026-01-19T10:23:09.011Z
---

**Navigation:** [Swiftui](/documentation/swiftui)

**Structure**

# ScrollView

**Available on:** iOS 13.0+, iPadOS 13.0+, Mac Catalyst 13.0+, macOS 10.15+, tvOS 13.0+, visionOS 1.0+, watchOS 6.0+

> A scrollable view.

```swift
struct ScrollView<Content> where Content : View
```

## Overview

The scroll view displays its content within the scrollable content region. As the user performs platform-appropriate scroll gestures, the scroll view adjusts what portion of the underlying content is visible. `ScrollView` can scroll horizontally, vertically, or both, but does not provide zooming functionality.

In the following example, a `ScrollView` allows the user to scroll through a [VStack](/documentation/swiftui/vstack) containing 100 [Text](/documentation/swiftui/text) views. The image after the listing shows the scroll view’s temporarily visible scrollbar at the right; you can disable it with the `showsIndicators` parameter of the `ScrollView` initializer.

```swift
var body: some View {
    ScrollView {
        VStack(alignment: .leading) {
            ForEach(0..<100) {
                Text("Row \($0)")
            }
        }
    }
}
```



### Controlling Scroll Position

You can influence where a scroll view is initially scrolled by using the [defaultScrollAnchor(_:)](/documentation/swiftui/view/defaultscrollanchor(_:)) view modifier.

Provide a value of `UnitPoint/center`` to have the scroll view start in the center of its content when a scroll view is scrollable in both axes.

```swift
ScrollView([.horizontal, .vertical]) {
    // initially centered content
}
.defaultScrollAnchor(.center)
```

Or provide an alignment of `UnitPoint/bottom`` to have the scroll view start at the bottom of its content when a scroll view is scrollable in its vertical axes.

```swift
ScrollView {
    // initially bottom aligned content
}
.defaultScrollAnchor(.bottom)
```

After the scroll view initially renders, the user may scroll the content of the scroll view.

To perform programmatic scrolling, wrap one or more scroll views with a [Scroll View Reader](/documentation/swiftui/scrollviewreader).

## Conforms To

- [View](/documentation/swiftui/view)

## Creating a scroll view

- [init(_:showsIndicators:content:)](/documentation/swiftui/scrollview/init(_:showsindicators:content:)) Creates a new instance that’s scrollable in the direction of the given axis and can show indicators while scrolling.
- [init(_:content:)](/documentation/swiftui/scrollview/init(_:content:)) Creates a new instance that’s scrollable in the direction of the given axis and can show indicators while scrolling.

## Configuring a scroll view

- [content](/documentation/swiftui/scrollview/content) The scroll view’s content.
- [axes](/documentation/swiftui/scrollview/axes) The scrollable axes of the scroll view.
- [showsIndicators](/documentation/swiftui/scrollview/showsindicators) A value that indicates whether the scroll view displays the scrollable component of the content offset, in a way that’s suitable for the platform.

## Supporting types

- [body](/documentation/swiftui/scrollview/body) The content and behavior of the scroll view.

## Creating a scroll view

- [ScrollViewReader](/documentation/swiftui/scrollviewreader)
- [ScrollViewProxy](/documentation/swiftui/scrollviewproxy)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

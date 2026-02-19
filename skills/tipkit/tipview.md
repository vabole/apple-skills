---
title: TipView
description: A user interface element that represents an inline tip.
source: https://developer.apple.com/documentation/tipkit/tipview
timestamp: 2026-02-19T07:52:37.118Z
---

**Navigation:** [Tipkit](/documentation/tipkit)

**Structure**

# TipView

**Available on:** iOS 17.0+, iPadOS 17.0+, Mac Catalyst 17.0+, macOS 14.0+, tvOS 17.0+, visionOS 1.0+, watchOS 10.0+

> A user interface element that represents an inline tip.

```swift
@MainActor @preconcurrency struct TipView<Content> where Content : Tip
```

## Overview

You create a tip view by providing a tip along with an optional arrow edge and action handler. The tip is a type that conforms to the [Tip](/documentation/tipkit/tip) protocol. The arrow edge is a directional arrow pointing away from the tip. The action is a closure that executes when the user triggers a tip’s button.

For example, display a tip view, above an image, with an arrow edge along the bottom:

1. Define your tip’s content as a structure conforming to the `Tip` protocol.
2. Create an instance your tip as a variable in the view containing the feature you want to highlight.
3. Create an instance of a `TipView`, near the feature you want to highlight, passing in the instance your tip’s content, along with an optional arrow edge.
4. Then configure and load the tips for your app by calling [configure(_:)](/documentation/tipkit/tips/configure(_:)).

> [!IMPORTANT]
> Use [Tip UIView](/documentation/tipkit/tipuiview) and [Tip NSView](/documentation/tipkit/tipnsview) when adding tips to UIView and NSView hierarchies.

```swift
import SwiftUI
import TipKit

// Define your tip's content.
struct SampleTip: Tip {
    var title: Text {
        Text("Save as a Favorite")
    }

    var message: Text? {
        Text("Your favorite backyards always appear at the top of the list.")
    }

    var image: Image? {
        Image(systemName: "star")
    }
}

struct SampleView: View {
    // Create an instance of your tip.
    var tip = SampleTip()

    var body: some View {
        VStack {
            // Place the tip view near the feature you want to highlight.
            // Tips.configure(options:) must be called before your tip will be eligible for display.
            TipView(tip, arrowEdge: .bottom)
        }
    }
}
```

## Conforms To

- [View](/documentation/SwiftUI/View)

## Creating a tip view

- [init(_:arrowEdge:action:)](/documentation/tipkit/tipview/init(_:arrowedge:action:)) Creates a tip view with an optional arrow.
- [init(_:isPresented:arrowEdge:action:)](/documentation/tipkit/tipview/init(_:ispresented:arrowedge:action:)) Creates a tip view with an optional arrow.
- [init(_:isPresented:arrowEdge:anchorID:action:)](/documentation/tipkit/tipview/init(_:ispresented:arrowedge:anchorid:action:)) Creates a tip view with an optional arrow.

## Views

- [popoverTip(_:arrowEdge:action:)](/documentation/SwiftUI/View/popoverTip(_:arrowEdge:action:))

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

---
title: Tip
description: A type that sets a tip’s content, as well as the conditions for when it displays.
source: https://developer.apple.com/documentation/tipkit/tip
timestamp: 2026-02-19T07:52:37.023Z
---

**Navigation:** [Tipkit](/documentation/tipkit)

**Protocol**

# Tip

**Available on:** iOS 17.0+, iPadOS 17.0+, Mac Catalyst 17.0+, macOS 14.0+, tvOS 17.0+, visionOS 1.0+, watchOS 10.0+

> A type that sets a tip’s content, as well as the conditions for when it displays.

```swift
protocol Tip : Identifiable, Sendable
```

## Overview

Use this protocol for setting a tip’s content, as well as defining the conditions for when it appears in a view. You create custom tips by declaring types that conform to the `Tip` protocol. Set your tip’s content by giving it a [title](/documentation/tipkit/tip/title),  [message](/documentation/tipkit/tip/message),  [image](/documentation/tipkit/tip/image), and a list of [actions](/documentation/tipkit/tip/actions).

For example, to create a tip with a `title`, `message`, and `image`:

```swift
struct FavoriteBackyardTip: Tip {
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
```

For a tip to be valid, you need to set its `title`. To control when a tip displays, pass instances of [Rule](/documentation/tipkit/tip/rule) and [Option](/documentation/tipkit/tip/option) into the [rules](/documentation/tipkit/tip/rules) and [options](/documentation/tipkit/tip/options) properties of the tip.

After you define your tip’s content, display it in either a [Tip View](/documentation/tipkit/tipview) or a [popoverTip(_:arrowEdge:action:)](/documentation/SwiftUI/View/popoverTip(_:arrowEdge:action:)).

## Inherits From

- [Identifiable](/documentation/Swift/Identifiable)
- [Sendable](/documentation/Swift/Sendable)
- [SendableMetatype](/documentation/Swift/SendableMetatype)

## Conforming Types

- [AnyTip](/documentation/tipkit/anytip)

## Setting tip content

- [title](/documentation/tipkit/tip/title) A title that names the tip.
- [message](/documentation/tipkit/tip/message) A short description of how to use the tip’s feature.
- [image](/documentation/tipkit/tip/image) The image associated with the tip.
- [id](/documentation/tipkit/tip/id) The tip’s unique identifier.

## Controlling when tips appear

- [rules](/documentation/tipkit/tip/rules) The rules that determine when a tip is eligible for display. For more information on rules, see .
- [Rule](/documentation/tipkit/tip/rule) A condition to meet before displaying a tip.
- [Event](/documentation/tipkit/tip/event) A repeatable user-defined action.

## Customizing tip behavior

- [options](/documentation/tipkit/tip/options) Customizations for a tip.
- [Option](/documentation/tipkit/tip/option) A type that represents the various customizations that you can make to a tip’s behavior.
- [IgnoresDisplayFrequency](/documentation/tipkit/tip/ignoresdisplayfrequency) Controls whether a tip obeys the preconfigured display frequency interval.
- [MaxDisplayCount](/documentation/tipkit/tip/maxdisplaycount) Specifies the maximum number of times a tip displays before the system automatically invalidates it.
- [MaxDisplayDuration](/documentation/tipkit/tip/maxdisplayduration) Specifies the maximum amount of time a tip is displayed before it is invalidated.

## Providing actions

- [actions](/documentation/tipkit/tip/actions) Buttons that help people get started or learn more about your feature.
- [Action](/documentation/tipkit/tip/action) A type that describes a control associated with a tip.

## Monitoring tip status

- [status](/documentation/tipkit/tip/status-swift.property) The current status of a tip based on its rules and the configured .
- [statusUpdates](/documentation/tipkit/tip/statusupdates) An asynchronous sequence for monitoring a tip’s status changes.
- [shouldDisplay](/documentation/tipkit/tip/shoulddisplay) A Boolean value that determines whether to display a tip.
- [shouldDisplayUpdates](/documentation/tipkit/tip/shoulddisplayupdates) An asynchronous sequence for monitoring a tip’s display eligibility.
- [Status](/documentation/tipkit/tip/status-swift.typealias) A type that describes the current display eligibility status for a tip.
- [InvalidationReason](/documentation/tipkit/tip/invalidationreason) A type that describes why the system permanently invalidated a tip.

## Invalidating a tip

- [invalidate(reason:)](/documentation/tipkit/tip/invalidate(reason:)) Permanently invalidates a tip and prevents it from displaying.
- [resetEligibility()](/documentation/tipkit/tip/reseteligibility()) Reset a previously invalidated tip.

## Content

- [TipGroup](/documentation/tipkit/tipgroup)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

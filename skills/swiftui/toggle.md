---
title: Toggle
description: A control that toggles between on and off states.
source: https://developer.apple.com/documentation/swiftui/toggle
timestamp: 2026-01-19T10:23:15.339Z
---

**Navigation:** [Swiftui](/documentation/swiftui)

**Structure**

# Toggle

**Available on:** iOS 13.0+, iPadOS 13.0+, Mac Catalyst 13.0+, macOS 10.15+, tvOS 13.0+, visionOS 1.0+, watchOS 6.0+

> A control that toggles between on and off states.

```swift
struct Toggle<Label> where Label : View
```

## Overview

You create a toggle by providing an `isOn` binding and a label. Bind `isOn` to a Boolean property that determines whether the toggle is on or off. Set the label to a view that visually describes the purpose of switching between toggle states. For example:

```swift
@State private var vibrateOnRing = false

var body: some View {
    Toggle(isOn: $vibrateOnRing) {
        Text("Vibrate on Ring")
    }
}
```

For the common case of [Label](/documentation/swiftui/label) based labels, you can use the convenience initializer that takes a title string (or localized string key) and the name of a system image:

```swift
@State private var vibrateOnRing = true

var body: some View {
    Toggle(
        "Vibrate on Ring",
        systemImage: "dot.radiowaves.left.and.right",
        isOn: $vibrateOnRing
    )
}
```

For text-only labels, you can use the convenience initializer that takes a title string (or localized string key) as its first parameter, instead of a trailing closure:

```swift
@State private var vibrateOnRing = true

var body: some View {
    Toggle("Vibrate on Ring", isOn: $vibrateOnRing)
}
```

For cases where adding a subtitle to the label is desired, use a view builder that creates multiple `Text` views where the first text represents the title and the second text represents the subtitle:

```swift
@State private var vibrateOnRing = false

var body: some View {
    Toggle(isOn: $vibrateOnRing) {
        Text("Vibrate on Ring")
        Text("Enable vibration when the phone rings")
    }
}
```

> [!NOTE]
> This behavior does not apply to [button](/documentation/swiftui/togglestyle/button).

### Styling toggles

Toggles use a default style that varies based on both the platform and the context. For more information, read about the [automatic](/documentation/swiftui/togglestyle/automatic) toggle style.

You can customize the appearance and interaction of toggles by applying styles using the [toggleStyle(_:)](/documentation/swiftui/view/togglestyle(_:)) modifier. You can apply built-in styles, like [switch](/documentation/swiftui/togglestyle/switch), to either a toggle, or to a view hierarchy that contains toggles:

```swift
VStack {
    Toggle("Vibrate on Ring", isOn: $vibrateOnRing)
    Toggle("Vibrate on Silent", isOn: $vibrateOnSilent)
}
.toggleStyle(.switch)
```

You can also define custom styles by creating a type that conforms to the [Toggle Style](/documentation/swiftui/togglestyle) protocol.

## Conforms To

- [View](/documentation/swiftui/view)

## Creating a toggle

- [init(_:isOn:)](/documentation/swiftui/toggle/init(_:ison:)) Creates a toggle that generates its label from a localized string key.
- [init(isOn:label:)](/documentation/swiftui/toggle/init(ison:label:)) Creates a toggle that displays a custom label.
- [init(_:image:isOn:)](/documentation/swiftui/toggle/init(_:image:ison:)) Creates a toggle that generates its label from a localized string key and image resource.
- [init(_:systemImage:isOn:)](/documentation/swiftui/toggle/init(_:systemimage:ison:)) Creates a toggle that generates its label from a localized string key and system image.

## Creating a toggle for a collection

- [init(_:sources:isOn:)](/documentation/swiftui/toggle/init(_:sources:ison:)) Creates a toggle representing a collection of values that generates its label from a localized string key.
- [init(sources:isOn:label:)](/documentation/swiftui/toggle/init(sources:ison:label:)) Creates a toggle representing a collection of values with a custom label.
- [init(_:image:sources:isOn:)](/documentation/swiftui/toggle/init(_:image:sources:ison:)) Creates a toggle representing a collection of values that generates its label from a localized string key and image resource.
- [init(_:systemImage:sources:isOn:)](/documentation/swiftui/toggle/init(_:systemimage:sources:ison:)) Creates a toggle representing a collection of values that generates its label from a localized string key and system image.

## Creating a toggle from a configuration

- [init(_:)](/documentation/swiftui/toggle/init(_:)) Creates a toggle based on a toggle style configuration.

## Creating a toggle for an App Intent

- [init(isOn:intent:label:)](/documentation/swiftui/toggle/init(ison:intent:label:)) Creates a toggle performing an .
- [init(_:isOn:intent:)](/documentation/swiftui/toggle/init(_:ison:intent:)) Creates a toggle performing an  and generates its label from a localized string key.

## Getting numeric inputs

- [Slider](/documentation/swiftui/slider)
- [Stepper](/documentation/swiftui/stepper)
- [toggleStyle(_:)](/documentation/swiftui/view/togglestyle(_:))

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

---
title: Label
description: A standard label for user interface items, consisting of an icon with a title.
source: https://developer.apple.com/documentation/swiftui/label
timestamp: 2026-02-19T07:52:36.981Z
---

**Navigation:** [Swiftui](/documentation/swiftui)

**Structure**

# Label

**Available on:** iOS 14.0+, iPadOS 14.0+, Mac Catalyst 14.0+, macOS 11.0+, tvOS 14.0+, visionOS 1.0+, watchOS 7.0+

> A standard label for user interface items, consisting of an icon with a title.

```swift
struct Label<Title, Icon> where Title : View, Icon : View
```

## Overview

One of the most common and recognizable user interface components is the combination of an icon and a label. This idiom appears across many kinds of apps and shows up in collections, lists, menus of action items, and disclosable lists, just to name a few.

You create a label, in its simplest form, by providing a title and the name of an image, such as an icon from the [sf](/design/Human-Interface-Guidelines/sf-symbols) collection:

```swift
Label("Lightning", systemImage: "bolt.fill")
```

You can also apply styles to labels in several ways. In the case of dynamic changes to the view after device rotation or change to a window size you might want to show only the text portion of the label using the [title Only](/documentation/swiftui/labelstyle/titleonly) label style:

```swift
Label("Lightning", systemImage: "bolt.fill")
    .labelStyle(.titleOnly)
```

Conversely, there’s also an icon-only label style:

```swift
Label("Lightning", systemImage: "bolt.fill")
    .labelStyle(.iconOnly)
```

Some containers might apply a different default label style, such as only showing icons within toolbars on macOS and iOS. To opt in to showing both the title and the icon, you can apply the [title And Icon](/documentation/swiftui/labelstyle/titleandicon) label style:

```swift
Label("Lightning", systemImage: "bolt.fill")
    .labelStyle(.titleAndIcon)
```

You can also create a customized label style by modifying an existing style; this example adds a red border to the default label style:

```swift
struct RedBorderedLabelStyle: LabelStyle {
    func makeBody(configuration: Configuration) -> some View {
        Label(configuration)
            .border(Color.red)
    }
}
```

For more extensive customization or to create a completely new label style, you’ll need to adopt the [Label Style](/documentation/swiftui/labelstyle) protocol and implement a [Label Style Configuration](/documentation/swiftui/labelstyleconfiguration) for the new style.

To apply a common label style to a group of labels, apply the style to the view hierarchy that contains the labels:

```swift
VStack {
    Label("Rain", systemImage: "cloud.rain")
    Label("Snow", systemImage: "snow")
    Label("Sun", systemImage: "sun.max")
}
.labelStyle(.iconOnly)
```

It’s also possible to make labels using views to compose the label’s icon programmatically, rather than using a pre-made image. In this example, the icon portion of the label uses a filled [Circle](/documentation/swiftui/circle) overlaid with the user’s initials:

```swift
Label {
    Text(person.fullName)
        .font(.body)
        .foregroundColor(.primary)
    Text(person.title)
        .font(.subheadline)
        .foregroundColor(.secondary)
} icon: {
    Circle()
        .fill(person.profileColor)
        .frame(width: 44, height: 44, alignment: .center)
        .overlay(Text(person.initials))
}
```

## Conforms To

- [View](/documentation/swiftui/view)

## Creating a label

- [init(_:image:)](/documentation/swiftui/label/init(_:image:)) Creates a label with an icon image and a title generated from a localized string.
- [init(_:systemImage:)](/documentation/swiftui/label/init(_:systemimage:)) Creates a label with a system icon image and a title generated from a localized string.
- [init(title:icon:)](/documentation/swiftui/label/init(title:icon:)) Creates a label with a custom title and icon.
- [init(_:)](/documentation/swiftui/label/init(_:)) Creates a label representing a family activity application.
- [init(_:image:)](/documentation/swiftui/label/init(_:image:)) Creates a label with an icon image and a title generated from a localized string.

## Displaying text

- [Text](/documentation/swiftui/text)
- [labelStyle(_:)](/documentation/swiftui/view/labelstyle(_:))

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

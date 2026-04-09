---
title: NavigationLink
description: A view that controls a navigation presentation.
source: https://developer.apple.com/documentation/swiftui/navigationlink
timestamp: 2026-04-09T12:04:37.720Z
---

**Navigation:** [SwiftUI](/documentation/swiftui)

**Structure**

# NavigationLink

**Available on:** iOS 13.0+, iPadOS 13.0+, Mac Catalyst 13.0+, macOS 10.15+, tvOS 13.0+, visionOS 1.0+, watchOS 6.0+

> A view that controls a navigation presentation.

```swift
struct NavigationLink<Label, Destination> where Label : View, Destination : View
```

## Overview

People click or tap a navigation link to present a view inside a [NavigationStack](/documentation/swiftui/navigationstack) or [NavigationSplitView](/documentation/swiftui/navigationsplitview). You control the visual appearance of the link by providing view content in the link’s `label` closure. For example, you can use a [Label](/documentation/swiftui/label) to display a link:

```swift
NavigationLink {
    FolderDetail(id: workFolder.id)
} label: {
    Label("Work Folder", systemImage: "folder")
}
```

For a link composed only of text, you can use one of the convenience initializers that takes a string and creates a [Text](/documentation/swiftui/text) view for you:

```swift
NavigationLink("Work Folder") {
    FolderDetail(id: workFolder.id)
}
```

### Link to a destination view

You can perform navigation by initializing a link with a destination view that you provide in the `destination` closure. For example, consider a `ColorDetail` view that fills itself with a color:

```swift
struct ColorDetail: View {
    var color: Color

    var body: some View {
        color.navigationTitle(color.description)
    }
}
```

The following [NavigationStack](/documentation/swiftui/navigationstack) presents three links to color detail views:

```swift
NavigationStack {
    List {
        NavigationLink("Mint") { ColorDetail(color: .mint) }
        NavigationLink("Pink") { ColorDetail(color: .pink) }
        NavigationLink("Teal") { ColorDetail(color: .teal) }
    }
    .navigationTitle("Colors")
}
```

### Create a presentation link

Alternatively, you can use a navigation link to perform navigation based on a presented data value. To support this, use the [navigationDestination(for:destination:)](/documentation/swiftui/view/navigationdestination(for:destination:)) view modifier inside a navigation stack to associate a view with a kind of data, and then present a value of that data type from a navigation link. The following example reimplements the previous example as a series of presentation links:

```swift
NavigationStack {
    List {
        NavigationLink("Mint", value: Color.mint)
        NavigationLink("Pink", value: Color.pink)
        NavigationLink("Teal", value: Color.teal)
    }
    .navigationDestination(for: Color.self) { color in
        ColorDetail(color: color)
    }
    .navigationTitle("Colors")
}
```

Separating the view from the data facilitates programmatic navigation because you can manage navigation state by recording the presented data.

### Control a presentation link programmatically

To navigate programmatically, introduce a state variable that tracks the items on a stack. For example, you can create an array of colors to store the stack state from the previous example, and initialize it as an empty array to start with an empty stack:

```swift
@State private var colors: [Color] = []
```

Then pass a [Binding](/documentation/swiftui/binding) to the state to the navigation stack:

```swift
NavigationStack(path: $colors) {
    // ...
}
```

You can use the array to observe the current state of the stack. You can also modify the array to change the contents of the stack. For example, you can programmatically add [blue](/documentation/swiftui/shapestyle/blue) to the array, and navigation to a new color detail view using the following method:

```swift
func showBlue() {
    colors.append(.blue)
}
```

### Coordinate with a list

You can also use a navigation link to control [List](/documentation/swiftui/list) selection in a [NavigationSplitView](/documentation/swiftui/navigationsplitview):

```swift
let colors: [Color] = [.mint, .pink, .teal]
@State private var selection: Color? // Nothing selected by default.

var body: some View {
    NavigationSplitView {
        List(colors, id: \.self, selection: $selection) { color in
            NavigationLink(color.description, value: color)
        }
    } detail: {
        if let color = selection {
            ColorDetail(color: color)
        } else {
            Text("Pick a color")
        }
    }
}
```

The list coordinates with the navigation logic so that changing the selection state variable in another part of your code activates the navigation link with the corresponding color. Similarly, if someone chooses the navigation link associated with a particular color, the list updates the selection value that other parts of your code can read.

## Conforms To

- [View](/documentation/swiftui/view)

## Presenting a destination view

- [init(_:destination:)](/documentation/swiftui/navigationlink/init(_:destination:)) Creates a navigation link that presents a destination view, with a text label that the link generates from a localized string key.
- [init(destination:label:)](/documentation/swiftui/navigationlink/init(destination:label:)) Creates a navigation link that presents the destination view.

## Presenting a value

- [init(_:value:)](/documentation/swiftui/navigationlink/init(_:value:)) Creates a navigation link that presents the view corresponding to a codable value, with a text label that the link generates from a localized string key.
- [init(value:label:)](/documentation/swiftui/navigationlink/init(value:label:)) Creates a navigation link that presents the view corresponding to a codable value.

## Configuring the link

- [isDetailLink(_:)](/documentation/swiftui/navigationlink/isdetaillink(_:)) Sets the navigation link to present its destination as the detail component of the containing navigation view.

## Deprecated symbols

- [Deprecated symbols](/documentation/swiftui/navigationlink-deprecated) Review deprecated navigation link initializers.

## Presenting views in columns

- [Bringing robust navigation structure to your SwiftUI app](/documentation/swiftui/bringing-robust-navigation-structure-to-your-swiftui-app) Use navigation links, stacks, destinations, and paths to provide a streamlined experience for all platforms, as well as behaviors such as deep linking and state restoration.
- [Migrating to new navigation types](/documentation/swiftui/migrating-to-new-navigation-types) Improve navigation behavior in your app by replacing navigation views with navigation stacks and navigation split views.
- [NavigationSplitView](/documentation/swiftui/navigationsplitview) A view that presents views in two or three columns, where selections in leading columns control presentations in subsequent columns.
- [navigationSplitViewStyle(_:)](/documentation/swiftui/view/navigationsplitviewstyle(_:)) Sets the style for navigation split views within this view.
- [navigationSplitViewColumnWidth(_:)](/documentation/swiftui/view/navigationsplitviewcolumnwidth(_:)) Sets a fixed, preferred width for the column containing this view.
- [navigationSplitViewColumnWidth(min:ideal:max:)](/documentation/swiftui/view/navigationsplitviewcolumnwidth(min:ideal:max:)) Sets a flexible, preferred width for the column containing this view.
- [NavigationSplitViewVisibility](/documentation/swiftui/navigationsplitviewvisibility) The visibility of the leading columns in a navigation split view.

---

*Extracted from Apple DocC JSON by apple-skills tooling.*
*This is unofficial content. All documentation belongs to Apple Inc.*

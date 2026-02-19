---
title: ContentUnavailableView
description: An interface, consisting of a label and additional content, that you display when the content of your app is unavailable to users.
source: https://developer.apple.com/documentation/swiftui/contentunavailableview
timestamp: 2026-02-19T07:52:37.118Z
---

**Navigation:** [Swiftui](/documentation/swiftui)

**Structure**

# ContentUnavailableView

**Available on:** iOS 17.0+, iPadOS 17.0+, Mac Catalyst 17.0+, macOS 14.0+, tvOS 17.0+, visionOS 1.0+, watchOS 10.0+

> An interface, consisting of a label and additional content, that you display when the content of your app is unavailable to users.

```swift
struct ContentUnavailableView<Label, Description, Actions> where Label : View, Description : View, Actions : View
```

## Overview

It is recommended to use `ContentUnavailableView` in situations where a view’s content cannot be displayed. That could be caused by a network error, a list without items, a search that returns no results etc.

You create an `ContentUnavailableView` in its simplest form, by providing a label and some additional content such as a description or a call to action:

```swift
ContentUnavailableView {
    Label("No Mail", systemImage: "tray.fill")
} description: {
    Text("New mails you receive will appear here.")
}
```

The system provides default `ContentUnavailableView`s that you can use in specific situations. The example below illustrates the usage of the [search](/documentation/swiftui/contentunavailableview/search) view:

```swift
struct ContentView: View {
    @ObservedObject private var viewModel = ContactsViewModel()

    var body: some View {
        NavigationStack {
            List {
                ForEach(viewModel.searchResults) { contact in
                    NavigationLink {
                        ContactsView(contact)
                    } label: {
                        Text(contact.name)
                    }
                }
            }
            .navigationTitle("Contacts")
            .searchable(text: $viewModel.searchText)
            .overlay {
                if searchResults.isEmpty {
                    ContentUnavailableView.search
                }
            }
        }
    }
}
```

## Conforms To

- [View](/documentation/swiftui/view)

## Getting built-in unavailable views

- [search](/documentation/swiftui/contentunavailableview/search) Creates a  instance that conveys a search state.
- [search(text:)](/documentation/swiftui/contentunavailableview/search(text:)) Creates a  instance that conveys a search state.

## Creating an unavailable view

- [init(label:description:actions:)](/documentation/swiftui/contentunavailableview/init(label:description:actions:)) Creates an interface, consisting of a label and additional content, that you display when the content of your app is unavailable to users.
- [init(_:image:description:)](/documentation/swiftui/contentunavailableview/init(_:image:description:)) Creates an interface, consisting of a title generated from a localized string, an image and additional content, that you display when the content of your app is unavailable to users.
- [init(_:systemImage:description:)](/documentation/swiftui/contentunavailableview/init(_:systemimage:description:)) Creates an interface, consisting of a title generated from a localized string, a system icon image and additional content, that you display when the content of your app is unavailable to users.

## Supporting types

- [SearchUnavailableContent](/documentation/swiftui/searchunavailablecontent) A structure that represents the body of a static placeholder search view.

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

---
title: Button
description: A control that initiates an action.
source: https://developer.apple.com/documentation/swiftui/button
timestamp: 2026-02-19T07:56:06.792Z
---

**Navigation:** [Swiftui](/documentation/swiftui)

**Structure**

# Button

**Available on:** iOS 13.0+, iPadOS 13.0+, Mac Catalyst 13.0+, macOS 10.15+, tvOS 13.0+, visionOS 1.0+, watchOS 6.0+

> A control that initiates an action.

```swift
struct Button<Label> where Label : View
```

## Overview

You create a button by providing an action and a label. The action is either a method or closure property that does something when a user clicks or taps the button. The label is a view that describes the button’s action — for example, by showing text, an icon, or both.

The label of a button can be any kind of view, such as a [Text](/documentation/swiftui/text) view for text-only labels:

```swift
Button(action: signIn) {
    Text("Sign In")
}
```

Or a [Label](/documentation/swiftui/label) view, for buttons with both a title and an icon:

```swift
Button(action: signIn) {
    Label("Sign In", systemImage: "arrow.up")
}
```

For those common cases, you can also use the convenience initializers that take a title string or [Localized String Key](/documentation/swiftui/localizedstringkey) as their first parameter, and optionally a system image name or `ImageResource` as their second parameter, instead of a trailing closure:

```swift
Button("Sign In", systemImage: "arrow.up", action: signIn)
```

Prefer to use these convenience initializers, or a [Label](/documentation/swiftui/label) view, when providing both a title and an icon. This allows the button to dynamically adapt its appearance to render its title and icon correctly in containers such as toolbars and menus. For example, on iOS, buttons only display their icons by default when placed in toolbars, but show both a leading title and trailing icon in menus. Defining labels this way also helps with accessibility — for example, applying the [labelStyle(_:)](/documentation/swiftui/view/labelstyle(_:)) modifier with an [icon Only](/documentation/swiftui/labelstyle/icononly) style to the button will cause it to only visually display its icon, but still use its title to describe the button in accessibility modes like VoiceOver:

```swift
Button("Sign In", systemImage: "arrow.up", action: signIn)
    .labelStyle(.iconOnly)
```

Avoid labels that only use images or exclusively visual components without an accessibility label.

How the user activates the button varies by platform:

- In iOS and watchOS, the user taps the button.
- In macOS, the user clicks the button.
- In tvOS, the user presses “select” on an external remote, like the Siri Remote, while focusing on the button.

The appearance of the button depends on factors like where you place it, whether you assign it a role, and how you style it.

### Adding buttons to containers

Use buttons for any user interface element that initiates an action. Buttons automatically adapt their visual style to match the expected style within these different containers and contexts. For example, to create a [List](/documentation/swiftui/list) cell that initiates an action when selected by the user, add a button to the list’s content:

```swift
List {
    // Cells that show all the current folders.
    ForEach(folders) { folder in
        Text(folder.title)
    }

    // A cell that, when selected, adds a new folder.
    Button(action: addItem) {
        Label("Add Folder", systemImage: "folder.badge.plus")
    }
}
```

![A screenshot of a list of four items. The first three items use a](https://docs-assets.developer.apple.com/published/fbd1e5d7c4f4493ad072bbf38451d71c/Button-1%402x.png)

Similarly, to create a context menu item that initiates an action, add a button to the [contextMenu(_:)](/documentation/swiftui/view/contextmenu(_:)) modifier’s content closure:

```swift
.contextMenu {
    Button("Cut", action: cut)
    Button("Copy", action: copy)
    Button("Paste", action: paste)
}
```

![A screenshot of a context menu that contains the three items Cut, Copy,](https://docs-assets.developer.apple.com/published/13c3412be0b5c30960a790b56404502a/Button-2%402x.png)

This pattern extends to most other container views in SwiftUI that have customizable, interactive content, like [Form](/documentation/swiftui/form) instances.

### Assigning a role

You can optionally initialize a button with a [Button Role](/documentation/swiftui/buttonrole) that characterizes the button’s purpose. For example, you can create a [destructive](/documentation/swiftui/buttonrole/destructive) button for a deletion action:

```swift
 Button("Delete", role: .destructive, action: delete)
```

The system uses the button’s role to style the button appropriately in every context. For example, a destructive button in a contextual menu appears with a red foreground color:

![A screenshot of a context menu that contains the four items Cut, Copy,](https://docs-assets.developer.apple.com/published/7ade00fdf9d46f2f43939a37acb1e7f9/Button-3%402x.png)

If you don’t specify a role for a button, the system applies an appropriate default appearance.

### Styling buttons

You can customize a button’s appearance using one of the standard button styles, like [bordered](/documentation/swiftui/primitivebuttonstyle/bordered), and apply the style with the [buttonStyle(_:)](/documentation/swiftui/view/buttonstyle(_:)) modifier:

```swift
HStack {
    Button("Sign In", action: signIn)
    Button("Register", action: register)
}
.buttonStyle(.bordered)
```

If you apply the style to a container view, as in the example above, all the buttons in the container use the style:

![A screenshot of two buttons, side by side, each with a capsule shaped](https://docs-assets.developer.apple.com/published/c8c08c1104d95b8ed8f6d0e35cf017db/Button-4%402x.png)

You can also create custom styles. To add a custom appearance with standard interaction behavior, create a style that conforms to the [Button Style](/documentation/swiftui/buttonstyle) protocol. To customize both appearance and interaction behavior, create a style that conforms to the [Primitive Button Style](/documentation/swiftui/primitivebuttonstyle) protocol. Custom styles can also read the button’s role and use it to adjust the button’s appearance.

## Conforms To

- [View](/documentation/swiftui/view)

## Creating a button

- [init(action:label:)](/documentation/swiftui/button/init(action:label:)) Creates a button that displays a custom label.
- [init(_:action:)](/documentation/swiftui/button/init(_:action:)) Creates a button that generates its label from a localized string key.
- [init(_:image:action:)](/documentation/swiftui/button/init(_:image:action:)) Creates a button that generates its label from a localized string key and image resource.
- [init(_:systemImage:action:)](/documentation/swiftui/button/init(_:systemimage:action:)) Creates a button that generates its label from a localized string key and system image name.

## Creating a button with a role

- [init(role:action:label:)](/documentation/swiftui/button/init(role:action:label:)) Creates a button with a specified role that displays a custom label.
- [init(_:role:action:)](/documentation/swiftui/button/init(_:role:action:)) Creates a button with a specified role that generates its label from a localized string key.
- [init(_:image:role:action:)](/documentation/swiftui/button/init(_:image:role:action:)) Creates a button with a specified role that generates its label from a localized string key and an image resource.
- [init(_:systemImage:role:action:)](/documentation/swiftui/button/init(_:systemimage:role:action:)) Creates a button with a specified role that generates its label from a localized string key and a system image.

## Creating a button from a configuration

- [init(_:)](/documentation/swiftui/button/init(_:)) Creates a button based on a configuration for a style with a custom appearance and custom interaction behavior.

## Creating a button to perform an App Intent

- [init(_:intent:)](/documentation/swiftui/button/init(_:intent:)) Creates a button that performs an  and generates its label from a localized string key.
- [init(intent:label:)](/documentation/swiftui/button/init(intent:label:)) Creates a button that performs an .
- [init(_:role:intent:)](/documentation/swiftui/button/init(_:role:intent:)) Creates a button with a specified role that performs an  and generates its label from a string.
- [init(role:intent:label:)](/documentation/swiftui/button/init(role:intent:label:)) Creates a button with a specified role that performs an .
- [init(_:image:role:intent:)](/documentation/swiftui/button/init(_:image:role:intent:)) Creates a button with a specified role that generates its label from a string and an image resource.
- [init(_:systemImage:role:intent:)](/documentation/swiftui/button/init(_:systemimage:role:intent:)) Creates a button with a specified role that generates its label from a string and a system image.

## Initializers

- [init(role:action:)](/documentation/swiftui/button/init(role:action:)) Creates a button that displays a default label.

## Creating buttons

- [buttonStyle(_:)](/documentation/swiftui/view/buttonstyle(_:))
- [buttonBorderShape(_:)](/documentation/swiftui/view/buttonbordershape(_:))
- [buttonRepeatBehavior(_:)](/documentation/swiftui/view/buttonrepeatbehavior(_:))
- [buttonRepeatBehavior](/documentation/swiftui/environmentvalues/buttonrepeatbehavior)
- [ButtonBorderShape](/documentation/swiftui/buttonbordershape)
- [ButtonRole](/documentation/swiftui/buttonrole)
- [ButtonRepeatBehavior](/documentation/swiftui/buttonrepeatbehavior)
- [ButtonSizing](/documentation/swiftui/buttonsizing)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

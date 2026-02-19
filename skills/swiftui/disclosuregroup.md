---
title: DisclosureGroup
description: A view that shows or hides another content view, based on the state of a disclosure control.
source: https://developer.apple.com/documentation/swiftui/disclosuregroup
timestamp: 2026-02-19T07:52:37.076Z
---

**Navigation:** [Swiftui](/documentation/swiftui)

**Structure**

# DisclosureGroup

**Available on:** iOS 14.0+, iPadOS 14.0+, Mac Catalyst 14.0+, macOS 11.0+, visionOS 1.0+

> A view that shows or hides another content view, based on the state of a disclosure control.

```swift
struct DisclosureGroup<Label, Content> where Label : View, Content : View
```

## Overview

A disclosure group view consists of a label to identify the contents, and a control to show and hide the contents. Showing the contents puts the disclosure group into the “expanded” state, and hiding them makes the disclosure group “collapsed”.

In the following example, a disclosure group contains two toggles and an embedded disclosure group. The top level disclosure group exposes its expanded state with the bound property, `topLevelExpanded`. By expanding the disclosure group, the user can use the toggles to update the state of the `toggleStates` structure.

```swift
struct ToggleStates {
    var oneIsOn: Bool = false
    var twoIsOn: Bool = true
}
@State private var toggleStates = ToggleStates()
@State private var topExpanded: Bool = true

var body: some View {
    DisclosureGroup("Items", isExpanded: $topExpanded) {
        Toggle("Toggle 1", isOn: $toggleStates.oneIsOn)
        Toggle("Toggle 2", isOn: $toggleStates.twoIsOn)
        DisclosureGroup("Sub-items") {
            Text("Sub-item 1")
        }
    }
}
```

## Conforms To

- [View](/documentation/swiftui/view)

## Creating a disclosure group

- [init(_:content:)](/documentation/swiftui/disclosuregroup/init(_:content:)) Creates a disclosure group, using a provided localized string key to create a text view for the label.
- [init(content:label:)](/documentation/swiftui/disclosuregroup/init(content:label:)) Creates a disclosure group with the given label and content views.
- [init(_:isExpanded:content:)](/documentation/swiftui/disclosuregroup/init(_:isexpanded:content:)) Creates a disclosure group, using a provided localized string key to create a text view for the label, and a binding to the expansion state (expanded or collapsed).
- [init(isExpanded:content:label:)](/documentation/swiftui/disclosuregroup/init(isexpanded:content:label:)) Creates a disclosure group with the given label and content views, and a binding to the expansion state (expanded or collapsed).

## Disclosing information progressively

- [OutlineGroup](/documentation/swiftui/outlinegroup)
- [disclosureGroupStyle(_:)](/documentation/swiftui/view/disclosuregroupstyle(_:))

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

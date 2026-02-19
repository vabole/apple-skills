---
title: confirmationDialog(_:isPresented:titleVisibility:actions:)
description: Presents a confirmation dialog when a given condition is true, using a text view for the title.
source: https://developer.apple.com/documentation/swiftui/view/confirmationdialog(_:ispresented:titlevisibility:actions:)
timestamp: 2026-01-19T10:23:33.733Z
---

**Navigation:** [Swiftui](/documentation/swiftui) › [view](/documentation/swiftui/view)

**Instance Method**

# confirmationDialog(_:isPresented:titleVisibility:actions:)

**Available on:** iOS 15.0+, iPadOS 15.0+, Mac Catalyst 15.0+, macOS 12.0+, tvOS 15.0+, visionOS 1.0+, watchOS 8.0+

> Presents a confirmation dialog when a given condition is true, using a text view for the title.

```swift
nonisolated func confirmationDialog<A>(_ title: Text, isPresented: Binding<Bool>, titleVisibility: Visibility = .automatic, @ViewBuilder actions: () -> A) -> some View where A : View
```

## Parameters

**title**

The title of the dialog.



**isPresented**

A binding to a Boolean value that determines whether to present the dialog. When the user presses or taps the dialog’s default action button, the system sets this value to `false`, dismissing the dialog.



**titleVisibility**

The visibility of the dialog’s title. The default value is [automatic](/documentation/swiftui/visibility/automatic).



**actions**

A view builder returning the dialog’s actions.



## Discussion

In the example below, a button conditionally presents a confirmation dialog depending upon the value of a bound Boolean variable. When the Boolean value is set to `true`, the system displays a confirmation dialog with a cancel action and a destructive action.

```swift
struct ConfirmEraseItems: View {
    @State private var isShowingDialog = false
    var body: some View {
        Button("Empty Trash") {
            isShowingDialog = true
        }
        .confirmationDialog(
            Text("Permanently erase the items in the trash?"),
            isPresented: $isShowingDialog
        ) {
            Button("Empty Trash", role: .destructive) {
                // Handle empty trash action.
            }
        }
    }
}
```

All actions in a confirmation dialog will dismiss the dialog after the action runs. The default button will be shown with greater prominence. You can influence the default button by assigning it the [default Action](/documentation/swiftui/keyboardshortcut/defaultaction) keyboard shortcut.

The system may reorder the buttons based on their role and prominence.

Dialogs include a standard dismiss action by default. If you provide a button with a role of [cancel](/documentation/swiftui/buttonrole/cancel), that button takes the place of the default dismiss action. You don’t have to dismiss the presentation with the cancel button’s action.

> [!NOTE]
> In regular size classes in iOS, the system renders confirmation dialogs as a popover that the user dismisses by tapping anywhere outside the popover, rather than displaying the standard dismiss action.

## Getting confirmation for an action

- [confirmationDialog(_:isPresented:titleVisibility:presenting:actions:)](/documentation/swiftui/view/confirmationdialog(_:ispresented:titlevisibility:presenting:actions:))
- [dismissalConfirmationDialog(_:shouldPresent:actions:)](/documentation/swiftui/view/dismissalconfirmationdialog(_:shouldpresent:actions:))

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

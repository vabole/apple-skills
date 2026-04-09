---
title: alert(_:isPresented:actions:)
description: Presents an alert when a given condition is true, using a text view for the title.
source: https://developer.apple.com/documentation/swiftui/view/alert(_:ispresented:actions:)
timestamp: 2026-04-09T12:04:32.545Z
---

**Navigation:** [SwiftUI](/documentation/swiftui) › [View](/documentation/swiftui/view)

**Instance Method**

# alert(_:isPresented:actions:)

**Available on:** iOS 15.0+, iPadOS 15.0+, Mac Catalyst 15.0+, macOS 12.0+, tvOS 15.0+, visionOS 1.0+, watchOS 8.0+

> Presents an alert when a given condition is true, using a text view for the title.

```swift
nonisolated func alert<A>(_ title: Text, isPresented: Binding<Bool>, @ViewBuilder actions: () -> A) -> some View where A : View
```

## Parameters

**title**

The title of the alert.

**isPresented**

A binding to a Boolean value that determines whether to present the alert. When the user presses or taps one of the alert’s actions, the system sets this value to `false` and dismisses.

**actions**

A [ViewBuilder](/documentation/swiftui/viewbuilder) returning the alert’s actions.

## Discussion

In the example below, a login form conditionally presents an alert by setting the `didFail` state variable. When the form sets the value to to `true`, the system displays an alert with an “OK” action.

```swift
struct Login: View {
    @State private var didFail = false
    let alertTitle: String = "Login failed."

    var body: some View {
        LoginForm(didFail: $didFail)
            .alert(
                Text(alertTitle),
                isPresented: $didFail
            ) {
                Button("OK") {
                    // Handle the acknowledgement.
                }
            }
    }
}
```

All actions in an alert dismiss the alert after the action runs. The default button is shown with greater prominence.  You can influence the default button by assigning it the [defaultAction](/documentation/swiftui/keyboardshortcut/defaultaction) keyboard shortcut.

The system may reorder the buttons based on their role and prominence.

If no actions are present, the system includes a standard “OK” action. No default cancel action is provided. If you want to show a cancel action, use a button with a role of [cancel](/documentation/swiftui/buttonrole/cancel).

On iOS, tvOS, and watchOS, alerts only support controls with labels that are [Text](/documentation/swiftui/text). Passing any other type of view results in the content being omitted.

## Presenting an alert

- [AlertScene](/documentation/swiftui/alertscene) A scene that renders itself as a standalone alert dialog.
- [alert(_:isPresented:presenting:actions:)](/documentation/swiftui/view/alert(_:ispresented:presenting:actions:)) Presents an alert using the given data to produce the alert’s content and a text view as a title.
- [alert(isPresented:error:actions:)](/documentation/swiftui/view/alert(ispresented:error:actions:)) Presents an alert when an error is present.
- [alert(_:isPresented:actions:message:)](/documentation/swiftui/view/alert(_:ispresented:actions:message:)) Presents an alert with a message when a given condition is true using a text view as a title.
- [alert(_:isPresented:presenting:actions:message:)](/documentation/swiftui/view/alert(_:ispresented:presenting:actions:message:)) Presents an alert with a message using the given data to produce the alert’s content and a text view for a title.
- [alert(isPresented:error:actions:message:)](/documentation/swiftui/view/alert(ispresented:error:actions:message:)) Presents an alert with a message when an error is present.

---

*Extracted from Apple DocC JSON by apple-skills tooling.*
*This is unofficial content. All documentation belongs to Apple Inc.*

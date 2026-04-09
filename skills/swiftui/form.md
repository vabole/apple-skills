---
title: Form
description: A container for grouping controls used for data entry, such as in settings or inspectors.
source: https://developer.apple.com/documentation/swiftui/form
timestamp: 2026-04-09T12:04:35.306Z
---

**Navigation:** [SwiftUI](/documentation/swiftui)

**Structure**

# Form

**Available on:** iOS 13.0+, iPadOS 13.0+, Mac Catalyst 13.0+, macOS 10.15+, tvOS 13.0+, visionOS 1.0+, watchOS 6.0+

> A container for grouping controls used for data entry, such as in settings or inspectors.

```swift
struct Form<Content> where Content : View
```

## Overview

SwiftUI applies platform-appropriate styling to views contained inside a form, to group them together. Form-specific styling applies to things like buttons, toggles, labels, lists, and more. Keep in mind that these stylings may be platform-specific. For example, forms appear as grouped lists on iOS, and as aligned vertical stacks on macOS.

The following example shows a simple data entry form on iOS, grouped into two sections. The supporting types (`NotifyMeAboutType` and `ProfileImageSize`) and state variables (`notifyMeAbout`, `profileImageSize`, `playNotificationSounds`, and `sendReadReceipts`) are omitted for simplicity.

```swift
var body: some View {
    NavigationView {
        Form {
            Section(header: Text("Notifications")) {
                Picker("Notify Me About", selection: $notifyMeAbout) {
                    Text("Direct Messages").tag(NotifyMeAboutType.directMessages)
                    Text("Mentions").tag(NotifyMeAboutType.mentions)
                    Text("Anything").tag(NotifyMeAboutType.anything)
                }
                Toggle("Play notification sounds", isOn: $playNotificationSounds)
                Toggle("Send read receipts", isOn: $sendReadReceipts)
            }
            Section(header: Text("User Profiles")) {
                Picker("Profile Image Size", selection: $profileImageSize) {
                    Text("Large").tag(ProfileImageSize.large)
                    Text("Medium").tag(ProfileImageSize.medium)
                    Text("Small").tag(ProfileImageSize.small)
                }
                Button("Clear Image Cache") {}
            }
        }
    }
}
```

On macOS, a similar form renders as a vertical stack. To adhere to macOS platform conventions, this version doesn’t use sections, and uses colons at the end of its labels. It also sets the picker to use the [inline](/documentation/swiftui/pickerstyle/inline) style, which produces radio buttons on macOS.

```swift
var body: some View {
    Spacer()
    HStack {
        Spacer()
        Form {
            Picker("Notify Me About:", selection: $notifyMeAbout) {
                Text("Direct Messages").tag(NotifyMeAboutType.directMessages)
                Text("Mentions").tag(NotifyMeAboutType.mentions)
                Text("Anything").tag(NotifyMeAboutType.anything)
            }
            Toggle("Play notification sounds", isOn: $playNotificationSounds)
            Toggle("Send read receipts", isOn: $sendReadReceipts)

            Picker("Profile Image Size:", selection: $profileImageSize) {
                Text("Large").tag(ProfileImageSize.large)
                Text("Medium").tag(ProfileImageSize.medium)
                Text("Small").tag(ProfileImageSize.small)
            }
            .pickerStyle(.inline)

            Button("Clear Image Cache") {}
        }
        Spacer()
    }
    Spacer()
}
```

## Conforms To

- [View](/documentation/swiftui/view)

## Creating a form

- [init(content:)](/documentation/swiftui/form/init(content:)) Creates a form with the provided content.

## Creating a form from a configuration

- [init(_:)](/documentation/swiftui/form/init(_:)) Creates a form based on a form style configuration.

## Grouping inputs

- [formStyle(_:)](/documentation/swiftui/view/formstyle(_:)) Sets the style for forms in a view hierarchy.
- [LabeledContent](/documentation/swiftui/labeledcontent) A container for attaching a label to a value-bearing view.
- [labeledContentStyle(_:)](/documentation/swiftui/view/labeledcontentstyle(_:)) Sets a style for labeled content.

---

*Extracted from Apple DocC JSON by apple-skills tooling.*
*This is unofficial content. All documentation belongs to Apple Inc.*

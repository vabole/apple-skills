---
title: TextField
description: A control that displays an editable text interface.
source: https://developer.apple.com/documentation/swiftui/textfield
timestamp: 2026-01-19T10:23:14.801Z
---

**Navigation:** [Swiftui](/documentation/swiftui)

**Structure**

# TextField

**Available on:** iOS 13.0+, iPadOS 13.0+, Mac Catalyst 13.0+, macOS 10.15+, tvOS 13.0+, visionOS 1.0+, watchOS 6.0+

> A control that displays an editable text interface.

```swift
struct TextField<Label> where Label : View
```

## Overview

You create a text field with a label and a binding to a value. If the value is a string, the text field updates this value continuously as the user types or otherwise edits the text in the field. For non-string types, it updates the value when the user commits their edits, such as by pressing the Return key.

The following example shows a text field to accept a username, and a [Text](/documentation/swiftui/text) view below it that shadows the continuously updated value of `username`. The [Text](/documentation/swiftui/text) view changes color as the user begins and ends editing. When the user submits their completed entry to the text field, the [onSubmit(of:_:)](/documentation/swiftui/view/onsubmit(of:_:)) modifier calls an internal `validate(name:)` method.

```swift
@State private var username: String = ""
@FocusState private var emailFieldIsFocused: Bool = false

var body: some View {
    TextField(
        "User name (email address)",
        text: $username
    )
    .focused($emailFieldIsFocused)
    .onSubmit {
        validate(name: username)
    }
    .textInputAutocapitalization(.never)
    .disableAutocorrection(true)
    .border(.secondary)

    Text(username)
        .foregroundColor(emailFieldIsFocused ? .red : .blue)
}
```



The bound value doesn’t have to be a string. By using a [Format Style](/documentation/Foundation/FormatStyle), you can bind the text field to a nonstring type, using the format style to convert the typed text into an instance of the bound type. The following example uses a [Format Style](/documentation/Foundation/PersonNameComponents/FormatStyle) to convert the name typed in the text field to a [Person Name Components](/documentation/Foundation/PersonNameComponents) instance. A [Text](/documentation/swiftui/text) view below the text field shows the debug description string of this instance.

```swift
@State private var nameComponents = PersonNameComponents()

var body: some View {
    TextField(
        "Proper name",
        value: $nameComponents,
        format: .name(style: .medium)
    )
    .onSubmit {
        validate(components: nameComponents)
    }
    .disableAutocorrection(true)
    .border(.secondary)
    Text(nameComponents.debugDescription)
}
```



### Text field prompts

You can set an explicit prompt on the text field to guide users on what text they should provide. Each text field style determines where and when the text field uses a prompt and label. For example, a form on macOS always places the label at the leading edge of the field and uses a prompt, when available, as placeholder text within the field itself. In the same context on iOS, the text field uses either the prompt or label as placeholder text, depending on whether the initializer provided a prompt.

The following example shows a [Form](/documentation/swiftui/form) with two text fields, each of which provides a prompt to indicate that the field is required, and a view builder to provide a label:

```swift
Form {
    TextField(text: $username, prompt: Text("Required")) {
        Text("Username")
    }
    SecureField(text: $password, prompt: Text("Required")) {
        Text("Password")
    }
}
```





### Styling text fields

SwiftUI provides a default text field style that reflects an appearance and behavior appropriate to the platform. The default style also takes the current context into consideration, like whether the text field is in a container that presents text fields with a special style. Beyond this, you can customize the appearance and interaction of text fields using the [textFieldStyle(_:)](/documentation/swiftui/view/textfieldstyle(_:)) modifier, passing in an instance of [Text Field Style](/documentation/swiftui/textfieldstyle). The following example applies the [rounded Border](/documentation/swiftui/textfieldstyle/roundedborder) style to both text fields within a [VStack](/documentation/swiftui/vstack).

```swift
@State private var givenName: String = ""
@State private var familyName: String = ""

var body: some View {
    VStack {
        TextField(
            "Given Name",
            text: $givenName
        )
        .disableAutocorrection(true)
        TextField(
            "Family Name",
            text: $familyName
        )
        .disableAutocorrection(true)
    }
    .textFieldStyle(.roundedBorder)
}
```



## Conforms To

- [View](/documentation/swiftui/view)

## Creating a text field with a string

- [init(_:text:)](/documentation/swiftui/textfield/init(_:text:)) Creates a text field with a text label generated from a localized title string.
- [init(_:text:prompt:)](/documentation/swiftui/textfield/init(_:text:prompt:)) Creates a text field with a text label generated from a localized title string.
- [init(text:prompt:label:)](/documentation/swiftui/textfield/init(text:prompt:label:)) Creates a text field with a prompt generated from a .

## Creating a scrollable text field

- [init(_:text:axis:)](/documentation/swiftui/textfield/init(_:text:axis:)) Creates a text field with a preferred axis and a text label generated from a localized title string.
- [init(_:text:prompt:axis:)](/documentation/swiftui/textfield/init(_:text:prompt:axis:)) Creates a text field with a preferred axis and a text label generated from a localized title string.
- [init(text:prompt:axis:label:)](/documentation/swiftui/textfield/init(text:prompt:axis:label:)) Creates a text field with a preferred axis and a prompt generated from a .

## Creating a text field with a value

- [init(_:value:format:prompt:)](/documentation/swiftui/textfield/init(_:value:format:prompt:)) Creates a text field that applies a format style to a bound value, with a label generated from a localized title string.
- [init(value:format:prompt:label:)](/documentation/swiftui/textfield/init(value:format:prompt:label:)) Creates a text field that applies a format style to a bound value, with a label generated from a view builder.
- [init(_:value:formatter:)](/documentation/swiftui/textfield/init(_:value:formatter:)) Create an instance which binds over an arbitrary type, .
- [init(_:value:formatter:prompt:)](/documentation/swiftui/textfield/init(_:value:formatter:prompt:)) Creates a text field that applies a formatter to a bound value, with a label generated from a title string.
- [init(value:formatter:prompt:label:)](/documentation/swiftui/textfield/init(value:formatter:prompt:label:)) Creates a text field that applies a formatter to a bound optional value, with a label generated from a view builder.

## Deprecated initializers

- [Deprecated initializers](/documentation/swiftui/textfield-deprecated) Review deprecated text field initializers.

## Initializers

- [init(_:text:selection:prompt:axis:)](/documentation/swiftui/textfield/init(_:text:selection:prompt:axis:)) Creates a text field with a binding to the current selection and a text label generated from a localized title string.
- [init(text:selection:prompt:axis:label:)](/documentation/swiftui/textfield/init(text:selection:prompt:axis:label:)) Creates a text field with a binding to the current selection and a prompt generated from a .

## Getting text input

- [Building rich SwiftUI text experiences](/documentation/swiftui/building-rich-swiftui-text-experiences)
- [textFieldStyle(_:)](/documentation/swiftui/view/textfieldstyle(_:))
- [SecureField](/documentation/swiftui/securefield)
- [TextEditor](/documentation/swiftui/texteditor)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

---
title: Binding
description: A property wrapper type that can read and write a value owned by a source of truth.
source: https://developer.apple.com/documentation/swiftui/binding
timestamp: 2026-02-19T07:56:07.915Z
---

**Navigation:** [Swiftui](/documentation/swiftui)

**Structure**

# Binding

**Available on:** iOS 13.0+, iPadOS 13.0+, Mac Catalyst 13.0+, macOS 10.15+, tvOS 13.0+, visionOS 1.0+, watchOS 6.0+

> A property wrapper type that can read and write a value owned by a source of truth.

```swift
@frozen @propertyWrapper @dynamicMemberLookup struct Binding<Value>
```

## Overview

Use a binding to create a two-way connection between a property that stores data, and a view that displays and changes the data. A binding connects a property to a source of truth stored elsewhere, instead of storing data directly. For example, a button that toggles between play and pause can create a binding to a property of its parent view using the `Binding` property wrapper.

```swift
struct PlayButton: View {
    @Binding var isPlaying: Bool

    var body: some View {
        Button(isPlaying ? "Pause" : "Play") {
            isPlaying.toggle()
        }
    }
}
```

The parent view declares a property to hold the playing state, using the [State](/documentation/swiftui/state) property wrapper to indicate that this property is the value’s source of truth.

```swift
struct PlayerView: View {
    var episode: Episode
    @State private var isPlaying: Bool = false

    var body: some View {
        VStack {
            Text(episode.title)
                .foregroundStyle(isPlaying ? .primary : .secondary)
            PlayButton(isPlaying: $isPlaying) // Pass a binding.
        }
    }
}
```

When `PlayerView` initializes `PlayButton`, it passes a binding of its state property into the button’s binding property. Applying the `$` prefix to a property wrapped value returns its [projected Value](/documentation/swiftui/state/projectedvalue), which for a state property wrapper returns a binding to the value.

Whenever the user taps the `PlayButton`, the `PlayerView` updates its `isPlaying` state.

A binding conforms to `Sendable` only if its wrapped value type also conforms to `Sendable`. It is always safe to pass a sendable binding between different concurrency domains. However, reading from or writing to a binding’s wrapped value from a different concurrency domain may or may not be safe, depending on how the binding was created. SwiftUI will issue a warning at runtime if it detects a binding being used in a way that may compromise data safety.

> [!NOTE]
> To create bindings to properties of a type that conforms to the [Observable](/documentation/Observation/Observable) protocol, use the [Bindable](/documentation/swiftui/bindable) property wrapper. For more information, see [Migrating-from-the-observable-object-protocol-to-the-observable](/documentation/swiftui/migrating-from-the-observable-object-protocol-to-the-observable-macro).

## Conforms To

- [BidirectionalCollection](/documentation/Swift/BidirectionalCollection)
- [Collection](/documentation/Swift/Collection)
- [Copyable](/documentation/Swift/Copyable)
- [DynamicProperty](/documentation/swiftui/dynamicproperty)
- [Escapable](/documentation/Swift/Escapable)
- [Identifiable](/documentation/Swift/Identifiable)
- [RandomAccessCollection](/documentation/Swift/RandomAccessCollection)
- [Sendable](/documentation/Swift/Sendable)
- [SendableMetatype](/documentation/Swift/SendableMetatype)
- [Sequence](/documentation/Swift/Sequence)

## Creating a binding

- [init(_:)](/documentation/swiftui/binding/init(_:)) Creates a binding by projecting the base value to a hashable value.
- [init(projectedValue:)](/documentation/swiftui/binding/init(projectedvalue:)) Creates a binding from the value of another binding.
- [init(get:set:)](/documentation/swiftui/binding/init(get:set:)) Creates a binding with closures that read and write the binding value.
- [constant(_:)](/documentation/swiftui/binding/constant(_:)) Creates a binding with an immutable value.

## Getting the value

- [wrappedValue](/documentation/swiftui/binding/wrappedvalue) The underlying value referenced by the binding variable.
- [projectedValue](/documentation/swiftui/binding/projectedvalue) A projection of the binding value that returns a binding.
- [subscript(dynamicMember:)](/documentation/swiftui/binding/subscript(dynamicmember:)) Returns a binding to the resulting value of a given key path.

## Managing changes

- [id](/documentation/swiftui/binding/id) The stable identity of the entity associated with this instance, corresponding to the  of the binding’s wrapped value.
- [animation(_:)](/documentation/swiftui/binding/animation(_:)) Specifies an animation to perform when the binding value changes.
- [transaction(_:)](/documentation/swiftui/binding/transaction(_:)) Specifies a transaction for the binding.
- [transaction](/documentation/swiftui/binding/transaction) The binding’s transaction.

## Subscripts

- [subscript(_:)](/documentation/swiftui/binding/subscript(_:))

## Default Implementations

- [Identifiable Implementations](/documentation/swiftui/binding/identifiable-implementations)

## Creating and sharing view state

- [Managing user interface state](/documentation/swiftui/managing-user-interface-state)
- [State](/documentation/swiftui/state)
- [Bindable](/documentation/swiftui/bindable)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

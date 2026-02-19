---
title: Spacer
description: A flexible space that expands along the major axis of its containing stack layout, or on both axes if not contained in a stack.
source: https://developer.apple.com/documentation/swiftui/spacer
timestamp: 2026-02-19T07:56:11.191Z
---

**Navigation:** [Swiftui](/documentation/swiftui)

**Structure**

# Spacer

**Available on:** iOS 13.0+, iPadOS 13.0+, Mac Catalyst 13.0+, macOS 10.15+, tvOS 13.0+, visionOS 1.0+, watchOS 6.0+

> A flexible space that expands along the major axis of its containing stack layout, or on both axes if not contained in a stack.

```swift
@frozen struct Spacer
```

## Overview

A spacer creates an adaptive view with no content that expands as much as it can. For example, when placed within an [HStack](/documentation/swiftui/hstack), a spacer expands horizontally as much as the stack allows, moving sibling views out of the way, within the limits of the stack’s size. SwiftUI sizes a stack that doesn’t contain a spacer up to the combined ideal widths of the content of the stack’s child views.

The following example provides a simple checklist row to illustrate how you can use a spacer:

```swift
struct ChecklistRow: View {
    let name: String

    var body: some View {
        HStack {
            Image(systemName: "checkmark")
            Text(name)
        }
        .border(Color.blue)
    }
}
```

![A figure of a blue rectangular border that marks the boundary of an](https://docs-assets.developer.apple.com/published/9df8ab78b8a87386da85f8d288f52f82/Spacer-1%402x.png)

Adding a spacer before the image creates an adaptive view with no content that expands to push the image and text to the right side of the stack. The stack also now expands to take as much space as the parent view allows, shown by the blue border that indicates the boundary of the stack:

```swift
struct ChecklistRow: View {
    let name: String

    var body: some View {
        HStack {
            Spacer()
            Image(systemName: "checkmark")
            Text(name)
        }
        .border(Color.blue)
    }
}
```

![A figure of a blue rectangular border that marks the boundary of an](https://docs-assets.developer.apple.com/published/2d8b3cd23072e1610a707d4f205e9c63/Spacer-2%402x.png)

Moving the spacer between the image and the name pushes those elements to the left and right sides of the [HStack](/documentation/swiftui/hstack), respectively. Because the stack contains the spacer, it expands to take as much horizontal space as the parent view allows; the blue border indicates its size:

```swift
struct ChecklistRow: View {
    let name: String

    var body: some View {
        HStack {
            Image(systemName: "checkmark")
            Spacer()
            Text(name)
        }
        .border(Color.blue)
    }
}
```

![A figure of a blue rectangular border that marks the boundary of an](https://docs-assets.developer.apple.com/published/2eb4db02232cd37f4fa9dbfc8a0baa36/Spacer-3%402x.png)

Adding two spacer views on the outside of the stack leaves the image and text together, while the stack expands to take as much horizontal space as the parent view allows:

```swift
struct ChecklistRow: View {
    let name: String

    var body: some View {
        HStack {
            Spacer()
            Image(systemName: "checkmark")
            Text(name)
            Spacer()
        }
        .border(Color.blue)
    }
}
```

![A figure of a blue rectangular border marks the boundary of an HStack,](https://docs-assets.developer.apple.com/published/d046a0aef1a9b759f52414ff6b385341/Spacer-4%402x.png)

## Conforms To

- [BitwiseCopyable](/documentation/Swift/BitwiseCopyable)
- [Copyable](/documentation/Swift/Copyable)
- [Escapable](/documentation/Swift/Escapable)
- [Sendable](/documentation/Swift/Sendable)
- [SendableMetatype](/documentation/Swift/SendableMetatype)
- [View](/documentation/swiftui/view)

## Creating a spacer

- [init(minLength:)](/documentation/swiftui/spacer/init(minlength:))
- [minLength](/documentation/swiftui/spacer/minlength) The minimum length this spacer can be shrunk to, along the axis or axes of expansion.

## Separators

- [Divider](/documentation/swiftui/divider)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

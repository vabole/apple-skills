---
title: inspector(isPresented:content:)
description: Inserts an inspector at the applied position in the view hierarchy.
source: https://developer.apple.com/documentation/swiftui/view/inspector(ispresented:content:)
timestamp: 2026-04-10T12:12:56.036Z
---

**Navigation:** [SwiftUI](/documentation/swiftui) › [View](/documentation/swiftui/view)

**Instance Method**

# inspector(isPresented:content:)

**Available on:** iOS 17.0+, iPadOS 17.0+, Mac Catalyst 17.0+, macOS 14.0+

> Inserts an inspector at the applied position in the view hierarchy.

```swift
nonisolated func inspector<V>(isPresented: Binding<Bool>, @ViewBuilder content: () -> V) -> some View where V : View
```

## Parameters

**isPresented**

A binding to `Bool` controlling the presented state.

**content**

The inspector content.

## Discussion

Apply this modifier to declare an inspector with a context-dependent presentation. For example, an inspector can present as a trailing column in a horizontally regular size class, but adapt to a sheet in a horizontally compact size class.

```swift
struct ShapeEditor: View {
    @State var presented: Bool = false
    var body: some View {
        MyEditorView()
            .inspector(isPresented: $presented) {
                TextTraitsInspectorView()
            }
    }
}
```

> **Note:** Trailing column inspectors have their presentation state restored by the framework.

> **See Also:** [InspectorCommands](/documentation/swiftui/inspectorcommands) for including the default inspector commands and keyboard shortcuts.

## Presenting an inspector

- [inspectorColumnWidth(_:)](/documentation/swiftui/view/inspectorcolumnwidth(_:)) Sets a fixed, preferred width for the inspector containing this view when presented as a trailing column.
- [inspectorColumnWidth(min:ideal:max:)](/documentation/swiftui/view/inspectorcolumnwidth(min:ideal:max:)) Sets a flexible, preferred width for the inspector in a trailing-column presentation.

---

*Extracted from Apple DocC JSON by apple-skills tooling.*
*This is unofficial content. All documentation belongs to Apple Inc.*

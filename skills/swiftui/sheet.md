---
title: sheet(isPresented:onDismiss:content:)
description: Presents a sheet when a binding to a Boolean value that you provide is true.
source: https://developer.apple.com/documentation/swiftui/view/sheet(ispresented:ondismiss:content:)
source_kind: apple-docc
source_json: https://developer.apple.com/tutorials/data/documentation/swiftui/view/sheet(ispresented:ondismiss:content:).json
timestamp: 2026-04-14T13:14:42.994Z
---

**Navigation:** [SwiftUI](/documentation/swiftui) › [View](/documentation/swiftui/view)

**Instance Method**

# sheet(isPresented:onDismiss:content:)

**Available on:** iOS 13.0+, iPadOS 13.0+, Mac Catalyst 13.0+, macOS 10.15+, tvOS 13.0+, visionOS 1.0+, watchOS 6.0+

> Presents a sheet when a binding to a Boolean value that you provide is true.

```swift
nonisolated func sheet<Content>(isPresented: Binding<Bool>, onDismiss: (() -> Void)? = nil, @ViewBuilder content: @escaping () -> Content) -> some View where Content : View
```

## Parameters

**isPresented**

A binding to a Boolean value that determines whether to present the sheet that you create in the modifier’s `content` closure.

**onDismiss**

The closure to execute when dismissing the sheet.

**content**

A closure that returns the content of the sheet.

## Discussion

Use this method when you want to present a modal view to the user when a Boolean value you provide is true. The example below displays a modal view of the mockup for a software license agreement when the user toggles the `isShowingSheet` variable by clicking or tapping on the “Show License Agreement” button:

```swift
struct ShowLicenseAgreement: View {
    @State private var isShowingSheet = false
    var body: some View {
        Button(action: {
            isShowingSheet.toggle()
        }) {
            Text("Show License Agreement")
        }
        .sheet(isPresented: $isShowingSheet,
               onDismiss: didDismiss) {
            VStack {
                Text("License Agreement")
                    .font(.title)
                    .padding(50)
                Text("""
                        Terms and conditions go here.
                    """)
                    .padding(50)
                Button("Dismiss",
                       action: { isShowingSheet.toggle() })
            }
        }
    }

    func didDismiss() {
        // Handle the dismissing action.
    }
}
```

![A screenshot of a full-screen modal sheet showing the mockup of a](https://docs-assets.developer.apple.com/published/1f086a26afa553b6877f59b2b320cd85/SwiftUI-View-SheetIsPresentingContent%402x.png)

In vertically compact environments, such as iPhone in landscape orientation, a sheet presentation automatically adapts to appear as a full-screen cover. Use the [presentationCompactAdaptation(_:)](/documentation/swiftui/view/presentationcompactadaptation(_:)) or [presentationCompactAdaptation(horizontal:vertical:)](/documentation/swiftui/view/presentationcompactadaptation(horizontal:vertical:)) modifier to override this behavior.

### Breakthrough effect

In visionOS, most system presentations appear with a breakthrough effect by default. To change how the enclosing presentation breaks through content occluding it, use [presentationBreakthroughEffect(_:)](/documentation/swiftui/view/presentationbreakthrougheffect(_:)), like in the following example:

```swift
.sheet(isPresented: $isShowingSheet,
       onDismiss: didDismiss) {
    VStack {
        Text("License Agreement")
            .font(.title)
            .padding(50)
        Text("""
                Terms and conditions go here.
            """)
            .padding(50)
        Button("Dismiss",
               action: { isShowingSheet.toggle() })
    }
    .presentationBreakthroughEffect(.prominent)
}
```

> **Note:** Passing a `.none` value for a sheet has no effect.

## Showing a sheet, cover, or popover

- [sheet(item:onDismiss:content:)](/documentation/swiftui/view/sheet(item:ondismiss:content:)) Presents a sheet using the given item as a data source for the sheet’s content.
- [fullScreenCover(isPresented:onDismiss:content:)](/documentation/swiftui/view/fullscreencover(ispresented:ondismiss:content:)) Presents a modal view that covers as much of the screen as possible when binding to a Boolean value you provide is true.
- [fullScreenCover(item:onDismiss:content:)](/documentation/swiftui/view/fullscreencover(item:ondismiss:content:)) Presents a modal view that covers as much of the screen as possible using the binding you provide as a data source for the sheet’s content.
- [popover(item:attachmentAnchor:arrowEdge:content:)](/documentation/swiftui/view/popover(item:attachmentanchor:arrowedge:content:)) Presents a popover using the given item as a data source for the popover’s content.
- [popover(isPresented:attachmentAnchor:arrowEdge:content:)](/documentation/swiftui/view/popover(ispresented:attachmentanchor:arrowedge:content:)) Presents a popover when a given condition is true.
- [PopoverAttachmentAnchor](/documentation/swiftui/popoverattachmentanchor) An attachment anchor for a popover.

---

*Extracted from Apple DocC JSON by apple-skills tooling.*
*This is unofficial content. All documentation belongs to Apple Inc.*

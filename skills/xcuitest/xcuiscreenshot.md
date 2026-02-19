---
title: XCUIScreenshot
description: A captured image of a screen, app, or UI element state.
source: https://developer.apple.com/documentation/xcuiautomation/xcuiscreenshot
timestamp: 2026-01-19T10:23:37.083Z
---

**Navigation:** [Xcuiautomation](/documentation/xcuiautomation)

**Class**

# XCUIScreenshot

**Available on:** iOS undefined+, iPadOS undefined+, Mac Catalyst undefined+, macOS undefined+, tvOS undefined+, visionOS undefined+, watchOS undefined+, Xcode 16.3+

> A captured image of a screen, app, or UI element state.

```swift
@MainActor class XCUIScreenshot
```

## Overview

Screenshots capture the current UI state of classes that conform to the [XCUIScreenshot Providing](/documentation/xcuiautomation/xcuiscreenshotproviding) protocol, such as [XCUIScreen](/documentation/xcuiautomation/xcuiscreen) and [XCUIElement](/documentation/xcuiautomation/xcuielement). Each screenshot contains an image representation of the captured UI at the point the screenshot was taken.

The following code demonstrates taking screenshots of a screen and a UI element:

```swift
func testTakeScreenshots() {

    // Take a screenshot of the current device's main screen.
    let mainScreenScreenshot = XCUIScreen.main.screenshot()
    
    // Take a screenshot of an app's first window.
    let app = XCUIApplication()
    app.launch()
    let windowScreenshot = app.windows.firstMatch.screenshot()

}
```

If you use [XCTest](/documentation/XCTest) for your UI automation tests, you can attach a screenshot of your app’s UI to a test or activity to store it for later analysis. Create an attachment for a screenshot by calling the [XCTAttachment](/documentation/XCTest/XCTAttachment) initializer [init(screenshot:)](/documentation/XCTest/XCTAttachment/init(screenshot:)) or [init(screenshot:quality:)](/documentation/XCTest/XCTAttachment/init(screenshot:quality:)). Add the attachment to a test or activity by calling the [XCTActivity](/documentation/XCTest/XCTActivity) method [add(_:)](/documentation/XCTest/XCTActivity/add(_:)). For more information, see [adding-attachments-to-tests-activities-and](/documentation/XCTest/adding-attachments-to-tests-activities-and-issues).

## Inherits From

- [NSObject](/documentation/ObjectiveC/NSObject-swift.class)

## Conforms To

- [CVarArg](/documentation/Swift/CVarArg)
- [CustomDebugStringConvertible](/documentation/Swift/CustomDebugStringConvertible)
- [CustomStringConvertible](/documentation/Swift/CustomStringConvertible)
- [Equatable](/documentation/Swift/Equatable)
- [Hashable](/documentation/Swift/Hashable)
- [NSObjectProtocol](/documentation/ObjectiveC/NSObjectProtocol)
- [Sendable](/documentation/Swift/Sendable)

## Screenshot representations

- [image](/documentation/xcuiautomation/xcuiscreenshot/image) A representation of the screenshot as a platform-native image object.
- [pngRepresentation](/documentation/xcuiautomation/xcuiscreenshot/pngrepresentation) A representation of the screenshot as PNG image data.

## Screenshots

- [XCUIScreen](/documentation/xcuiautomation/xcuiscreen)
- [XCUIScreenshotProviding](/documentation/xcuiautomation/xcuiscreenshotproviding)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

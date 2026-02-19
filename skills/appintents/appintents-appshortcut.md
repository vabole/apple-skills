---
title: AppShortcut
description: A type that defines a preconfigured shortcut for a specific app intent.
source: https://developer.apple.com/documentation/appintents/appshortcut
timestamp: 2026-01-19T10:21:59.426Z
---

**Navigation:** [Appintents](/documentation/appintents)

**Structure**

# AppShortcut

**Available on:** iOS 16.0+, iPadOS 16.0+, Mac Catalyst undefined+, macOS 13.0+, tvOS 16.0+, visionOS undefined+, watchOS 9.0+

> A type that defines a preconfigured shortcut for a specific app intent.

```swift
struct AppShortcut
```

## Overview

> [!NOTE]
> Session 10170: [10170](https://developer.apple.com/videos/play/wwdc2022/10170), and session 10169: [10169](https://developer.apple.com/videos/play/wwdc2022/10169).

> [!NOTE]
> Apple may extract anonymized App Shortcuts data such as localized phrases, display representation values, and the title and description of related intents. Machine learning models use this data when training to help improve the App Shortcuts experience.

## Creating an app shortcut

- [init(intent:phrases:shortTitle:systemImageName:)](/documentation/appintents/appshortcut/init(intent:phrases:shorttitle:systemimagename:)-8yntq) Initializes an App Shortcut with phrases that run the app intent, a title, and an image.
- [init(intent:phrases:shortTitle:systemImageName:parameterPresentation:)](/documentation/appintents/appshortcut/init(intent:phrases:shorttitle:systemimagename:parameterpresentation:)) Initializes an App Shortcut with phrases that run the app intent, a title, an image, and specified parameters.
- [init(intent:phrases:shortTitle:systemImageName:)](/documentation/appintents/appshortcut/init(intent:phrases:shorttitle:systemimagename:)-2hk1x) Initializes an App Shortcut with phrases that run the app intent, a title, and an image.

## App Shortcut definition

- [AppShortcutPhrase](/documentation/appintents/appshortcutphrase)
- [NegativeAppShortcutPhrase](/documentation/appintents/negativeappshortcutphrase)
- [NegativeAppShortcutPhrases](/documentation/appintents/negativeappshortcutphrases)
- [NSAppIconActionTintColorName](/documentation/BundleResources/Information-Property-List/CFBundleIcons/CFBundlePrimaryIcon/NSAppIconActionTintColorName)
- [NSAppIconComplementingColorNames](/documentation/BundleResources/Information-Property-List/CFBundleIcons/CFBundlePrimaryIcon/NSAppIconComplementingColorNames)
- [AppShortcutsBuilder](/documentation/appintents/appshortcutsbuilder)
- [ShortcutTileColor](/documentation/appintents/shortcuttilecolor)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

---
title: AppShortcut
description: A type that defines a preconfigured shortcut for a specific app intent.
source: https://developer.apple.com/documentation/appintents/appshortcut
source_kind: apple-docc
source_json: https://developer.apple.com/tutorials/data/documentation/appintents/appshortcut.json
timestamp: 2026-04-14T13:14:05.910Z
---

**Navigation:** [App Intents](/documentation/appintents)

**Structure**

# AppShortcut

**Available on:** iOS 16.0+, iPadOS 16.0+, Mac Catalyst, macOS 13.0+, tvOS 16.0+, visionOS, watchOS 9.0+

> A type that defines a preconfigured shortcut for a specific app intent.

```swift
struct AppShortcut
```

## Overview

> **Related sessions from WWDC22:** Session 10170: [Implement App Shortcuts with App Intents](https://developer.apple.com/videos/play/wwdc2022/10170), and session 10169: [Design App Shortcuts](https://developer.apple.com/videos/play/wwdc2022/10169).

> **Note:** Apple may extract anonymized App Shortcuts data such as localized phrases, display representation values, and the title and description of related intents. Machine learning models use this data when training to help improve the App Shortcuts experience.

## Creating an app shortcut

- [init(intent:phrases:shortTitle:systemImageName:)](/documentation/appintents/appshortcut/init(intent:phrases:shorttitle:systemimagename:)-8yntq) Initializes an App Shortcut with phrases that run the app intent, a title, and an image.
- [init(intent:phrases:shortTitle:systemImageName:parameterPresentation:)](/documentation/appintents/appshortcut/init(intent:phrases:shorttitle:systemimagename:parameterpresentation:)) Initializes an App Shortcut with phrases that run the app intent, a title, an image, and specified parameters.
- [init(intent:phrases:shortTitle:systemImageName:)](/documentation/appintents/appshortcut/init(intent:phrases:shorttitle:systemimagename:)-2hk1x) Initializes an App Shortcut with phrases that run the app intent, a title, and an image.

## App Shortcut definition

- [AppShortcutsContent](/documentation/appintents/appshortcutscontent)
- [AppShortcutPhrase](/documentation/appintents/appshortcutphrase) A spoken phrase that causes the system to run the corresponding App Shortcut.
- [AppShortcutPhraseToken](/documentation/appintents/appshortcutphrasetoken) Dynamic values you can include in the spoken phrases that run your shortcut.
- [NegativeAppShortcutPhrase](/documentation/appintents/negativeappshortcutphrase) An object that represents a negative phrase.
- [NegativeAppShortcutPhrases](/documentation/appintents/negativeappshortcutphrases) This is a set of negative phrases, which will all be added to the app-level negative training set. All the training data specified here, will be used to completely bypass your app
- [NSAppIconActionTintColorName](/documentation/BundleResources/Information-Property-List/CFBundleIcons/CFBundlePrimaryIcon/NSAppIconActionTintColorName) The tint color to apply to text and symbols in the App Shortcuts platter.
- [NSAppIconComplementingColorNames](/documentation/BundleResources/Information-Property-List/CFBundleIcons/CFBundlePrimaryIcon/NSAppIconComplementingColorNames) The names of the colors to use for the background of the App Shortcuts platter.
- [AppShortcutsBuilder](/documentation/appintents/appshortcutsbuilder) A result builder that allows you to declaratively describe the App Shortcuts that your app provides.
- [ShortcutTileColor](/documentation/appintents/shortcuttilecolor) Describes the colors a shortcut tile in the Shortcuts app.

---

*Extracted from Apple DocC JSON by apple-skills tooling.*
*This is unofficial content. All documentation belongs to Apple Inc.*

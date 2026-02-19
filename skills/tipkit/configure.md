---
title: configure(_:)
description: Loads and configures the persistent state of all tips in your app.
source: https://developer.apple.com/documentation/tipkit/tips/configure(_:)
timestamp: 2026-02-19T07:52:36.972Z
---

**Navigation:** [Tipkit](/documentation/tipkit) › [tips](/documentation/tipkit/tips)

**Type Method**

# configure(_:)

**Available on:** iOS 17.0+, iPadOS 17.0+, Mac Catalyst 17.0+, macOS 14.0+, tvOS 17.0+, visionOS 1.0+, watchOS 10.0+

> Loads and configures the persistent state of all tips in your app.

```swift
static func configure(_ configuration: [Tips.ConfigurationOption] = []) throws
```

## Parameters

**configuration**

An array of options for customizing your tip’s datastore location and default frequency control interval.



## Discussion

> [!NOTE]
> This function must be called before tips display in your app.

Call this function during app initialization. By default, all tips persist to a default location with a display frequency of [immediate](/documentation/tipkit/tips/configurationoption/displayfrequency/immediate).

```swift
@main
struct SampleApp: App {
    init() {
        do {
            // Configure tips in the app.
            try Tips.configure()
        }
        catch {
            // Handle TipKit errors
            print("Error initializing TipKit \(error.localizedDescription)")
        }
    }
}
```

To change the default location of where your tips persist use the convenience method [datastoreLocation(_:)](/documentation/tipkit/tips/configurationoption/datastorelocation(_:)).

To change the display frequency use the convenience method [displayFrequency(_:)](/documentation/tipkit/tips/configurationoption/displayfrequency(_:)).

```swift
do {
    // Configure tips in the app.
    try Tips.configure([
        .datastoreLocation(.groupContainer(identifier: "MyGroupContainer")),
        .displayFrequency(.hourly)
    ])
}
catch {
    // Handle TipKit errors
    print("Error initializing TipKit \(error.localizedDescription)")
}
```

## Configuration

- [cloudKitContainer(_:)](/documentation/tipkit/tips/configurationoption/cloudkitcontainer(_:))
- [datastoreLocation(_:)](/documentation/tipkit/tips/configurationoption/datastorelocation(_:))
- [displayFrequency(_:)](/documentation/tipkit/tips/configurationoption/displayfrequency(_:))

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

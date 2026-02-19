---
title: Model()
description: Converts a Swift class into a stored model that’s managed by SwiftData.
source: https://developer.apple.com/documentation/swiftdata/model()
timestamp: 2026-01-19T10:21:52.992Z
---

**Navigation:** [Swiftdata](/documentation/swiftdata)

**Macro**

# Model()

**Available on:** iOS 17.0+, iPadOS 17.0+, Mac Catalyst 17.0+, macOS 14.0+, tvOS 17.0+, visionOS 1.0+, watchOS 10.0+, Swift 5.9+

> Converts a Swift class into a stored model that’s managed by SwiftData.

```swift
@attached(member, conformances: Observable, PersistentModel, Sendable, names: named(_$backingData), named(persistentBackingData), named(schemaMetadata), named(init), named(_$observationRegistrar), named(_SwiftDataNoType), named(access), named(withMutation)) @attached(memberAttribute) @attached(extension, conformances: Observable, PersistentModel, Sendable) macro Model()
```

## Overview

Annotate your model classes with the `@Model` macro to make them persistable. At build time, the macro expands to provide conformance to the [Persistent Model](/documentation/swiftdata/persistentmodel) and [Observable](/documentation/Observation/Observable) protocols.

```swift
@Model
class RemoteImage {
    var sourceURL: URL
    var data: Data
    
    init(sourceURL: URL, data: Data = Data()) {
        self.sourceURL = sourceURL
        self.data = data
    }
}
```

For more information about defining models, see [Preserving-your-apps-model-data-across](/documentation/swiftdata/preserving-your-apps-model-data-across-launches).

## Model definition

- [Attribute(_:originalName:hashModifier:)](/documentation/swiftdata/attribute(_:originalname:hashmodifier:))
- [Unique(_:)](/documentation/swiftdata/unique(_:))
- [Index(_:)](/documentation/swiftdata/index(_:)-74ia2)
- [Index(_:)](/documentation/swiftdata/index(_:)-7d4z0)
- [Defining data relationships with enumerations and model classes](/documentation/swiftdata/defining-data-relationships-with-enumerations-and-model-classes)
- [Relationship(_:deleteRule:minimumModelCount:maximumModelCount:originalName:inverse:hashModifier:)](/documentation/swiftdata/relationship(_:deleterule:minimummodelcount:maximummodelcount:originalname:inverse:hashmodifier:))
- [Transient()](/documentation/swiftdata/transient())

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

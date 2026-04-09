---
title: Model()
description: Converts a Swift class into a stored model that’s managed by SwiftData.
source: https://developer.apple.com/documentation/swiftdata/model()
timestamp: 2026-04-09T12:04:31.955Z
---

**Navigation:** [SwiftData](/documentation/swiftdata)

**Macro**

# Model()

**Available on:** iOS 17.0+, iPadOS 17.0+, Mac Catalyst 17.0+, macOS 14.0+, tvOS 17.0+, visionOS 1.0+, watchOS 10.0+, Swift 5.9+

> Converts a Swift class into a stored model that’s managed by SwiftData.

```swift
@attached(member, conformances: Observable, PersistentModel, Sendable, names: named(_$backingData), named(persistentBackingData), named(schemaMetadata), named(init), named(_$observationRegistrar), named(_SwiftDataNoType), named(access), named(withMutation)) @attached(memberAttribute) @attached(extension, conformances: Observable, PersistentModel, Sendable) macro Model()
```

## Overview

Annotate your model classes with the `@Model` macro to make them persistable. At build time, the macro expands to provide conformance to the [PersistentModel](/documentation/swiftdata/persistentmodel) and [Observable](/documentation/Observation/Observable) protocols.

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

For more information about defining models, see [Preserving your app’s model data across launches](/documentation/swiftdata/preserving-your-apps-model-data-across-launches).

## Model definition

- [Attribute(_:originalName:hashModifier:)](/documentation/swiftdata/attribute(_:originalname:hashmodifier:)) Specifies the custom behavior that SwiftData applies to the annotated property when managing the owning class.
- [Unique(_:)](/documentation/swiftdata/unique(_:)) Specifies the key-paths that SwiftData uses to enforce the uniqueness of model instances.
- [Index(_:)](/documentation/swiftdata/index(_:)-74ia2) Specifies the key-paths that SwiftData uses to create one or more binary indices for the associated model.
- [Index(_:)](/documentation/swiftdata/index(_:)-7d4z0) Specifies the key-paths that SwiftData uses to create one or more indicies for the associated model, where each index is either binary or R-tree.
- [Defining data relationships with enumerations and model classes](/documentation/swiftdata/defining-data-relationships-with-enumerations-and-model-classes) Create relationships for static and dynamic data stored in your app.
- [Relationship(_:deleteRule:minimumModelCount:maximumModelCount:originalName:inverse:hashModifier:)](/documentation/swiftdata/relationship(_:deleterule:minimummodelcount:maximummodelcount:originalname:inverse:hashmodifier:)) Specifies the options that SwiftData needs to manage the annotated property as a relationship between two models.
- [Transient()](/documentation/swiftdata/transient()) Tells SwiftData not to persist the annotated property when managing the owning class.

---

*Extracted from Apple DocC JSON by apple-skills tooling.*
*This is unofficial content. All documentation belongs to Apple Inc.*

---
title: Query
description: A type that fetches models using the specified criteria, and manages those models so they remain in sync with the underlying data.
source: https://developer.apple.com/documentation/swiftdata/query
timestamp: 2026-01-19T10:21:53.652Z
---

**Navigation:** [Swiftdata](/documentation/swiftdata)

**Structure**

# Query

**Available on:** iOS 17.0+, iPadOS 17.0+, Mac Catalyst 17.0+, macOS 14.0+, tvOS 17.0+, visionOS 1.0+, watchOS 10.0+

> A type that fetches models using the specified criteria, and manages those models so they remain in sync with the underlying data.

```swift
@MainActor @preconcurrency struct Query<Element, Result> where Element : PersistentModel
```

## Conforms To

- [DynamicProperty](/documentation/SwiftUI/DynamicProperty)
- [Sendable](/documentation/Swift/Sendable)
- [SendableMetatype](/documentation/Swift/SendableMetatype)

## Creating a query

- [init(_:animation:)](/documentation/swiftdata/query/init(_:animation:)) Create a query with a SwiftData fetch descriptor.
- [init(filter:sort:animation:)](/documentation/swiftdata/query/init(filter:sort:animation:)) Create a query with a predicate, and a list of sort descriptors.
- [init(filter:sort:order:animation:)](/documentation/swiftdata/query/init(filter:sort:order:animation:)-1qfoj) Creates a query with a predicate, a key path to a property for sorting, and the order to sort by.
- [init(filter:sort:order:animation:)](/documentation/swiftdata/query/init(filter:sort:order:animation:)-3qovd) Creates a query with a predicate, a key path to a property for sorting, and the order to sort by.
- [init(_:transaction:)](/documentation/swiftdata/query/init(_:transaction:)) Create a query with a SwiftData fetch descriptor.
- [init(filter:sort:transaction:)](/documentation/swiftdata/query/init(filter:sort:transaction:)) Create a query with a predicate, and a list of sort descriptors.
- [init(filter:sort:order:transaction:)](/documentation/swiftdata/query/init(filter:sort:order:transaction:)-2bx9a) Create a query with a predicate, a key path to a property for sorting, and the order to sort by.
- [init(filter:sort:order:transaction:)](/documentation/swiftdata/query/init(filter:sort:order:transaction:)-8q7vs) Create a query with a predicate, a key path to a property for sorting, and the order to sort by.

## Getting query configuration

- [modelContext](/documentation/swiftdata/query/modelcontext) Current model context  interacts with.
- [fetchError](/documentation/swiftdata/query/fetcherror) An error encountered during the most recent attempt to fetch data.

## Accessing the value

- [wrappedValue](/documentation/swiftdata/query/wrappedvalue) The most recent fetched result from the Query.

## Model fetch

- [Filtering and sorting persistent data](/documentation/swiftdata/filtering-and-sorting-persistent-data)
- [Query()](/documentation/swiftdata/query())
- [Additional query macros](/documentation/swiftdata/additionalquerymacros)
- [FetchDescriptor](/documentation/swiftdata/fetchdescriptor)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

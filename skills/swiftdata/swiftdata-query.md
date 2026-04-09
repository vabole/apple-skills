---
title: Query
description: A type that fetches models using the specified criteria, and manages those models so they remain in sync with the underlying data.
source: https://developer.apple.com/documentation/swiftdata/query
timestamp: 2026-04-09T12:04:32.338Z
---

**Navigation:** [SwiftData](/documentation/swiftdata)

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

- [modelContext](/documentation/swiftdata/query/modelcontext) Current model context `Query` interacts with.
- [fetchError](/documentation/swiftdata/query/fetcherror) An error encountered during the most recent attempt to fetch data.

## Accessing the value

- [wrappedValue](/documentation/swiftdata/query/wrappedvalue) The most recent fetched result from the Query.

## Model fetch

- [Filtering and sorting persistent data](/documentation/swiftdata/filtering-and-sorting-persistent-data) Manage data store presentation using predicates and dynamic queries.
- [Query()](/documentation/swiftdata/query()) Fetches all instances of the attached model type.
- [Additional query macros](/documentation/swiftdata/additionalquerymacros) Supplementary macros that enable you to narrow query results and tell SwiftData how to sort and order those results.
- [FetchDescriptor](/documentation/swiftdata/fetchdescriptor) A type that describes the criteria, sort order, and any additional configuration to use when performing a fetch.

---

*Extracted from Apple DocC JSON by apple-skills tooling.*
*This is unofficial content. All documentation belongs to Apple Inc.*

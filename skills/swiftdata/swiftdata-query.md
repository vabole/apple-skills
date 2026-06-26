---
title: Query
description: A type that fetches models using the specified criteria, and manages those models so they remain in sync with the underlying data.
source: https://developer.apple.com/documentation/swiftdata/query
source_kind: apple-docc
source_json: https://developer.apple.com/tutorials/data/documentation/swiftdata/query.json
timestamp: 2026-06-26T06:39:36.576Z
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

## Creating an unsorted, sectioned query

- [init(_:animation:sectionBy:)](/documentation/swiftdata/query/init(_:animation:sectionby:)-2em2m) Creates a sectioned query from a fetch descriptor, grouped into sections by a String key path.
- [init(_:animation:sectionBy:)](/documentation/swiftdata/query/init(_:animation:sectionby:)-2pqhv) Creates a sectioned query from a fetch descriptor, grouped by an optional String key path.
- [init(_:transaction:sectionBy:)](/documentation/swiftdata/query/init(_:transaction:sectionby:)-5814o) Creates a sectioned query from a fetch descriptor, grouped by an optional String key path. Pass `nil` for the key path to disable sectioning.
- [init(_:transaction:sectionBy:)](/documentation/swiftdata/query/init(_:transaction:sectionby:)-9sb87) Creates a sectioned query from a fetch descriptor, grouped into sections by a String key path. Pass `nil` to disable sectioning.

## Creating a sorted, sectioned query

- [init(filter:sort:animation:sectionBy:)](/documentation/swiftdata/query/init(filter:sort:animation:sectionby:)-5wk67) Creates a sectioned query with sort descriptors, grouped into sections by a String key path. Pass `nil` to disable sectioning.
- [init(filter:sort:animation:sectionBy:)](/documentation/swiftdata/query/init(filter:sort:animation:sectionby:)-8e78r) Creates a sectioned query with sort descriptors, grouped by an optional String key path. Pass `nil` for the key path to disable sectioning.
- [init(filter:sort:order:animation:sectionBy:)](/documentation/swiftdata/query/init(filter:sort:order:animation:sectionby:)-2e9oh) Creates a sectioned query sorted by a key path, grouped by an optional String key path. `nil` values share the empty-string section. Pass `nil` for the key path to disable sectioning.
- [init(filter:sort:order:animation:sectionBy:)](/documentation/swiftdata/query/init(filter:sort:order:animation:sectionby:)-2e9oh) Creates a sectioned query sorted by a key path, grouped by an optional String key path. `nil` values share the empty-string section. Pass `nil` for the key path to disable sectioning.
- [init(filter:sort:order:animation:sectionBy:)](/documentation/swiftdata/query/init(filter:sort:order:animation:sectionby:)-4pdmu) Creates a sectioned query sorted by an optional key path, grouped by an optional String key path. Pass `nil` for the key path to disable sectioning.
- [init(filter:sort:order:animation:sectionBy:)](/documentation/swiftdata/query/init(filter:sort:order:animation:sectionby:)-6b4tq) Creates a sectioned query sorted by a key path, grouped into sections by a String key path. Pass `nil` to disable sectioning.
- [init(filter:sort:order:animation:sectionBy:)](/documentation/swiftdata/query/init(filter:sort:order:animation:sectionby:)-7d51r) Creates a sectioned query sorted by an optional key path, grouped into sections by a String key path. Pass `nil` to disable sectioning.
- [init(filter:sort:order:transaction:sectionBy:)](/documentation/swiftdata/query/init(filter:sort:order:transaction:sectionby:)-5ym3e) Creates a sectioned query sorted by a key path, grouped into sections by a String key path. Pass `nil` to disable sectioning.
- [init(filter:sort:order:transaction:sectionBy:)](/documentation/swiftdata/query/init(filter:sort:order:transaction:sectionby:)-8hx6i) Creates a sectioned query sorted by an optional key path, grouped by an optional String key path. Pass `nil` for the key path to disable sectioning.
- [init(filter:sort:order:transaction:sectionBy:)](/documentation/swiftdata/query/init(filter:sort:order:transaction:sectionby:)-930wx) Creates a sectioned query sorted by a key path, grouped by an optional String key path. Pass `nil` for the key path to disable sectioning.
- [init(filter:sort:order:transaction:sectionBy:)](/documentation/swiftdata/query/init(filter:sort:order:transaction:sectionby:)-l6d4) Creates a sectioned query sorted by an optional key path, grouped into sections by a String key path. Pass `nil` to disable sectioning.
- [init(filter:sort:transaction:sectionBy:)](/documentation/swiftdata/query/init(filter:sort:transaction:sectionby:)-2b0zd) Creates a sectioned query with sort descriptors, grouped into sections by a String key path.
- [init(filter:sort:transaction:sectionBy:)](/documentation/swiftdata/query/init(filter:sort:transaction:sectionby:)-965mg) Creates a sectioned query with sort descriptors, grouped by an optional String key path.

## Getting query configuration

- [modelContext](/documentation/swiftdata/query/modelcontext) Current model context `Query` interacts with.
- [fetchError](/documentation/swiftdata/query/fetcherror) An error encountered during the most recent attempt to fetch data.

## Accessing the value

- [wrappedValue](/documentation/swiftdata/query/wrappedvalue) The most recent fetched result from the Query.

## Accessing sections

- [sections](/documentation/swiftdata/query/sections) The sections computed from the current results, grouped by the `sectionBy` key path.
- [ResultsSectionCollection](/documentation/swiftdata/resultssectioncollection) A collection of sections as returned by [sections](/documentation/swiftdata/resultsobserver/sections) or `Query.sections`.

## Model fetch

- [Filtering and sorting persistent data](/documentation/swiftdata/filtering-and-sorting-persistent-data) Manage data store presentation using predicates and dynamic queries.
- [Query()](/documentation/swiftdata/query()) Fetches all instances of the attached model type.
- [Additional query macros](/documentation/swiftdata/additionalquerymacros) Supplementary macros that enable you to narrow query results and tell SwiftData how to sort, order, and section those results.
- [FetchDescriptor](/documentation/swiftdata/fetchdescriptor) A type that describes the criteria, sort order, and any additional configuration to use when performing a fetch.

---

*Extracted from Apple DocC JSON by apple-skills tooling.*
*This is unofficial content. All documentation belongs to Apple Inc.*

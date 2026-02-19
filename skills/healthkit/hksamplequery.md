---
title: HKSampleQuery
description: A general query that returns a snapshot of all the matching samples currently saved in the HealthKit store.
source: https://developer.apple.com/documentation/healthkit/hksamplequery
timestamp: 2026-01-19T10:21:37.631Z
---

**Navigation:** [Healthkit](/documentation/healthkit)

**Class**

# HKSampleQuery

**Available on:** iOS undefined+, iPadOS undefined+, Mac Catalyst undefined+, macOS undefined+, visionOS undefined+, watchOS undefined+

> A general query that returns a snapshot of all the matching samples currently saved in the HealthKit store.

```swift
class HKSampleQuery
```

## Overview

You can use sample queries to search for any concrete subclasses of the [HKSample](/documentation/healthkit/hksample) class, including [HKCategory Sample](/documentation/healthkit/hkcategorysample), [HKCorrelation](/documentation/healthkit/hkcorrelation), [HKQuantity Sample](/documentation/healthkit/hkquantitysample), and [HKWorkout](/documentation/healthkit/hkworkout) objects.

The sample query returns sample objects that match the provided type and predicate. You can provide a sort order for the returned samples, or limit the number of samples returned. Other query classes can be used to perform more specialized searches and calculations. For more information, see [HKQuery](/documentation/healthkit/hkquery).

Sample queries are immutable: The query’s properties are set when the query is first created, and they can’t change.

> [!NOTE]
> Like many HealthKit classes, the [HKSample Query](/documentation/healthkit/hksamplequery) class should not be subclassed.

## Inherits From

- [HKQuery](/documentation/healthkit/hkquery)

## Conforms To

- [CVarArg](/documentation/Swift/CVarArg)
- [CustomDebugStringConvertible](/documentation/Swift/CustomDebugStringConvertible)
- [CustomStringConvertible](/documentation/Swift/CustomStringConvertible)
- [Equatable](/documentation/Swift/Equatable)
- [Hashable](/documentation/Swift/Hashable)
- [NSObjectProtocol](/documentation/ObjectiveC/NSObjectProtocol)
- [Sendable](/documentation/Swift/Sendable)
- [SendableMetatype](/documentation/Swift/SendableMetatype)

## Creating Sample Queries

- [Executing Sample Queries](/documentation/healthkit/executing-sample-queries) Create, run, and sort sample queries.
- [init(sampleType:predicate:limit:sortDescriptors:resultsHandler:)](/documentation/healthkit/hksamplequery/init(sampletype:predicate:limit:sortdescriptors:resultshandler:)) Instantiates and returns a sample query.
- [init(queryDescriptors:limit:resultsHandler:)](/documentation/healthkit/hksamplequery/init(querydescriptors:limit:resultshandler:)) Creates a query for samples that match any of the descriptors you provided.
- [init(queryDescriptors:limit:sortDescriptors:resultsHandler:)](/documentation/healthkit/hksamplequery/init(querydescriptors:limit:sortdescriptors:resultshandler:)) Creates a query for samples that match any of the query descriptors you provided, sorted by the sort descriptors you provided.
- [HKObjectQueryNoLimit](/documentation/healthkit/hkobjectquerynolimit) A value indicating that the query returns all the matching samples in the HealthKit store.
- [HealthKit sort descriptors](/documentation/healthkit/healthkit-sort-descriptors) Identifiers for sorting results.

## Getting Property Data

- [limit](/documentation/healthkit/hksamplequery/limit) The maximum number of samples that this query returns.
- [sortDescriptors](/documentation/healthkit/hksamplequery/sortdescriptors) The sort descriptors that specify the order of the results returned by this query.

## Setting Limits

- [HKObjectQueryNoLimit](/documentation/healthkit/hkobjectquerynolimit) A value indicating that the query returns all the matching samples in the HealthKit store.

## Basic queries

- [HKSampleQueryDescriptor](/documentation/healthkit/hksamplequerydescriptor)
- [HKCorrelationQuery](/documentation/healthkit/hkcorrelationquery)
- [HKQueryDescriptor](/documentation/healthkit/hkquerydescriptor)
- [HKQuery](/documentation/healthkit/hkquery)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

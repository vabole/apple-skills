---
title: HKQuantitySample
description: A sample that represents a quantity, including the value and the units.
source: https://developer.apple.com/documentation/healthkit/hkquantitysample
source_kind: apple-docc
source_json: https://developer.apple.com/tutorials/data/documentation/healthkit/hkquantitysample.json
timestamp: 2026-05-04T06:25:01.350Z
---

**Navigation:** [HealthKit](/documentation/healthkit)

**Class**

# HKQuantitySample

**Available on:** iOS 8.0+, iPadOS 8.0+, Mac Catalyst 13.0+, macOS 13.0+, visionOS 1.0+, watchOS 2.0+

> A sample that represents a quantity, including the value and the units.

```swift
class HKQuantitySample
```

## Overview

A quantity sample contains one or more [HKQuantity](/documentation/healthkit/hkquantity) objects. Each quantity represents a single piece of data with a single numeric value and the value’s associated units. For example, you can use quantity samples to record the user’s height, the user’s current heart rate, or the number of calories in a hamburger. HealthKit provides a wide range of quantity types, letting you track many different health and fitness features.

The [HKQuantitySample](/documentation/healthkit/hkquantitysample) class is a subclass of the [HKSample](/documentation/healthkit/hksample) class. Quantity samples are immutable; you set the sample’s properties when you create it, and they cannot change.

In iOS 13 and later and watchOS 6 and later, [HKQuantitySample](/documentation/healthkit/hkquantitysample) is an abstract superclass for the [HKCumulativeQuantitySample](/documentation/healthkit/hkcumulativequantitysample) and [HKDiscreteQuantitySample](/documentation/healthkit/hkdiscretequantitysample) concrete subclasses. The system automatically selects the correct subclass based on the [HKQuantityType](/documentation/healthkit/hkquantitytype) object used to create the sample.

### Extend Quantity Samples

Like many HealthKit classes, you should not subclass the [HKQuantitySample](/documentation/healthkit/hkquantitysample) class. You may extend this class by adding metadata with custom keys to save related data used by your app.

For more information, see [init(type:quantity:start:end:metadata:)](/documentation/healthkit/hkquantitysample/init(type:quantity:start:end:metadata:)).

## Inherits From

- [HKSample](/documentation/healthkit/hksample)

## Inherited By

- [HKCumulativeQuantitySample](/documentation/healthkit/hkcumulativequantitysample)
- [HKDiscreteQuantitySample](/documentation/healthkit/hkdiscretequantitysample)

## Conforms To

- [CVarArg](/documentation/Swift/CVarArg)
- [CustomDebugStringConvertible](/documentation/Swift/CustomDebugStringConvertible)
- [CustomStringConvertible](/documentation/Swift/CustomStringConvertible)
- [Equatable](/documentation/Swift/Equatable)
- [Hashable](/documentation/Swift/Hashable)
- [NSCoding](/documentation/Foundation/NSCoding)
- [NSObjectProtocol](/documentation/ObjectiveC/NSObjectProtocol)
- [NSSecureCoding](/documentation/Foundation/NSSecureCoding)
- [Sendable](/documentation/Swift/Sendable)
- [SendableMetatype](/documentation/Swift/SendableMetatype)

## Creating Quantity Samples

- [init(type:quantity:start:end:)](/documentation/healthkit/hkquantitysample/init(type:quantity:start:end:)) Returns a sample containing a numeric measurement.
- [init(type:quantity:start:end:metadata:)](/documentation/healthkit/hkquantitysample/init(type:quantity:start:end:metadata:)) Returns a sample containing a numeric measurement with the provided metadata.
- [init(type:quantity:start:end:device:metadata:)](/documentation/healthkit/hkquantitysample/init(type:quantity:start:end:device:metadata:)) Returns a sample containing a numeric measurement with the provided device and metadata.

## Getting Property Data

- [quantity](/documentation/healthkit/hkquantitysample/quantity) The quantity for this sample.
- [count](/documentation/healthkit/hkquantitysample/count) The number of quantities contained in this sample.
- [quantityType](/documentation/healthkit/hkquantitysample/quantitytype) The quantity type for this sample.

## Specifying Predicate Key Paths

- [HKPredicateKeyPathQuantity](/documentation/healthkit/hkpredicatekeypathquantity) The key path for accessing the sample’s quantity.
- [HKPredicateKeyPathCount](/documentation/healthkit/hkpredicatekeypathcount) A key path for the sample’s count.

## Initializers

- [init(type:quantity:startDate:endDate:)](/documentation/healthkit/hkquantitysample/init(type:quantity:startdate:enddate:))
- [init(type:quantity:startDate:endDate:device:metadata:)](/documentation/healthkit/hkquantitysample/init(type:quantity:startdate:enddate:device:metadata:))
- [init(type:quantity:startDate:endDate:metadata:)](/documentation/healthkit/hkquantitysample/init(type:quantity:startdate:enddate:metadata:))

## Basic samples

- [HKCumulativeQuantitySample](/documentation/healthkit/hkcumulativequantitysample) A sample that represents a cumulative quantity.
- [HKDiscreteQuantitySample](/documentation/healthkit/hkdiscretequantitysample) A sample that represents a discrete quantity.
- [HKCategorySample](/documentation/healthkit/hkcategorysample) A sample with values from a short list of possible values.
- [HKCorrelation](/documentation/healthkit/hkcorrelation) A sample that groups multiple related samples into a single entry.
- [Units and quantities](/documentation/healthkit/units-and-quantities) Objects used to specify a quantity for a given unit, and to convert between units.
- [Metadata Keys](/documentation/healthkit/metadata-keys) Constants used to add metadata to objects stored in HealthKit.

---

*Extracted from Apple DocC JSON by apple-skills tooling.*
*This is unofficial content. All documentation belongs to Apple Inc.*

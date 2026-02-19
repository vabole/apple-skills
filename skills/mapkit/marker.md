---
title: Marker
description: A balloon-shaped annotation that marks a map location.
source: https://developer.apple.com/documentation/mapkit/marker
timestamp: 2026-02-19T07:52:36.984Z
---

**Navigation:** [Mapkit](/documentation/mapkit)

**Structure**

# Marker

**Available on:** iOS 17.0+, iPadOS 17.0+, Mac Catalyst undefined+, macOS 14.0+, tvOS 17.0+, visionOS undefined+, watchOS 10.0+

> A balloon-shaped annotation that marks a map location.

```swift
@MainActor @preconcurrency struct Marker<Label> where Label : View
```

## Overview

Use this view to create marker instances in the closure you provide to the `content` parameter in the [Map](/documentation/mapkit/map) initializers.

## Conforms To

- [MapContent](/documentation/mapkit/mapcontent)
- [Sendable](/documentation/Swift/Sendable)
- [SendableMetatype](/documentation/Swift/SendableMetatype)

## Creating a marker

- [init(_:coordinate:)](/documentation/mapkit/marker/init(_:coordinate:)-82942) Creates a marker at the given location with the label you provide.
- [init(_:image:coordinate:)](/documentation/mapkit/marker/init(_:image:coordinate:)-36l1p) Creates a marker at the given location with the provided title and image resource to display as the balloon’s icon.
- [init(_:systemImage:coordinate:)](/documentation/mapkit/marker/init(_:systemimage:coordinate:)-50yl4) Creates a marker at the given location with the provided title and a system image the map displays as the balloon’s icon.
- [init(_:coordinate:)](/documentation/mapkit/marker/init(_:coordinate:)-8wxlv) Creates a marker at the given location with the localized string key you provide.
- [init(_:image:coordinate:)](/documentation/mapkit/marker/init(_:image:coordinate:)-28mge) Creates a marker at the given location with the provided localized title and image resource to display as the balloon’s icon.
- [init(_:monogram:coordinate:)](/documentation/mapkit/marker/init(_:monogram:coordinate:)-2ojcy) Creates a marker at the given location with the provided title key and monogram.
- [init(_:monogram:coordinate:)](/documentation/mapkit/marker/init(_:monogram:coordinate:)-21hql) Creates a marker at the given location with the provided title string and monogram.
- [init(_:systemImage:coordinate:)](/documentation/mapkit/marker/init(_:systemimage:coordinate:)-2t4i0) Creates a marker at the given location with a localized title, and a system image the map displays as the balloon’s icon.
- [init(coordinate:label:)](/documentation/mapkit/marker/init(coordinate:label:)) Creates a marker at the given location with the provided label.
- [init(item:)](/documentation/mapkit/marker/init(item:)) Creates a marker for a given map item using a MapKit-provided label.

## Displaying place information

- [mapItemDetailSelectionAccessory(_:)](/documentation/mapkit/mapcontent/mapitemdetailselectionaccessory(_:)) Specifies the selection accessory to display for the selected map item content.

## Initializers

- [init(_:coordinate:)](/documentation/mapkit/marker/init(_:coordinate:)-3bjj6) Creates a marker at the given location.
- [init(_:image:coordinate:)](/documentation/mapkit/marker/init(_:image:coordinate:)-1q3pz) Creates a marker at the given location with an image displayed as the balloon’s icon.
- [init(_:monogram:coordinate:)](/documentation/mapkit/marker/init(_:monogram:coordinate:)-77k4r) Creates a marker at the given location with a monogram displayed as the balloon’s icon.
- [init(_:systemImage:coordinate:)](/documentation/mapkit/marker/init(_:systemimage:coordinate:)-18xnl) Creates a marker at the given location with a system image displayed as the balloon’s icon.

## Annotations and overlays

- [Annotation](/documentation/mapkit/annotation)
- [MapCircle](/documentation/mapkit/mapcircle)
- [MapPolygon](/documentation/mapkit/mappolygon)
- [MapPolyline](/documentation/mapkit/mappolyline)
- [UserAnnotation](/documentation/mapkit/userannotation)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

---
title: Annotation
description: A customizable annotation used to indicate a location on a map.
source: https://developer.apple.com/documentation/mapkit/annotation
timestamp: 2026-02-19T07:52:37.098Z
---

**Navigation:** [Mapkit](/documentation/mapkit)

**Structure**

# Annotation

**Available on:** iOS 17.0+, iPadOS 17.0+, Mac Catalyst undefined+, macOS 14.0+, tvOS 17.0+, visionOS undefined+, watchOS 10.0+

> A customizable annotation used to indicate a location on a map.

```swift
@MainActor @preconcurrency struct Annotation<Label, Content> where Label : View, Content : View
```

## Overview

Use this view to annotations in the closure you provide to the `content` parameter in the [Map](/documentation/mapkit/map) initializers.

## Conforms To

- [MapContent](/documentation/mapkit/mapcontent)
- [Sendable](/documentation/Swift/Sendable)
- [SendableMetatype](/documentation/Swift/SendableMetatype)

## Creating annotations

- [init(_:coordinate:anchor:accessoryAnchor:content:)](/documentation/mapkit/annotation/init(_:coordinate:anchor:accessoryanchor:content:)-6rxmn) Creates an annotation that displays a view at a coordinate on the map.
- [init(_:coordinate:anchor:accessoryAnchor:content:)](/documentation/mapkit/annotation/init(_:coordinate:anchor:accessoryanchor:content:)-14m3t) Creates an annotation that displays a view at a coordinate on the map.
- [init(coordinate:anchor:accessoryAnchor:content:label:)](/documentation/mapkit/annotation/init(coordinate:anchor:accessoryanchor:content:label:)) Creates an annotation that displays a view at a coordinate on the map.
- [init(item:anchor:accessoryAnchor:content:)](/documentation/mapkit/annotation/init(item:anchor:accessoryanchor:content:)) Creates an annotation that displays a view at a coordinate on the map.
- [init(_:coordinate:anchor:content:)](/documentation/mapkit/annotation/init(_:coordinate:anchor:content:)-2w242) Creates an annotation that displays a view at a coordinate on the map.
- [init(_:coordinate:anchor:content:)](/documentation/mapkit/annotation/init(_:coordinate:anchor:content:)-6wnoh) Creates an annotation that displays a view at a coordinate on the map using a title key, coordinate, anchor location, and view you provide.
- [init(coordinate:anchor:content:label:)](/documentation/mapkit/annotation/init(coordinate:anchor:content:label:)) Creates an annotation that displays a view on the map using coordinates, anchor location, view, and label you provide.

## Displaying place information

- [mapItemDetailSelectionAccessory(_:)](/documentation/mapkit/mapcontent/mapitemdetailselectionaccessory(_:)) Specifies the selection accessory to display for the selected map item content.

## Initializers

- [init(_:coordinate:anchor:accessoryAnchor:content:)](/documentation/mapkit/annotation/init(_:coordinate:anchor:accessoryanchor:content:)-8wi4r) Creates an annotation that displays a view at a coordinate on the map.
- [init(_:coordinate:anchor:content:)](/documentation/mapkit/annotation/init(_:coordinate:anchor:content:)-8k419) Creates an annotation that displays a view at a coordinate on the map.

## Annotations and overlays

- [MapCircle](/documentation/mapkit/mapcircle)
- [MapPolygon](/documentation/mapkit/mappolygon)
- [MapPolyline](/documentation/mapkit/mappolyline)
- [Marker](/documentation/mapkit/marker)
- [UserAnnotation](/documentation/mapkit/userannotation)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

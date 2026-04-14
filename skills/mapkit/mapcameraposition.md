---
title: MapCameraPosition
description: A structure that describes how to position the map’s camera within the map.
source: https://developer.apple.com/documentation/mapkit/mapcameraposition
source_kind: apple-docc
source_json: https://developer.apple.com/tutorials/data/documentation/mapkit/mapcameraposition.json
timestamp: 2026-04-14T13:14:27.964Z
---

**Navigation:** [MapKit](/documentation/mapkit)

**Structure**

# MapCameraPosition

**Available on:** iOS 17.0+, iPadOS 17.0+, Mac Catalyst, macOS 14.0+, tvOS 17.0+, visionOS, watchOS 10.0+

> A structure that describes how to position the map’s camera within the map.

```swift
struct MapCameraPosition
```

## Overview

`MapCameraPosition` contains a variety of properties that you can use to control the semantic framings of the camera in relation to its position to the map, such as [automatic](/documentation/mapkit/mapcameraposition/automatic), which frames the content of the map, and the [camera](/documentation/mapkit/mapcameraposition/camera) property, which allows you to specify an explicit camera position.

When you pass `MapCameraPosition` as a binding to a map, the map adjusts its camera to frame the requested content, or to exactly match the camera `MapCameraPosition` specifies. If a person interacts with the [Map](/documentation/mapkit/map) in a way that moves the map, the map resets the position to a value that specifies [positionedByUser](/documentation/mapkit/mapcameraposition/positionedbyuser).

## Conforms To

- [Equatable](/documentation/Swift/Equatable)

## Creating a camera position

- [camera(_:)](/documentation/mapkit/mapcameraposition/camera(_:)) Creates a new camera position from an existing map camera you provide.
- [item(_:allowsAutomaticPitch:)](/documentation/mapkit/mapcameraposition/item(_:allowsautomaticpitch:)) Creates a new camera position centered on a map item and automatic pitch selection you provide.
- [rect(_:)](/documentation/mapkit/mapcameraposition/rect(_:)) Creates a new camera position with the map boundaries you provide.
- [region(_:)](/documentation/mapkit/mapcameraposition/region(_:)) Creates a new camera position the coordinate region you provide.
- [userLocation(followsHeading:fallback:)](/documentation/mapkit/mapcameraposition/userlocation(followsheading:fallback:)) Creates a camera position with the specific fallback position and optionally follows the user’s heading.

## Information about camera position and framing

- [automatic](/documentation/mapkit/mapcameraposition/automatic) The position that frames the map’s content.
- [allowsAutomaticPitch](/documentation/mapkit/mapcameraposition/allowsautomaticpitch) The setting that allows the map’s camera to automatically set the pitch when framing the item.
- [camera](/documentation/mapkit/mapcameraposition/camera) A map camera that defines the camera positioning.
- [fallbackPosition](/documentation/mapkit/mapcameraposition/fallbackposition) The position to use if the framework hasn’t resolved the person’s location.
- [item](/documentation/mapkit/mapcameraposition/item) The item the map is framing.
- [positionedByUser](/documentation/mapkit/mapcameraposition/positionedbyuser) A Boolean value that indicates whether the person specified the camera position by interacting with the map.
- [rect](/documentation/mapkit/mapcameraposition/rect) The position that frames the given map rectangle.
- [region](/documentation/mapkit/mapcameraposition/region) The coordinate region to frame.

## Accessing information about someone’s location

- [followsUserHeading](/documentation/mapkit/mapcameraposition/followsuserheading) A Boolean value that indicates whether the map is following someone’s heading.
- [followsUserLocation](/documentation/mapkit/mapcameraposition/followsuserlocation) A Boolean value that indicates whether the map is following someone’s location.

## Map customization

- [MapCamera](/documentation/mapkit/mapcamera) Defines a virtual viewpoint above the map surface.
- [MapCameraBounds](/documentation/mapkit/mapcamerabounds) Defines an optional boundary of an area within which the map’s center needs to remain.
- [MapCameraUpdateContext](/documentation/mapkit/mapcameraupdatecontext) A structure that defines additional information about the map camera.
- [MapCameraUpdateFrequency](/documentation/mapkit/mapcameraupdatefrequency) A structure that describes when the map camera updates.

---

*Extracted from Apple DocC JSON by apple-skills tooling.*
*This is unofficial content. All documentation belongs to Apple Inc.*

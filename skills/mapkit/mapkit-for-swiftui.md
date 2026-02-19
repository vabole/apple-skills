---
title: MapKit for SwiftUI
description: MapKit for SwiftUI allows you to build map-centric views and apps across Apple platforms. You can design expressive and highly interactive Maps with minimal code by composing views, using ViewBuilders and view modifiers.
source: https://developer.apple.com/documentation/mapkit/mapkit_for_swiftui
timestamp: 2026-02-19T07:52:37.322Z
---

**Navigation:** [Mapkit](/documentation/mapkit)

**API Collection**

# MapKit for SwiftUI

> MapKit for SwiftUI allows you to build map-centric views and apps across Apple platforms. You can design expressive and highly interactive Maps with minimal code by composing views, using ViewBuilders and view modifiers.

## Overview

Like MapKit for AppKit and UIKit, MapKit for SwiftUI allows you to take advantage of map styles ranging from satellite imagery to rich, 3D perspective imagery to present vivid maps. Using [Map Content Builder](/documentation/mapkit/mapcontentbuilder) you can configure your maps to show [Marker](/documentation/mapkit/marker) and [Annotation](/documentation/mapkit/annotation) views, or — for more specialized content — you can design your own SwiftUI views to place on the map. To add even more interactivity, MapKit for SwiftUI supports overlays to highlight areas on the map, enabling you to animate paths and directions using [Map Polyline](/documentation/mapkit/mappolyline), or make it easy for people to dig deeper into on the ground details with tappable points of interest. People who use your app can also explore at street level using [Look Around Preview](/documentation/mapkit/lookaroundpreview) and Look Around viewer.

> [!NOTE]
> For more information about integrating MapKit into your app using SwiftUI, see WWDC23 session 10043: [](https://developer.apple.com/videos/play/wwdc2023/10043/)

## Essentials

- [Map](/documentation/mapkit/map) A view that displays an embedded map interface.
- [MapStyle](/documentation/mapkit/mapstyle) A style that you can apply to a map.

## Annotations and overlays

- [Annotation](/documentation/mapkit/annotation) A customizable annotation used to indicate a location on a map.
- [MapCircle](/documentation/mapkit/mapcircle) A circular overlay with a configurable radius that you center on a geographic coordinate.
- [MapPolygon](/documentation/mapkit/mappolygon) A closed polygon overlay.
- [MapPolyline](/documentation/mapkit/mappolyline) An open polygon overlay consisting of one or more connected line segments.
- [Marker](/documentation/mapkit/marker) A balloon-shaped annotation that marks a map location.
- [UserAnnotation](/documentation/mapkit/userannotation) Displays the person’s current location on the map.

## Map controls

- [MapCompass](/documentation/mapkit/mapcompass) A view that reflects the current orientation of the associated map.
- [MapLocationCompass](/documentation/mapkit/maplocationcompass) A view that displays a combined user location button and map compass.
- [MapPitchSlider](/documentation/mapkit/mappitchslider) A slider control that allows a person to change the pitch of the map.
- [MapPitchToggle](/documentation/mapkit/mappitchtoggle) A button that sets the pitch of the associated map.
- [MapScaleView](/documentation/mapkit/mapscaleview) Displays a legend with distance information for the associated map.
- [MapUserLocationButton](/documentation/mapkit/mapuserlocationbutton) A button that sets the framing of the associated map to the user location.
- [MapZoomStepper](/documentation/mapkit/mapzoomstepper) Buttons a person uses to adjust the zoom level of the map.

## Exploring at street level

- [LookAroundPreview](/documentation/mapkit/lookaroundpreview) A view that provides a Look Around preview for a specific geographic location.

## Map features

- [MapFeature](/documentation/mapkit/mapfeature) A tappable map feature.
- [MapSelection](/documentation/mapkit/mapselection) A value representing a selected feature on a map.
- [MapSelectable](/documentation/mapkit/mapselectable)

## Map customization

- [MapCamera](/documentation/mapkit/mapcamera) Defines a virtual viewpoint above the map surface.
- [MapCameraBounds](/documentation/mapkit/mapcamerabounds) Defines an optional boundary of an area within which the map’s center needs to remain.
- [MapCameraPosition](/documentation/mapkit/mapcameraposition) A structure that describes how to position the map’s camera within the map.
- [MapCameraUpdateContext](/documentation/mapkit/mapcameraupdatecontext) A structure that defines additional information about the map camera.
- [MapCameraUpdateFrequency](/documentation/mapkit/mapcameraupdatefrequency) A structure that describes when the map camera updates.

## Place information

- [MapItemDetailSelectionAccessoryStyle](/documentation/mapkit/mapitemdetailselectionaccessorystyle) The map item detail selection accessory style.
- [mapItemDetailSelectionAccessory(_:)](/documentation/mapkit/mapcontent/mapitemdetailselectionaccessory(_:)) Specifies the selection accessory to display for the selected map item content.
- [callout(_:)](/documentation/mapkit/mapitemdetailselectionaccessorystyle/callout(_:)) Presents the accessory as an annotation callout on the map.

## Geocoding

- [MKGeocodingRequest](/documentation/mapkit/mkgeocodingrequest) A class that looks up a geographic coordinate using the provided string.
- [MKReverseGeocodingRequest](/documentation/mapkit/mkreversegeocodingrequest) A class that looks up address strings for the provided geographic coordinates.

## Representing places and addresses

- [MKMapItem](/documentation/mapkit/mkmapitem) A point of interest on the map.
- [MKAddress](/documentation/mapkit/mkaddress) A class that contains a full address, and, optionally, a short address.
- [MKAddressRepresentations](/documentation/mapkit/mkaddressrepresentations) A class that provides formatted address strings.
- [GeoToolbox](/documentation/GeoToolbox) Determine place descriptor information for map coordinates.

## Points of interest

- [PointOfInterestCategories](/documentation/mapkit/pointofinterestcategories) A structure you use to define points of interest to include or exclude on a map.

## Protocols

- [DynamicMapContent](/documentation/mapkit/dynamicmapcontent) A  type of view that generates views from an underlying collection of data.
- [MapContent](/documentation/mapkit/mapcontent) A protocol used to construct map content such as controls, markers, and annotations.
- [MapContentBuilder](/documentation/mapkit/mapcontentbuilder) A result builder that creates map content from closures you provide.
- [MapContentView](/documentation/mapkit/mapcontentview) A view that contains content that displays on a map at a specific position, and that responds to specific interactions you specify.

## Structures

- [DefaultUserAnnotationContent](/documentation/mapkit/defaultuserannotationcontent) A structure that represents the view to show at the user’s location on the map.
- [EmptyMapContent](/documentation/mapkit/emptymapcontent) A map content element that doesn’t contain any content.
- [MapProxy](/documentation/mapkit/mapproxy) A proxy for accessing sizing information about a given map view.
- [MapReader](/documentation/mapkit/mapreader) A container view that defines its contents as a function of information about the first contained map.
- [TupleMapContent](/documentation/mapkit/tuplemapcontent) A view created from a Swift tuple of map content values.
- [MapSelectableContentView](/documentation/mapkit/mapselectablecontentview)

## The MapKit APIs

- [MapKit for AppKit and UIKit](/documentation/mapkit/mapkit-for-appkit-and-uikit)
- [Adopting unified Maps URLs](/documentation/mapkit/unified-map-urls)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

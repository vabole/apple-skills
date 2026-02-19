---
title: GeometryReader
description: A container view that defines its content as a function of its own size and coordinate space.
source: https://developer.apple.com/documentation/swiftui/geometryreader
timestamp: 2026-01-19T10:23:18.098Z
---

**Navigation:** [Swiftui](/documentation/swiftui)

**Structure**

# GeometryReader

**Available on:** iOS 13.0+, iPadOS 13.0+, Mac Catalyst 13.0+, macOS 10.15+, tvOS 13.0+, visionOS 1.0+, watchOS 6.0+

> A container view that defines its content as a function of its own size and coordinate space.

```swift
@frozen struct GeometryReader<Content> where Content : View
```

## Overview

This view returns a flexible preferred size to its parent layout.

## Conforms To

- [View](/documentation/swiftui/view)

## Creating a geometry reader

- [init(content:)](/documentation/swiftui/geometryreader/init(content:))
- [content](/documentation/swiftui/geometryreader/content)

## Measuring a view

- [GeometryReader3D](/documentation/swiftui/geometryreader3d)
- [GeometryProxy](/documentation/swiftui/geometryproxy)
- [GeometryProxy3D](/documentation/swiftui/geometryproxy3d)
- [coordinateSpace(_:)](/documentation/swiftui/view/coordinatespace(_:))
- [CoordinateSpace](/documentation/swiftui/coordinatespace)
- [CoordinateSpaceProtocol](/documentation/swiftui/coordinatespaceprotocol)
- [PhysicalMetric](/documentation/swiftui/physicalmetric)
- [PhysicalMetricsConverter](/documentation/swiftui/physicalmetricsconverter)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

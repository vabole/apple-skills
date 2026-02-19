---
title: PointMark
description: Chart content that represents data using points.
source: https://developer.apple.com/documentation/charts/pointmark
timestamp: 2026-02-19T07:56:09.171Z
---

**Navigation:** [Charts](/documentation/charts)

**Structure**

# PointMark

**Available on:** iOS 16.0+, iPadOS 16.0+, Mac Catalyst 16.0+, macOS 13.0+, tvOS 16.0+, visionOS 1.0+, watchOS 9.0+

> Chart content that represents data using points.

```swift
@MainActor @preconcurrency struct PointMark
```

## Overview

You can create different kinds of point charts using the `PointMark` chart content. One common chart you can build with point marks is a scatter plot which displays the relationship between two numerical data properties. To build a scatter plot use the `init(x:y:)`. Provide a `.value` for both the `x` and `y` parameters with a string, used as a label for the data, and the data element to be plotted. The following example plots the `wingLength` and `wingHeight` properties with x and y, respectively:

```swift
struct Insect {
    let name: String
    let family: String
    let wingLength: Double
    let wingWidth: Double
    let weight: Double
}

var data: [Insect] = [
    Insect(name: "Hepialidae", family: "Lepidoptera", wingLength: 61, wingWidth: 52, weight: 22),
    Insect(name: "Danaidae", family: "Lepidoptera", wingLength: 60, wingWidth: 48, weight: 24),
    Insect(name: "Riodinidae", family: "Lepidoptera", wingLength: 53, wingWidth: 43, weight: 18),
    // ...
]

var body: some View {
    Chart(data) {
        PointMark(
            x: .value("Wing Length", $0.wingLength),
            y: .value("Wing Width", $0.wingWidth)
        )
    }
}
```

![A scatter plot with wing width plotted on the x-axis and wing height plotted on the y-axis. There are 12 points on the chart that demonstrate a roughly linear relationship between wing width and height.](https://docs-assets.developer.apple.com/published/fca032573a6787a1f164ba898618e71a/PointMarkSwift.PointMarkScatterChart%402x.png)

### Adding Additional Data Fields

Swift Charts provides three additional modifiers for point mark that each allow you to plot an additional property to a unique visual channel.

| Modifier | Visual Channel |
| --- | --- |
| [foregroundStyle(by:)](/documentation/charts/chartcontent/foregroundstyle(by:)) | plot an additional property with color |
| [symbol(by:)](/documentation/charts/chartcontent/symbol(by:)) | plot an additional property with symbols |
| [symbolSize(by:)](/documentation/charts/chartcontent/symbolsize(by:)) | plot an additional property with size |

For example, to plot the `family` property from the previous example’s `Insect` structure as a color, add the [foregroundStyle(by:)](/documentation/charts/chartcontent/foregroundstyle(by:)) modifier:

```swift
Chart(data) {
    PointMark(
        x: .value("Wing Length", $0.wingLength),
        y: .value("Wing Width", $0.wingWidth)
    )
    .foregroundStyle(by: .value("Family", $0.family))
}
```

![A scatter plot with wing width plotted on the x-axis, wing height plotted on the y-axis, and insect family mapped to a color. There are 12 points on the chart that demonstrate a roughly linear relationship between wing width and height. The points appear in 3 clusters of 4 points each, where the points in each cluster have a different color. The cluster in the lower left has blue points. The cluster in the middle has green points. The cluster in the upper right has orange points. A legend below the plot maps each color to a different insect family. The mappings are Diptera in blue, Hymenoptera in green, and Lepidoptera in orange.](https://docs-assets.developer.apple.com/published/49e25992043ab6be4716951a42c79ec0/PointMarkSwift.PointMarkScatterChartModifiedForegroundColor%402x.png)

The foreground style modifier automatically generates a color scale that provides each mark with a color that reflects its value property. To learn how to modify the default color scale, see `ScaleModifiers`. The modifier also provides a default legend. To learn how to modify or disable the legend, see `ChartLegend`.

Alternatively, you can distinguish families with different symbols by plotting the `family` property using the [symbol(by:)](/documentation/charts/chartcontent/symbol(by:)) modifier:

```swift
Chart(data) {
    PointMark(
        x: .value("Wing Length", $0.wingLength),
        y: .value("Wing Width", $0.wingWidth)
    )
    .symbol(by: .value("Family", $0.family))
}
```

![A scatter plot with wing width plotted on the x-axis, wing height plotted on the y-axis, and insect family mapped to a symbol. There are 12 points on the chart that demonstrate a roughly linear relationship between wing width and height. The points appear in 3 clusters of 4 points each, where the points in each cluster have different symbols. The cluster in the lower left has circular points. The cluster in the middle has square points. The cluster in the upper right has triangular points. A legend below the plot maps each symbol to a different insect family. The mappings are circles for Diptera, squares for Hymenoptera, and triangles for Lepidoptera.](https://docs-assets.developer.apple.com/published/222692d8e981eed4acae351940ac42c8/PointMarkSwift.PointMarkScatterChartModifiedSymbol%402x.png)

### PointMark in Chart3D

To make a point in a 3D Chart, use the [init(x:y:z:)](/documentation/charts/pointmark/init(x:y:z:)) initializer.

In addition to an `x` and `y` value, you can now position your `PointMark` along the `z` axis.

For example, in addition to plotting an insect’s `wingLength` and `wingWidth` you can also plot their `weight` with the following `Chart3D`:

```swift
Chart3D(data) {
    PointMark(
        x: .value("Wing Length", $0.wingLength),
        y: .value("Wing Width", $0.wingWidth),
        z: .value("Weight", $0.weight)
    )
    .foregroundStyle(by: .value("Category", $0.family))
}
```

## Styling a 3D PointMark

3D points also offer symbols, such as  [sphere](/documentation/charts/chart3dsymbolshape/sphere), [cylinder](/documentation/charts/chart3dsymbolshape/cylinder), [cone](/documentation/charts/chart3dsymbolshape/cone), and [cube](/documentation/charts/chart3dsymbolshape/cube). Combined with the [symbolSize(_:)](/documentation/charts/chart3dcontent/symbolsize(_:)) and [symbolRotation(_:)](/documentation/charts/chart3dcontent/symbolrotation(_:)) modifiers, you can provide rich customizations for your 3D points:

```swift
Chart3D(PointMarkData.insectData) {
    PointMark(
        x: .value("Wing Length", $0.wingLength),
        y: .value("Wing Width", $0.wingWidth),
        z: .value("Weight", $0.weight)
    )
    .symbol(.cone)
    .symbolSize(0.05)
    .foregroundStyle(by: .value("Category", $0.family))
}
```

## Conforms To

- [Chart3DContent](/documentation/charts/chart3dcontent)
- [ChartContent](/documentation/charts/chartcontent)
- [Copyable](/documentation/Swift/Copyable)
- [Escapable](/documentation/Swift/Escapable)
- [Sendable](/documentation/Swift/Sendable)
- [SendableMetatype](/documentation/Swift/SendableMetatype)

## Creating a point mark

- [init(x:y:)](/documentation/charts/pointmark/init(x:y:)-44ke9) Creates a point mark that plots values to x and y.
- [init(x:y:)](/documentation/charts/pointmark/init(x:y:)-9dswq) Creates a point mark with fixed x position and plots values with y.
- [init(x:y:)](/documentation/charts/pointmark/init(x:y:)-9hppd) Creates a point mark that plots a value on x with fixed y position.
- [init(x:y:z:)](/documentation/charts/pointmark/init(x:y:z:)) Creates a 3D point mark that plots values to x, y and z.

## Marks

- [AreaMark](/documentation/charts/areamark)
- [LineMark](/documentation/charts/linemark)
- [RectangleMark](/documentation/charts/rectanglemark)
- [RuleMark](/documentation/charts/rulemark)
- [BarMark](/documentation/charts/barmark)
- [SectorMark](/documentation/charts/sectormark)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

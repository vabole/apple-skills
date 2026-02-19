---
title: RuleMark
description: Chart content that represents data using a single horizontal or vertical rule.
source: https://developer.apple.com/documentation/charts/rulemark
timestamp: 2026-01-19T10:22:47.219Z
---

**Navigation:** [Charts](/documentation/charts)

**Structure**

# RuleMark

**Available on:** iOS 16.0+, iPadOS 16.0+, Mac Catalyst 16.0+, macOS 13.0+, tvOS 16.0+, visionOS 1.0+, watchOS 9.0+

> Chart content that represents data using a single horizontal or vertical rule.

```swift
@MainActor @preconcurrency struct RuleMark
```

## Overview

You can use `RuleMark` to plot a horizontal or vertical rule in your chart.

### Show Range with Rule Marks

To create a horizontal line at a `y` position from `xStart` to `xEnd` you use the `init(xStart:xEnd:y:)` or `init(xStart:xEnd:y:)`.  To create a vertical line at an `x` position from `yStart` to `yEnd` you use `init(x:yStart:yEnd:)` or `init(x:yStart:yEnd:)`. The example below uses the `Pollen` structure and the `init(xStart:xEnd:y:)` to map horizontal lines that span from the value of the `startDate` to the value of the `endDate`  for x positions to a pollen `source` property’s y position:

```swift
struct Pollen {
    var source: String
    var startDate: Date
    var endDate: Date

    init(startMonth: Int, numMonths: Int, source: String) {
        self.source = source
        let calendar = Calendar.autoupdatingCurrent
        self.startDate = calendar.date(from: DateComponents(year: 2020, month: startMonth, day: 1))!
        self.endDate = calendar.date(byAdding: .month, value: numMonths, to: startDate)!
    }
}

var data: [Pollen] = [
    Pollen(startMonth: 1, numMonths: 9, source: "Trees"),
    Pollen(startMonth: 12, numMonths: 1, source: "Trees"),
    Pollen(startMonth: 3, numMonths: 8, source: "Grass"),
    Pollen(startMonth: 4, numMonths: 8, source: "Weeds")
]

var body: some View {
    Chart(data) {
        RuleMark(
            xStart: .value("Start Date", $0.startDate),
            xEnd: .value("End Date", $0.endDate),
            y: .value("Pollen Source", $0.source)
        )
    }
}
```



### Annotate a chart with rule mark

You can annotate a chart with horizontal or vertically spanning rules. This allows viewers to easily compare values over a range to a constant value. Use the [init(xStart:xEnd:y:)](/documentation/charts/rulemark/init(xstart:xend:y:)-444cp) initializer to represent a constant `y` value or [init(x:yStart:yEnd:)](/documentation/charts/rulemark/init(x:ystart:yend:)-6zemd) for a constant `x` value. To span the plotting area of a chart with a line, omit the optional start and end parameters and plot a constant value.  The example below results in a line that spans the chart horizontally at the y position of 9000:

```swift
struct DepartmentProfit {
    var department: String
    var profit: Double
}

var data: [DepartmentProfit] = [
    DepartmentProfit(department: "Production", profit: 15000),
    DepartmentProfit(department: "Marketing", profit: 8000),
    DepartmentProfit(department: "Finance", profit: 10000)
]

var body: some View {
    Chart
        ForEach(data) {
            BarMark(
                x: .value("Department", $0.department),
                y: .value("Profit", $0.profit)
            )
        }
        RuleMark(y: .value("Break Even Threshold", 9000))
            .foregroundStyle(.red)
    }
}
```



### RuleMark in Chart3D

To plot a rule in a 3D chart, use the [init(x:y:z:)](/documentation/charts/rulemark/init(x:y:z:)) initializer.

The rule extends along the axis that you provide a range for, and is positioned at the single points you specify for the other two axes.

> [!IMPORTANT]
> A 3D rule mark requires one parameter to be a numeric range and the other two parameters to be single numeric values.

For example, the following `Chart3D` shows three rule marks. Each mark extends along one axis and is fixed at `0` on the other two.

```swift
Chart3D {
    // A rule that extends along the x-axis
    RuleMark(
        x: .value("x", -0.5..<0.5),
        y: .value("y", 0),
        z: .value("z", 0)
    )
    .foregroundStyle(.red)

    // A rule that extends along the y-axis
    RuleMark(
        x: .value("x", 0),
        y: .value("y", -0.5..<0.5),
        z: .value("z", 0)
    )
    .foregroundStyle(.green)

    // A rule that extends along the z-axis
    RuleMark(
        x: .value("x", 0),
        y: .value("y", 0),
        z: .value("z", -0.5..<0.5)
    )
    .foregroundStyle(.blue)
}
```

## Conforms To

- [Chart3DContent](/documentation/charts/chart3dcontent)
- [ChartContent](/documentation/charts/chartcontent)
- [Copyable](/documentation/Swift/Copyable)
- [Sendable](/documentation/Swift/Sendable)
- [SendableMetatype](/documentation/Swift/SendableMetatype)

## Initializers

- [init(x:y:z:)](/documentation/charts/rulemark/init(x:y:z:)) Creates a horizontal or vertical rule mark for a  3D chart.
- [init(x:yStart:yEnd:)](/documentation/charts/rulemark/init(x:ystart:yend:)-5gy50) Creates a vertical rule mark with an x encoding and y interval encoding.
- [init(x:yStart:yEnd:)](/documentation/charts/rulemark/init(x:ystart:yend:)-6zemd) Creates a vertical rule mark with value plotted with x.
- [init(x:yStart:yEnd:)](/documentation/charts/rulemark/init(x:ystart:yend:)-8iusl) Creates a vertical rule mark with a fixed x position and y interval encoding.
- [init(xStart:xEnd:y:)](/documentation/charts/rulemark/init(xstart:xend:y:)-27yvc) Creates a horizontal rule mark that plots values on its x interval and on y.
- [init(xStart:xEnd:y:)](/documentation/charts/rulemark/init(xstart:xend:y:)-444cp) Creates a horizontal rule mark that plots a value on y.
- [init(xStart:xEnd:y:)](/documentation/charts/rulemark/init(xstart:xend:y:)-6jsoi) Creates a horizontal rule mark that plots values on its x interval.

## Marks

- [AreaMark](/documentation/charts/areamark)
- [LineMark](/documentation/charts/linemark)
- [PointMark](/documentation/charts/pointmark)
- [RectangleMark](/documentation/charts/rectanglemark)
- [BarMark](/documentation/charts/barmark)
- [SectorMark](/documentation/charts/sectormark)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

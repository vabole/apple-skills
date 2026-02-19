---
title: LineMark
description: Chart content that represents data using a sequence of connected line segments.
source: https://developer.apple.com/documentation/charts/linemark
timestamp: 2026-02-19T07:56:08.754Z
---

**Navigation:** [Charts](/documentation/charts)

**Structure**

# LineMark

**Available on:** iOS 16.0+, iPadOS 16.0+, Mac Catalyst 16.0+, macOS 13.0+, tvOS 16.0+, visionOS 1.0+, watchOS 9.0+

> Chart content that represents data using a sequence of connected line segments.

```swift
@MainActor @preconcurrency struct LineMark
```

## Overview

You create a line chart by plotting a category or date property, typically with the x position, and plotting a number category, typically with the y position. The example below plots the `date` property to the x position and the `hoursOfSunshine` property to the y position using [init(x:y:)](/documentation/charts/linemark/init(x:y:)):

```swift
struct MonthlyHoursOfSunshine {
    var date: Date
    var hoursOfSunshine: Double

    init(month: Int, hoursOfSunshine: Double) {
        let calendar = Calendar.autoupdatingCurrent
        self.date = calendar.date(from: DateComponents(year: 2020, month: month))!
        self.hoursOfSunshine = hoursOfSunshine
    }
}

var data: [MonthlyHoursOfSunshine] = [
    MonthlyHoursOfSunshine(month: 1, hoursOfSunshine: 74),
    MonthlyHoursOfSunshine(month: 2, hoursOfSunshine: 99),
    // ...
    MonthlyHoursOfSunshine(month: 12, hoursOfSunshine: 62)
]

var body: some View {
    Chart(data) {
        LineMark(
            x: .value("Month", $0.date),
            y: .value("Hours of Sunshine", $0.hoursOfSunshine)
        )
    }
}
```

![Line chart with date on x-axis and hours of sunshine on y-axis. One line showing 12 points representing hours of sunshine in a month 1 74, 2 99, 3 154, 4 201, 5 247, 6 234, 7 304, 8 248, 9 197, 10 122, 11 77, 12 62.](https://docs-assets.developer.apple.com/published/f5d223bb9ca48efff7a8b1d5772443a5/LineMarkSwift.LineMarkLineChart%402x.png)

### Plotting multiple lines

You can plot multiple lines in a chart either by explicitly specifying the `series` parameter in [init(x:y:series:)](/documentation/charts/linemark/init(x:y:series:)) or by applying the [foregroundStyle(_:)](/documentation/charts/chartcontent/foregroundstyle(_:)) or [lineStyle(_:)](/documentation/charts/chartcontent/linestyle(_:)) modifiers. Line marks with the same `series` value will always be rendered together as a single line. When `series` is unspecified line marks with the same value plotted to foreground style and line style will be grouped together and plotted on their own line. The example below plots one line per distinct value in `city` and colors each line based on the `city` it represents:

```swift
struct MonthlyHoursOfSunshine {
    var city: String
    var date: Date
    var hoursOfSunshine: Double

    init(city: String, month: Int, hoursOfSunshine: Double) {
        let calendar = Calendar.autoupdatingCurrent
        self.city = city
        self.date = calendar.date(from: DateComponents(year: 2020, month: month))!
        self.hoursOfSunshine = hoursOfSunshine
    }
}

var data: [MonthlyHoursOfSunshine] = [
    MonthlyHoursOfSunshine(city: "Seattle", month: 1, hoursOfSunshine: 74),
    MonthlyHoursOfSunshine(city: "Cupertino", month: 1, hoursOfSunshine: 196),
    // ...
    MonthlyHoursOfSunshine(city: "Seattle", month: 12, hoursOfSunshine: 62),
    MonthlyHoursOfSunshine(city: "Cupertino", month: 12, hoursOfSunshine: 199)
]

var body: some View {
    Chart(data) {
        LineMark(
            x: .value("Month", $0.date),
            y: .value("Hours of Sunshine", $0.hoursOfSunshine)
        )
        .foregroundStyle(by: .value("City", $0.city))
    }
}
```

![Multi-series line chart with date on x-axis and hours of sunshine on y-axis. Two lines showing 12 points representing hours of sunshine in a month for  a city. Seattle: 1 74, 2 99, 3 154, 4 201, 5 247, 6 234, 7 304, 8 248, 9 197, 10 122, 11 77, 12 62 and Cupertino: 1 196, 2 204, 3 253, 4 288, 5 311, 6 342, 7 360, 8 331, 9 300, 10 246, 11 212, 12 199.](https://docs-assets.developer.apple.com/published/664a5f51f8a32304b545b80911697bb0/LineMarkSwift.LineMarkMultiSeriesLineChart%402x.png)

> [!NOTE]
> Colors are repeated if the number of series is greater than the total number of colors.

## Conforms To

- [ChartContent](/documentation/charts/chartcontent)
- [Copyable](/documentation/Swift/Copyable)
- [Escapable](/documentation/Swift/Escapable)
- [Sendable](/documentation/Swift/Sendable)
- [SendableMetatype](/documentation/Swift/SendableMetatype)

## Creating a line mark

- [init(x:y:)](/documentation/charts/linemark/init(x:y:)) Creates a line mark.
- [init(x:y:series:)](/documentation/charts/linemark/init(x:y:series:)) Creates a separate line for each unique value of series.

## Marks

- [AreaMark](/documentation/charts/areamark)
- [PointMark](/documentation/charts/pointmark)
- [RectangleMark](/documentation/charts/rectanglemark)
- [RuleMark](/documentation/charts/rulemark)
- [BarMark](/documentation/charts/barmark)
- [SectorMark](/documentation/charts/sectormark)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

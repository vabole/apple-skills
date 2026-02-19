---
title: AreaMark
description: Chart content that represents data using the area of one or more regions.
source: https://developer.apple.com/documentation/charts/areamark
timestamp: 2026-02-19T07:56:08.120Z
---

**Navigation:** [Charts](/documentation/charts)

**Structure**

# AreaMark

**Available on:** iOS 16.0+, iPadOS 16.0+, Mac Catalyst 16.0+, macOS 13.0+, tvOS 16.0+, visionOS 1.0+, watchOS 9.0+

> Chart content that represents data using the area of one or more regions.

```swift
@MainActor @preconcurrency struct AreaMark
```

## Overview

Use `AreaMark` to represent data as filled regions on a chart. To create a simple area mark chart, plot a date or an ordered string property on the x-axis, and a number on the y-axis. For example, suppose you have data that represents the cost of a cheeseburger over time, stored in an array of `Food` structures:

```swift
let cheeseburgerCost: [Food] = [
    .init(name: "Cheeseburger", price: 0.15, year: 1960),
    .init(name: "Cheeseburger", price: 0.20, year: 1970),
    // ...
    .init(name: "Cheeseburger", price: 1.10, year: 2020)
]

struct Food: Identifiable {
    let name: String
    let price: Double
    let date: Date
    let id = UUID()

    init(name: String, price: Double, year: Int) {
        self.name = name
        self.price = price
        let calendar = Calendar.autoupdatingCurrent
        self.date = calendar.date(from: DateComponents(year: year))!
    }
}
```

You can create labeled data in the form of [Plottable Value](/documentation/charts/plottablevalue) instances for each of the `x` and `y` inputs to an area mark:

```swift
Chart(cheeseburgerCost) { cost in
    AreaMark(
        x: .value("Date", cost.date),
        y: .value("Price", cost.price)
    )
}
```

The resulting chart automatically scales and labels the axes based on the data, and fills the area under the data points with a default color:

![A chart that shows the years 1960 to 2020 on the x-axis and a number in the range of 0 to 1.5 on the y-axis. An irregular, monotonically increasing, piecewise linear curve starts near the lower left and continues toward the upper right. The area under the curve is filled in with a blue color.](https://docs-assets.developer.apple.com/published/36b91667605910cb6256e819437543de/AreaMark-1-macOS%402x.png)

If you want only the line without filling in the area below the line, use [Line Mark](/documentation/charts/linemark) instead.

### Add detail with a stacked area chart

To represent an additional dimension of information, you can create a stacked area chart. For example, suppose you have another data set that represents the same cost data from the previous example, but which is broken into the component costs for the burger, bun, and cheese:

```swift
let cheeseburgerCostByItem: [Food] = [
    .init(name: "Burger", price: 0.07, year: 1960),
    .init(name: "Cheese", price: 0.03, year: 1960),
    .init(name: "Bun", price: 0.05, year: 1960),
    .init(name: "Burger", price: 0.10, year: 1970),
    .init(name: "Cheese", price: 0.04, year: 1970),
    .init(name: "Bun", price: 0.06, year: 1970),
    // ...
    .init(name: "Burger", price: 0.60, year: 2020),
    .init(name: "Cheese", price: 0.26, year: 2020),
    .init(name: "Bun", price: 0.24, year: 2020)
]
```

You can again create an area mark with the data, but in this case add the [foregroundStyle(by:)](/documentation/charts/chartcontent/foregroundstyle(by:)) modifier to create a stacked area chart that divides the information into distinct regions based on the data’s `name` property:

```swift
Chart(cheeseburgerCostByItem) { cost in
    AreaMark(
        x: .value("Date", cost.date),
        y: .value("Price", cost.price)
    )
    .foregroundStyle(by: .value("Food Item", cost.name))
}
```

The chart automatically assigns a different color to each region, and adds a legend that indicates what each color represents based on the names that you provide to the modifier:

![A chart that shows the years 1960 to 2020 on the x-axis and a number in the range of 0 to 1.5 on the y-axis. Three irregular, non-intersecting, monotonically increasing, piecewise linear curves start near the lower left and continue toward the upper right. The area under the bottom curve is filled with blue. The area above the bottom curve and below the next curve is filled with green. The area above the second and below the top curve is filled with orange. A legend below the chart area indicates that blue corresponds to Burger, green to Cheese, and orange to Bun.](https://docs-assets.developer.apple.com/published/f03ac9a62e36cdb1ce6df64115395802/AreaMark-2-macOS%402x.png)

### Stack the data in different ways

You can highlight different aspects of the data by stacking it in different ways. For example, the previous chart shows the absolute contributions of each ingredient to the cheeseburger’s total cost. To see the relative contributions instead, you can create a normalized chart by setting the area mark’s `stacking` parameter to [normalized](/documentation/charts/markstackingmethod/normalized):

```swift
Chart(cheeseburgerCostByItem) { cost in
    AreaMark(
        x: .value("Date", cost.date),
        y: .value("Price", cost.price),
        stacking: .normalized
    )
    .foregroundStyle(by: .value("Food Item", cost.name))
}
```

![A chart that shows the years 1960 to 2020 on the x-axis and a number in the range of 0 to 100 on the y-axis. The entire chart is filled with color, divided into three different horizontal regions that are separated by irregular, piecewise linear curves that span the width of the chart. The area under the bottom curve is filled with blue. The area above the bottom curve and below the top curve is filled with green. The area above the top curve is filled with orange. A legend below the chart area indicates that blue corresponds to Burger, green to Cheese, and orange to Bun.](https://docs-assets.developer.apple.com/published/f4379eba09194b147f20c639f3cd0683/AreaMark-3-macOS%402x.png)

Alternatively, you can use [center](/documentation/charts/markstackingmethod/center) stacking to create a streamgraph, which shifts the area chart’s baseline to the center of the chart’s plotting area:

```swift
Chart(cheeseburgerCostByItem) { cost in
    AreaMark(
        x: .value("Date", cost.date),
        y: .value("Price", cost.price),
        stacking: .center
    )
    .foregroundStyle(by: .value("Food Item", cost.name))
}
```

![A chart that shows the years 1960 to 2020 on the x-axis and a number in the range of -1 to 1 on the y-axis. Three irregular, piecewise linear horizontal regions appear near the middle of the chart, growing from small on the left to larger on the right. The top region is filled with orange, the middle region is filled with green, and the bottom region is filled with blue. A legend below the chart area indicates that blue corresponds to Burger, green to Cheese, and orange to Bun.](https://docs-assets.developer.apple.com/published/bd7f2fe8fa45dce254912e1fbd5e86c1/AreaMark-4-macOS%402x.png)

### Create a range area chart

You can also use area marks to create a range area chart, where you provide an interval to fill in for each data point. To do this, you provide either a date or ordered string category for the x-axis and a range of values for the y-axis, or vice versa. For example, suppose you record the minimum and maximum temperatures every day in a `Weather` structure:

```swift
struct Weather: Identifiable {
    let date: Date
    let maximumTemperature: Double
    let minimumTemperature: Double
    let id: Int
}
```

If you load a collection of these structures into a `data` array, you can use the date on the x-axis, and each day’s minimum and maximum temperature as the start and end points for the y-axis:

```swift
Chart(data) { day in
    AreaMark(
        x: .value("Date", day.date),
        yStart: .value("Minimum Temperature", day.minimumTemperature),
        yEnd: .value("Maximum Temperature", day.maximumTemperature)
    )
}
```

This creates a filled region that’s shaped by the start and end points on each date:

![A chart that shows month names on the x-axis, ranging from January to October, and a number in the range 0 to 80 on the y-axis. A solid blue region spans the chart from left to right. The region is close to the middle of the y-axis on either end, and closer to the top of the chart in the middle. The region is thinner at the ends and thicker in the middle.](https://docs-assets.developer.apple.com/published/312b9822d288c8f1e400decc5e04ad9e/AreaMark-5-macOS%402x.png)

```swift

```

## Conforms To

- [ChartContent](/documentation/charts/chartcontent)
- [Copyable](/documentation/Swift/Copyable)
- [Escapable](/documentation/Swift/Escapable)
- [Sendable](/documentation/Swift/Sendable)
- [SendableMetatype](/documentation/Swift/SendableMetatype)

## Creating an area mark

- [init(x:y:stacking:)](/documentation/charts/areamark/init(x:y:stacking:)) Creates an area mark using the specified horizontal and vertical positions.
- [init(x:y:series:stacking:)](/documentation/charts/areamark/init(x:y:series:stacking:)) Creates an area mark and associates it with the specified series.

## Creating a range area chart

- [init(x:yStart:yEnd:)](/documentation/charts/areamark/init(x:ystart:yend:)) Creates an area mark that plots values with a vertical interval.
- [init(x:yStart:yEnd:series:)](/documentation/charts/areamark/init(x:ystart:yend:series:)) Creates an area mark that plots values with a vertical interval and associates it with the specified series.
- [init(xStart:xEnd:y:)](/documentation/charts/areamark/init(xstart:xend:y:)) Creates an area mark that plots values with a horizontal interval.
- [init(xStart:xEnd:y:series:)](/documentation/charts/areamark/init(xstart:xend:y:series:)) Creates an area mark that plots values with a horizontal interval and associates it with the specified series.

## Marks

- [LineMark](/documentation/charts/linemark)
- [PointMark](/documentation/charts/pointmark)
- [RectangleMark](/documentation/charts/rectanglemark)
- [RuleMark](/documentation/charts/rulemark)
- [BarMark](/documentation/charts/barmark)
- [SectorMark](/documentation/charts/sectormark)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

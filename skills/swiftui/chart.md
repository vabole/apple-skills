---
title: Chart
description: A SwiftUI view that displays a chart.
source: https://developer.apple.com/documentation/charts/chart
timestamp: 2026-02-19T07:56:10.806Z
---

**Navigation:** [Charts](/documentation/charts)

**Structure**

# Chart

**Available on:** iOS 16.0+, iPadOS 16.0+, Mac Catalyst 16.0+, macOS 13.0+, tvOS 16.0+, visionOS 1.0+, watchOS 9.0+

> A SwiftUI view that displays a chart.

```swift
@MainActor @preconcurrency struct Chart<Content> where Content : ChartContent
```

## Overview

To create a chart, instantiate a `Chart` structure with marks that display the properties of your data. For example, suppose you have an array of `ValuePerCategory` structures that define data points composed of a `category` and a `value`:

```swift
struct ValuePerCategory {
    var category: String
    var value: Double
}

let data: [ValuePerCategory] = [
    .init(category: "A", value: 5),
    .init(category: "B", value: 9),
    .init(category: "C", value: 7)
]
```

You can use [Bar Mark](/documentation/charts/barmark) inside a chart to represent the `category` property as different bars in the chart and the `value` property as the y value for each bar:

```swift
Chart(data, id: \.category) { item in
    BarMark(
        x: .value("Category", item.category),
        y: .value("Value", item.value)
    )
}
```

This chart initializer behaves a lot like a SwiftUI [For Each](/documentation/SwiftUI/ForEach), creating a mark — in this case, a bar — for each of the values in the `data` array:

![A bar chart with three categories A, B, and C on the x-axis and a range of 0 to 10 on the y-axis. A bar appears in each category. All the bars are the same color. The first has a value of 5. The second has a value of 9. The third has a value of 7.](https://docs-assets.developer.apple.com/published/e8d88794fa77f18d67e494cac557a292/chart-1-macOS%402x.png)

### Controlling data series inside a chart

You can compose more sophisticated charts by providing more than one series of marks to the chart. For example, suppose you have profit data for two companies:

```swift
struct ProfitOverTime {
    var date: Date
    var profit: Double
}

let departmentAProfit: [ProfitOverTime] = <#Profit array A#>
let departmentBProfit: [ProfitOverTime] = <#Profit array B#>
```

The following chart creates two different series of [Line Mark](/documentation/charts/linemark) instances with different colors to represent the data for each company. In effect, it moves the `ForEach` construct from the chart’s initializer into the body of the chart, enabling you to represent multiple different series:

```swift
Chart {
    ForEach(departmentAProfit, id: \.date) { item in
        LineMark(
            x: .value("Date", item.date),
            y: .value("Profit A", item.profit),
            series: .value("Company", "A")
        )
        .foregroundStyle(.blue)
    }
    ForEach(departmentBProfit, id: \.date) { item in
        LineMark(
            x: .value("Date", item.date),
            y: .value("Profit B", item.profit),
            series: .value("Company", "B")
        )
        .foregroundStyle(.green)
    }
    RuleMark(
        y: .value("Threshold", 400)
    )
    .foregroundStyle(.red)
}
```

You indicate which series a line mark belongs to by specifying its `series` input parameter. The above chart also uses a [Rule Mark](/documentation/charts/rulemark) to produce a horizontal line segment that displays a constant threshold value across the width of the chart:

![A line chart with three lines. Dates appear on the x-axis, spanning one full month, and company profit appears on the y-axis in the range of 0 to 750. Two of the lines trend upward from left to right, with occasional downward movement. The third line is purely horizontal at the level of 400.](https://docs-assets.developer.apple.com/published/689db8aa648e1884570bed622d3af3a1/chart-2-macOS%402x.png)

## Conforms To

- [Sendable](/documentation/Swift/Sendable)
- [SendableMetatype](/documentation/Swift/SendableMetatype)
- [View](/documentation/SwiftUI/View)

## Creating a chart

- [init(content:)](/documentation/charts/chart/init(content:)) Creates a chart composed of any number of data series and individual marks.
- [init(_:content:)](/documentation/charts/chart/init(_:content:)) Creates a chart composed of a series of identifiable marks.
- [init(_:id:content:)](/documentation/charts/chart/init(_:id:content:)) Creates a chart composed of a series of marks.

## Supporting types

- [body](/documentation/charts/chartcontent/body-swift.property) The content and behavior of the chart content.

## Charts

- [Creating a chart using Swift Charts](/documentation/charts/creating-a-chart-using-swift-charts)
- [Visualizing your app’s data](/documentation/charts/visualizing-your-app-s-data)
- [ChartContent](/documentation/charts/chartcontent)
- [ChartContentBuilder](/documentation/charts/chartcontentbuilder)
- [Plot](/documentation/charts/plot)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

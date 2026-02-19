---
title: Slider
description: A control for selecting a value from a bounded linear range of values.
source: https://developer.apple.com/documentation/swiftui/slider
timestamp: 2026-01-19T10:23:16.377Z
---

**Navigation:** [Swiftui](/documentation/swiftui)

**Structure**

# Slider

**Available on:** iOS 13.0+, iPadOS 13.0+, Mac Catalyst 13.0+, macOS 10.15+, visionOS 1.0+, watchOS 6.0+

> A control for selecting a value from a bounded linear range of values.

```swift
struct Slider<Label, ValueLabel> where Label : View, ValueLabel : View
```

## Overview

A slider consists of a “thumb” image that the user moves between two extremes of a linear “track”. The ends of the track represent the minimum and maximum possible values. As the user moves the thumb, the slider updates its bound value.

The following example shows a slider bound to the value `speed`. As the slider updates this value, a bound [Text](/documentation/swiftui/text) view shows the value updating. The `onEditingChanged` closure passed to the slider receives callbacks when the user drags the slider. The example uses this to change the color of the value text.

```swift
@State private var speed = 50.0
@State private var isEditing = false

var body: some View {
    VStack {
        Slider(
            value: $speed,
            in: 0...100,
            onEditingChanged: { editing in
                isEditing = editing
            }
        )
        Text("\(speed)")
            .foregroundColor(isEditing ? .red : .blue)
    }
}
```



You can also use a `step` parameter to provide incremental steps along the path of the slider. For example, if you have a slider with a range of `0` to `100`, and you set the `step` value to `5`, the slider’s increments would be `0`, `5`, `10`, and so on. The following example shows this approach, and also adds optional minimum and maximum value labels.

```swift
@State private var speed = 50.0
@State private var isEditing = false

var body: some View {
    Slider(
        value: $speed,
        in: 0...100,
        step: 5
    ) {
        Text("Speed")
    } minimumValueLabel: {
        Text("0")
    } maximumValueLabel: {
        Text("100")
    } onEditingChanged: { editing in
        isEditing = editing
    }
    Text("\(speed)")
        .foregroundColor(isEditing ? .red : .blue)
}
```



The slider also uses the `step` to increase or decrease the value when a VoiceOver user adjusts the slider with voice commands.

## Conforms To

- [View](/documentation/swiftui/view)

## Creating a slider

- [init(value:in:onEditingChanged:)](/documentation/swiftui/slider/init(value:in:oneditingchanged:)) Creates a slider to select a value from a given range.
- [init(value:in:step:onEditingChanged:)](/documentation/swiftui/slider/init(value:in:step:oneditingchanged:)) Creates a slider to select a value from a given range, subject to a step increment.

## Creating a slider with labels

- [init(value:in:label:onEditingChanged:)](/documentation/swiftui/slider/init(value:in:label:oneditingchanged:)) Creates a slider to select a value from a given range, which displays the provided label.
- [init(value:in:step:label:onEditingChanged:)](/documentation/swiftui/slider/init(value:in:step:label:oneditingchanged:)) Creates a slider to select a value from a given range, subject to a step increment, which displays the provided label.
- [init(value:in:label:minimumValueLabel:maximumValueLabel:onEditingChanged:)](/documentation/swiftui/slider/init(value:in:label:minimumvaluelabel:maximumvaluelabel:oneditingchanged:)) Creates a slider to select a value from a given range, which displays the provided labels.
- [init(value:in:step:label:minimumValueLabel:maximumValueLabel:onEditingChanged:)](/documentation/swiftui/slider/init(value:in:step:label:minimumvaluelabel:maximumvaluelabel:oneditingchanged:)) Creates a slider to select a value from a given range, subject to a step increment, which displays the provided labels.

## Adding ticks to a slider

- [SliderTick](/documentation/swiftui/slidertick) A representation of a tick in a slider, with associated value and optional label.
- [SliderTickBuilder](/documentation/swiftui/slidertickbuilder) A result builder that constructs s for use when creating a .
- [SliderTickContentForEach](/documentation/swiftui/slidertickcontentforeach) A type of slider content that creates content by iterating over a collection.
- [TupleSliderTickContent](/documentation/swiftui/tupleslidertickcontent) Slider content created from a Swift tuple of slider content.
- [SliderTickContent](/documentation/swiftui/slidertickcontent) A type that provides content for a .

## Deprecated initializers

- [init(value:in:onEditingChanged:label:)](/documentation/swiftui/slider/init(value:in:oneditingchanged:label:)) Creates a slider to select a value from a given range, which displays the provided label.
- [init(value:in:step:onEditingChanged:label:)](/documentation/swiftui/slider/init(value:in:step:oneditingchanged:label:)) Creates a slider to select a value from a given range, subject to a step increment, which displays the provided label.
- [init(value:in:onEditingChanged:minimumValueLabel:maximumValueLabel:label:)](/documentation/swiftui/slider/init(value:in:oneditingchanged:minimumvaluelabel:maximumvaluelabel:label:)) Creates a slider to select a value from a given range, which displays the provided labels.
- [init(value:in:step:onEditingChanged:minimumValueLabel:maximumValueLabel:label:)](/documentation/swiftui/slider/init(value:in:step:oneditingchanged:minimumvaluelabel:maximumvaluelabel:label:)) Creates a slider to select a value from a given range, subject to a step increment, which displays the provided labels.

## Initializers

- [init(value:in:neutralValue:enabledBounds:label:currentValueLabel:minimumValueLabel:maximumValueLabel:onEditingChanged:)](/documentation/swiftui/slider/init(value:in:neutralvalue:enabledbounds:label:currentvaluelabel:minimumvaluelabel:maximumvaluelabel:oneditingchanged:)) Creates a slider to select a value from a given range, which displays the provided labels.
- [init(value:in:neutralValue:enabledBounds:label:currentValueLabel:minimumValueLabel:maximumValueLabel:ticks:onEditingChanged:)](/documentation/swiftui/slider/init(value:in:neutralvalue:enabledbounds:label:currentvaluelabel:minimumvaluelabel:maximumvaluelabel:ticks:oneditingchanged:)) Creates a slider to select a value from a given range, which displays the provided labels and customized ticks.
- [init(value:in:step:neutralValue:enabledBounds:label:currentValueLabel:minimumValueLabel:maximumValueLabel:tick:onEditingChanged:)](/documentation/swiftui/slider/init(value:in:step:neutralvalue:enabledbounds:label:currentvaluelabel:minimumvaluelabel:maximumvaluelabel:tick:oneditingchanged:)) Creates a slider to select a value from a given range, subject to a step increment, which displays the provided labels and customizable ticks.

## Getting numeric inputs

- [Stepper](/documentation/swiftui/stepper)
- [Toggle](/documentation/swiftui/toggle)
- [toggleStyle(_:)](/documentation/swiftui/view/togglestyle(_:))

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

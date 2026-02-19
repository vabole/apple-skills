---
title: TimelineEntry
description: A type that specifies the date to display a widget, and, optionally, indicates the current relevance of the widget’s content.
source: https://developer.apple.com/documentation/widgetkit/timelineentry
timestamp: 2026-01-19T10:21:56.313Z
---

**Navigation:** [Widgetkit](/documentation/widgetkit)

**Protocol**

# TimelineEntry

**Available on:** iOS 14.0+, iPadOS 14.0+, Mac Catalyst undefined+, macOS 11.0+, visionOS 26.0+, watchOS 9.0+

> A type that specifies the date to display a widget, and, optionally, indicates the current relevance of the widget’s content.

```swift
protocol TimelineEntry
```

## Overview

A [Timeline Provider](/documentation/widgetkit/timelineprovider) creates one or more timeline entries with dates that tell WidgetKit when to display a widget. To render a widget, WidgetKit executes the `content` block of the widget’s configuration, passing the corresponding timeline entry.

When you declare a structure conforming to `TimelineEntry`, include any additional information that the configuration’s content block requires to render the widget. The following code shows a timeline entry structure for a widget that displays a game character’s health level.

```swift
struct CharacterDetailEntry: TimelineEntry {
    var date: Date
    var healthLevel: Double
}
```

The content block of the widget’s configuration receives the entry as a parameter and then passes the relevant information to the view that renders your widget.

```swift
struct CharacterDetailWidget: Widget {
    var body: some WidgetConfiguration {
        StaticConfiguration(
            kind: "com.mygame.character-detail",
            provider: CharacterDetailProvider()) { entry in
            CharacterDetailView(entry: entry)
        }
        .configurationDisplayName("Character Details")
        .description("Displays a character's health and other details")
        .supportedFamilies([.systemSmall, .systemMedium, .systemLarge])
    }
}
```

## Configuring Timeline Entry Properties

- [date](/documentation/widgetkit/timelineentry/date) The date for WidgetKit to render a widget.
- [relevance](/documentation/widgetkit/timelineentry/relevance) The relevance of a widget’s content to the user.

## Timeline updates

- [Keeping a widget up to date](/documentation/widgetkit/keeping-a-widget-up-to-date)
- [TimelineProvider](/documentation/widgetkit/timelineprovider)
- [AppIntentTimelineProvider](/documentation/widgetkit/appintenttimelineprovider)
- [IntentTimelineProvider](/documentation/widgetkit/intenttimelineprovider)
- [TimelineProviderContext](/documentation/widgetkit/timelineprovidercontext)
- [Timeline](/documentation/widgetkit/timeline)
- [WidgetCenter](/documentation/widgetkit/widgetcenter)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

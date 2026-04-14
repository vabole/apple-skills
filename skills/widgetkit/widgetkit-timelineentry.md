---
title: TimelineEntry
description: A type that specifies the date to display a widget, and, optionally, indicates the current relevance of the widget’s content.
source: https://developer.apple.com/documentation/widgetkit/timelineentry
source_kind: apple-docc
source_json: https://developer.apple.com/tutorials/data/documentation/widgetkit/timelineentry.json
timestamp: 2026-04-14T13:14:56.916Z
---

**Navigation:** [WidgetKit](/documentation/widgetkit)

**Protocol**

# TimelineEntry

**Available on:** iOS 14.0+, iPadOS 14.0+, Mac Catalyst, macOS 11.0+, visionOS 26.0+, watchOS 9.0+

> A type that specifies the date to display a widget, and, optionally, indicates the current relevance of the widget’s content.

```swift
protocol TimelineEntry
```

## Overview

A [TimelineProvider](/documentation/widgetkit/timelineprovider) creates one or more timeline entries with dates that tell WidgetKit when to display a widget. To render a widget, WidgetKit executes the `content` block of the widget’s configuration, passing the corresponding timeline entry.

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

- [Keeping a widget up to date](/documentation/widgetkit/keeping-a-widget-up-to-date) Plan your widget’s timeline to show timely, relevant information using dynamic views, and update the timeline when things change.
- [TimelineProvider](/documentation/widgetkit/timelineprovider) A type that advises WidgetKit when to update a widget’s display.
- [AppIntentTimelineProvider](/documentation/widgetkit/appintenttimelineprovider) A type that advises WidgetKit when to update a user-configurable widget’s display.
- [IntentTimelineProvider](/documentation/widgetkit/intenttimelineprovider) A type that advises WidgetKit when to update a user-configurable widget’s display.
- [TimelineProviderContext](/documentation/widgetkit/timelineprovidercontext) An object that contains details about how a widget is rendered, including its size and whether it appears in the widget gallery.
- [Timeline](/documentation/widgetkit/timeline) An object that specifies a date for WidgetKit to update a widget’s view.
- [WidgetCenter](/documentation/widgetkit/widgetcenter) An object that contains a list of user-configured widgets and is used for reloading widget timelines.

---

*Extracted from Apple DocC JSON by apple-skills tooling.*
*This is unofficial content. All documentation belongs to Apple Inc.*

---
title: EKReminder
description: A class that represents a reminder in a calendar.
source: https://developer.apple.com/documentation/eventkit/ekreminder
timestamp: 2026-01-19T11:03:13.083Z
---

**Navigation:** [Eventkit](/documentation/eventkit)

**Class**

# EKReminder

**Available on:** iOS 6.0+, iPadOS 6.0+, Mac Catalyst 13.1+, macOS 10.8+, visionOS 1.0+, watchOS 2.0+

> A class that represents a reminder in a calendar.

```swift
class EKReminder
```

## Overview

Use the [init(eventStore:)](/documentation/eventkit/ekreminder/init(eventstore:)) method to create a new reminder. Use the properties in the class to get and modify certain information about a reminder.

## Inherits From

- [EKCalendarItem](/documentation/eventkit/ekcalendaritem)

## Conforms To

- [CVarArg](/documentation/Swift/CVarArg)
- [CustomDebugStringConvertible](/documentation/Swift/CustomDebugStringConvertible)
- [CustomStringConvertible](/documentation/Swift/CustomStringConvertible)
- [Equatable](/documentation/Swift/Equatable)
- [Hashable](/documentation/Swift/Hashable)
- [NSObjectProtocol](/documentation/ObjectiveC/NSObjectProtocol)

## Creating a Reminder

- [init(eventStore:)](/documentation/eventkit/ekreminder/init(eventstore:)) Creates and returns a new reminder in the given event store.

## Accessing Reminder Properties

- [EKReminderPriority](/documentation/eventkit/ekreminderpriority) The priority of the reminder.
- [priority](/documentation/eventkit/ekreminder/priority) The reminder’s priority.
- [startDateComponents](/documentation/eventkit/ekreminder/startdatecomponents) The start date of the task.
- [dueDateComponents](/documentation/eventkit/ekreminder/duedatecomponents) The date by which the reminder should be completed.
- [isCompleted](/documentation/eventkit/ekreminder/iscompleted) A Boolean value determining whether or not the reminder is marked completed.
- [completionDate](/documentation/eventkit/ekreminder/completiondate) The date on which the reminder was completed.

## Events and reminders

- [Creating events and reminders](/documentation/eventkit/creating-events-and-reminders)
- [Retrieving events and reminders](/documentation/eventkit/retrieving-events-and-reminders)
- [Updating with notifications](/documentation/eventkit/updating-with-notifications)
- [Managing location-based reminders](/documentation/eventkit/managing-location-based-reminders)
- [EKEvent](/documentation/eventkit/ekevent)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

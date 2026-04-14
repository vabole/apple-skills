---
title: EKReminder
description: A class that represents a reminder in a calendar.
source: https://developer.apple.com/documentation/eventkit/ekreminder
source_kind: apple-docc
source_json: https://developer.apple.com/tutorials/data/documentation/eventkit/ekreminder.json
timestamp: 2026-04-14T13:14:10.652Z
---

**Navigation:** [EventKit](/documentation/eventkit)

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

- [Creating events and reminders](/documentation/eventkit/creating-events-and-reminders) Create and modify events and reminders in a person’s database.
- [Retrieving events and reminders](/documentation/eventkit/retrieving-events-and-reminders) Fetch events and reminders from the Calendar database.
- [Updating with notifications](/documentation/eventkit/updating-with-notifications) Register for notifications about changes and keep your app up to date.
- [Managing location-based reminders](/documentation/eventkit/managing-location-based-reminders) Access reminders set up with geofence-enabled alarms on a person’s calendars.
- [EKEvent](/documentation/eventkit/ekevent) A class that represents an event in a calendar.

---

*Extracted from Apple DocC JSON by apple-skills tooling.*
*This is unofficial content. All documentation belongs to Apple Inc.*

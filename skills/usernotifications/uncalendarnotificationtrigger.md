---
title: UNCalendarNotificationTrigger
description: A trigger condition that causes a notification the system delivers at a specific date and time.
source: https://developer.apple.com/documentation/usernotifications/uncalendarnotificationtrigger
timestamp: 2026-01-19T10:22:53.676Z
---

**Navigation:** [Usernotifications](/documentation/usernotifications)

**Class**

# UNCalendarNotificationTrigger

**Available on:** iOS 10.0+, iPadOS 10.0+, Mac Catalyst 13.1+, macOS 10.14+, tvOS 10.0+, visionOS 1.0+, watchOS 3.0+

> A trigger condition that causes a notification the system delivers at a specific date and time.

```swift
class UNCalendarNotificationTrigger
```

## Overview

Create a [UNCalendar Notification Trigger](/documentation/usernotifications/uncalendarnotificationtrigger) object when you want to schedule the delivery of a local notification at the date and time you specify. You use an [NSDate Components](/documentation/Foundation/NSDateComponents) object to specify only the time values that you want the system to use to determine the matching date and time.

Listing 1 creates a trigger that delivers its notification every morning at 8:30. The repeating behavior is achieved by specifying `true` for the `repeats` parameter when creating the trigger.

Listing 1. Creating a trigger that repeats at a specific time

## Inherits From

- [UNNotificationTrigger](/documentation/usernotifications/unnotificationtrigger)

## Conforms To

- [CVarArg](/documentation/Swift/CVarArg)
- [CustomDebugStringConvertible](/documentation/Swift/CustomDebugStringConvertible)
- [CustomStringConvertible](/documentation/Swift/CustomStringConvertible)
- [Equatable](/documentation/Swift/Equatable)
- [Hashable](/documentation/Swift/Hashable)
- [NSCoding](/documentation/Foundation/NSCoding)
- [NSCopying](/documentation/Foundation/NSCopying)
- [NSObjectProtocol](/documentation/ObjectiveC/NSObjectProtocol)
- [NSSecureCoding](/documentation/Foundation/NSSecureCoding)

## Creating a Calendar Trigger

- [init(dateMatching:repeats:)](/documentation/usernotifications/uncalendarnotificationtrigger/init(datematching:repeats:)) Creates a calendar trigger using the date components parameter.

## Getting the Trigger Information

- [nextTriggerDate()](/documentation/usernotifications/uncalendarnotificationtrigger/nexttriggerdate()) The next date at which the trigger conditions are met.
- [dateComponents](/documentation/usernotifications/uncalendarnotificationtrigger/datecomponents) The date components to construct this object.

## Triggers

- [UNTimeIntervalNotificationTrigger](/documentation/usernotifications/untimeintervalnotificationtrigger)
- [UNLocationNotificationTrigger](/documentation/usernotifications/unlocationnotificationtrigger)
- [UNPushNotificationTrigger](/documentation/usernotifications/unpushnotificationtrigger)
- [UNNotificationTrigger](/documentation/usernotifications/unnotificationtrigger)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

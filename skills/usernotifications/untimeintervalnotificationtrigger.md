---
title: UNTimeIntervalNotificationTrigger
description: A trigger condition that causes the system to deliver a notification after the amount of time you specify elapses.
source: https://developer.apple.com/documentation/usernotifications/untimeintervalnotificationtrigger
timestamp: 2026-01-19T10:22:54.197Z
---

**Navigation:** [Usernotifications](/documentation/usernotifications)

**Class**

# UNTimeIntervalNotificationTrigger

**Available on:** iOS 10.0+, iPadOS 10.0+, Mac Catalyst 13.1+, macOS 10.14+, tvOS 10.0+, visionOS 1.0+, watchOS 3.0+

> A trigger condition that causes the system to deliver a notification after the amount of time you specify elapses.

```swift
class UNTimeIntervalNotificationTrigger
```

## Overview

Create a [UNTime Interval Notification Trigger](/documentation/usernotifications/untimeintervalnotificationtrigger) object when you want to schedule the delivery of a local notification after the number of seconds you specify elapses. You use this type of trigger to implement timers.

Listing 1 creates a trigger that delivers its notification one time after 30 minutes have elapsed.

Listing 1. Creating a trigger that fires in 30 minutes

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

## Creating a Time Interval Trigger

- [init(timeInterval:repeats:)](/documentation/usernotifications/untimeintervalnotificationtrigger/init(timeinterval:repeats:)) Creates a time interval trigger using the time value parameter.

## Getting the Trigger Information

- [nextTriggerDate()](/documentation/usernotifications/untimeintervalnotificationtrigger/nexttriggerdate()) The next date at which the trigger conditions are met.
- [timeInterval](/documentation/usernotifications/untimeintervalnotificationtrigger/timeinterval) The time interval to create the trigger.

## Triggers

- [UNCalendarNotificationTrigger](/documentation/usernotifications/uncalendarnotificationtrigger)
- [UNLocationNotificationTrigger](/documentation/usernotifications/unlocationnotificationtrigger)
- [UNPushNotificationTrigger](/documentation/usernotifications/unpushnotificationtrigger)
- [UNNotificationTrigger](/documentation/usernotifications/unnotificationtrigger)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

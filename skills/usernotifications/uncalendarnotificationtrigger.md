---
title: UNCalendarNotificationTrigger
description: A trigger condition that causes a notification the system delivers at a specific date and time.
source: https://developer.apple.com/documentation/usernotifications/uncalendarnotificationtrigger
source_kind: apple-docc
source_json: https://developer.apple.com/tutorials/data/documentation/usernotifications/uncalendarnotificationtrigger.json
timestamp: 2026-05-06T06:19:06.380Z
---

**Navigation:** [UserNotifications](/documentation/usernotifications)

**Class**

# UNCalendarNotificationTrigger

**Available on:** iOS 10.0+, iPadOS 10.0+, Mac Catalyst 13.1+, macOS 10.14+, tvOS 10.0+, visionOS 1.0+, watchOS 3.0+

> A trigger condition that causes a notification the system delivers at a specific date and time.

```swift
class UNCalendarNotificationTrigger
```

## Overview

Create a [UNCalendarNotificationTrigger](/documentation/usernotifications/uncalendarnotificationtrigger) object when you want to schedule the delivery of a local notification at the date and time you specify. You use an [NSDateComponents](/documentation/Foundation/NSDateComponents) object to specify only the time values that you want the system to use to determine the matching date and time.

Listing 1 creates a trigger that delivers its notification every morning at 8:30. The repeating behavior is achieved by specifying `true` for the `repeats` parameter when creating the trigger.

Listing 1. Creating a trigger that repeats at a specific time

### Swift

```swift
var date = DateComponents()
date.hour = 8
date.minute = 30 
let trigger = UNCalendarNotificationTrigger(dateMatching: date, repeats: true)
```

### Objective-C

```objc
NSDateComponents* date = [[NSDateComponents alloc] init];
date.hour = 8;
date.minute = 30; 
UNCalendarNotificationTrigger* trigger = [UNCalendarNotificationTrigger
                     triggerWithDateMatchingComponents:date repeats:YES];
```

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

## Initializers

- [init(dateMatchingComponents:repeats:)](/documentation/usernotifications/uncalendarnotificationtrigger/init(datematchingcomponents:repeats:))

## Triggers

- [UNTimeIntervalNotificationTrigger](/documentation/usernotifications/untimeintervalnotificationtrigger) A trigger condition that causes the system to deliver a notification after the amount of time you specify elapses.
- [UNLocationNotificationTrigger](/documentation/usernotifications/unlocationnotificationtrigger) A trigger condition that causes the system to deliver a notification when the user’s device enters or exits a geographic region you specify.
- [UNPushNotificationTrigger](/documentation/usernotifications/unpushnotificationtrigger) A trigger condition that indicates Apple Push Notification Service (APNs) has sent the notification.
- [UNNotificationTrigger](/documentation/usernotifications/unnotificationtrigger) The common behavior for subclasses that trigger the delivery of a local or remote notification.

---

*Extracted from Apple DocC JSON by apple-skills tooling.*
*This is unofficial content. All documentation belongs to Apple Inc.*

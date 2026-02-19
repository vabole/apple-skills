---
title: UNNotificationRequest
description: A request to schedule a local notification, which includes the content of the notification and the trigger conditions for delivery.
source: https://developer.apple.com/documentation/usernotifications/unnotificationrequest
timestamp: 2026-01-19T10:22:53.467Z
---

**Navigation:** [Usernotifications](/documentation/usernotifications)

**Class**

# UNNotificationRequest

**Available on:** iOS 10.0+, iPadOS 10.0+, Mac Catalyst 13.1+, macOS 10.14+, tvOS 10.0+, visionOS 1.0+, watchOS 3.0+

> A request to schedule a local notification, which includes the content of the notification and the trigger conditions for delivery.

```swift
class UNNotificationRequest
```

## Overview

Create a [UNNotification Request](/documentation/usernotifications/unnotificationrequest) object when you want to schedule the delivery of a local notification. A notification request object contains a [UNNotification Content](/documentation/usernotifications/unnotificationcontent) object with the payload and the [UNNotification Trigger](/documentation/usernotifications/unnotificationtrigger) object with the conditions that trigger the delivery of the notification. To schedule the delivery of your notification, pass your request object to the [add(_:withCompletionHandler:)](/documentation/usernotifications/unusernotificationcenter/add(_:withcompletionhandler:)) method of the shared user notification center object.

After scheduling a request, you interact with `UNNotificationRequest` objects in the following ways:

- View your app’s pending notifications by calling the [getPendingNotificationRequests(completionHandler:)](/documentation/usernotifications/unusernotificationcenter/getpendingnotificationrequests(completionhandler:)) method of your shared user notification center object.
- When the system delivers a notification to your app, the provided [UNNotification](/documentation/usernotifications/unnotification) object contains a `UNNotificationRequest` object that you can inspect to get the notification details.
- Use the request’s [identifier](/documentation/usernotifications/unnotificationrequest/identifier) to remove delivered notifications from Notification Center.

When receiving a local or remote notification, use the provided [UNNotification Request](/documentation/usernotifications/unnotificationrequest) object to fetch details about the notification.

```swift
// Create a content object with the message to convey.
let content = UNMutableNotificationContent()
content.title = "Lunch time"
content.body = "Food is cooked... let's eat!"
// Create a notification trigger for 60 seconds in the future.
let trigger = UNTimeIntervalNotificationTrigger(timeInterval: 60.0, repeats: false)
// Create the request with the content and the trigger.
let request = UNNotificationRequest(identifier: "com.example.mynotification", content: content, trigger: trigger)
```

## Inherits From

- [NSObject](/documentation/ObjectiveC/NSObject-swift.class)

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

## Creating a Notification Request

- [init(identifier:content:trigger:)](/documentation/usernotifications/unnotificationrequest/init(identifier:content:trigger:)) Creates a notification request object that you use to schedule a notification.

## Getting the Request Details

- [identifier](/documentation/usernotifications/unnotificationrequest/identifier) The unique identifier for this notification request.
- [content](/documentation/usernotifications/unnotificationrequest/content) The content associated with the notification.
- [trigger](/documentation/usernotifications/unnotificationrequest/trigger) The conditions that trigger the delivery of the notification.

## Notification requests

- [Scheduling a notification locally from your app](/documentation/usernotifications/scheduling-a-notification-locally-from-your-app)
- [UNNotification](/documentation/usernotifications/unnotification)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

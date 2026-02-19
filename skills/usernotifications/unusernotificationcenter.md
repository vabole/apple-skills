---
title: UNUserNotificationCenter
description: The central object for managing notification-related activities for your app or app extension.
source: https://developer.apple.com/documentation/usernotifications/unusernotificationcenter
timestamp: 2026-01-19T10:22:53.265Z
---

**Navigation:** [Usernotifications](/documentation/usernotifications)

**Class**

# UNUserNotificationCenter

**Available on:** iOS 10.0+, iPadOS 10.0+, Mac Catalyst 13.1+, macOS 10.14+, tvOS 10.0+, visionOS 1.0+, watchOS 3.0+

> The central object for managing notification-related activities for your app or app extension.

```swift
class UNUserNotificationCenter
```

## Overview

Use the shared [UNUser Notification Center](/documentation/usernotifications/unusernotificationcenter) object to manage all notification-related behaviors in your app or app extension. Specifically, use this object to do the following:

- Request authorization to interact with the user through alerts, sounds, and icon badges. See [asking-permission-to-use](/documentation/usernotifications/asking-permission-to-use-notifications).
- Declare the notification types that your app supports and the custom actions the user may perform when the system delivers those notifications. See [declaring-your-actionable-notification](/documentation/usernotifications/declaring-your-actionable-notification-types).
- Schedule the delivery of notifications from your app. See [scheduling-a-notification-locally-from-your](/documentation/usernotifications/scheduling-a-notification-locally-from-your-app).
- Process the payloads from remote notifications the system delivers by Apple Push Notification service (APNs). See [handling-notifications-and-notification-related](/documentation/usernotifications/handling-notifications-and-notification-related-actions).
- Manage the already delivered notifications the system displays in Notification Center. See Managing Delivered Notifications.
- Handle user-selected actions associated with your custom notification types. See [handling-notifications-and-notification-related](/documentation/usernotifications/handling-notifications-and-notification-related-actions).
- Get the notification-related settings for your app. See Managing Settings and Authorization.

To handle incoming notifications and notification-related actions, create an object that adopts the [UNUser Notification Center Delegate](/documentation/usernotifications/unusernotificationcenterdelegate) protocol and assign it to the [delegate](/documentation/usernotifications/unusernotificationcenter/delegate) property. Always assign an object to the [delegate](/documentation/usernotifications/unusernotificationcenter/delegate) property before performing any tasks that might interact with that delegate.

You may use the shared user notification center object simultaneously from any of your app’s threads. The object processes requests serially in the order that the system initiates them.

## Inherits From

- [NSObject](/documentation/ObjectiveC/NSObject-swift.class)

## Conforms To

- [CVarArg](/documentation/Swift/CVarArg)
- [CustomDebugStringConvertible](/documentation/Swift/CustomDebugStringConvertible)
- [CustomStringConvertible](/documentation/Swift/CustomStringConvertible)
- [Equatable](/documentation/Swift/Equatable)
- [Hashable](/documentation/Swift/Hashable)
- [NSObjectProtocol](/documentation/ObjectiveC/NSObjectProtocol)

## Managing the notification center

- [current()](/documentation/usernotifications/unusernotificationcenter/current()) Returns your app’s notification center.
- [getNotificationSettings(completionHandler:)](/documentation/usernotifications/unusernotificationcenter/getnotificationsettings(completionhandler:)) Retrieves the authorization and feature-related settings for your app.
- [setBadgeCount(_:withCompletionHandler:)](/documentation/usernotifications/unusernotificationcenter/setbadgecount(_:withcompletionhandler:)) Updates the badge count for your app’s icon.

## Requesting authorization

- [requestAuthorization(options:completionHandler:)](/documentation/usernotifications/unusernotificationcenter/requestauthorization(options:completionhandler:)) Requests a person’s authorization to allow local and remote notifications for your app.
- [UNAuthorizationOptions](/documentation/usernotifications/unauthorizationoptions) Options that determine the authorized features of local and remote notifications.

## Processing received notifications

- [delegate](/documentation/usernotifications/unusernotificationcenter/delegate) The notification center’s delegate.
- [UNUserNotificationCenterDelegate](/documentation/usernotifications/unusernotificationcenterdelegate) An interface for processing incoming notifications and responding to notification actions.
- [supportsContentExtensions](/documentation/usernotifications/unusernotificationcenter/supportscontentextensions) A Boolean value that indicates whether the device supports notification content extensions.

## Scheduling notifications

- [add(_:withCompletionHandler:)](/documentation/usernotifications/unusernotificationcenter/add(_:withcompletionhandler:)) Schedules the delivery of a local notification.
- [getPendingNotificationRequests(completionHandler:)](/documentation/usernotifications/unusernotificationcenter/getpendingnotificationrequests(completionhandler:)) Fetches all of your app’s local notifications that are pending delivery.
- [removePendingNotificationRequests(withIdentifiers:)](/documentation/usernotifications/unusernotificationcenter/removependingnotificationrequests(withidentifiers:)) Removes your app’s local notifications that are pending and match the specified identifiers.
- [removeAllPendingNotificationRequests()](/documentation/usernotifications/unusernotificationcenter/removeallpendingnotificationrequests()) Removes all of your app’s pending local notifications.

## Removing delivered notifications

- [getDeliveredNotifications(completionHandler:)](/documentation/usernotifications/unusernotificationcenter/getdeliverednotifications(completionhandler:)) Fetches all of your app’s delivered notifications that are still present in Notification Center.
- [removeDeliveredNotifications(withIdentifiers:)](/documentation/usernotifications/unusernotificationcenter/removedeliverednotifications(withidentifiers:)) Removes your app’s notifications from Notification Center that match the specified identifiers.
- [removeAllDeliveredNotifications()](/documentation/usernotifications/unusernotificationcenter/removealldeliverednotifications()) Removes all of your app’s delivered notifications from Notification Center.

## Managing notification categories

- [setNotificationCategories(_:)](/documentation/usernotifications/unusernotificationcenter/setnotificationcategories(_:)) Registers the notification categories that your app supports.
- [getNotificationCategories(completionHandler:)](/documentation/usernotifications/unusernotificationcenter/getnotificationcategories(completionhandler:)) Fetches your app’s registered notification categories.

## Handling errors

- [UNError](/documentation/usernotifications/unerror) An object that represents a notification error.
- [UNError.Code](/documentation/usernotifications/unerror/code) Constants that identify notification errors.
- [UNErrorDomain](/documentation/usernotifications/unerrordomain) The error domain for notifications.

## Notification management

- [UNUserNotificationCenterDelegate](/documentation/usernotifications/unusernotificationcenterdelegate)
- [UNNotificationSettings](/documentation/usernotifications/unnotificationsettings)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

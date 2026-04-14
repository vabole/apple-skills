---
title: UNMutableNotificationContent
description: The editable content for a notification.
source: https://developer.apple.com/documentation/usernotifications/unmutablenotificationcontent
source_kind: apple-docc
source_json: https://developer.apple.com/tutorials/data/documentation/usernotifications/unmutablenotificationcontent.json
timestamp: 2026-04-14T13:14:55.860Z
---

**Navigation:** [UserNotifications](/documentation/usernotifications)

**Class**

# UNMutableNotificationContent

**Available on:** iOS 10.0+, iPadOS 10.0+, Mac Catalyst 13.1+, macOS 10.14+, tvOS 10.0+, visionOS 1.0+, watchOS 3.0+

> The editable content for a notification.

```swift
class UNMutableNotificationContent
```

## Overview

Create a [UNMutableNotificationContent](/documentation/usernotifications/unmutablenotificationcontent) object when you want to specify the payload for a local notification. Specifically, use this object to specify the title and message for an alert, the sound to play, or the value to assign to your app’s badge. You might also provide details about how the system handles the notification. For example, you can specify a custom launch image and a thread identifier for visually grouping related notifications.

After creating your content object, assign it to a [UNNotificationRequest](/documentation/usernotifications/unnotificationrequest) object, add a trigger condition, and schedule your notification. The trigger condition defines when the system delivers the notification to the user. Listing 1 shows the scheduling of a local notification that displays an alert and plays a sound after a delay of five seconds. Store the strings for the alert’s title and body in the app’s `Localizable.strings` file.

Listing 1. Creating the content for a local notification

### Swift

```swift
// Configure the notification's payload.
let content = UNMutableNotificationContent()
content.title = NSString.localizedUserNotificationString(forKey: "Hello!", arguments: nil)
content.body = NSString.localizedUserNotificationString(forKey: "Hello_message_body", arguments: nil)
content.sound = UNNotificationSound.default
 
// Deliver the notification in five seconds.
let trigger = UNTimeIntervalNotificationTrigger(timeInterval: 5, repeats: false)
let request = UNNotificationRequest(identifier: "FiveSecond", content: content, trigger: trigger) // Schedule the notification.
let center = UNUserNotificationCenter.current()
center.add(request) { (error : Error?) in
     if let theError = error {
         // Handle any errors
     }
}
```

### Objective-C

```objc
// Configure the notification's payload.
UNMutableNotificationContent *content = [[UNMutableNotificationContent alloc] init];
content.title = [NSString localizedUserNotificationStringForKey:@"Hello!" arguments:nil];
content.body = [NSString localizedUserNotificationStringForKey:@"Hello_message_body" arguments:nil];
content.sound = [UNNotificationSound defaultSound];
 
// Deliver the notification in five seconds.
UNTimeIntervalNotificationTrigger* trigger = [UNTimeIntervalNotificationTrigger
            triggerWithTimeInterval:5 repeats:NO];
UNNotificationRequest* request = [UNNotificationRequest requestWithIdentifier:@"FiveSecond"
            content:content trigger:trigger];
 
// Schedule the notification.
UNUserNotificationCenter* center = [UNUserNotificationCenter currentNotificationCenter];
[center addNotificationRequest:request];
```

> **Note:** Local notifications always result in user interactions, and the system ignores any interactions for which your app isn’t authorized. For information about how to request authorization for user interactions, see [Asking permission to use notifications](/documentation/usernotifications/asking-permission-to-use-notifications).

### Localizing the Alert Strings

Localize the strings you display in a notification alert for the current user. Although you can use the [NSLocalizedString](/documentation/Foundation/NSLocalizedString) macros to load strings from your app’s resource files, a better option is to specify your string using the [localizedUserNotificationString(forKey:arguments:)](/documentation/Foundation/NSString/localizedUserNotificationString(forKey:arguments:)) method of [NSString](/documentation/Foundation/NSString). The [localizedUserNotificationString(forKey:arguments:)](/documentation/Foundation/NSString/localizedUserNotificationString(forKey:arguments:)) method delays the loading of the localized string until the system delivers the notification. If the user changes the language setting before the system delivers a notification, the system updates the alert text to the user’s current language instead of the language in use when the system scheduled the notification.

## Inherits From

- [UNNotificationContent](/documentation/usernotifications/unnotificationcontent)

## Conforms To

- [CVarArg](/documentation/Swift/CVarArg)
- [CustomDebugStringConvertible](/documentation/Swift/CustomDebugStringConvertible)
- [CustomStringConvertible](/documentation/Swift/CustomStringConvertible)
- [Equatable](/documentation/Swift/Equatable)
- [Hashable](/documentation/Swift/Hashable)
- [NSCoding](/documentation/Foundation/NSCoding)
- [NSCopying](/documentation/Foundation/NSCopying)
- [NSMutableCopying](/documentation/Foundation/NSMutableCopying)
- [NSObjectProtocol](/documentation/ObjectiveC/NSObjectProtocol)
- [NSSecureCoding](/documentation/Foundation/NSSecureCoding)

## Providing the primary content

- [title](/documentation/usernotifications/unmutablenotificationcontent/title) The localized text that provides the notification’s primary description.
- [subtitle](/documentation/usernotifications/unmutablenotificationcontent/subtitle) The localized text that provides the notification’s secondary description.
- [body](/documentation/usernotifications/unmutablenotificationcontent/body) The localized text that provides the notification’s main content.

## Providing supplementary content

- [attachments](/documentation/usernotifications/unmutablenotificationcontent/attachments) The visual and audio attachments to display alongside the notification’s main content.
- [userInfo](/documentation/usernotifications/unmutablenotificationcontent/userinfo) The custom data to associate with the notification.

## Configuring app behavior

- [launchImageName](/documentation/usernotifications/unmutablenotificationcontent/launchimagename) The name of the image or storyboard to use when your app launches because of the notification.
- [badge](/documentation/usernotifications/unmutablenotificationcontent/badge) The number that your app’s icon displays.
- [targetContentIdentifier](/documentation/usernotifications/unmutablenotificationcontent/targetcontentidentifier) The value your app uses to determine which scene to display to handle the notification.

## Integrating with the system

- [sound](/documentation/usernotifications/unmutablenotificationcontent/sound) The sound that plays when the system delivers the notification.
- [interruptionLevel](/documentation/usernotifications/unmutablenotificationcontent/interruptionlevel) The notification’s importance and required delivery timing.
- [UNNotificationInterruptionLevel](/documentation/usernotifications/unnotificationinterruptionlevel) Constants that indicate the importance and delivery timing of a notification.
- [relevanceScore](/documentation/usernotifications/unmutablenotificationcontent/relevancescore) The score the system uses to determine if the notification is the summary’s featured notification.
- [filterCriteria](/documentation/usernotifications/unmutablenotificationcontent/filtercriteria) The criteria the system evaluates to determine if it displays the notification in the current Focus.

## Grouping notifications

- [threadIdentifier](/documentation/usernotifications/unmutablenotificationcontent/threadidentifier) The identifier that groups related notifications.
- [categoryIdentifier](/documentation/usernotifications/unmutablenotificationcontent/categoryidentifier) The identifier of the notification’s category.
- [summaryArgument](/documentation/usernotifications/unmutablenotificationcontent/summaryargument) The text the system adds to the notification summary to provide additional context.
- [summaryArgumentCount](/documentation/usernotifications/unmutablenotificationcontent/summaryargumentcount) The number the system adds to the notification summary when the notification represents multiple items.

## Notification content

- [Implementing communication notifications](/documentation/usernotifications/implementing-communication-notifications) Configure and display your app’s communication notifications by using intents.
- [UNNotificationContentProviding](/documentation/usernotifications/unnotificationcontentproviding) A protocol the system uses to provide context relevant to user notifications.
- [UNNotificationActionIcon](/documentation/usernotifications/unnotificationactionicon) An icon associated with an action.
- [UNNotificationContent](/documentation/usernotifications/unnotificationcontent) The uneditable content of a notification.
- [UNNotificationAttachment](/documentation/usernotifications/unnotificationattachment) A media file associated with a notification.
- [UNNotificationSound](/documentation/usernotifications/unnotificationsound) The sound played upon delivery of a notification.
- [UNNotificationSoundName](/documentation/usernotifications/unnotificationsoundname) A string providing the name of a sound file.

---

*Extracted from Apple DocC JSON by apple-skills tooling.*
*This is unofficial content. All documentation belongs to Apple Inc.*

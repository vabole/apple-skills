---
title: User Notifications
source: https://developer.apple.com/documentation/usernotifications
timestamp: 2026-02-19T07:56:05.346Z
---

## Essentials

- [User Notifications updates](/documentation/updates/usernotifications)
- [Asking permission to use notifications](/documentation/usernotifications/asking-permission-to-use-notifications)

## Notification management

- [UNUserNotificationCenter](/documentation/usernotifications/unusernotificationcenter)

### Managing the notification center

- [class func current() -> UNUserNotificationCenter](/documentation/usernotifications/unusernotificationcenter/current())
- [func getNotificationSettings(completionHandler: (UNNotificationSettings) -> Void)](/documentation/usernotifications/unusernotificationcenter/getnotificationsettings(completionhandler:))
- [func setBadgeCount(Int, withCompletionHandler: (((any Error)?) -> Void)?)](/documentation/usernotifications/unusernotificationcenter/setbadgecount(_:withcompletionhandler:))

### Requesting authorization

- [func requestAuthorization(options: UNAuthorizationOptions, completionHandler: (Bool, (any Error)?) -> Void)](/documentation/usernotifications/unusernotificationcenter/requestauthorization(options:completionhandler:))
- [UNAuthorizationOptions](/documentation/usernotifications/unauthorizationoptions)

#### Options

- [static var badge: UNAuthorizationOptions](/documentation/usernotifications/unauthorizationoptions/badge)
- [static var sound: UNAuthorizationOptions](/documentation/usernotifications/unauthorizationoptions/sound)
- [static var alert: UNAuthorizationOptions](/documentation/usernotifications/unauthorizationoptions/alert)
- [static var carPlay: UNAuthorizationOptions](/documentation/usernotifications/unauthorizationoptions/carplay)
- [static var criticalAlert: UNAuthorizationOptions](/documentation/usernotifications/unauthorizationoptions/criticalalert)
- [static var providesAppNotificationSettings: UNAuthorizationOptions](/documentation/usernotifications/unauthorizationoptions/providesappnotificationsettings)
- [static var provisional: UNAuthorizationOptions](/documentation/usernotifications/unauthorizationoptions/provisional)

#### Initializers

- [init(rawValue: UInt)](/documentation/usernotifications/unauthorizationoptions/init(rawvalue:))

#### Deprecated

- [static var announcement: UNAuthorizationOptions](/documentation/usernotifications/unauthorizationoptions/announcement)
- [static var timeSensitive: UNAuthorizationOptions](/documentation/usernotifications/unauthorizationoptions/timesensitive)

### Processing received notifications

- [var delegate: (any UNUserNotificationCenterDelegate)?](/documentation/usernotifications/unusernotificationcenter/delegate)
- [UNUserNotificationCenterDelegate](/documentation/usernotifications/unusernotificationcenterdelegate)

#### First Steps

- [Handling notifications and notification-related actions](/documentation/usernotifications/handling-notifications-and-notification-related-actions)

#### Handling the Selection of Custom Actions

- [func userNotificationCenter(UNUserNotificationCenter, didReceive: UNNotificationResponse, withCompletionHandler: () -> Void)](/documentation/usernotifications/unusernotificationcenterdelegate/usernotificationcenter(_:didreceive:withcompletionhandler:))

#### Receiving Notifications

- [func userNotificationCenter(UNUserNotificationCenter, willPresent: UNNotification, withCompletionHandler: (UNNotificationPresentationOptions) -> Void)](/documentation/usernotifications/unusernotificationcenterdelegate/usernotificationcenter(_:willpresent:withcompletionhandler:))
- [UNNotificationPresentationOptions](/documentation/usernotifications/unnotificationpresentationoptions)

##### Constants

- [static var badge: UNNotificationPresentationOptions](/documentation/usernotifications/unnotificationpresentationoptions/badge)
- [static var banner: UNNotificationPresentationOptions](/documentation/usernotifications/unnotificationpresentationoptions/banner)
- [static var list: UNNotificationPresentationOptions](/documentation/usernotifications/unnotificationpresentationoptions/list)
- [static var sound: UNNotificationPresentationOptions](/documentation/usernotifications/unnotificationpresentationoptions/sound)
- [static var alert: UNNotificationPresentationOptions](/documentation/usernotifications/unnotificationpresentationoptions/alert)

##### Initializers

- [init(rawValue: UInt)](/documentation/usernotifications/unnotificationpresentationoptions/init(rawvalue:))

#### Displaying Notification Settings

- [func userNotificationCenter(UNUserNotificationCenter, openSettingsFor: UNNotification?)](/documentation/usernotifications/unusernotificationcenterdelegate/usernotificationcenter(_:opensettingsfor:))
- [var supportsContentExtensions: Bool](/documentation/usernotifications/unusernotificationcenter/supportscontentextensions)

### Scheduling notifications

- [func add(UNNotificationRequest, withCompletionHandler: (((any Error)?) -> Void)?)](/documentation/usernotifications/unusernotificationcenter/add(_:withcompletionhandler:))
- [func getPendingNotificationRequests(completionHandler: ([UNNotificationRequest]) -> Void)](/documentation/usernotifications/unusernotificationcenter/getpendingnotificationrequests(completionhandler:))
- [func removePendingNotificationRequests(withIdentifiers: [String])](/documentation/usernotifications/unusernotificationcenter/removependingnotificationrequests(withidentifiers:))
- [func removeAllPendingNotificationRequests()](/documentation/usernotifications/unusernotificationcenter/removeallpendingnotificationrequests())

### Removing delivered notifications

- [func getDeliveredNotifications(completionHandler: ([UNNotification]) -> Void)](/documentation/usernotifications/unusernotificationcenter/getdeliverednotifications(completionhandler:))
- [func removeDeliveredNotifications(withIdentifiers: [String])](/documentation/usernotifications/unusernotificationcenter/removedeliverednotifications(withidentifiers:))
- [func removeAllDeliveredNotifications()](/documentation/usernotifications/unusernotificationcenter/removealldeliverednotifications())

### Managing notification categories

- [func setNotificationCategories(Set<UNNotificationCategory>)](/documentation/usernotifications/unusernotificationcenter/setnotificationcategories(_:))
- [func getNotificationCategories(completionHandler: (Set<UNNotificationCategory>) -> Void)](/documentation/usernotifications/unusernotificationcenter/getnotificationcategories(completionhandler:))

### Handling errors

- [UNError](/documentation/usernotifications/unerror)

#### Type Properties

- [static var notificationsNotAllowed: UNError.Code](/documentation/usernotifications/unerror/notificationsnotallowed)
- [static var attachmentInvalidURL: UNError.Code](/documentation/usernotifications/unerror/attachmentinvalidurl)
- [static var attachmentUnrecognizedType: UNError.Code](/documentation/usernotifications/unerror/attachmentunrecognizedtype)
- [static var attachmentInvalidFileSize: UNError.Code](/documentation/usernotifications/unerror/attachmentinvalidfilesize)
- [static var attachmentNotInDataStore: UNError.Code](/documentation/usernotifications/unerror/attachmentnotindatastore)
- [static var attachmentMoveIntoDataStoreFailed: UNError.Code](/documentation/usernotifications/unerror/attachmentmoveintodatastorefailed)
- [static var attachmentCorrupt: UNError.Code](/documentation/usernotifications/unerror/attachmentcorrupt)
- [static var notificationInvalidNoDate: UNError.Code](/documentation/usernotifications/unerror/notificationinvalidnodate)
- [static var notificationInvalidNoContent: UNError.Code](/documentation/usernotifications/unerror/notificationinvalidnocontent)
- [static var contentProvidingInvalid: UNError.Code](/documentation/usernotifications/unerror/contentprovidinginvalid)
- [static var contentProvidingObjectNotAllowed: UNError.Code](/documentation/usernotifications/unerror/contentprovidingobjectnotallowed)
- [static var badgeInputInvalid: UNError.Code](/documentation/usernotifications/unerror/badgeinputinvalid)

#### Error Information

- [static var errorDomain: String](/documentation/usernotifications/unerror/errordomain)
- [let UNErrorDomain: String](/documentation/usernotifications/unerrordomain)
- [UNError.Code](/documentation/usernotifications/unerror/code)

##### Constants

- [case notificationsNotAllowed](/documentation/usernotifications/unerror/code/notificationsnotallowed)
- [case attachmentInvalidURL](/documentation/usernotifications/unerror/code/attachmentinvalidurl)
- [case attachmentUnrecognizedType](/documentation/usernotifications/unerror/code/attachmentunrecognizedtype)
- [case attachmentInvalidFileSize](/documentation/usernotifications/unerror/code/attachmentinvalidfilesize)
- [case attachmentNotInDataStore](/documentation/usernotifications/unerror/code/attachmentnotindatastore)
- [case attachmentMoveIntoDataStoreFailed](/documentation/usernotifications/unerror/code/attachmentmoveintodatastorefailed)
- [case attachmentCorrupt](/documentation/usernotifications/unerror/code/attachmentcorrupt)
- [case notificationInvalidNoDate](/documentation/usernotifications/unerror/code/notificationinvalidnodate)
- [case notificationInvalidNoContent](/documentation/usernotifications/unerror/code/notificationinvalidnocontent)
- [case contentProvidingInvalid](/documentation/usernotifications/unerror/code/contentprovidinginvalid)
- [case contentProvidingObjectNotAllowed](/documentation/usernotifications/unerror/code/contentprovidingobjectnotallowed)

##### Enumeration Cases

- [case badgeInputInvalid](/documentation/usernotifications/unerror/code/badgeinputinvalid)

##### Initializers

- [init?(rawValue: Int)](/documentation/usernotifications/unerror/code/init(rawvalue:))
- [UNError.Code](/documentation/usernotifications/unerror/code)

#### Constants

- [case notificationsNotAllowed](/documentation/usernotifications/unerror/code/notificationsnotallowed)
- [case attachmentInvalidURL](/documentation/usernotifications/unerror/code/attachmentinvalidurl)
- [case attachmentUnrecognizedType](/documentation/usernotifications/unerror/code/attachmentunrecognizedtype)
- [case attachmentInvalidFileSize](/documentation/usernotifications/unerror/code/attachmentinvalidfilesize)
- [case attachmentNotInDataStore](/documentation/usernotifications/unerror/code/attachmentnotindatastore)
- [case attachmentMoveIntoDataStoreFailed](/documentation/usernotifications/unerror/code/attachmentmoveintodatastorefailed)
- [case attachmentCorrupt](/documentation/usernotifications/unerror/code/attachmentcorrupt)
- [case notificationInvalidNoDate](/documentation/usernotifications/unerror/code/notificationinvalidnodate)
- [case notificationInvalidNoContent](/documentation/usernotifications/unerror/code/notificationinvalidnocontent)
- [case contentProvidingInvalid](/documentation/usernotifications/unerror/code/contentprovidinginvalid)
- [case contentProvidingObjectNotAllowed](/documentation/usernotifications/unerror/code/contentprovidingobjectnotallowed)

#### Enumeration Cases

- [case badgeInputInvalid](/documentation/usernotifications/unerror/code/badgeinputinvalid)

#### Initializers

- [init?(rawValue: Int)](/documentation/usernotifications/unerror/code/init(rawvalue:))
- [let UNErrorDomain: String](/documentation/usernotifications/unerrordomain)
- [UNUserNotificationCenterDelegate](/documentation/usernotifications/unusernotificationcenterdelegate)

### First Steps

- [Handling notifications and notification-related actions](/documentation/usernotifications/handling-notifications-and-notification-related-actions)

### Handling the Selection of Custom Actions

- [func userNotificationCenter(UNUserNotificationCenter, didReceive: UNNotificationResponse, withCompletionHandler: () -> Void)](/documentation/usernotifications/unusernotificationcenterdelegate/usernotificationcenter(_:didreceive:withcompletionhandler:))

### Receiving Notifications

- [func userNotificationCenter(UNUserNotificationCenter, willPresent: UNNotification, withCompletionHandler: (UNNotificationPresentationOptions) -> Void)](/documentation/usernotifications/unusernotificationcenterdelegate/usernotificationcenter(_:willpresent:withcompletionhandler:))
- [UNNotificationPresentationOptions](/documentation/usernotifications/unnotificationpresentationoptions)

#### Constants

- [static var badge: UNNotificationPresentationOptions](/documentation/usernotifications/unnotificationpresentationoptions/badge)
- [static var banner: UNNotificationPresentationOptions](/documentation/usernotifications/unnotificationpresentationoptions/banner)
- [static var list: UNNotificationPresentationOptions](/documentation/usernotifications/unnotificationpresentationoptions/list)
- [static var sound: UNNotificationPresentationOptions](/documentation/usernotifications/unnotificationpresentationoptions/sound)
- [static var alert: UNNotificationPresentationOptions](/documentation/usernotifications/unnotificationpresentationoptions/alert)

#### Initializers

- [init(rawValue: UInt)](/documentation/usernotifications/unnotificationpresentationoptions/init(rawvalue:))

### Displaying Notification Settings

- [func userNotificationCenter(UNUserNotificationCenter, openSettingsFor: UNNotification?)](/documentation/usernotifications/unusernotificationcenterdelegate/usernotificationcenter(_:opensettingsfor:))
- [UNNotificationSettings](/documentation/usernotifications/unnotificationsettings)

### Getting the Authorization Status

- [var authorizationStatus: UNAuthorizationStatus](/documentation/usernotifications/unnotificationsettings/authorizationstatus)
- [UNAuthorizationStatus](/documentation/usernotifications/unauthorizationstatus)

#### Status

- [case notDetermined](/documentation/usernotifications/unauthorizationstatus/notdetermined)
- [case denied](/documentation/usernotifications/unauthorizationstatus/denied)
- [case authorized](/documentation/usernotifications/unauthorizationstatus/authorized)
- [case provisional](/documentation/usernotifications/unauthorizationstatus/provisional)
- [case ephemeral](/documentation/usernotifications/unauthorizationstatus/ephemeral)

#### Initializers

- [init?(rawValue: Int)](/documentation/usernotifications/unauthorizationstatus/init(rawvalue:))

### Getting Device-Specific Settings

- [var notificationCenterSetting: UNNotificationSetting](/documentation/usernotifications/unnotificationsettings/notificationcentersetting)
- [var lockScreenSetting: UNNotificationSetting](/documentation/usernotifications/unnotificationsettings/lockscreensetting)
- [var carPlaySetting: UNNotificationSetting](/documentation/usernotifications/unnotificationsettings/carplaysetting)
- [var alertSetting: UNNotificationSetting](/documentation/usernotifications/unnotificationsettings/alertsetting)
- [var badgeSetting: UNNotificationSetting](/documentation/usernotifications/unnotificationsettings/badgesetting)
- [var soundSetting: UNNotificationSetting](/documentation/usernotifications/unnotificationsettings/soundsetting)
- [var criticalAlertSetting: UNNotificationSetting](/documentation/usernotifications/unnotificationsettings/criticalalertsetting)
- [var announcementSetting: UNNotificationSetting](/documentation/usernotifications/unnotificationsettings/announcementsetting)
- [var scheduledDeliverySetting: UNNotificationSetting](/documentation/usernotifications/unnotificationsettings/scheduleddeliverysetting)
- [var timeSensitiveSetting: UNNotificationSetting](/documentation/usernotifications/unnotificationsettings/timesensitivesetting)
- [UNNotificationSetting](/documentation/usernotifications/unnotificationsetting)

#### Constants

- [case notSupported](/documentation/usernotifications/unnotificationsetting/notsupported)
- [case disabled](/documentation/usernotifications/unnotificationsetting/disabled)
- [case enabled](/documentation/usernotifications/unnotificationsetting/enabled)

#### Initializers

- [init?(rawValue: Int)](/documentation/usernotifications/unnotificationsetting/init(rawvalue:))

### Getting Interface Settings

- [var alertStyle: UNAlertStyle](/documentation/usernotifications/unnotificationsettings/alertstyle)
- [UNAlertStyle](/documentation/usernotifications/unalertstyle)

#### Presentation Styles

- [case none](/documentation/usernotifications/unalertstyle/none)
- [case banner](/documentation/usernotifications/unalertstyle/banner)
- [case alert](/documentation/usernotifications/unalertstyle/alert)

#### Initializers

- [init?(rawValue: Int)](/documentation/usernotifications/unalertstyle/init(rawvalue:))
- [var showPreviewsSetting: UNShowPreviewsSetting](/documentation/usernotifications/unnotificationsettings/showpreviewssetting)
- [UNShowPreviewsSetting](/documentation/usernotifications/unshowpreviewssetting)

#### Preview Styes

- [case always](/documentation/usernotifications/unshowpreviewssetting/always)
- [case whenAuthenticated](/documentation/usernotifications/unshowpreviewssetting/whenauthenticated)
- [case never](/documentation/usernotifications/unshowpreviewssetting/never)

#### Initializers

- [init?(rawValue: Int)](/documentation/usernotifications/unshowpreviewssetting/init(rawvalue:))
- [var providesAppNotificationSettings: Bool](/documentation/usernotifications/unnotificationsettings/providesappnotificationsettings)

### Instance Properties

- [var directMessagesSetting: UNNotificationSetting](/documentation/usernotifications/unnotificationsettings/directmessagessetting)

## Remote notifications

- [Setting up a remote notification server](/documentation/usernotifications/setting-up-a-remote-notification-server)

### Server tasks

- [Registering your app with APNs](/documentation/usernotifications/registering-your-app-with-apns)
- [Generating a remote notification](/documentation/usernotifications/generating-a-remote-notification)
- [Pushing background updates to your App](/documentation/usernotifications/pushing-background-updates-to-your-app)
- [Establishing a connection to Apple Push Notification service (APNs)](/documentation/usernotifications/establishing-a-connection-to-apns)

### Security

- [Establishing a token-based connection to APNs](/documentation/usernotifications/establishing-a-token-based-connection-to-apns)
- [Establishing a certificate-based connection to APNs](/documentation/usernotifications/establishing-a-certificate-based-connection-to-apns)

### Device push notifications

- [Sending notification requests to APNs](/documentation/usernotifications/sending-notification-requests-to-apns)
- [Handling notification responses from APNs](/documentation/usernotifications/handling-notification-responses-from-apns)
- [Viewing the status of push notifications using Metrics and APNs](/documentation/usernotifications/viewing-the-status-of-push-notifications-using-metrics-and-apns)

### Broadcast push notifications

- [Setting up broadcast push notifications](/documentation/usernotifications/setting-up-broadcast-push-notifications)
- [Sending channel management requests to APNs](/documentation/usernotifications/sending-channel-management-requests-to-apns)
- [Sending broadcast push notification requests to APNs](/documentation/usernotifications/sending-broadcast-push-notification-requests-to-apns)
- [Handling error responses from Apple Push Notification service](/documentation/usernotifications/handling-error-responses-from-apns)

### Troubleshooting

- [Troubleshooting push notifications](/documentation/usernotifications/troubleshooting-push-notifications)
- [Sending push notifications using command-line tools](/documentation/usernotifications/sending-push-notifications-using-command-line-tools)
- [Testing notifications using the Push Notification Console](/documentation/usernotifications/testing-notifications-using-the-push-notification-console)

## Notification requests

- [Scheduling a notification locally from your app](/documentation/usernotifications/scheduling-a-notification-locally-from-your-app)

### Related Topics

- [Handling notifications and notification-related actions](/documentation/usernotifications/handling-notifications-and-notification-related-actions)
- [UNNotificationRequest](/documentation/usernotifications/unnotificationrequest)

### Creating a Notification Request

- [convenience init(identifier: String, content: UNNotificationContent, trigger: UNNotificationTrigger?)](/documentation/usernotifications/unnotificationrequest/init(identifier:content:trigger:))

### Getting the Request Details

- [var identifier: String](/documentation/usernotifications/unnotificationrequest/identifier)
- [var content: UNNotificationContent](/documentation/usernotifications/unnotificationrequest/content)
- [var trigger: UNNotificationTrigger?](/documentation/usernotifications/unnotificationrequest/trigger)
- [UNNotification](/documentation/usernotifications/unnotification)

### Getting the Notification Details

- [var request: UNNotificationRequest](/documentation/usernotifications/unnotification/request)
- [var date: Date](/documentation/usernotifications/unnotification/date)

## Push notifications in Safari

- [Sending web push notifications in web apps and browsers](/documentation/usernotifications/sending-web-push-notifications-in-web-apps-and-browsers)

## Notification content

- [Implementing communication notifications](/documentation/usernotifications/implementing-communication-notifications)
- [UNNotificationContentProviding](/documentation/usernotifications/unnotificationcontentproviding)
- [UNNotificationActionIcon](/documentation/usernotifications/unnotificationactionicon)

### Essentials

- [convenience init(systemImageName: String)](/documentation/usernotifications/unnotificationactionicon/init(systemimagename:))
- [convenience init(templateImageName: String)](/documentation/usernotifications/unnotificationactionicon/init(templateimagename:))
- [UNMutableNotificationContent](/documentation/usernotifications/unmutablenotificationcontent)

### Providing the primary content

- [var title: String](/documentation/usernotifications/unmutablenotificationcontent/title)
- [var subtitle: String](/documentation/usernotifications/unmutablenotificationcontent/subtitle)
- [var body: String](/documentation/usernotifications/unmutablenotificationcontent/body)

### Providing supplementary content

- [var attachments: [UNNotificationAttachment]](/documentation/usernotifications/unmutablenotificationcontent/attachments)
- [var userInfo: [AnyHashable : Any]](/documentation/usernotifications/unmutablenotificationcontent/userinfo)

### Configuring app behavior

- [var launchImageName: String](/documentation/usernotifications/unmutablenotificationcontent/launchimagename)
- [var badge: NSNumber?](/documentation/usernotifications/unmutablenotificationcontent/badge)
- [var targetContentIdentifier: String?](/documentation/usernotifications/unmutablenotificationcontent/targetcontentidentifier)

### Integrating with the system

- [var sound: UNNotificationSound?](/documentation/usernotifications/unmutablenotificationcontent/sound)
- [var interruptionLevel: UNNotificationInterruptionLevel](/documentation/usernotifications/unmutablenotificationcontent/interruptionlevel)
- [UNNotificationInterruptionLevel](/documentation/usernotifications/unnotificationinterruptionlevel)

#### Enumeration Cases

- [case active](/documentation/usernotifications/unnotificationinterruptionlevel/active)
- [case critical](/documentation/usernotifications/unnotificationinterruptionlevel/critical)
- [case passive](/documentation/usernotifications/unnotificationinterruptionlevel/passive)
- [case timeSensitive](/documentation/usernotifications/unnotificationinterruptionlevel/timesensitive)

#### Initializers

- [init?(rawValue: UInt)](/documentation/usernotifications/unnotificationinterruptionlevel/init(rawvalue:))
- [var relevanceScore: Double](/documentation/usernotifications/unmutablenotificationcontent/relevancescore)
- [var filterCriteria: String?](/documentation/usernotifications/unmutablenotificationcontent/filtercriteria)

### Grouping notifications

- [var threadIdentifier: String](/documentation/usernotifications/unmutablenotificationcontent/threadidentifier)
- [var categoryIdentifier: String](/documentation/usernotifications/unmutablenotificationcontent/categoryidentifier)
- [var summaryArgument: String](/documentation/usernotifications/unmutablenotificationcontent/summaryargument)
- [var summaryArgumentCount: Int](/documentation/usernotifications/unmutablenotificationcontent/summaryargumentcount)
- [UNNotificationContent](/documentation/usernotifications/unnotificationcontent)

### Accessing the primary content

- [var title: String](/documentation/usernotifications/unnotificationcontent/title)
- [var subtitle: String](/documentation/usernotifications/unnotificationcontent/subtitle)
- [var body: String](/documentation/usernotifications/unnotificationcontent/body)

### Accessing supplementary content

- [var attachments: [UNNotificationAttachment]](/documentation/usernotifications/unnotificationcontent/attachments)
- [var userInfo: [AnyHashable : Any]](/documentation/usernotifications/unnotificationcontent/userinfo)

### Reading app configuration

- [var launchImageName: String](/documentation/usernotifications/unnotificationcontent/launchimagename)
- [var badge: NSNumber?](/documentation/usernotifications/unnotificationcontent/badge)
- [var targetContentIdentifier: String?](/documentation/usernotifications/unnotificationcontent/targetcontentidentifier)

### Reading system configuration

- [var sound: UNNotificationSound?](/documentation/usernotifications/unnotificationcontent/sound)
- [var interruptionLevel: UNNotificationInterruptionLevel](/documentation/usernotifications/unnotificationcontent/interruptionlevel)
- [UNNotificationInterruptionLevel](/documentation/usernotifications/unnotificationinterruptionlevel)

#### Enumeration Cases

- [case active](/documentation/usernotifications/unnotificationinterruptionlevel/active)
- [case critical](/documentation/usernotifications/unnotificationinterruptionlevel/critical)
- [case passive](/documentation/usernotifications/unnotificationinterruptionlevel/passive)
- [case timeSensitive](/documentation/usernotifications/unnotificationinterruptionlevel/timesensitive)

#### Initializers

- [init?(rawValue: UInt)](/documentation/usernotifications/unnotificationinterruptionlevel/init(rawvalue:))
- [var relevanceScore: Double](/documentation/usernotifications/unnotificationcontent/relevancescore)
- [var filterCriteria: String?](/documentation/usernotifications/unnotificationcontent/filtercriteria)

### Retrieving group information

- [var threadIdentifier: String](/documentation/usernotifications/unnotificationcontent/threadidentifier)
- [var categoryIdentifier: String](/documentation/usernotifications/unnotificationcontent/categoryidentifier)
- [var summaryArgument: String](/documentation/usernotifications/unnotificationcontent/summaryargument)
- [var summaryArgumentCount: Int](/documentation/usernotifications/unnotificationcontent/summaryargumentcount)

### Updating the notification’s content

- [func updating(from: any UNNotificationContentProviding) throws -> UNNotificationContent](/documentation/usernotifications/unnotificationcontent/updating(from:))
- [UNNotificationAttachment](/documentation/usernotifications/unnotificationattachment)

### Creating an Attachment

- [convenience init(identifier: String, url: URL, options: [AnyHashable : Any]?) throws](/documentation/usernotifications/unnotificationattachment/init(identifier:url:options:))
- [let UNNotificationAttachmentOptionsTypeHintKey: String](/documentation/usernotifications/unnotificationattachmentoptionstypehintkey)
- [let UNNotificationAttachmentOptionsThumbnailHiddenKey: String](/documentation/usernotifications/unnotificationattachmentoptionsthumbnailhiddenkey)
- [let UNNotificationAttachmentOptionsThumbnailClippingRectKey: String](/documentation/usernotifications/unnotificationattachmentoptionsthumbnailclippingrectkey)
- [let UNNotificationAttachmentOptionsThumbnailTimeKey: String](/documentation/usernotifications/unnotificationattachmentoptionsthumbnailtimekey)

### Getting the Attachment Contents

- [var identifier: String](/documentation/usernotifications/unnotificationattachment/identifier)
- [var url: URL](/documentation/usernotifications/unnotificationattachment/url)
- [var type: String](/documentation/usernotifications/unnotificationattachment/type)
- [UNNotificationSound](/documentation/usernotifications/unnotificationsound)

### Creating Notification Sounds

- [class var `default`: UNNotificationSound](/documentation/usernotifications/unnotificationsound/default)
- [convenience init(named: UNNotificationSoundName)](/documentation/usernotifications/unnotificationsound/init(named:))

### Getting Critical Sounds

- [class var defaultCritical: UNNotificationSound](/documentation/usernotifications/unnotificationsound/defaultcritical)
- [class func defaultCriticalSound(withAudioVolume: Float) -> Self](/documentation/usernotifications/unnotificationsound/defaultcriticalsound(withaudiovolume:))
- [class func criticalSoundNamed(UNNotificationSoundName) -> Self](/documentation/usernotifications/unnotificationsound/criticalsoundnamed(_:))
- [class func criticalSoundNamed(UNNotificationSoundName, withAudioVolume: Float) -> Self](/documentation/usernotifications/unnotificationsound/criticalsoundnamed(_:withaudiovolume:))

### Type Properties

- [class var defaultRingtone: UNNotificationSound](/documentation/usernotifications/unnotificationsound/defaultringtone)

### Type Methods

- [class func ringtoneSoundNamed(UNNotificationSoundName) -> Self](/documentation/usernotifications/unnotificationsound/ringtonesoundnamed(_:))
- [UNNotificationSoundName](/documentation/usernotifications/unnotificationsoundname)

### Initializers

- [init(String)](/documentation/usernotifications/unnotificationsoundname/init(_:))
- [init(rawValue: String)](/documentation/usernotifications/unnotificationsoundname/init(rawvalue:))

## Triggers

- [UNCalendarNotificationTrigger](/documentation/usernotifications/uncalendarnotificationtrigger)

### Creating a Calendar Trigger

- [convenience init(dateMatching: DateComponents, repeats: Bool)](/documentation/usernotifications/uncalendarnotificationtrigger/init(datematching:repeats:))

### Getting the Trigger Information

- [func nextTriggerDate() -> Date?](/documentation/usernotifications/uncalendarnotificationtrigger/nexttriggerdate())
- [var dateComponents: DateComponents](/documentation/usernotifications/uncalendarnotificationtrigger/datecomponents)
- [UNTimeIntervalNotificationTrigger](/documentation/usernotifications/untimeintervalnotificationtrigger)

### Creating a Time Interval Trigger

- [convenience init(timeInterval: TimeInterval, repeats: Bool)](/documentation/usernotifications/untimeintervalnotificationtrigger/init(timeinterval:repeats:))

### Getting the Trigger Information

- [func nextTriggerDate() -> Date?](/documentation/usernotifications/untimeintervalnotificationtrigger/nexttriggerdate())
- [var timeInterval: TimeInterval](/documentation/usernotifications/untimeintervalnotificationtrigger/timeinterval)
- [UNLocationNotificationTrigger](/documentation/usernotifications/unlocationnotificationtrigger)

### Creating a Location Trigger

- [convenience init(region: CLRegion, repeats: Bool)](/documentation/usernotifications/unlocationnotificationtrigger/init(region:repeats:))

### Accessing the Trigger Region

- [var region: CLRegion](/documentation/usernotifications/unlocationnotificationtrigger/region)
- [UNPushNotificationTrigger](/documentation/usernotifications/unpushnotificationtrigger)
- [UNNotificationTrigger](/documentation/usernotifications/unnotificationtrigger)

### Configuring the Trigger’s Behavior

- [var repeats: Bool](/documentation/usernotifications/unnotificationtrigger/repeats)

## Notification categories and user actions

- [Declaring your actionable notification types](/documentation/usernotifications/declaring-your-actionable-notification-types)
- [UNNotificationCategory](/documentation/usernotifications/unnotificationcategory)

### Essentials

- [convenience init(identifier: String, actions: [UNNotificationAction], intentIdentifiers: [String], options: UNNotificationCategoryOptions)](/documentation/usernotifications/unnotificationcategory/init(identifier:actions:intentidentifiers:options:))
- [convenience init(identifier: String, actions: [UNNotificationAction], intentIdentifiers: [String], hiddenPreviewsBodyPlaceholder: String, options: UNNotificationCategoryOptions)](/documentation/usernotifications/unnotificationcategory/init(identifier:actions:intentidentifiers:hiddenpreviewsbodyplaceholder:options:))
- [convenience init(identifier: String, actions: [UNNotificationAction], intentIdentifiers: [String], hiddenPreviewsBodyPlaceholder: String?, categorySummaryFormat: String?, options: UNNotificationCategoryOptions)](/documentation/usernotifications/unnotificationcategory/init(identifier:actions:intentidentifiers:hiddenpreviewsbodyplaceholder:categorysummaryformat:options:))

### Getting the Information

- [var identifier: String](/documentation/usernotifications/unnotificationcategory/identifier)
- [var actions: [UNNotificationAction]](/documentation/usernotifications/unnotificationcategory/actions)
- [var intentIdentifiers: [String]](/documentation/usernotifications/unnotificationcategory/intentidentifiers)
- [var hiddenPreviewsBodyPlaceholder: String](/documentation/usernotifications/unnotificationcategory/hiddenpreviewsbodyplaceholder)
- [var categorySummaryFormat: String](/documentation/usernotifications/unnotificationcategory/categorysummaryformat)

### Getting the Options

- [var options: UNNotificationCategoryOptions](/documentation/usernotifications/unnotificationcategory/options)
- [UNNotificationCategoryOptions](/documentation/usernotifications/unnotificationcategoryoptions)

#### Creating an option

- [init(rawValue: UInt)](/documentation/usernotifications/unnotificationcategoryoptions/init(rawvalue:))

#### Customizing a category

- [static var allowInCarPlay: UNNotificationCategoryOptions](/documentation/usernotifications/unnotificationcategoryoptions/allowincarplay)
- [static var allowAnnouncement: UNNotificationCategoryOptions](/documentation/usernotifications/unnotificationcategoryoptions/allowannouncement)

#### Managing hidden preview behavior

- [static var hiddenPreviewsShowTitle: UNNotificationCategoryOptions](/documentation/usernotifications/unnotificationcategoryoptions/hiddenpreviewsshowtitle)
- [static var hiddenPreviewsShowSubtitle: UNNotificationCategoryOptions](/documentation/usernotifications/unnotificationcategoryoptions/hiddenpreviewsshowsubtitle)

#### Managing action handling behavior

- [static var customDismissAction: UNNotificationCategoryOptions](/documentation/usernotifications/unnotificationcategoryoptions/customdismissaction)
- [UNNotificationAction](/documentation/usernotifications/unnotificationaction)

### Essentials

- [convenience init(identifier: String, title: String, options: UNNotificationActionOptions)](/documentation/usernotifications/unnotificationaction/init(identifier:title:options:))
- [convenience init(identifier: String, title: String, options: UNNotificationActionOptions, icon: UNNotificationActionIcon?)](/documentation/usernotifications/unnotificationaction/init(identifier:title:options:icon:))

### Getting Information

- [var identifier: String](/documentation/usernotifications/unnotificationaction/identifier)
- [var title: String](/documentation/usernotifications/unnotificationaction/title)
- [var icon: UNNotificationActionIcon?](/documentation/usernotifications/unnotificationaction/icon)

### Getting Options

- [var options: UNNotificationActionOptions](/documentation/usernotifications/unnotificationaction/options)
- [UNNotificationActionOptions](/documentation/usernotifications/unnotificationactionoptions)

#### Initializers

- [init(rawValue: UInt)](/documentation/usernotifications/unnotificationactionoptions/init(rawvalue:))

#### Constants

- [static var authenticationRequired: UNNotificationActionOptions](/documentation/usernotifications/unnotificationactionoptions/authenticationrequired)
- [static var destructive: UNNotificationActionOptions](/documentation/usernotifications/unnotificationactionoptions/destructive)
- [static var foreground: UNNotificationActionOptions](/documentation/usernotifications/unnotificationactionoptions/foreground)
- [UNTextInputNotificationAction](/documentation/usernotifications/untextinputnotificationaction)

### Essentials

- [convenience init(identifier: String, title: String, options: UNNotificationActionOptions, textInputButtonTitle: String, textInputPlaceholder: String)](/documentation/usernotifications/untextinputnotificationaction/init(identifier:title:options:textinputbuttontitle:textinputplaceholder:))
- [convenience init(identifier: String, title: String, options: UNNotificationActionOptions, icon: UNNotificationActionIcon?, textInputButtonTitle: String, textInputPlaceholder: String)](/documentation/usernotifications/untextinputnotificationaction/init(identifier:title:options:icon:textinputbuttontitle:textinputplaceholder:))

### Getting Information

- [var textInputButtonTitle: String](/documentation/usernotifications/untextinputnotificationaction/textinputbuttontitle)
- [var textInputPlaceholder: String](/documentation/usernotifications/untextinputnotificationaction/textinputplaceholder)

## Notification responses

- [Handling notifications and notification-related actions](/documentation/usernotifications/handling-notifications-and-notification-related-actions)
- [UNNotificationResponse](/documentation/usernotifications/unnotificationresponse)

### Getting the Response Information

- [var actionIdentifier: String](/documentation/usernotifications/unnotificationresponse/actionidentifier)
- [var notification: UNNotification](/documentation/usernotifications/unnotificationresponse/notification)
- [var targetScene: UIScene?](/documentation/usernotifications/unnotificationresponse/targetscene)
- [let UNNotificationDefaultActionIdentifier: String](/documentation/usernotifications/unnotificationdefaultactionidentifier)
- [let UNNotificationDismissActionIdentifier: String](/documentation/usernotifications/unnotificationdismissactionidentifier)
- [UNTextInputNotificationResponse](/documentation/usernotifications/untextinputnotificationresponse)

### Getting the Text Response

- [var userText: String](/documentation/usernotifications/untextinputnotificationresponse/usertext)

## Notification service app extension

- [Modifying content in newly delivered notifications](/documentation/usernotifications/modifying-content-in-newly-delivered-notifications)
- [UNNotificationServiceExtension](/documentation/usernotifications/unnotificationserviceextension)

### Processing Notifications

- [func didReceive(UNNotificationRequest, withContentHandler: (UNNotificationContent) -> Void)](/documentation/usernotifications/unnotificationserviceextension/didreceive(_:withcontenthandler:))
- [func serviceExtensionTimeWillExpire()](/documentation/usernotifications/unnotificationserviceextension/serviceextensiontimewillexpire())

## Entitlements

- [APS Environment Entitlement](/documentation/bundleresources/entitlements/aps-environment)
- [APS Environment (macOS) Entitlement](/documentation/bundleresources/entitlements/com.apple.developer.aps-environment)

## Sample code

- [Handling Communication Notifications and Focus Status Updates](/documentation/usernotifications/handling-communication-notifications-and-focus-status-updates)
- [Implementing Alert Push Notifications](/documentation/usernotifications/implementing-alert-push-notifications)
- [Implementing Background Push Notifications](/documentation/usernotifications/implementing-background-push-notifications)

## Classes

- [UNNotificationAttributedMessageContext](/documentation/usernotifications/unnotificationattributedmessagecontext)

### Initializers

- [convenience init(sendMessageIntent: INSendMessageIntent, attributedContent: NSAttributedString)](/documentation/usernotifications/unnotificationattributedmessagecontext/init(sendmessageintent:attributedcontent:))

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

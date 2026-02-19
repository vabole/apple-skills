---
title: HKHealthStore
description: The access point for all data managed by HealthKit.
source: https://developer.apple.com/documentation/healthkit/hkhealthstore
timestamp: 2026-01-19T10:21:39.628Z
---

**Navigation:** [Healthkit](/documentation/healthkit)

**Class**

# HKHealthStore

**Available on:** iOS 8.0+, iPadOS 8.0+, Mac Catalyst 13.0+, macOS 13.0+, visionOS 1.0+, watchOS 2.0+

> The access point for all data managed by HealthKit.

```swift
class HKHealthStore
```

## Overview

Use a [HKHealth Store](/documentation/healthkit/hkhealthstore) object to request permission to share or read HealthKit data. After you have permission, you can use the HealthKit store to save new samples to the store, or to manage the samples that your app saved. Additionally, you can use the HealthKit store to start, stop, and manage queries.

For more information, see [setting-up](/documentation/healthkit/setting-up-healthkit).

## Inherits From

- [NSObject](/documentation/ObjectiveC/NSObject-swift.class)

## Conforms To

- [CVarArg](/documentation/Swift/CVarArg)
- [CustomDebugStringConvertible](/documentation/Swift/CustomDebugStringConvertible)
- [CustomStringConvertible](/documentation/Swift/CustomStringConvertible)
- [Equatable](/documentation/Swift/Equatable)
- [Hashable](/documentation/Swift/Hashable)
- [NSObjectProtocol](/documentation/ObjectiveC/NSObjectProtocol)
- [Sendable](/documentation/Swift/Sendable)
- [SendableMetatype](/documentation/Swift/SendableMetatype)

## Accessing HealthKit

- [authorizationStatus(for:)](/documentation/healthkit/hkhealthstore/authorizationstatus(for:)) Returns the app’s authorization status for sharing the specified data type.
- [HKAuthorizationStatus](/documentation/healthkit/hkauthorizationstatus) Constants indicating the authorization status for a particular data type.
- [getRequestStatusForAuthorization(toShare:read:completion:)](/documentation/healthkit/hkhealthstore/getrequeststatusforauthorization(toshare:read:completion:)) Indicates whether the system presents the user with a permission sheet if your app requests authorization for the provided types.
- [HKAuthorizationRequestStatus](/documentation/healthkit/hkauthorizationrequeststatus) Values that indicate whether your app needs to request authorization from the user.
- [isHealthDataAvailable()](/documentation/healthkit/hkhealthstore/ishealthdataavailable()) Returns a Boolean value that indicates whether HealthKit is available on this device.
- [supportsHealthRecords()](/documentation/healthkit/hkhealthstore/supportshealthrecords()) Returns a Boolean value that indicates whether the current device supports clinical records.
- [requestAuthorization(toShare:read:completion:)](/documentation/healthkit/hkhealthstore/requestauthorization(toshare:read:completion:)) Requests permission to save and read the specified data types.
- [requestAuthorization(toShare:read:)](/documentation/healthkit/hkhealthstore/requestauthorization(toshare:read:)) Asynchronously requests permission to save and read the specified data types.
- [requestPerObjectReadAuthorization(for:predicate:completion:)](/documentation/healthkit/hkhealthstore/requestperobjectreadauthorization(for:predicate:completion:)) Asynchronously requests permission to read a data type that requires per-object authorization (such as vision prescriptions).
- [handleAuthorizationForExtension(completion:)](/documentation/healthkit/hkhealthstore/handleauthorizationforextension(completion:)) Requests permission to save and read the data types specified by an extension.
- [authorizationViewControllerPresenter](/documentation/healthkit/hkhealthstore/authorizationviewcontrollerpresenter) The view controller that presents HealthKit authorization sheets.

## Querying HealthKit data

- [execute(_:)](/documentation/healthkit/hkhealthstore/execute(_:)) Starts executing the provided query.
- [stop(_:)](/documentation/healthkit/hkhealthstore/stop(_:)) Stops a long-running query.

## Reading characteristic data

- [biologicalSex()](/documentation/healthkit/hkhealthstore/biologicalsex()) Reads someone’s biological sex from the HealthKit store.
- [bloodType()](/documentation/healthkit/hkhealthstore/bloodtype()) Reads the user’s blood type from the HealthKit store.
- [dateOfBirth()](/documentation/healthkit/hkhealthstore/dateofbirth()) Reads the user’s date of birth from the HealthKit store as a date value.
- [dateOfBirthComponents()](/documentation/healthkit/hkhealthstore/dateofbirthcomponents()) Reads the user’s date of birth from the HealthKit store as date components.
- [fitzpatrickSkinType()](/documentation/healthkit/hkhealthstore/fitzpatrickskintype()) Reads the user’s Fitzpatrick Skin Type from the HealthKit store.
- [wheelchairUse()](/documentation/healthkit/hkhealthstore/wheelchairuse()) Reads the user’s wheelchair use from the HealthKit store.

## Working with HealthKit objects

- [delete(_:withCompletion:)](/documentation/healthkit/hkhealthstore/delete(_:withcompletion:)-78l1m) Deletes the specified object from the HealthKit store.
- [delete(_:withCompletion:)](/documentation/healthkit/hkhealthstore/delete(_:withcompletion:)-17hzm) Deletes the specified objects from the HealthKit store.
- [deleteObjects(of:predicate:withCompletion:)](/documentation/healthkit/hkhealthstore/deleteobjects(of:predicate:withcompletion:)) Deletes objects saved by this application that match the provided type and predicate.
- [earliestPermittedSampleDate()](/documentation/healthkit/hkhealthstore/earliestpermittedsampledate()) Returns the earliest date permitted for samples.
- [save(_:withCompletion:)](/documentation/healthkit/hkhealthstore/save(_:withcompletion:)-6fmtg) Saves the provided object to the HealthKit store.
- [save(_:withCompletion:)](/documentation/healthkit/hkhealthstore/save(_:withcompletion:)-47iwb) Saves an array of objects to the HealthKit store.

## Accessing the preferred units

- [preferredUnits(for:completion:)](/documentation/healthkit/hkhealthstore/preferredunits(for:completion:)) Returns the user’s preferred units for the given quantity types.
- [HKUserPreferencesDidChange](/documentation/Foundation/NSNotification/Name-swift.struct/HKUserPreferencesDidChange) Notifies observers whenever the user changes his or her preferred units.

## Managing background delivery

- [enableBackgroundDelivery(for:frequency:withCompletion:)](/documentation/healthkit/hkhealthstore/enablebackgrounddelivery(for:frequency:withcompletion:)) Enables the delivery of updates to an app running in the background.
- [com.apple.developer.healthkit.background-delivery](/documentation/BundleResources/Entitlements/com.apple.developer.healthkit.background-delivery) A Boolean value that indicates whether observer queries receive updates while running in the background.
- [HKUpdateFrequency](/documentation/healthkit/hkupdatefrequency) Constants that determine how often the system launches your app in response to changes to HealthKit data.
- [disableBackgroundDelivery(for:withCompletion:)](/documentation/healthkit/hkhealthstore/disablebackgrounddelivery(for:withcompletion:)) Disables background deliveries of update notifications for the specified data type.
- [disableAllBackgroundDelivery(completion:)](/documentation/healthkit/hkhealthstore/disableallbackgrounddelivery(completion:)) Disables all background deliveries of update notifications.

## Managing workouts

- [splitTotalEnergy(_:start:end:resultsHandler:)](/documentation/healthkit/hkhealthstore/splittotalenergy(_:start:end:resultshandler:)) Calculates the active and resting energy burned based on the total energy burned over the given duration.
- [recoverActiveWorkoutSession(completion:)](/documentation/healthkit/hkhealthstore/recoveractiveworkoutsession(completion:)) Recovers an active workout session.

## Managing workout sessions

- [workoutSessionMirroringStartHandler](/documentation/healthkit/hkhealthstore/workoutsessionmirroringstarthandler) A block that the system calls when it starts a mirrored workout session.
- [startWatchApp(with:completion:)](/documentation/healthkit/hkhealthstore/startwatchapp(with:completion:)) Launches or wakes the companion watchOS app to create a new workout session.
- [pause(_:)](/documentation/healthkit/hkhealthstore/pause(_:)) Pauses the provided workout session.
- [resumeWorkoutSession(_:)](/documentation/healthkit/hkhealthstore/resumeworkoutsession(_:)) Resumes the provided workout session.

## Managing estimates

- [recalibrateEstimates(sampleType:date:completion:)](/documentation/healthkit/hkhealthstore/recalibrateestimates(sampletype:date:completion:)) Recalibrates the prediction algorithm used to calculate the specified sample type.

## Accessing the move mode

- [activityMoveMode()](/documentation/healthkit/hkhealthstore/activitymovemode()) Returns the activity move mode for the current user.
- [HKUserPreferencesDidChange](/documentation/Foundation/NSNotification/Name-swift.struct/HKUserPreferencesDidChange) Notifies observers whenever the user changes his or her preferred units.

## Deprecated symbols

- [add(_:to:completion:)](/documentation/healthkit/hkhealthstore/add(_:to:completion:)) Associates the provided samples with the specified workout.
- [start(_:)](/documentation/healthkit/hkhealthstore/start(_:)) Starts a workout session for the current app.
- [end(_:)](/documentation/healthkit/hkhealthstore/end(_:)) Ends a workout session for the current app.

## Instance Methods

- [relateWorkoutEffortSample(_:with:activity:completion:)](/documentation/healthkit/hkhealthstore/relateworkouteffortsample(_:with:activity:completion:))
- [unrelateWorkoutEffortSample(_:from:activity:completion:)](/documentation/healthkit/hkhealthstore/unrelateworkouteffortsample(_:from:activity:completion:))

## Health data

- [Saving data to HealthKit](/documentation/healthkit/saving-data-to-healthkit)
- [Reading data from HealthKit](/documentation/healthkit/reading-data-from-healthkit)
- [Creating a Mobility Health App](/documentation/healthkit/creating-a-mobility-health-app)
- [Data types](/documentation/healthkit/data-types)
- [Samples](/documentation/healthkit/samples)
- [Queries](/documentation/healthkit/queries)
- [Visualizing HealthKit State of Mind in visionOS](/documentation/healthkit/visualizing-healthkit-state-of-mind-in-visionos)
- [Logging symptoms associated with a medication](/documentation/healthkit/logging-symptoms-associated-with-a-medication)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

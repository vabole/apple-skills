---
title: BGTaskScheduler
description: A class for scheduling tasks that add background support to your app’s most critical work.
source: https://developer.apple.com/documentation/backgroundtasks/bgtaskscheduler
timestamp: 2026-01-19T11:03:11.124Z
---

**Navigation:** [Backgroundtasks](/documentation/backgroundtasks)

**Class**

# BGTaskScheduler

**Available on:** iOS 13.0+, iPadOS 13.0+, Mac Catalyst 13.1+, tvOS 13.0+, visionOS 1.0+

> A class for scheduling tasks that add background support to your app’s most critical work.

```swift
class BGTaskScheduler
```

## Overview

Background tasks give your app a way to run code even when the app is suspended:

- To register, schedule, and run tasks in the background, see [using-background-tasks-to-update-your](/documentation/UIKit/using-background-tasks-to-update-your-app).
- To submit work in the foreground that can finish even if the app moves to the background, see [performing-long-running-tasks-on-ios-and](/documentation/backgroundtasks/performing-long-running-tasks-on-ios-and-ipados).

## Inherits From

- [NSObject](/documentation/ObjectiveC/NSObject-swift.class)

## Conforms To

- [CVarArg](/documentation/Swift/CVarArg)
- [CustomDebugStringConvertible](/documentation/Swift/CustomDebugStringConvertible)
- [CustomStringConvertible](/documentation/Swift/CustomStringConvertible)
- [Equatable](/documentation/Swift/Equatable)
- [Hashable](/documentation/Swift/Hashable)
- [NSObjectProtocol](/documentation/ObjectiveC/NSObjectProtocol)

## Getting the shared task scheduler

- [shared](/documentation/backgroundtasks/bgtaskscheduler/shared) The shared background task scheduler instance.

## Checking task requirements

- [supportedResources](/documentation/backgroundtasks/bgtaskscheduler/supportedresources) Additional system resources that a continuous background task can request.

## Scheduling a task

- [register(forTaskWithIdentifier:using:launchHandler:)](/documentation/backgroundtasks/bgtaskscheduler/register(fortaskwithidentifier:using:launchhandler:)) Register a launch handler for the task with the associated identifier that’s executed on the specified queue.
- [submit(_:)](/documentation/backgroundtasks/bgtaskscheduler/submit(_:)) Submit a previously registered background task for execution.

## Canceling a task

- [cancel(taskRequestWithIdentifier:)](/documentation/backgroundtasks/bgtaskscheduler/cancel(taskrequestwithidentifier:)) Cancel a previously scheduled task request.
- [cancelAllTaskRequests()](/documentation/backgroundtasks/bgtaskscheduler/cancelalltaskrequests()) Cancel all scheduled task requests.

## Getting all scheduled tasks

- [getPendingTaskRequests(completionHandler:)](/documentation/backgroundtasks/bgtaskscheduler/getpendingtaskrequests(completionhandler:)) Request a list of unexecuted scheduled task requests.

## Handling errors

- [BGTaskScheduler.Error](/documentation/backgroundtasks/bgtaskscheduler/error) The Errors for the  domain.
- [BGTaskScheduler.Error.Code](/documentation/backgroundtasks/bgtaskscheduler/error/code) An enumeration of the task scheduling errors.
- [errorDomain](/documentation/backgroundtasks/bgtaskscheduler/errordomain) The background tasks error domain as a string.

## Essentials

- [Background Tasks updates](/documentation/Updates/BackgroundTasks)
- [BGTask](/documentation/backgroundtasks/bgtask)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

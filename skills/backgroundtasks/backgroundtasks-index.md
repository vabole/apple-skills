---
title: Background Tasks
source: https://developer.apple.com/documentation/backgroundtasks
timestamp: 2026-01-19T11:02:42.122Z
---

## Essentials

- [Background Tasks updates](/documentation/updates/backgroundtasks)
- [BGTaskScheduler](/documentation/backgroundtasks/bgtaskscheduler)

### Getting the shared task scheduler

- [class var shared: BGTaskScheduler](/documentation/backgroundtasks/bgtaskscheduler/shared)

### Checking task requirements

- [class var supportedResources: BGContinuedProcessingTaskRequest.Resources](/documentation/backgroundtasks/bgtaskscheduler/supportedresources)

### Scheduling a task

- [func register(forTaskWithIdentifier: String, using: dispatch_queue_t?, launchHandler: (BGTask) -> Void) -> Bool](/documentation/backgroundtasks/bgtaskscheduler/register(fortaskwithidentifier:using:launchhandler:))
- [func submit(BGTaskRequest) throws](/documentation/backgroundtasks/bgtaskscheduler/submit(_:))

### Canceling a task

- [func cancel(taskRequestWithIdentifier: String)](/documentation/backgroundtasks/bgtaskscheduler/cancel(taskrequestwithidentifier:))
- [func cancelAllTaskRequests()](/documentation/backgroundtasks/bgtaskscheduler/cancelalltaskrequests())

### Getting all scheduled tasks

- [func getPendingTaskRequests(completionHandler: ([BGTaskRequest]) -> Void)](/documentation/backgroundtasks/bgtaskscheduler/getpendingtaskrequests(completionhandler:))

### Handling errors

- [BGTaskScheduler.Error](/documentation/backgroundtasks/bgtaskscheduler/error)

#### Getting the error codes

- [BGTaskScheduler.Error.Code](/documentation/backgroundtasks/bgtaskscheduler/error/code)

##### Identifying an error

- [case notPermitted](/documentation/backgroundtasks/bgtaskscheduler/error/code/notpermitted)
- [case tooManyPendingTaskRequests](/documentation/backgroundtasks/bgtaskscheduler/error/code/toomanypendingtaskrequests)
- [case unavailable](/documentation/backgroundtasks/bgtaskscheduler/error/code/unavailable)
- [case immediateRunIneligible](/documentation/backgroundtasks/bgtaskscheduler/error/code/immediaterunineligible)

##### Initializers

- [init?(rawValue: Int)](/documentation/backgroundtasks/bgtaskscheduler/error/code/init(rawvalue:))
- [static var notPermitted: BGTaskScheduler.Error.Code](/documentation/backgroundtasks/bgtaskscheduler/error/notpermitted)
- [static var tooManyPendingTaskRequests: BGTaskScheduler.Error.Code](/documentation/backgroundtasks/bgtaskscheduler/error/toomanypendingtaskrequests)
- [static var unavailable: BGTaskScheduler.Error.Code](/documentation/backgroundtasks/bgtaskscheduler/error/unavailable)

#### Getting the error domain

- [static var errorDomain: String](/documentation/backgroundtasks/bgtaskscheduler/error/errordomain)

#### Type Properties

- [static var immediateRunIneligible: BGTaskScheduler.Error.Code](/documentation/backgroundtasks/bgtaskscheduler/error/immediaterunineligible)
- [BGTaskScheduler.Error.Code](/documentation/backgroundtasks/bgtaskscheduler/error/code)

#### Identifying an error

- [case notPermitted](/documentation/backgroundtasks/bgtaskscheduler/error/code/notpermitted)
- [case tooManyPendingTaskRequests](/documentation/backgroundtasks/bgtaskscheduler/error/code/toomanypendingtaskrequests)
- [case unavailable](/documentation/backgroundtasks/bgtaskscheduler/error/code/unavailable)
- [case immediateRunIneligible](/documentation/backgroundtasks/bgtaskscheduler/error/code/immediaterunineligible)

#### Initializers

- [init?(rawValue: Int)](/documentation/backgroundtasks/bgtaskscheduler/error/code/init(rawvalue:))
- [class let errorDomain: String](/documentation/backgroundtasks/bgtaskscheduler/errordomain)
- [BGTask](/documentation/backgroundtasks/bgtask)

### Reading Task Information

- [var identifier: String](/documentation/backgroundtasks/bgtask/identifier)

### Configuring a Task

- [var expirationHandler: (() -> Void)?](/documentation/backgroundtasks/bgtask/expirationhandler)
- [func setTaskCompleted(success: Bool)](/documentation/backgroundtasks/bgtask/settaskcompleted(success:))

## Background tasks

- [Using background tasks to update your app](/documentation/uikit/using-background-tasks-to-update-your-app)
- [Refreshing and Maintaining Your App Using Background Tasks](/documentation/backgroundtasks/refreshing-and-maintaining-your-app-using-background-tasks)
- [Choosing Background Strategies for Your App](/documentation/backgroundtasks/choosing-background-strategies-for-your-app)
- [BGProcessingTask](/documentation/backgroundtasks/bgprocessingtask)
- [BGAppRefreshTask](/documentation/backgroundtasks/bgapprefreshtask)
- [BGHealthResearchTask](/documentation/backgroundtasks/bghealthresearchtask)

## Foreground tasks with background support

- [Performing long-running tasks on iOS and iPadOS](/documentation/backgroundtasks/performing-long-running-tasks-on-ios-and-ipados)
- [BGContinuedProcessingTask](/documentation/backgroundtasks/bgcontinuedprocessingtask)

### Titling the task

- [var title: String](/documentation/backgroundtasks/bgcontinuedprocessingtask/title)
- [var subtitle: String](/documentation/backgroundtasks/bgcontinuedprocessingtask/subtitle)
- [func updateTitle(String, subtitle: String)](/documentation/backgroundtasks/bgcontinuedprocessingtask/updatetitle(_:subtitle:))
- [Background GPU Access](/documentation/bundleresources/entitlements/com.apple.developer.background-tasks.continued-processing.gpu)

## Task requests

- [BGProcessingTaskRequest](/documentation/backgroundtasks/bgprocessingtaskrequest)

### Initializing a Processing Task Request

- [init(identifier: String)](/documentation/backgroundtasks/bgprocessingtaskrequest/init(identifier:))

### Setting Task Request Options

- [var requiresExternalPower: Bool](/documentation/backgroundtasks/bgprocessingtaskrequest/requiresexternalpower)
- [var requiresNetworkConnectivity: Bool](/documentation/backgroundtasks/bgprocessingtaskrequest/requiresnetworkconnectivity)
- [BGAppRefreshTaskRequest](/documentation/backgroundtasks/bgapprefreshtaskrequest)

### Initializing a refresh task request

- [init(identifier: String)](/documentation/backgroundtasks/bgapprefreshtaskrequest/init(identifier:))
- [BGTaskRequest](/documentation/backgroundtasks/bgtaskrequest)

### Configuring a Task Request

- [var earliestBeginDate: Date?](/documentation/backgroundtasks/bgtaskrequest/earliestbegindate)
- [var identifier: String](/documentation/backgroundtasks/bgtaskrequest/identifier)
- [BGHealthResearchTaskRequest](/documentation/backgroundtasks/bghealthresearchtaskrequest)

### Setting file permissions

- [var protectionTypeOfRequiredData: NSString](/documentation/backgroundtasks/bghealthresearchtaskrequest/protectiontypeofrequireddata)
- [BGContinuedProcessingTaskRequest](/documentation/backgroundtasks/bgcontinuedprocessingtaskrequest)

### Creating a task request

- [init(identifier: String, title: String, subtitle: String)](/documentation/backgroundtasks/bgcontinuedprocessingtaskrequest/init(identifier:title:subtitle:))

### Identifying resource dependencies

- [var requiredResources: BGContinuedProcessingTaskRequest.Resources](/documentation/backgroundtasks/bgcontinuedprocessingtaskrequest/requiredresources)
- [BGContinuedProcessingTaskRequest.Resources](/documentation/backgroundtasks/bgcontinuedprocessingtaskrequest/resources)

#### Identiying a resource

- [static var gpu: BGContinuedProcessingTaskRequest.Resources](/documentation/backgroundtasks/bgcontinuedprocessingtaskrequest/resources/gpu)

#### Creating a resource

- [init(rawValue: Int)](/documentation/backgroundtasks/bgcontinuedprocessingtaskrequest/resources/init(rawvalue:))

### Choosing a processing strategy

- [var strategy: BGContinuedProcessingTaskRequest.SubmissionStrategy](/documentation/backgroundtasks/bgcontinuedprocessingtaskrequest/strategy)
- [BGContinuedProcessingTaskRequest.SubmissionStrategy](/documentation/backgroundtasks/bgcontinuedprocessingtaskrequest/submissionstrategy)

#### Choosing a strategy

- [case fail](/documentation/backgroundtasks/bgcontinuedprocessingtaskrequest/submissionstrategy/fail)
- [case queue](/documentation/backgroundtasks/bgcontinuedprocessingtaskrequest/submissionstrategy/queue)

#### Creating a strategy

- [init?(rawValue: Int)](/documentation/backgroundtasks/bgcontinuedprocessingtaskrequest/submissionstrategy/init(rawvalue:))

### Titling the task

- [var subtitle: String](/documentation/backgroundtasks/bgcontinuedprocessingtaskrequest/subtitle)
- [var title: String](/documentation/backgroundtasks/bgcontinuedprocessingtaskrequest/title)

## Development and testing

- [Starting and Terminating Tasks During Development](/documentation/backgroundtasks/starting-and-terminating-tasks-during-development)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

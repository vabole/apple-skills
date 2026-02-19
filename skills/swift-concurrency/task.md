---
title: Task
description: A unit of asynchronous work.
source: https://developer.apple.com/documentation/swift/task
timestamp: 2026-02-19T07:52:37.022Z
---

**Navigation:** [Swift](/documentation/swift)

**Structure**

# Task

**Available on:** iOS 13.0+, iPadOS 13.0+, Mac Catalyst 13.0+, macOS 10.15+, tvOS 13.0+, visionOS 1.0+, watchOS 6.0+

> A unit of asynchronous work.

```swift
@frozen struct Task<Success, Failure> where Success : Sendable, Failure : Error
```

## Overview

When you create an instance of `Task`, you provide a closure that contains the work for that task to perform. Tasks can start running immediately after creation; you don’t explicitly start or schedule them. After creating a task, you use the instance to interact with it — for example, to wait for it to complete or to cancel it. It’s not a programming error to discard a reference to a task without waiting for that task to finish or canceling it. A task runs regardless of whether you keep a reference to it. However, if you discard the reference to a task, you give up the ability to wait for that task’s result or cancel the task.

To support operations on the current task, which can be either a detached task or child task, `Task` also exposes class methods like `yield()`. Because these methods are asynchronous, they’re always invoked as part of an existing task.

Only code that’s running as part of the task can interact with that task. To interact with the current task, you call one of the static methods on `Task`.

A task’s execution can be seen as a series of periods where the task ran. Each such period ends at a suspension point or the completion of the task. These periods of execution are represented by instances of `PartialAsyncTask`. Unless you’re implementing a custom executor, you don’t directly interact with partial tasks.

For information about the language-level concurrency model that `Task` is part of, see [Concurrency.html](https://docs.swift.org/swift-book/LanguageGuide/Concurrency.html) in [](https://docs.swift.org/swift-book/).

# Task Cancellation

Tasks include a shared mechanism for indicating cancellation, but not a shared implementation for how to handle cancellation. Depending on the work you’re doing in the task, the correct way to stop that work varies. Likewise, it’s the responsibility of the code running as part of the task to check for cancellation whenever stopping is appropriate. In a long-task that includes multiple pieces, you might need to check for cancellation at several points, and handle cancellation differently at each point. If you only need to throw an error to stop the work, call the `Task.checkCancellation()` function to check for cancellation. Other responses to cancellation include returning the work completed so far, returning an empty result, or returning `nil`.

Cancellation is a purely Boolean state; there’s no way to include additional information like the reason for cancellation. This reflects the fact that a task can be canceled for many reasons, and additional reasons can accrue during the cancellation process.

### Task closure lifetime

Tasks are initialized by passing a closure containing the code that will be executed by a given task.

After this code has run to completion, the task has completed, resulting in either a failure or result value, this closure is eagerly released.

Retaining a task object doesn’t indefinitely retain the closure, because any references that a task holds are released after the task completes. Consequently, tasks rarely need to capture weak references to values.

For example, in the following snippet of code it is not necessary to capture the actor as `weak`, because as the task completes it’ll let go of the actor reference, breaking the reference cycle between the Task and the actor holding it.

```swift
struct Work: Sendable {}

actor Worker {
    var work: Task<Void, Never>?
    var result: Work?

    deinit {
        // even though the task is still retained,
        // once it completes it no longer causes a reference cycle with the actor

        print("deinit actor")
    }

    func start() {
        work = Task {
            print("start task work")
            try? await Task.sleep(for: .seconds(3))
            self.result = Work() // we captured self
            print("completed task work")
            // but as the task completes, this reference is released
        }
        // we keep a strong reference to the task
    }
}
```

And using it like this:

```swift
await Worker().start()
```

Note that the actor is only retained by the start() method’s use of `self`, and that the start method immediately returns, without waiting for the unstructured `Task` to finish. Once the task is completed and its closure is destroyed, the strong reference to the actor is also released allowing the actor to deinitialize as expected.

Therefore, the above call will consistently result in the following output:

```other
start task work
completed task work
deinit actor
```

## Conforms To

- [Copyable](/documentation/swift/copyable)
- [Equatable](/documentation/swift/equatable)
- [Escapable](/documentation/swift/escapable)
- [Hashable](/documentation/swift/hashable)
- [Sendable](/documentation/swift/sendable)
- [SendableMetatype](/documentation/swift/sendablemetatype)

## Creating a Task

- [init(name:priority:operation:)](/documentation/swift/task/init(name:priority:operation:)-2dll5) Runs the given nonthrowing operation asynchronously as part of a new  top-level task.
- [init(name:priority:operation:)](/documentation/swift/task/init(name:priority:operation:)-43wmk) Runs the given throwing operation asynchronously as part of a new  top-level task.
- [init(name:executorPreference:priority:operation:)](/documentation/swift/task/init(name:executorpreference:priority:operation:)-59bfi) Runs the given throwing operation asynchronously as part of a new  top-level task.
- [init(name:executorPreference:priority:operation:)](/documentation/swift/task/init(name:executorpreference:priority:operation:)-81pay) Runs the given nonthrowing operation asynchronously as part of a new  top-level task.
- [currentPriority](/documentation/swift/task/currentpriority) The current task’s priority.
- [basePriority](/documentation/swift/task/basepriority) The current task’s base priority.
- [withTaskPriorityEscalationHandler(operation:onPriorityEscalated:)](/documentation/swift/withtaskpriorityescalationhandler(operation:onpriorityescalated:)) Runs the passed  while registering a task priority escalation handler. The handler will be triggered concurrently to the current task if the current is subject to priority escalation.

## Creating a Detached Task

- [detached(name:priority:operation:)](/documentation/swift/task/detached(name:priority:operation:)-795w1) Runs the given throwing operation asynchronously as part of a new   top-level task.
- [detached(name:priority:operation:)](/documentation/swift/task/detached(name:priority:operation:)-9xki7) Runs the given nonthrowing operation asynchronously as part of a new   top-level task.
- [detached(name:executorPreference:priority:operation:)](/documentation/swift/task/detached(name:executorpreference:priority:operation:)-6r16s) Runs the given throwing operation asynchronously as part of a new   top-level task.
- [detached(name:executorPreference:priority:operation:)](/documentation/swift/task/detached(name:executorpreference:priority:operation:)-75ffe) Runs the given nonthrowing operation asynchronously as part of a new   top-level task.

## Creating a Task that Starts Immediately

- [immediate(name:priority:executorPreference:operation:)](/documentation/swift/task/immediate(name:priority:executorpreference:operation:)-88o80) Create and immediately start running a new detached task in the context of the calling thread/task.
- [immediate(name:priority:executorPreference:operation:)](/documentation/swift/task/immediate(name:priority:executorpreference:operation:)-9bghc) Create and immediately start running a new detached task in the context of the calling thread/task.
- [immediateDetached(name:priority:executorPreference:operation:)](/documentation/swift/task/immediatedetached(name:priority:executorpreference:operation:)-52ipd) Create and immediately start running a new task in the context of the calling thread/task.
- [immediateDetached(name:priority:executorPreference:operation:)](/documentation/swift/task/immediatedetached(name:priority:executorpreference:operation:)-7h41b) Create and immediately start running a new task in the context of the calling thread/task.

## Accessing Results

- [value](/documentation/swift/task/value-60t02) The result from a throwing task, after it completes.
- [value](/documentation/swift/task/value-40dtq) The result from a nonthrowing task, after it completes.
- [result](/documentation/swift/task/result) The result or error from a throwing task, after it completes.

## Accessing the Current Task’s Name

- [name](/documentation/swift/task/name) Returns the human-readable name of the current task, if it was set during the tasks’ creation.

## Canceling Tasks

- [CancellationError](/documentation/swift/cancellationerror) An error that indicates a task was canceled.
- [cancel()](/documentation/swift/task/cancel()) Cancels this task.
- [isCancelled](/documentation/swift/task/iscancelled-swift.property) A Boolean value that indicates whether the task should stop executing.
- [isCancelled](/documentation/swift/task/iscancelled-swift.type.property) A Boolean value that indicates whether the task should stop executing.
- [checkCancellation()](/documentation/swift/task/checkcancellation()) Throws an error if the task was canceled.
- [withTaskCancellationHandler(handler:operation:)](/documentation/swift/withtaskcancellationhandler(handler:operation:))
- [withTaskCancellationHandler(operation:onCancel:isolation:)](/documentation/swift/withtaskcancellationhandler(operation:oncancel:isolation:)) Execute an operation with a cancellation handler that’s immediately invoked if the current task is canceled.

## Suspending Execution

- [yield()](/documentation/swift/task/yield()) Suspends the current task and allows other tasks to execute.
- [sleep(nanoseconds:)](/documentation/swift/task/sleep(nanoseconds:)) Suspends the current task for at least the given duration in nanoseconds.
- [sleep(for:tolerance:clock:)](/documentation/swift/task/sleep(for:tolerance:clock:)) Suspends the current task for the given duration.
- [sleep(until:tolerance:clock:)](/documentation/swift/task/sleep(until:tolerance:clock:)) Suspends the current task until the given deadline within a tolerance.

## Escalating Tasks

- [escalatePriority(to:)](/documentation/swift/task/escalatepriority(to:)) Manually escalate the task  of this task to the .

## Comparing Tasks

- [==(_:_:)](/documentation/swift/task/==(_:_:)) Returns a Boolean value indicating whether two values are equal.
- [!=(_:_:)](/documentation/swift/task/!=(_:_:)) Returns a Boolean value indicating whether two values are not equal.
- [hashValue](/documentation/swift/task/hashvalue) The hash value.
- [hash(into:)](/documentation/swift/task/hash(into:)) Hashes the essential components of this value by feeding them into the given hasher.

## Deprecated

- [Task.Group](/documentation/swift/task/group)
- [Task.Handle](/documentation/swift/task/handle)
- [Task.Priority](/documentation/swift/task/priority)
- [CancellationError()](/documentation/swift/task/cancellationerror())
- [getResult()](/documentation/swift/task/getresult())
- [get()](/documentation/swift/task/get()-4i2gt)
- [get()](/documentation/swift/task/get()-4ohks)
- [sleep(_:)](/documentation/swift/task/sleep(_:))
- [suspend()](/documentation/swift/task/suspend())
- [runDetached(priority:operation:)](/documentation/swift/task/rundetached(priority:operation:)-88zf5) Deprecated, available only for source compatibility reasons.
- [runDetached(priority:operation:)](/documentation/swift/task/rundetached(priority:operation:)-8s8lh) Deprecated, available only for source compatibility reasons.
- [withCancellationHandler(handler:operation:)](/documentation/swift/task/withcancellationhandler(handler:operation:))
- [withGroup(resultType:returning:body:)](/documentation/swift/task/withgroup(resulttype:returning:body:))

## Default Implementations

- [Equatable Implementations](/documentation/swift/task/equatable-implementations)
- [Hashable Implementations](/documentation/swift/task/hashable-implementations)

## Tasks

- [TaskGroup](/documentation/swift/taskgroup)
- [withTaskGroup(of:returning:isolation:body:)](/documentation/swift/withtaskgroup(of:returning:isolation:body:))
- [ThrowingTaskGroup](/documentation/swift/throwingtaskgroup)
- [withThrowingTaskGroup(of:returning:isolation:body:)](/documentation/swift/withthrowingtaskgroup(of:returning:isolation:body:))
- [TaskPriority](/documentation/swift/taskpriority)
- [DiscardingTaskGroup](/documentation/swift/discardingtaskgroup)
- [withDiscardingTaskGroup(returning:isolation:body:)](/documentation/swift/withdiscardingtaskgroup(returning:isolation:body:))
- [ThrowingDiscardingTaskGroup](/documentation/swift/throwingdiscardingtaskgroup)
- [withThrowingDiscardingTaskGroup(returning:isolation:body:)](/documentation/swift/withthrowingdiscardingtaskgroup(returning:isolation:body:))
- [UnsafeCurrentTask](/documentation/swift/unsafecurrenttask)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

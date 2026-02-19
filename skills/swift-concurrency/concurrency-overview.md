---
title: Concurrency
description: Perform asynchronous and parallel operations.
source: https://developer.apple.com/documentation/swift/concurrency
timestamp: 2026-02-19T07:52:17.803Z
---

**Navigation:** [Swift](/documentation/swift)

**API Collection**

# Concurrency

> Perform asynchronous and parallel operations.

## Essentials

- [Code-along: Elevating an app with Swift concurrency](/documentation/swift/code-along-elevating-an-app-with-swift-concurrency) Code along with the WWDC presenter to elevate a SwiftUI app with Swift concurrency.
- [Updating an app to use strict concurrency](/documentation/swift/updating-an-app-to-use-strict-concurrency) Use this code to follow along with a guide to migrating your code to take advantage of the full concurrency protection that the Swift 6 language mode provides.
- [Updating an App to Use Swift Concurrency](/documentation/swift/updating_an_app_to_use_swift_concurrency) Improve your app’s performance by refactoring your code to take advantage of asynchronous functions in Swift.

## Tasks

- [Task](/documentation/swift/task) A unit of asynchronous work.
- [TaskGroup](/documentation/swift/taskgroup) A group that contains dynamically created child tasks.
- [withTaskGroup(of:returning:isolation:body:)](/documentation/swift/withtaskgroup(of:returning:isolation:body:)) Starts a new scope that can contain a dynamic number of child tasks.
- [ThrowingTaskGroup](/documentation/swift/throwingtaskgroup) A group that contains throwing, dynamically created child tasks.
- [withThrowingTaskGroup(of:returning:isolation:body:)](/documentation/swift/withthrowingtaskgroup(of:returning:isolation:body:)) Starts a new scope that can contain a dynamic number of throwing child tasks.
- [TaskPriority](/documentation/swift/taskpriority) The priority of a task.
- [DiscardingTaskGroup](/documentation/swift/discardingtaskgroup) A discarding group that contains dynamically created child tasks.
- [withDiscardingTaskGroup(returning:isolation:body:)](/documentation/swift/withdiscardingtaskgroup(returning:isolation:body:)) Starts a new scope that can contain a dynamic number of child tasks.
- [ThrowingDiscardingTaskGroup](/documentation/swift/throwingdiscardingtaskgroup) A throwing discarding group that contains dynamically created child tasks.
- [withThrowingDiscardingTaskGroup(returning:isolation:body:)](/documentation/swift/withthrowingdiscardingtaskgroup(returning:isolation:body:)) Starts a new scope that can contain a dynamic number of child tasks.
- [UnsafeCurrentTask](/documentation/swift/unsafecurrenttask) An unsafe reference to the current task.

## Asynchronous Sequences

- [AsyncSequence](/documentation/swift/asyncsequence) A type that provides asynchronous, sequential, iterated access to its elements.
- [AsyncStream](/documentation/swift/asyncstream) An asynchronous sequence generated from a closure that calls a continuation to produce new elements.
- [AsyncThrowingStream](/documentation/swift/asyncthrowingstream) An asynchronous sequence generated from an error-throwing closure that calls a continuation to produce new elements.

## Continuations

- [CheckedContinuation](/documentation/swift/checkedcontinuation) A mechanism to interface between synchronous and asynchronous code, logging correctness violations.
- [withCheckedContinuation(isolation:function:_:)](/documentation/swift/withcheckedcontinuation(isolation:function:_:)) Invokes the passed in closure with a checked continuation for the current task.
- [withCheckedThrowingContinuation(isolation:function:_:)](/documentation/swift/withcheckedthrowingcontinuation(isolation:function:_:)) Invokes the passed in closure with a checked continuation for the current task.
- [UnsafeContinuation](/documentation/swift/unsafecontinuation) A mechanism to interface between synchronous and asynchronous code, without correctness checking.
- [withUnsafeContinuation(isolation:_:)](/documentation/swift/withunsafecontinuation(isolation:_:)) Invokes the passed in closure with a unsafe continuation for the current task.
- [UnsafeThrowingContinuation](/documentation/swift/unsafethrowingcontinuation)
- [withUnsafeThrowingContinuation(isolation:_:)](/documentation/swift/withunsafethrowingcontinuation(isolation:_:)) Invokes the passed in closure with a unsafe continuation for the current task.

## Actors

- [Sendable](/documentation/swift/sendable) A thread-safe type whose values can be shared across arbitrary concurrent contexts without introducing a risk of data races.
- [Actor](/documentation/swift/actor) Common protocol to which all actors conform.
- [AnyActor](/documentation/swift/anyactor) Common marker protocol providing a shared “base” for both (local)  and (potentially remote)  types.
- [MainActor](/documentation/swift/mainactor) A singleton actor whose executor is equivalent to the main dispatch queue.
- [GlobalActor](/documentation/swift/globalactor) A type that represents a globally-unique actor that can be used to isolate various declarations anywhere in the program.
- [SendableMetatype](/documentation/swift/sendablemetatype) A type whose metatype can be shared across arbitrary concurrent contexts without introducing a risk of data races.
- [ConcurrentValue](/documentation/swift/concurrentvalue)
- [UnsafeSendable](/documentation/swift/unsafesendable) A type whose values can safely be passed across concurrency domains by copying, but which disables some safety checking at the conformance site.
- [UnsafeConcurrentValue](/documentation/swift/unsafeconcurrentvalue)
- [isolation()](/documentation/swift/isolation()) Produce a reference to the actor to which the enclosing code is isolated, or  if the code is nonisolated.
- [extractIsolation(_:)](/documentation/swift/extractisolation(_:))

## Task-Local Storage

- [TaskLocal](/documentation/swift/tasklocal) Wrapper type that defines a task-local value key.
- [TaskLocal()](/documentation/swift/tasklocal()) Macro that introduces a  binding.

## Executors

- [Executor](/documentation/swift/executor) A service that can execute jobs.
- [ExecutorJob](/documentation/swift/executorjob) A unit of schedulable work.
- [SerialExecutor](/documentation/swift/serialexecutor) A service that executes jobs.
- [TaskExecutor](/documentation/swift/taskexecutor) An executor that may be used as preferred executor by a task.
- [SchedulingExecutor](/documentation/swift/schedulingexecutor)
- [PartialAsyncTask](/documentation/swift/partialasynctask)
- [UnownedJob](/documentation/swift/unownedjob) A unit of schedulable work.
- [JobPriority](/documentation/swift/jobpriority) The priority of this job.
- [UnownedSerialExecutor](/documentation/swift/unownedserialexecutor) An unowned reference to a serial executor (a  value).
- [UnownedTaskExecutor](/documentation/swift/unownedtaskexecutor)
- [globalConcurrentExecutor](/documentation/swift/globalconcurrentexecutor) The global concurrent executor that is used by default for Swift Concurrency tasks.
- [withTaskExecutorPreference(_:isolation:operation:)](/documentation/swift/withtaskexecutorpreference(_:isolation:operation:)) Configure the current task hierarchy’s task executor preference to the passed , and execute the passed in closure by immediately hopping to that executor.

## Deprecated

- [Job](/documentation/swift/job) Deprecated equivalent of .

## Programming Tasks

- [Input and Output](/documentation/swift/input-and-output)
- [Debugging and Reflection](/documentation/swift/debugging-and-reflection)
- [Macros](/documentation/swift/macros)
- [Key-Path Expressions](/documentation/swift/key-path-expressions)
- [Manual Memory Management](/documentation/swift/manual-memory-management)
- [Type Casting and Existential Types](/documentation/swift/type-casting-and-existential-types)
- [C Interoperability](/documentation/swift/c-interoperability)
- [Operator Declarations](/documentation/swift/operator-declarations)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

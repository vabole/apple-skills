---
title: TaskGroup
description: A group that contains dynamically created child tasks.
source: https://developer.apple.com/documentation/swift/taskgroup
timestamp: 2026-02-19T07:52:37.026Z
---

**Navigation:** [Swift](/documentation/swift)

**Structure**

# TaskGroup

**Available on:** iOS 13.0+, iPadOS 13.0+, Mac Catalyst 13.0+, macOS 10.15+, tvOS 13.0+, visionOS 1.0+, watchOS 6.0+

> A group that contains dynamically created child tasks.

```swift
@frozen struct TaskGroup<ChildTaskResult> where ChildTaskResult : Sendable
```

## Overview

To create a task group, call the `withTaskGroup(of:returning:body:)` method.

Don’t use a task group from outside the task where you created it. In most cases, the Swift type system prevents a task group from escaping like that because adding a child task to a task group is a mutating operation, and mutation operations can’t be performed from a concurrent execution context like a child task.

# Structured Concurrency

Structured concurrency is a way to organize your program, and tasks, in such a way that tasks don’t outlive the scope in which they are created. Within a structured task hierarchy, no child task remains running longer than its parent task. This guarantee simplifies reasoning about resource usage, and is a powerful mechanism that you can use to write well-behaved concurrent programs.

A task group is the primary way to create structured concurrency tasks in Swift. Another way of creating structured tasks is an `async let` declaration.

Structured concurrency tasks are often called “child tasks” because of their relationship with their parent task. A child task inherits the parent’s priority, task-local values, and is structured in the sense that its lifetime never exceeds the lifetime of the parent task.

A task group *always* waits for all child tasks to complete before it’s destroyed. Specifically, `with...TaskGroup` APIs don’t return until all the child tasks created in the group’s scope have completed running.

Structured concurrency APIs (including task groups and `async let`), *always* waits for the completion of tasks contained within their scope before returning. Specifically, this means that even if you await a single task result and return it from a `withTaskGroup` function body, the group automatically waits for all the remaining tasks before returning:

```swift
func takeFirst(actions: [@Sendable () -> Int]) async -> Int? {
    await withTaskGroup { group in
        for action in actions {
            group.addTask { action() }
        }

        return await group.next() // return the first action to complete
    } // the group will ALWAYS await the completion of all the actions (!)
}
```

In the above example, even though the code returns the first collected integer from all actions added to the task group, the task group *always*, automatically, waits for the completion of all the resulting tasks.

You can use `group.cancelAll()` to signal cancellation to the remaining in-progress tasks, however this doesn’t interrupt their execution automatically. Rather, the child tasks need to cooperatively react to the cancellation, and return early if that’s possible.

To create unstructured concurrency tasks, you can use `Task.init`, `Task.detached` or `Task.immediate`.

# Task Group Cancellation

You can cancel a task group and all of its child tasks by calling the `cancelAll()` method on the task group, or by canceling the task in which the group is running.

If you call `addTask(name:priority:operation:)` to create a new task in a canceled group, that task is immediately canceled after creation. Alternatively, you can call `addTaskUnlessCancelled(name:priority:operation:)`, which doesn’t create the task if the group has already been canceled. Choosing between these two functions lets you control how to react to cancellation within a group: some child tasks need to run regardless of cancellation, but other tasks are better not even being created when you know they can’t produce useful results.

In nonthrowing task groups the tasks you add to a group with this method are nonthrowing, those tasks can’t respond to cancellation by throwing `CancellationError`. The tasks must handle cancellation in some other way, such as returning the work completed so far, returning an empty result, or returning `nil`. For tasks that need to handle cancellation by throwing an error, use the `withThrowingTaskGroup(of:returning:body:)` method instead.

### Task execution order

Tasks added to a task group execute concurrently, and may be scheduled in any order.

### Cancellation behavior

A task group becomes canceled in one of the following ways:

- When [cancelAll()](/documentation/swift/taskgroup/cancelall()) is invoked on it.
- When the [Task](/documentation/swift/task) running this task group is canceled.

Because a `TaskGroup` is a structured concurrency primitive, cancellation is automatically propagated through all of its child-tasks (and their child tasks).

A canceled task group can still keep adding tasks, however they will start being immediately canceled, and might respond accordingly. To avoid adding new tasks to an already canceled task group, use `addTaskUnlessCancelled(name:priority:body:)` rather than the plain `addTask(name:priority:body:)` which adds tasks unconditionally.

For information about the language-level concurrency model that `TaskGroup` is part of, see [Concurrency.html](https://docs.swift.org/swift-book/LanguageGuide/Concurrency.html) in [](https://docs.swift.org/swift-book/).

> [!NOTE]
> [Throwing Task Group](/documentation/swift/throwingtaskgroup)

> [!NOTE]
> [Discarding Task Group](/documentation/swift/discardingtaskgroup)

> [!NOTE]
> [Throwing Discarding Task Group](/documentation/swift/throwingdiscardingtaskgroup)

## Conforms To

- [AsyncSequence](/documentation/swift/asyncsequence)
- [BitwiseCopyable](/documentation/swift/bitwisecopyable)
- [Copyable](/documentation/swift/copyable)
- [Escapable](/documentation/swift/escapable)

## Adding Tasks to a Task Group

- [addTask(priority:operation:)](/documentation/swift/taskgroup/addtask(priority:operation:)) Adds a child task to the group.
- [addTask(name:priority:operation:)](/documentation/swift/taskgroup/addtask(name:priority:operation:)) Adds a child task to the group.
- [addTask(executorPreference:priority:operation:)](/documentation/swift/taskgroup/addtask(executorpreference:priority:operation:)) Adds a child task to the group.
- [addTask(name:executorPreference:priority:operation:)](/documentation/swift/taskgroup/addtask(name:executorpreference:priority:operation:)) Adds a child task to the group.
- [addTaskUnlessCancelled(name:executorPreference:priority:operation:)](/documentation/swift/taskgroup/addtaskunlesscancelled(name:executorpreference:priority:operation:)) Adds a child task to the group, unless the group has been canceled. Returns a boolean value indicating if the task was successfully added to the group or not.
- [addTaskUnlessCancelled(executorPreference:priority:operation:)](/documentation/swift/taskgroup/addtaskunlesscancelled(executorpreference:priority:operation:)) Adds a child task to the group, unless the group has been canceled. Returns a boolean value indicating if the task was successfully added to the group or not.
- [addTaskUnlessCancelled(name:priority:operation:)](/documentation/swift/taskgroup/addtaskunlesscancelled(name:priority:operation:)) Adds a child task to the group, unless the group has been canceled. Returns a boolean value indicating if the task was successfully added to the group or not.
- [addTaskUnlessCancelled(priority:operation:)](/documentation/swift/taskgroup/addtaskunlesscancelled(priority:operation:)) Adds a child task to the group, unless the group has been canceled. Returns a boolean value indicating if the task was successfully added to the group or not.
- [addImmediateTask(name:priority:executorPreference:operation:)](/documentation/swift/taskgroup/addimmediatetask(name:priority:executorpreference:operation:)) Add a child task to the group and immediately start running it in the context of the calling thread/task.
- [addImmediateTaskUnlessCancelled(name:priority:executorPreference:operation:)](/documentation/swift/taskgroup/addimmediatetaskunlesscancelled(name:priority:executorpreference:operation:)) Add a child task to the group and immediately start running it in the context of the calling thread/task.

## Accessing Individual Results

- [next()](/documentation/swift/taskgroup/next())
- [next(isolation:)](/documentation/swift/taskgroup/next(isolation:)) Waits for the next child task to complete, and returns the value it returned.
- [isEmpty](/documentation/swift/taskgroup/isempty) A Boolean value that indicates whether the group has any remaining tasks.
- [waitForAll(isolation:)](/documentation/swift/taskgroup/waitforall(isolation:)) Wait for all of the group’s remaining tasks to complete.

## Accessing an Asynchronous Sequence of Results

- [makeAsyncIterator()](/documentation/swift/taskgroup/makeasynciterator()) Creates the asynchronous iterator that produces elements of this asynchronous sequence.
- [allSatisfy(_:)](/documentation/swift/taskgroup/allsatisfy(_:)) Returns a Boolean value that indicates whether all elements produced by the asynchronous sequence satisfy the given predicate.
- [compactMap(_:)](/documentation/swift/taskgroup/compactmap(_:)-944od) Creates an asynchronous sequence that maps an error-throwing closure over the base sequence’s elements, omitting results that don’t return a value.
- [compactMap(_:)](/documentation/swift/taskgroup/compactmap(_:)-7mgj1) Creates an asynchronous sequence that maps the given closure over the asynchronous sequence’s elements, omitting results that don’t return a value.
- [contains(_:)](/documentation/swift/taskgroup/contains(_:)) Returns a Boolean value that indicates whether the asynchronous sequence contains the given element.
- [contains(where:)](/documentation/swift/taskgroup/contains(where:)) Returns a Boolean value that indicates whether the asynchronous sequence contains an element that satisfies the given predicate.
- [drop(while:)](/documentation/swift/taskgroup/drop(while:)) Omits elements from the base asynchronous sequence until a given closure returns false, after which it passes through all remaining elements.
- [dropFirst(_:)](/documentation/swift/taskgroup/dropfirst(_:)) Omits a specified number of elements from the base asynchronous sequence, then passes through all remaining elements.
- [filter(_:)](/documentation/swift/taskgroup/filter(_:)) Creates an asynchronous sequence that contains, in order, the elements of the base sequence that satisfy the given predicate.
- [first(where:)](/documentation/swift/taskgroup/first(where:)) Returns the first element of the sequence that satisfies the given predicate.
- [flatMap(_:)](/documentation/swift/taskgroup/flatmap(_:)-vhi3) Creates an asynchronous sequence that concatenates the results of calling the given error-throwing transformation with each element of this sequence.
- [map(_:)](/documentation/swift/taskgroup/map(_:)-58nsr) Creates an asynchronous sequence that maps the given error-throwing closure over the asynchronous sequence’s elements.
- [map(_:)](/documentation/swift/taskgroup/map(_:)-4a4kq) Creates an asynchronous sequence that maps the given closure over the asynchronous sequence’s elements.
- [max()](/documentation/swift/taskgroup/max()) Returns the maximum element in an asynchronous sequence of comparable elements.
- [max(by:)](/documentation/swift/taskgroup/max(by:)) Returns the maximum element in the asynchronous sequence, using the given predicate as the comparison between elements.
- [min()](/documentation/swift/taskgroup/min()) Returns the minimum element in an asynchronous sequence of comparable elements.
- [min(by:)](/documentation/swift/taskgroup/min(by:)) Returns the minimum element in the asynchronous sequence, using the given predicate as the comparison between elements.
- [prefix(_:)](/documentation/swift/taskgroup/prefix(_:)) Returns an asynchronous sequence, up to the specified maximum length, containing the initial elements of the base asynchronous sequence.
- [prefix(while:)](/documentation/swift/taskgroup/prefix(while:)) Returns an asynchronous sequence, containing the initial, consecutive elements of the base sequence that satisfy the given predicate.
- [reduce(_:_:)](/documentation/swift/taskgroup/reduce(_:_:)) Returns the result of combining the elements of the asynchronous sequence using the given closure.
- [reduce(into:_:)](/documentation/swift/taskgroup/reduce(into:_:)) Returns the result of combining the elements of the asynchronous sequence using the given closure, given a mutable initial value.

## Canceling Tasks

- [isCancelled](/documentation/swift/taskgroup/iscancelled) A Boolean value that indicates whether the group was canceled.
- [cancelAll()](/documentation/swift/taskgroup/cancelall()) Cancel all of the remaining tasks in the group.

## Supporting Types

- [TaskGroup.Element](/documentation/swift/taskgroup/element) The type of element produced by this asynchronous sequence.
- [TaskGroup.Iterator](/documentation/swift/taskgroup/iterator) A type that provides an iteration interface over the results of tasks added to the group.
- [TaskGroup.AsyncIterator](/documentation/swift/taskgroup/asynciterator) The type of asynchronous iterator that produces elements of this asynchronous sequence.

## Deprecated

- [add(priority:operation:)](/documentation/swift/taskgroup/add(priority:operation:))
- [async(priority:operation:)](/documentation/swift/taskgroup/async(priority:operation:))
- [asyncUnlessCancelled(priority:operation:)](/documentation/swift/taskgroup/asyncunlesscancelled(priority:operation:))
- [spawn(priority:operation:)](/documentation/swift/taskgroup/spawn(priority:operation:))
- [spawnUnlessCancelled(priority:operation:)](/documentation/swift/taskgroup/spawnunlesscancelled(priority:operation:))

## Default Implementations

- [AsyncSequence Implementations](/documentation/swift/taskgroup/asyncsequence-implementations)

## Tasks

- [Task](/documentation/swift/task)
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

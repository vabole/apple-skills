---
title: Actor
description: Common protocol to which all actors conform.
source: https://developer.apple.com/documentation/swift/actor
timestamp: 2026-02-19T07:52:37.107Z
---

**Navigation:** [Swift](/documentation/swift)

**Protocol**

# Actor

**Available on:** iOS 13.0+, iPadOS 13.0+, Mac Catalyst 13.0+, macOS 10.15+, tvOS 13.0+, visionOS 1.0+, watchOS 6.0+

> Common protocol to which all actors conform.

```swift
protocol Actor : AnyObject, Sendable
```

## Overview

The `Actor` protocol generalizes over all `actor` types. Actor types implicitly conform to this protocol.

### Actors and SerialExecutors

By default, actors execute tasks on a shared global concurrency thread pool. This pool is shared by all default actors and tasks, unless an actor or task specified a more specific executor requirement.

It is possible to configure an actor to use a specific [Serial Executor](/documentation/swift/serialexecutor), as well as impact the scheduling of default tasks and actors by using a [Task Executor](/documentation/swift/taskexecutor).

> [!NOTE]
> [Serial Executor](/documentation/swift/serialexecutor)

> [!NOTE]
> [Task Executor](/documentation/swift/taskexecutor)

## Inherits From

- [Sendable](/documentation/swift/sendable)
- [SendableMetatype](/documentation/swift/sendablemetatype)

## Conforming Types

- [MainActor](/documentation/swift/mainactor)

## Instance Properties

- [unownedExecutor](/documentation/swift/actor/unownedexecutor) Retrieve the executor for this actor as an optimized, unowned reference.

## Instance Methods

- [assertIsolated(_:file:line:)](/documentation/swift/actor/assertisolated(_:file:line:)) Stops program execution if the current task is not executing on this actor’s serial executor.
- [assumeIsolated(_:file:line:)](/documentation/swift/actor/assumeisolated(_:file:line:)) Assume that the current task is executing on this actor’s serial executor, or stop program execution otherwise.
- [preconditionIsolated(_:file:line:)](/documentation/swift/actor/preconditionisolated(_:file:line:)) Stops program execution if the current task is not executing on this actor’s serial executor.
- [withSerialExecutor(_:)](/documentation/swift/actor/withserialexecutor(_:)-4ff11) Perform an operation with the actor’s .
- [withSerialExecutor(_:)](/documentation/swift/actor/withserialexecutor(_:)-4ucv5) Perform an operation with the actor’s .

## Actors

- [Sendable](/documentation/swift/sendable)
- [AnyActor](/documentation/swift/anyactor)
- [MainActor](/documentation/swift/mainactor)
- [GlobalActor](/documentation/swift/globalactor)
- [SendableMetatype](/documentation/swift/sendablemetatype)
- [ConcurrentValue](/documentation/swift/concurrentvalue)
- [UnsafeSendable](/documentation/swift/unsafesendable)
- [UnsafeConcurrentValue](/documentation/swift/unsafeconcurrentvalue)
- [isolation()](/documentation/swift/isolation())
- [extractIsolation(_:)](/documentation/swift/extractisolation(_:))

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

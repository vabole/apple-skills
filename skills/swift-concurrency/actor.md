---
title: Actor
description: Common protocol to which all actors conform.
source: https://developer.apple.com/documentation/swift/actor
source_kind: apple-docc
source_json: https://developer.apple.com/tutorials/data/documentation/swift/actor.json
timestamp: 2026-04-14T13:14:31.517Z
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

It is possible to configure an actor to use a specific [SerialExecutor](/documentation/swift/serialexecutor), as well as impact the scheduling of default tasks and actors by using a [TaskExecutor](/documentation/swift/taskexecutor).

> **See Also:** [SerialExecutor](/documentation/swift/serialexecutor)

> **See Also:** [TaskExecutor](/documentation/swift/taskexecutor)

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
- [withSerialExecutor(_:)](/documentation/swift/actor/withserialexecutor(_:)-4ff11) Perform an operation with the actor’s [SerialExecutor](/documentation/swift/serialexecutor).
- [withSerialExecutor(_:)](/documentation/swift/actor/withserialexecutor(_:)-4ucv5) Perform an operation with the actor’s [SerialExecutor](/documentation/swift/serialexecutor).

## Actors

- [Sendable](/documentation/swift/sendable) A thread-safe type whose values can be shared across arbitrary concurrent contexts without introducing a risk of data races.
- [AnyActor](/documentation/swift/anyactor) Common marker protocol providing a shared “base” for both (local) `Actor` and (potentially remote) `DistributedActor` types.
- [MainActor](/documentation/swift/mainactor) A singleton actor whose executor is equivalent to the main dispatch queue.
- [GlobalActor](/documentation/swift/globalactor) A type that represents a globally-unique actor that can be used to isolate various declarations anywhere in the program.
- [SendableMetatype](/documentation/swift/sendablemetatype) A type whose metatype can be shared across arbitrary concurrent contexts without introducing a risk of data races.
- [ConcurrentValue](/documentation/swift/concurrentvalue)
- [UnsafeSendable](/documentation/swift/unsafesendable) A type whose values can safely be passed across concurrency domains by copying, but which disables some safety checking at the conformance site.
- [UnsafeConcurrentValue](/documentation/swift/unsafeconcurrentvalue)
- [isolation()](/documentation/swift/isolation()) Produce a reference to the actor to which the enclosing code is isolated, or `nil` if the code is nonisolated.
- [extractIsolation(_:)](/documentation/swift/extractisolation(_:))

---

*Extracted from Apple DocC JSON by apple-skills tooling.*
*This is unofficial content. All documentation belongs to Apple Inc.*

---
title: CheckedContinuation
description: A mechanism to interface between synchronous and asynchronous code, logging correctness violations.
source: https://developer.apple.com/documentation/swift/checkedcontinuation
timestamp: 2026-04-09T12:04:29.854Z
---

**Navigation:** [Swift](/documentation/swift)

**Structure**

# CheckedContinuation

**Available on:** iOS 13.0+, iPadOS 13.0+, Mac Catalyst 13.0+, macOS 10.15+, tvOS 13.0+, visionOS 1.0+, watchOS 6.0+

> A mechanism to interface between synchronous and asynchronous code, logging correctness violations.

```swift
struct CheckedContinuation<T, E> where E : Error
```

## Overview

A *continuation* is an opaque representation of program state. To create a continuation in asynchronous code, call the `withCheckedContinuation(isolation:function:_:)` or `withCheckedThrowingContinuation(isolation:function:_:)` function. To resume the asynchronous task, call the `resume(returning:)`, `resume(throwing:)`, `resume(with:)`, or `resume()` method.

> **Important:** You must call a resume method exactly once on every execution path throughout the program.

Resuming from a continuation more than once is undefined behavior. Never resuming leaves the task in a suspended state indefinitely, and leaks any associated resources. `CheckedContinuation` logs a message if either of these invariants is violated.

`CheckedContinuation` performs runtime checks for missing or multiple resume operations. `UnsafeContinuation` avoids enforcing these invariants at runtime because it aims to be a low-overhead mechanism for interfacing Swift tasks with event loops, delegate methods, callbacks, and other non-`async` scheduling mechanisms. However, during development, the ability to verify that the invariants are being upheld in testing is important. Because both types have the same interface, you can replace one with the other in most circumstances, without making other changes.

## Conforms To

- [Sendable](/documentation/swift/sendable)
- [SendableMetatype](/documentation/swift/sendablemetatype)

## Initializers

- [init(continuation:function:)](/documentation/swift/checkedcontinuation/init(continuation:function:)) Creates a checked continuation from an unsafe continuation.

## Instance Methods

- [resume()](/documentation/swift/checkedcontinuation/resume()) Resume the task awaiting the continuation by having it return normally from its suspension point.
- [resume(returning:)](/documentation/swift/checkedcontinuation/resume(returning:)) Resume the task awaiting the continuation by having it return normally from its suspension point.
- [resume(throwing:)](/documentation/swift/checkedcontinuation/resume(throwing:)) Resume the task awaiting the continuation by having it throw an error from its suspension point.
- [resume(with:)](/documentation/swift/checkedcontinuation/resume(with:)-3gh60) Resume the task awaiting the continuation by having it either return normally or throw an error based on the state of the given `Result` value.
- [resume(with:)](/documentation/swift/checkedcontinuation/resume(with:)-5n1a5) Resume the task awaiting the continuation by having it either return normally or throw an error based on the state of the given `Result` value.

## Continuations

- [withCheckedContinuation(isolation:function:_:)](/documentation/swift/withcheckedcontinuation(isolation:function:_:)) Invokes the passed in closure with a checked continuation for the current task.
- [withCheckedThrowingContinuation(isolation:function:_:)](/documentation/swift/withcheckedthrowingcontinuation(isolation:function:_:)) Invokes the passed in closure with a checked continuation for the current task.
- [UnsafeContinuation](/documentation/swift/unsafecontinuation) A mechanism to interface between synchronous and asynchronous code, without correctness checking.
- [withUnsafeContinuation(isolation:_:)](/documentation/swift/withunsafecontinuation(isolation:_:)) Invokes the passed in closure with a unsafe continuation for the current task.
- [UnsafeThrowingContinuation](/documentation/swift/unsafethrowingcontinuation)
- [withUnsafeThrowingContinuation(isolation:_:)](/documentation/swift/withunsafethrowingcontinuation(isolation:_:)) Invokes the passed in closure with a unsafe continuation for the current task.

---

*Extracted from Apple DocC JSON by apple-skills tooling.*
*This is unofficial content. All documentation belongs to Apple Inc.*

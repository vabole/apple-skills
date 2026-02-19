---
title: AsyncStream
description: An asynchronous sequence generated from a closure that calls a continuation to produce new elements.
source: https://developer.apple.com/documentation/swift/asyncstream
timestamp: 2026-02-19T07:52:37.173Z
---

**Navigation:** [Swift](/documentation/swift)

**Structure**

# AsyncStream

**Available on:** iOS 13.0+, iPadOS 13.0+, Mac Catalyst 13.0+, macOS 10.15+, tvOS 13.0+, visionOS 1.0+, watchOS 6.0+

> An asynchronous sequence generated from a closure that calls a continuation to produce new elements.

```swift
struct AsyncStream<Element>
```

## Overview

`AsyncStream` conforms to `AsyncSequence`, providing a convenient way to create an asynchronous sequence without manually implementing an asynchronous iterator. In particular, an asynchronous stream is well-suited to adapt callback- or delegation-based APIs to participate with `async`-`await`.

You initialize an `AsyncStream` with a closure that receives an `AsyncStream.Continuation`. Produce elements in this closure, then provide them to the stream by calling the continuation’s `yield(_:)` method. When there are no further elements to produce, call the continuation’s `finish()` method. This causes the sequence iterator to produce a `nil`, which terminates the sequence. The continuation conforms to `Sendable`, which permits calling it from concurrent contexts external to the iteration of the `AsyncStream`.

An arbitrary source of elements can produce elements faster than they are consumed by a caller iterating over them. Because of this, `AsyncStream` defines a buffering behavior, allowing the stream to buffer a specific number of oldest or newest elements. By default, the buffer limit is `Int.max`, which means the value is unbounded.

### Adapting Existing Code to Use Streams

To adapt existing callback code to use `async`-`await`, use the callbacks to provide values to the stream, by using the continuation’s `yield(_:)` method.

Consider a hypothetical `QuakeMonitor` type that provides callers with `Quake` instances every time it detects an earthquake. To receive callbacks, callers set a custom closure as the value of the monitor’s `quakeHandler` property, which the monitor calls back as necessary.

```swift
class QuakeMonitor {
    var quakeHandler: ((Quake) -> Void)?

    func startMonitoring() {…}
    func stopMonitoring() {…}
}
```

To adapt this to use `async`-`await`, extend the `QuakeMonitor` to add a `quakes` property, of type `AsyncStream<Quake>`. In the getter for this property, return an `AsyncStream`, whose `build` closure – called at runtime to create the stream – uses the continuation to perform the following steps:

1. Creates a `QuakeMonitor` instance.
2. Sets the monitor’s `quakeHandler` property to a closure that receives each `Quake` instance and forwards it to the stream by calling the continuation’s `yield(_:)` method.
3. Sets the continuation’s `onTermination` property to a closure that calls `stopMonitoring()` on the monitor.
4. Calls `startMonitoring` on the `QuakeMonitor`.

```swift
extension QuakeMonitor {

    static var quakes: AsyncStream<Quake> {
        AsyncStream { continuation in
            let monitor = QuakeMonitor()
            monitor.quakeHandler = { quake in
                continuation.yield(quake)
            }
            continuation.onTermination = { @Sendable _ in
                 monitor.stopMonitoring()
            }
            monitor.startMonitoring()
        }
    }
}
```

Because the stream is an `AsyncSequence`, the call point can use the `for`-`await`-`in` syntax to process each `Quake` instance as the stream produces it:

```swift
for await quake in QuakeMonitor.quakes {
    print("Quake: \(quake.date)")
}
print("Stream finished.")
```

## Conforms To

- [AsyncSequence](/documentation/swift/asyncsequence)
- [Copyable](/documentation/swift/copyable)
- [Escapable](/documentation/swift/escapable)
- [Sendable](/documentation/swift/sendable)
- [SendableMetatype](/documentation/swift/sendablemetatype)

## Creating a Continuation-Based Stream

- [init(_:bufferingPolicy:_:)](/documentation/swift/asyncstream/init(_:bufferingpolicy:_:)) Constructs an asynchronous stream for an element type, using the specified buffering policy and element-producing closure.
- [AsyncStream.Continuation.BufferingPolicy](/documentation/swift/asyncstream/continuation/bufferingpolicy) A strategy that handles exhaustion of a buffer’s capacity.
- [AsyncStream.Continuation](/documentation/swift/asyncstream/continuation) A mechanism to interface between synchronous code and an asynchronous stream.

## Creating a Stream from an Asynchronous Function

- [init(unfolding:onCancel:)](/documentation/swift/asyncstream/init(unfolding:oncancel:)) Constructs an asynchronous stream from a given element-producing closure, with an optional closure to handle cancellation.

## Finding Elements

- [contains(_:)](/documentation/swift/asyncstream/contains(_:)) Returns a Boolean value that indicates whether the asynchronous sequence contains the given element.
- [contains(where:)](/documentation/swift/asyncstream/contains(where:)) Returns a Boolean value that indicates whether the asynchronous sequence contains an element that satisfies the given predicate.
- [allSatisfy(_:)](/documentation/swift/asyncstream/allsatisfy(_:)) Returns a Boolean value that indicates whether all elements produced by the asynchronous sequence satisfy the given predicate.
- [first(where:)](/documentation/swift/asyncstream/first(where:)) Returns the first element of the sequence that satisfies the given predicate.
- [min()](/documentation/swift/asyncstream/min()) Returns the minimum element in an asynchronous sequence of comparable elements.
- [min(by:)](/documentation/swift/asyncstream/min(by:)) Returns the minimum element in the asynchronous sequence, using the given predicate as the comparison between elements.
- [max()](/documentation/swift/asyncstream/max()) Returns the maximum element in an asynchronous sequence of comparable elements.
- [max(by:)](/documentation/swift/asyncstream/max(by:)) Returns the maximum element in the asynchronous sequence, using the given predicate as the comparison between elements.

## Selecting Elements

- [prefix(_:)](/documentation/swift/asyncstream/prefix(_:)) Returns an asynchronous sequence, up to the specified maximum length, containing the initial elements of the base asynchronous sequence.
- [prefix(while:)](/documentation/swift/asyncstream/prefix(while:)) Returns an asynchronous sequence, containing the initial, consecutive elements of the base sequence that satisfy the given predicate.

## Excluding Elements

- [dropFirst(_:)](/documentation/swift/asyncstream/dropfirst(_:)) Omits a specified number of elements from the base asynchronous sequence, then passes through all remaining elements.
- [drop(while:)](/documentation/swift/asyncstream/drop(while:)) Omits elements from the base asynchronous sequence until a given closure returns false, after which it passes through all remaining elements.
- [filter(_:)](/documentation/swift/asyncstream/filter(_:)) Creates an asynchronous sequence that contains, in order, the elements of the base sequence that satisfy the given predicate.

## Transforming a Sequence

- [map(_:)](/documentation/swift/asyncstream/map(_:)-58nsf) Creates an asynchronous sequence that maps the given error-throwing closure over the asynchronous sequence’s elements.
- [map(_:)](/documentation/swift/asyncstream/map(_:)-4a4la) Creates an asynchronous sequence that maps the given closure over the asynchronous sequence’s elements.
- [compactMap(_:)](/documentation/swift/asyncstream/compactmap(_:)-7mgjd) Creates an asynchronous sequence that maps the given closure over the asynchronous sequence’s elements, omitting results that don’t return a value.
- [compactMap(_:)](/documentation/swift/asyncstream/compactmap(_:)-944op) Creates an asynchronous sequence that maps an error-throwing closure over the base sequence’s elements, omitting results that don’t return a value.
- [flatMap(_:)](/documentation/swift/asyncstream/flatmap(_:)-vhhr) Creates an asynchronous sequence that concatenates the results of calling the given error-throwing transformation with each element of this sequence.
- [reduce(_:_:)](/documentation/swift/asyncstream/reduce(_:_:)) Returns the result of combining the elements of the asynchronous sequence using the given closure.
- [reduce(into:_:)](/documentation/swift/asyncstream/reduce(into:_:)) Returns the result of combining the elements of the asynchronous sequence using the given closure, given a mutable initial value.

## Creating an Iterator

- [makeAsyncIterator()](/documentation/swift/asyncstream/makeasynciterator()) Creates the asynchronous iterator that produces elements of this asynchronous sequence.
- [AsyncStream.Iterator](/documentation/swift/asyncstream/iterator) The asynchronous iterator for iterating an asynchronous stream.

## Supporting Types

- [AsyncStream.AsyncIterator](/documentation/swift/asyncstream/asynciterator) The type of asynchronous iterator that produces elements of this asynchronous sequence.

## Type Methods

- [makeStream(of:bufferingPolicy:)](/documentation/swift/asyncstream/makestream(of:bufferingpolicy:)) Initializes a new  and an .

## Default Implementations

- [AsyncSequence Implementations](/documentation/swift/asyncstream/asyncsequence-implementations)

## Asynchronous Sequences

- [AsyncSequence](/documentation/swift/asyncsequence)
- [AsyncThrowingStream](/documentation/swift/asyncthrowingstream)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

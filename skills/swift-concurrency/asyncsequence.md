---
title: AsyncSequence
description: A type that provides asynchronous, sequential, iterated access to its elements.
source: https://developer.apple.com/documentation/swift/asyncsequence
timestamp: 2026-02-19T07:52:36.994Z
---

**Navigation:** [Swift](/documentation/swift)

**Protocol**

# AsyncSequence

**Available on:** iOS 13.0+, iPadOS 13.0+, Mac Catalyst 13.0+, macOS 10.15+, tvOS 13.0+, visionOS 1.0+, watchOS 6.0+

> A type that provides asynchronous, sequential, iterated access to its elements.

```swift
protocol AsyncSequence<Element, Failure>
```

## Overview

An `AsyncSequence` resembles the `Sequence` type — offering a list of values you can step through one at a time — and adds asynchronicity. An `AsyncSequence` may have all, some, or none of its values available when you first use it. Instead, you use `await` to receive values as they become available.

As with `Sequence`, you typically iterate through an `AsyncSequence` with a `for await`-`in` loop. However, because the caller must potentially wait for values, you use the `await` keyword. The following example shows how to iterate over `Counter`, a custom `AsyncSequence` that produces `Int` values from `1` up to a `howHigh` value:

```swift
for await number in Counter(howHigh: 10) {
    print(number, terminator: " ")
}
// Prints "1 2 3 4 5 6 7 8 9 10 "
```

An `AsyncSequence` doesn’t generate or contain the values; it just defines how you access them. Along with defining the type of values as an associated type called `Element`, the `AsyncSequence` defines a `makeAsyncIterator()` method. This returns an instance of type `AsyncIterator`. Like the standard `IteratorProtocol`, the `AsyncIteratorProtocol` defines a single `next()` method to produce elements. The difference is that the `AsyncIterator` defines its `next()` method as `async`, which requires a caller to wait for the next value with the `await` keyword.

`AsyncSequence` also defines methods for processing the elements you receive, modeled on the operations provided by the basic `Sequence` in the standard library. There are two categories of methods: those that return a single value, and those that return another `AsyncSequence`.

Single-value methods eliminate the need for a `for await`-`in` loop, and instead let you make a single `await` call. For example, the `contains(_:)` method returns a Boolean value that indicates if a given value exists in the `AsyncSequence`. Given the `Counter` sequence from the previous example, you can test for the existence of a sequence member with a one-line call:

```swift
let found = await Counter(howHigh: 10).contains(5) // true
```

Methods that return another `AsyncSequence` return a type specific to the method’s semantics. For example, the `.map(_:)` method returns a `AsyncMapSequence` (or a `AsyncThrowingMapSequence`, if the closure you provide to the `map(_:)` method can throw an error). These returned sequences don’t eagerly await the next member of the sequence, which allows the caller to decide when to start work. Typically, you’ll iterate over these sequences with `for await`-`in`, like the base `AsyncSequence` you started with. In the following example, the `map(_:)` method transforms each `Int` received from a `Counter` sequence into a `String`:

```swift
let stream = Counter(howHigh: 10)
    .map { $0 % 2 == 0 ? "Even" : "Odd" }
for await s in stream {
    print(s, terminator: " ")
}
// Prints "Odd Even Odd Even Odd Even Odd Even Odd Even "
```

## Conforming Types

- [AsyncCompactMapSequence](/documentation/swift/asynccompactmapsequence)
- [AsyncDropFirstSequence](/documentation/swift/asyncdropfirstsequence)
- [AsyncDropWhileSequence](/documentation/swift/asyncdropwhilesequence)
- [AsyncFilterSequence](/documentation/swift/asyncfiltersequence)
- [AsyncFlatMapSequence](/documentation/swift/asyncflatmapsequence)
- [AsyncMapSequence](/documentation/swift/asyncmapsequence)
- [AsyncPrefixSequence](/documentation/swift/asyncprefixsequence)
- [AsyncPrefixWhileSequence](/documentation/swift/asyncprefixwhilesequence)
- [AsyncStream](/documentation/swift/asyncstream)
- [AsyncThrowingCompactMapSequence](/documentation/swift/asyncthrowingcompactmapsequence)
- [AsyncThrowingDropWhileSequence](/documentation/swift/asyncthrowingdropwhilesequence)
- [AsyncThrowingFilterSequence](/documentation/swift/asyncthrowingfiltersequence)
- [AsyncThrowingFlatMapSequence](/documentation/swift/asyncthrowingflatmapsequence)
- [AsyncThrowingMapSequence](/documentation/swift/asyncthrowingmapsequence)
- [AsyncThrowingPrefixWhileSequence](/documentation/swift/asyncthrowingprefixwhilesequence)
- [AsyncThrowingStream](/documentation/swift/asyncthrowingstream)
- [Observations](/documentation/observation/observations)
- [TaskGroup](/documentation/swift/taskgroup)
- [ThrowingTaskGroup](/documentation/swift/throwingtaskgroup)

## Creating an Iterator

- [makeAsyncIterator()](/documentation/swift/asyncsequence/makeasynciterator()) Creates the asynchronous iterator that produces elements of this asynchronous sequence.
- [AsyncIterator](/documentation/swift/asyncsequence/asynciterator) The type of asynchronous iterator that produces elements of this asynchronous sequence.
- [AsyncIteratorProtocol](/documentation/swift/asynciteratorprotocol) A type that asynchronously supplies the values of a sequence one at a time.
- [Element](/documentation/swift/asyncsequence/element) The type of element produced by this asynchronous sequence.

## Finding Elements

- [contains(_:)](/documentation/swift/asyncsequence/contains(_:)) Returns a Boolean value that indicates whether the asynchronous sequence contains the given element.
- [contains(where:)](/documentation/swift/asyncsequence/contains(where:)) Returns a Boolean value that indicates whether the asynchronous sequence contains an element that satisfies the given predicate.
- [allSatisfy(_:)](/documentation/swift/asyncsequence/allsatisfy(_:)) Returns a Boolean value that indicates whether all elements produced by the asynchronous sequence satisfy the given predicate.
- [first(where:)](/documentation/swift/asyncsequence/first(where:)) Returns the first element of the sequence that satisfies the given predicate.
- [min()](/documentation/swift/asyncsequence/min()) Returns the minimum element in an asynchronous sequence of comparable elements.
- [min(by:)](/documentation/swift/asyncsequence/min(by:)) Returns the minimum element in the asynchronous sequence, using the given predicate as the comparison between elements.
- [max()](/documentation/swift/asyncsequence/max()) Returns the maximum element in an asynchronous sequence of comparable elements.
- [max(by:)](/documentation/swift/asyncsequence/max(by:)) Returns the maximum element in the asynchronous sequence, using the given predicate as the comparison between elements.

## Selecting Elements

- [prefix(_:)](/documentation/swift/asyncsequence/prefix(_:)) Returns an asynchronous sequence, up to the specified maximum length, containing the initial elements of the base asynchronous sequence.
- [AsyncPrefixSequence](/documentation/swift/asyncprefixsequence) An asynchronous sequence, up to a specified maximum length, containing the initial elements of a base asynchronous sequence.
- [prefix(while:)](/documentation/swift/asyncsequence/prefix(while:)-2xy95) Returns an asynchronous sequence, containing the initial, consecutive elements of the base sequence that satisfy the given predicate.
- [AsyncPrefixWhileSequence](/documentation/swift/asyncprefixwhilesequence) An asynchronous sequence, containing the initial, consecutive elements of the base sequence that satisfy a given predicate.
- [prefix(while:)](/documentation/swift/asyncsequence/prefix(while:)-6yp5n) Returns an asynchronous sequence, containing the initial, consecutive elements of the base sequence that satisfy the given error-throwing predicate.
- [AsyncThrowingPrefixWhileSequence](/documentation/swift/asyncthrowingprefixwhilesequence) An asynchronous sequence, containing the initial, consecutive elements of the base sequence that satisfy the given error-throwing predicate.

## Excluding Elements

- [dropFirst(_:)](/documentation/swift/asyncsequence/dropfirst(_:)) Omits a specified number of elements from the base asynchronous sequence, then passes through all remaining elements.
- [AsyncDropFirstSequence](/documentation/swift/asyncdropfirstsequence) An asynchronous sequence which omits a specified number of elements from the base asynchronous sequence, then passes through all remaining elements.
- [drop(while:)](/documentation/swift/asyncsequence/drop(while:)-9sp3b) Omits elements from the base asynchronous sequence until a given closure returns false, after which it passes through all remaining elements.
- [AsyncDropWhileSequence](/documentation/swift/asyncdropwhilesequence) An asynchronous sequence which omits elements from the base sequence until a given closure returns false, after which it passes through all remaining elements.
- [drop(while:)](/documentation/swift/asyncsequence/drop(while:)-67kgo) Omits elements from the base sequence until a given error-throwing closure returns false, after which it passes through all remaining elements.
- [AsyncThrowingDropWhileSequence](/documentation/swift/asyncthrowingdropwhilesequence) An asynchronous sequence which omits elements from the base sequence until a given error-throwing closure returns false, after which it passes through all remaining elements.
- [filter(_:)](/documentation/swift/asyncsequence/filter(_:)-435af) Creates an asynchronous sequence that contains, in order, the elements of the base sequence that satisfy the given predicate.
- [AsyncFilterSequence](/documentation/swift/asyncfiltersequence) An asynchronous sequence that contains, in order, the elements of the base sequence that satisfy a given predicate.
- [filter(_:)](/documentation/swift/asyncsequence/filter(_:)-2cc0l) Creates an asynchronous sequence that contains, in order, the elements of the base sequence that satisfy the given error-throwing predicate.
- [AsyncThrowingFilterSequence](/documentation/swift/asyncthrowingfiltersequence) An asynchronous sequence that contains, in order, the elements of the base sequence that satisfy the given error-throwing predicate.

## Transforming a Sequence

- [map(_:)](/documentation/swift/asyncsequence/map(_:)-1q1k3) Creates an asynchronous sequence that maps the given closure over the asynchronous sequence’s elements.
- [AsyncMapSequence](/documentation/swift/asyncmapsequence) An asynchronous sequence that maps the given closure over the asynchronous sequence’s elements.
- [map(_:)](/documentation/swift/asyncsequence/map(_:)-70wgb) Creates an asynchronous sequence that maps the given error-throwing closure over the asynchronous sequence’s elements.
- [AsyncThrowingMapSequence](/documentation/swift/asyncthrowingmapsequence) An asynchronous sequence that maps the given error-throwing closure over the asynchronous sequence’s elements.
- [compactMap(_:)](/documentation/swift/asyncsequence/compactmap(_:)-gfdq) Creates an asynchronous sequence that maps the given closure over the asynchronous sequence’s elements, omitting results that don’t return a value.
- [AsyncCompactMapSequence](/documentation/swift/asynccompactmapsequence) An asynchronous sequence that maps a given closure over the asynchronous sequence’s elements, omitting results that don’t return a value.
- [compactMap(_:)](/documentation/swift/asyncsequence/compactmap(_:)-1f8zn) Creates an asynchronous sequence that maps an error-throwing closure over the base sequence’s elements, omitting results that don’t return a value.
- [AsyncThrowingCompactMapSequence](/documentation/swift/asyncthrowingcompactmapsequence) An asynchronous sequence that maps an error-throwing closure over the base sequence’s elements, omitting results that don’t return a value.
- [AsyncFlatMapSequence](/documentation/swift/asyncflatmapsequence) An asynchronous sequence that concatenates the results of calling a given transformation with each element of this sequence.
- [AsyncThrowingFlatMapSequence](/documentation/swift/asyncthrowingflatmapsequence) An asynchronous sequence that concatenates the results of calling a given error-throwing transformation with each element of this sequence.
- [reduce(_:_:)](/documentation/swift/asyncsequence/reduce(_:_:)) Returns the result of combining the elements of the asynchronous sequence using the given closure.
- [reduce(into:_:)](/documentation/swift/asyncsequence/reduce(into:_:)) Returns the result of combining the elements of the asynchronous sequence using the given closure, given a mutable initial value.

## Adapting Textual Sequences

- [characters](/documentation/swift/asyncsequence/characters) A non-blocking sequence of  created by decoding the elements of  as UTF8.
- [AsyncCharacterSequence](/documentation/Foundation/AsyncCharacterSequence) An asynchronous sequence of characters.
- [unicodeScalars](/documentation/swift/asyncsequence/unicodescalars) A non-blocking sequence of  created by decoding the elements of  as UTF8.
- [AsyncUnicodeScalarSequence](/documentation/Foundation/AsyncUnicodeScalarSequence) An asychronous sequence of Unicode scalar values.
- [lines](/documentation/swift/asyncsequence/lines) A non-blocking sequence of newline-separated  created by decoding the elements of  as UTF8.
- [AsyncLineSequence](/documentation/Foundation/AsyncLineSequence) An asynchronous sequence of lines of text.

## Associated Types

- [Failure](/documentation/swift/asyncsequence/failure) The type of errors produced when iteration over the sequence fails.

## Instance Methods

- [flatMap(_:)](/documentation/swift/asyncsequence/flatmap(_:)-4bl9a) Creates an asynchronous sequence that concatenates the results of calling the given transformation with each element of this sequence.
- [flatMap(_:)](/documentation/swift/asyncsequence/flatmap(_:)-54rrt) Creates an asynchronous sequence that concatenates the results of calling the given transformation with each element of this sequence.
- [flatMap(_:)](/documentation/swift/asyncsequence/flatmap(_:)-5j8ra) Creates an asynchronous sequence that concatenates the results of calling the given error-throwing transformation with each element of this sequence.
- [flatMap(_:)](/documentation/swift/asyncsequence/flatmap(_:)-5rn1j) Creates an asynchronous sequence that concatenates the results of calling the given transformation with each element of this sequence.

## Asynchronous Sequences

- [AsyncStream](/documentation/swift/asyncstream)
- [AsyncThrowingStream](/documentation/swift/asyncthrowingstream)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

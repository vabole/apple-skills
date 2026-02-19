---
title: Migrating a test from XCTest
description: Migrate an existing test method or test class written using XCTest.
source: https://developer.apple.com/documentation/testing/migratingfromxctest
timestamp: 2026-02-19T07:52:37.084Z
---

**Navigation:** [Testing](/documentation/testing)

**Article**

# Migrating a test from XCTest

> Migrate an existing test method or test class written using XCTest.

## Overview

The testing library provides much of the same functionality of XCTest, but uses its own syntax to declare test functions and types. Here, you’ll learn how to convert XCTest-based content to use the testing library instead.

### Import the testing library

XCTest and the testing library are available from different modules. Instead of importing the XCTest module, import the Testing module:

A single source file can contain tests written with XCTest as well as other tests written with the testing library. Import both XCTest and Testing if a source file contains mixed test content.

### Convert test classes

XCTest groups related sets of test methods in test classes: classes that inherit from the [xctestcase](https://developer.apple.com/documentation/xctest/xctestcase) class provided by the [xctest](https://developer.apple.com/documentation/xctest) framework. The testing library doesn’t require that test functions be instance members of types. Instead, they can be *free* or *global* functions, or can be `static` or `class` members of a type.

If you want to group your test functions together, you can do so by placing them in a Swift type. The testing library refers to such a type as a *suite*. These types do *not* need to be classes, and they don’t inherit from `XCTestCase`.

To convert a subclass of `XCTestCase` to a suite, remove the `XCTestCase` conformance. It’s also generally recommended that a Swift structure or actor be used instead of a class because it allows the Swift compiler to better-enforce concurrency safety:

For more information about suites and how to declare and customize them, see [Organizing Tests](/documentation/testing/organizingtests).

### Convert setup and teardown functions

In XCTest, code can be scheduled to run before and after a test using the [3856481](https://developer.apple.com/documentation/xctest/xctest/3856481-setup) and [3856482](https://developer.apple.com/documentation/xctest/xctest/3856482-teardown) family of functions. When writing tests using the testing library, implement `init()` and/or `deinit` instead:

The use of `async` and `throws` is optional. If teardown is needed, declare your test suite as a class or as an actor rather than as a structure and implement `deinit`:

### Convert test methods

The testing library represents individual tests as functions, similar to how they are represented in XCTest. However, the syntax for declaring a test function is different. In XCTest, a test method must be a member of a test class and its name must start with `test`. The testing library doesn’t require a test function to have any particular name. Instead, it identifies a test function by the presence of the `@Test` attribute:

As with XCTest, the testing library allows test functions to be marked `async`, `throws`, or `async`-`throws`, and to be isolated to a global actor (for example, by using the `@MainActor` attribute.)

> [!NOTE]
> XCTest runs synchronous test methods on the main actor by default, while the testing library runs all test functions on an arbitrary task. If a test function must run on the main thread, isolate it to the main actor with `@MainActor`, or run the thread-sensitive code inside a call to [run(resulttype:body:)](https://developer.apple.com/documentation/swift/mainactor/run(resulttype:body:)).

For more information about test functions and how to declare and customize them, see [Defining Tests](/documentation/testing/definingtests).

### Check for expected values and outcomes

XCTest uses a family of approximately 40 functions to assert test requirements. These functions are collectively referred to as [1500669](https://developer.apple.com/documentation/xctest/1500669-xctassert). The testing library has two replacements, [expect(_:_:sourceLocation:)](/documentation/testing/expect(_:_:sourcelocation:)) and [require(_:_:sourceLocation:)](/documentation/testing/require(_:_:sourcelocation:)-5l63q). They both behave similarly to `XCTAssert()` except that [require(_:_:sourceLocation:)](/documentation/testing/require(_:_:sourcelocation:)-5l63q) throws an error if its condition isn’t met:

### Check for optional values

XCTest also has a function, [3380195](https://developer.apple.com/documentation/xctest/3380195-xctunwrap), that tests if an optional value is `nil` and throws an error if it is. When using the testing library, you can use [require(_:_:sourceLocation:)](/documentation/testing/require(_:_:sourcelocation:)-6w9oo) with optional expressions to unwrap them:

### Record issues

XCTest has a function, [1500970](https://developer.apple.com/documentation/xctest/1500970-xctfail), that causes a test to fail immediately and unconditionally. This function is useful when the syntax of the language prevents the use of an `XCTAssert()` function. To record an unconditional issue using the testing library, use the [record(_:severity:sourceLocation:)](/documentation/testing/issue/record(_:severity:sourcelocation:)) function:

The following table includes a list of the various `XCTAssert()` functions and their equivalents in the testing library:

| XCTest | Swift Testing |
| --- | --- |
| `XCTAssert(x)`, `XCTAssertTrue(x)` | `#expect(x)` |
| `XCTAssertFalse(x)` | `#expect(!x)` |
| `XCTAssertNil(x)` | `#expect(x == nil)` |
| `XCTAssertNotNil(x)` | `#expect(x != nil)` |
| `XCTAssertEqual(x, y)` | `#expect(x == y)` |
| `XCTAssertNotEqual(x, y)` | `#expect(x != y)` |
| `XCTAssertIdentical(x, y)` | `#expect(x === y)` |
| `XCTAssertNotIdentical(x, y)` | `#expect(x !== y)` |
| `XCTAssertGreaterThan(x, y)` | `#expect(x > y)` |
| `XCTAssertGreaterThanOrEqual(x, y)` | `#expect(x >= y)` |
| `XCTAssertLessThanOrEqual(x, y)` | `#expect(x <= y)` |
| `XCTAssertLessThan(x, y)` | `#expect(x < y)` |
| `XCTAssertThrowsError(try f())` | `#expect(throws: (any Error).self) { try f() }` |
| `XCTAssertThrowsError(try f()) { error in … }` | `let error = #expect(throws: (any Error).self) { try f() }` |
| `XCTAssertNoThrow(try f())` | `#expect(throws: Never.self) { try f() }` |
| `try XCTUnwrap(x)` | `try #require(x)` |
| `XCTFail("…")` | `Issue.record("…")` |

The testing library doesn’t provide an equivalent of [3551607](https://developer.apple.com/documentation/xctest/3551607-xctassertequal). To compare two numeric values within a specified accuracy, use `isApproximatelyEqual()` from [swift](https://github.com/apple/swift-numerics).

### Continue or halt after test failures

An instance of an `XCTestCase` subclass can set its [1496260](https://developer.apple.com/documentation/xctest/xctestcase/1496260-continueafterfailure) property to `false` to cause a test to stop running after a failure occurs. XCTest stops an affected test by throwing an Objective-C exception at the time the failure occurs.

> [!NOTE]
> `continueAfterFailure` isn’t fully supported when using the [swift-corelibs](https://github.com/swiftlang/swift-corelibs-xctest) library on non-Apple platforms.

The behavior of an exception thrown through a Swift stack frame is undefined. If an exception is thrown through an `async` Swift function, it typically causes the process to terminate abnormally, preventing other tests from running.

The testing library doesn’t use exceptions to stop test functions. Instead, use the [require(_:_:sourceLocation:)](/documentation/testing/require(_:_:sourcelocation:)-5l63q) macro, which throws a Swift error on failure:

When using either `continueAfterFailure` or [require(_:_:sourceLocation:)](/documentation/testing/require(_:_:sourcelocation:)-5l63q), other tests will continue to run after the failed test method or test function.

### Validate asynchronous behaviors

XCTest has a class, [xctestexpectation](https://developer.apple.com/documentation/xctest/xctestexpectation), that represents some asynchronous condition. You create an instance of this class (or a subclass like [xctkeypathexpectation](https://developer.apple.com/documentation/xctest/xctkeypathexpectation)) using an initializer or a convenience method on `XCTestCase`. When the condition represented by an expectation occurs, the developer *fulfills* the expectation. Concurrently, the developer *waits for* the expectation to be fulfilled using an instance of [xctwaiter](https://developer.apple.com/documentation/xctest/xctwaiter) or using a convenience method on `XCTestCase`.

Wherever possible, prefer to use Swift concurrency to validate asynchronous conditions. For example, if it’s necessary to determine the result of an asynchronous Swift function, it can be awaited with `await`. For a function that takes a completion handler but which doesn’t use `await`, a Swift [withcheckedcontinuation(isolation:function:_:)](https://developer.apple.com/documentation/swift/withcheckedcontinuation(isolation:function:_:)) can be used to convert the call into an `async`-compatible one.

Some tests, especially those that test asynchronously-delivered events, cannot be readily converted to use Swift concurrency. The testing library offers functionality called *confirmations* which can be used to implement these tests. Instances of [Confirmation](/documentation/testing/confirmation) are created and used within the scope of the functions [confirmation(_:expectedCount:isolation:sourceLocation:_:)](/documentation/testing/confirmation(_:expectedcount:isolation:sourcelocation:_:)-5mqz2) and [confirmation(_:expectedCount:isolation:sourceLocation:_:)](/documentation/testing/confirmation(_:expectedcount:isolation:sourcelocation:_:)-l3il).

Confirmations function similarly to the expectations API of XCTest, however, they don’t block or suspend the caller while waiting for a condition to be fulfilled. Instead, the requirement is expected to be *confirmed* (the equivalent of *fulfilling* an expectation) before `confirmation()` returns, and records an issue otherwise:

By default, `XCTestExpectation` expects to be fulfilled exactly once, and will record an issue in the current test if it is not fulfilled or if it is fulfilled more than once. `Confirmation` behaves the same way and expects to be confirmed exactly once by default. You can configure the number of times an expectation should be fulfilled by setting its [2806572](https://developer.apple.com/documentation/xctest/xctestexpectation/2806572-expectedfulfillmentcount) property, and you can pass a value for the `expectedCount` argument of [confirmation(_:expectedCount:isolation:sourceLocation:_:)](/documentation/testing/confirmation(_:expectedcount:isolation:sourcelocation:_:)-5mqz2) for the same purpose.

`XCTestExpectation` has a property, [2806575](https://developer.apple.com/documentation/xctest/xctestexpectation/2806575-assertforoverfulfill), which when set to `false` allows an expectation to be fulfilled more times than expected without causing a test failure. When using a confirmation, you can pass a range to [confirmation(_:expectedCount:isolation:sourceLocation:_:)](/documentation/testing/confirmation(_:expectedcount:isolation:sourcelocation:_:)-l3il) as its expected count to indicate that it must be confirmed *at least* some number of times:

Any range expression with a lower bound (that is, whose type conforms to both [rangeexpression](https://developer.apple.com/documentation/swift/rangeexpression) and [sequence](https://developer.apple.com/documentation/swift/sequence)) can be used with [confirmation(_:expectedCount:isolation:sourceLocation:_:)](/documentation/testing/confirmation(_:expectedcount:isolation:sourcelocation:_:)-l3il). You must specify a lower bound for the number of confirmations because, without one, the testing library cannot tell if an issue should be recorded when there have been zero confirmations.

### Control whether a test runs

When using XCTest, the [xctskip](https://developer.apple.com/documentation/xctest/xctskip) error type can be thrown to bypass the remainder of a test function. As well, the [3521325](https://developer.apple.com/documentation/xctest/3521325-xctskipif) and [3521326](https://developer.apple.com/documentation/xctest/3521326-xctskipunless) functions can be used to conditionalize the same action. The testing library allows developers to skip a test function or an entire test suite before it starts running using the [Condition Trait](/documentation/testing/conditiontrait) trait type. Annotate a test suite or test function with an instance of this trait type to control whether it runs:

If a test is running and you determine it cannot complete and should end early without failing, use [cancel(_:sourceLocation:)](/documentation/testing/test/cancel(_:sourcelocation:)) instead of [xctskip](https://developer.apple.com/documentation/xctest/xctskip) to cancel the task associated with the current test:

### Annotate known issues

A test may have a known issue that sometimes or always prevents it from passing. When written using XCTest, such tests can call [3727246](https://developer.apple.com/documentation/xctest/3727246-xctexpectfailure) to tell XCTest and its infrastructure that the issue shouldn’t cause the test to fail. The testing library has an equivalent function with synchronous and asynchronous variants:

- [withKnownIssue(_:isIntermittent:sourceLocation:_:)](/documentation/testing/withknownissue(_:isintermittent:sourcelocation:_:))
- [withKnownIssue(_:isIntermittent:isolation:sourceLocation:_:)](/documentation/testing/withknownissue(_:isintermittent:isolation:sourcelocation:_:))

This function can be used to annotate a section of a test as having a known issue:

> [!NOTE]
> The XCTest function [3727245](https://developer.apple.com/documentation/xctest/3727245-xctexpectfailure), which doesn’t take a closure and which affects the remainder of the test, doesn’t have a direct equivalent in the testing library. To mark an entire test as having a known issue, wrap its body in a call to `withKnownIssue()`.

If a test may fail intermittently, the call to `XCTExpectFailure(_:options:failingBlock:)` can be marked *non-strict*. When using the testing library, specify that the known issue is *intermittent* instead:

Additional options can be specified when calling `XCTExpectFailure()`:

- [3726085](https://developer.apple.com/documentation/xctest/xctexpectedfailure/options/3726085-isenabled) can be set to `false` to skip known-issue matching (for instance, if a particular issue only occurs under certain conditions)
- [3726086](https://developer.apple.com/documentation/xctest/xctexpectedfailure/options/3726086-issuematcher) can be set to a closure to allow marking only certain issues as known and to allow other issues to be recorded as test failures

The testing library includes overloads of `withKnownIssue()` that take additional arguments with similar behavior:

- [withKnownIssue(_:isIntermittent:sourceLocation:_:when:matching:)](/documentation/testing/withknownissue(_:isintermittent:sourcelocation:_:when:matching:))
- [withKnownIssue(_:isIntermittent:isolation:sourceLocation:_:when:matching:)](/documentation/testing/withknownissue(_:isintermittent:isolation:sourcelocation:_:when:matching:))

To conditionally enable known-issue matching or to match only certain kinds of issues:

### Run tests sequentially

By default, the testing library runs all tests in a suite in parallel. The default behavior of XCTest is to run each test in a suite sequentially. If your tests use shared state such as global variables, you may see unexpected behavior including unreliable test outcomes when you run tests in parallel.

Annotate your test suite with [serialized](/documentation/testing/trait/serialized) to run tests within that suite serially:

For more information, see [Parallelization](/documentation/testing/parallelization).

### Attach values

In XCTest, you can create an instance of [xctattachment](https://developer.apple.com/documentation/xctest/xctattachment) representing arbitrary data, files, property lists, encodable objects, images, and other types of information that would be useful to have available if a test fails. Swift Testing has an [Attachment](/documentation/testing/attachment) type that serves much the same purpose.

To attach a value from a test to the output of a test run, that value must conform to the [Attachable](/documentation/testing/attachable) protocol. The testing library provides default conformances for various standard library and Foundation types.

If you want to attach a value of another type, and that type already conforms to [encodable](https://developer.apple.com/documentation/swift/encodable) or to [nssecurecoding](https://developer.apple.com/documentation/foundation/nssecurecoding), the testing library automatically provides a default implementation when you import Foundation:

If you have a type that does not (or cannot) conform to `Encodable` or `NSSecureCoding`, or if you want fine-grained control over how it is serialized when attaching it to a test, you can provide your own implementation of [withUnsafeBytes(for:_:)](/documentation/testing/attachable/withunsafebytes(for:_:)).

## Related Documentation

- [Defining test functions](/documentation/testing/definingtests)
- [Organizing test functions with suite types](/documentation/testing/organizingtests)
- [Expectations and confirmations](/documentation/testing/expectations)
- [Known issues](/documentation/testing/known-issues)

## Essentials

- [Defining test functions](/documentation/testing/definingtests)
- [Organizing test functions with suite types](/documentation/testing/organizingtests)
- [Test(_:_:)](/documentation/testing/test(_:_:))
- [Test](/documentation/testing/test)
- [Suite(_:_:)](/documentation/testing/suite(_:_:))

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

---
title: Expectations and confirmations
description: Check for expected values, outcomes, and asynchronous events in tests.
source: https://developer.apple.com/documentation/testing/expectations
timestamp: 2026-02-19T07:52:36.973Z
---

**Navigation:** [Testing](/documentation/testing)

**API Collection**

# Expectations and confirmations

> Check for expected values, outcomes, and asynchronous events in tests.

## Overview

Use [expect(_:_:sourceLocation:)](/documentation/testing/expect(_:_:sourcelocation:)) and [require(_:_:sourceLocation:)](/documentation/testing/require(_:_:sourcelocation:)-5l63q) macros to validate expected outcomes. To validate that an error is thrown, or *not* thrown, the testing library provides several overloads of the macros that you can use. For more information, see [testing-for-errors-in-swift](/documentation/testing/testing-for-errors-in-swift-code).

Use a [Confirmation](/documentation/testing/confirmation) to confirm the occurrence of an asynchronous event that you can’t check directly using an expectation. For more information, see [testing-asynchronous](/documentation/testing/testing-asynchronous-code).

### Validate your code’s result

To validate that your code produces an expected value, use [expect(_:_:sourceLocation:)](/documentation/testing/expect(_:_:sourcelocation:)). This macro captures the expression you pass, and provides detailed information when the code doesn’t satisfy the expectation.

```swift
@Test func calculatingOrderTotal() {
  let calculator = OrderCalculator()
  #expect(calculator.total(of: [3, 3]) == 7)
  // Prints "Expectation failed: (calculator.total(of: [3, 3]) → 6) == 7"
}
```

Your test keeps running after [expect(_:_:sourceLocation:)](/documentation/testing/expect(_:_:sourcelocation:)) fails. To stop the test when the code doesn’t satisfy a requirement, use [require(_:_:sourceLocation:)](/documentation/testing/require(_:_:sourcelocation:)-5l63q) instead:

```swift
@Test func returningCustomerRemembersUsualOrder() throws {
  let customer = try #require(Customer(id: 123))
  // The test runner doesn't reach this line if the customer is nil.
  #expect(customer.usualOrder.countOfItems == 2)
}
```

[require(_:_:sourceLocation:)](/documentation/testing/require(_:_:sourcelocation:)-5l63q) throws an instance of [Expectation Failed Error](/documentation/testing/expectationfailederror) when your code fails to satisfy the requirement.

## Checking expectations

- [expect(_:_:sourceLocation:)](/documentation/testing/expect(_:_:sourcelocation:)) Check that an expectation has passed after a condition has been evaluated.
- [require(_:_:sourceLocation:)](/documentation/testing/require(_:_:sourcelocation:)-5l63q) Check that an expectation has passed after a condition has been evaluated and throw an error if it failed.
- [require(_:_:sourceLocation:)](/documentation/testing/require(_:_:sourcelocation:)-6w9oo) Unwrap an optional value or, if it is , fail and throw an error.

## Checking that errors are thrown

- [Testing for errors in Swift code](/documentation/testing/testing-for-errors-in-swift-code) Ensure that your code handles errors in the way you expect.
- [expect(throws:_:sourceLocation:performing:)](/documentation/testing/expect(throws:_:sourcelocation:performing:)-1hfms) Check that an expression always throws an error of a given type.
- [expect(throws:_:sourceLocation:performing:)](/documentation/testing/expect(throws:_:sourcelocation:performing:)-7du1h) Check that an expression always throws a specific error.
- [expect(_:sourceLocation:performing:throws:)](/documentation/testing/expect(_:sourcelocation:performing:throws:)) Check that an expression always throws an error matching some condition.
- [require(throws:_:sourceLocation:performing:)](/documentation/testing/require(throws:_:sourcelocation:performing:)-7n34r) Check that an expression always throws an error of a given type, and throw an error if it does not.
- [require(throws:_:sourceLocation:performing:)](/documentation/testing/require(throws:_:sourcelocation:performing:)-4djuw)
- [require(_:sourceLocation:performing:throws:)](/documentation/testing/require(_:sourcelocation:performing:throws:)) Check that an expression always throws an error matching some condition, and throw an error if it does not.

## Checking how processes exit

- [Exit testing](/documentation/testing/exit-testing) Use exit tests to test functionality that might cause a test process to exit.
- [expect(processExitsWith:observing:_:sourceLocation:performing:)](/documentation/testing/expect(processexitswith:observing:_:sourcelocation:performing:)) Check that an expression causes the process to terminate in a given fashion.
- [require(processExitsWith:observing:_:sourceLocation:performing:)](/documentation/testing/require(processexitswith:observing:_:sourcelocation:performing:)) Check that an expression causes the process to terminate in a given fashion and throw an error if it did not.
- [ExitStatus](/documentation/testing/exitstatus) An enumeration describing possible status a process will report on exit.
- [ExitTest](/documentation/testing/exittest) A type describing an exit test.

## Confirming that asynchronous events occur

- [Testing asynchronous code](/documentation/testing/testing-asynchronous-code) Validate whether your code causes expected events to happen.
- [confirmation(_:expectedCount:isolation:sourceLocation:_:)](/documentation/testing/confirmation(_:expectedcount:isolation:sourcelocation:_:)-5mqz2) Confirm that some event occurs during the invocation of a function.
- [confirmation(_:expectedCount:isolation:sourceLocation:_:)](/documentation/testing/confirmation(_:expectedcount:isolation:sourcelocation:_:)-l3il) Confirm that some event occurs during the invocation of a function.
- [Confirmation](/documentation/testing/confirmation) A type that can be used to confirm that an event occurs zero or more times.

## Retrieving information about checked expectations

- [Expectation](/documentation/testing/expectation) A type describing an expectation that has been evaluated.
- [ExpectationFailedError](/documentation/testing/expectationfailederror) A type describing an error thrown when an expectation fails during evaluation.
- [CustomTestStringConvertible](/documentation/testing/customteststringconvertible) A protocol describing types with a custom string representation when presented as part of a test’s output.

## Representing source locations

- [SourceLocation](/documentation/testing/sourcelocation) A type representing a location in source code.

## Behavior validation

- [Known issues](/documentation/testing/known-issues)

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

---
title: Traits
description: Annotate test functions and suites, and customize their behavior.
source: https://developer.apple.com/documentation/testing/traits
timestamp: 2026-02-19T07:52:37.023Z
---

**Navigation:** [Testing](/documentation/testing)

**API Collection**

# Traits

> Annotate test functions and suites, and customize their behavior.

## Overview

Pass built-in traits to test functions or suite types to comment, categorize, classify, and modify the runtime behavior of test suites and test functions. Implement the [Test Trait](/documentation/testing/testtrait), and [Suite Trait](/documentation/testing/suitetrait) protocols to create your own types that customize the behavior of your tests.

## Customizing runtime behaviors

- [Enabling and disabling tests](/documentation/testing/enablinganddisabling) Conditionally enable or disable individual tests before they run.
- [Limiting the running time of tests](/documentation/testing/limitingexecutiontime) Set limits on how long a test can run for until it fails.
- [enabled(if:_:sourceLocation:)](/documentation/testing/trait/enabled(if:_:sourcelocation:)) Constructs a condition trait that disables a test if it returns .
- [enabled(_:sourceLocation:_:)](/documentation/testing/trait/enabled(_:sourcelocation:_:)) Constructs a condition trait that disables a test if it returns .
- [disabled(_:sourceLocation:)](/documentation/testing/trait/disabled(_:sourcelocation:)) Constructs a condition trait that disables a test unconditionally.
- [disabled(if:_:sourceLocation:)](/documentation/testing/trait/disabled(if:_:sourcelocation:)) Constructs a condition trait that disables a test if its value is true.
- [disabled(_:sourceLocation:_:)](/documentation/testing/trait/disabled(_:sourcelocation:_:)) Constructs a condition trait that disables a test if its value is true.
- [timeLimit(_:)](/documentation/testing/trait/timelimit(_:)) Construct a time limit trait that causes a test to time out if it runs for too long.

## Running tests serially or in parallel

- [Running tests serially or in parallel](/documentation/testing/parallelization) Control whether tests run serially or in parallel.
- [serialized](/documentation/testing/trait/serialized) A trait that serializes the test to which it is applied.

## Annotating tests

- [Adding tags to tests](/documentation/testing/addingtags) Use tags to provide semantic information for organization, filtering, and customizing appearances.
- [Adding comments to tests](/documentation/testing/addingcomments) Add comments to provide useful information about tests.
- [Associating bugs with tests](/documentation/testing/associatingbugs) Associate bugs uncovered or verified by tests.
- [Interpreting bug identifiers](/documentation/testing/bugidentifiers) Examine how the testing library interprets bug identifiers provided by developers.
- [Tag()](/documentation/testing/tag()) Declare a tag that can be applied to a test function or test suite.
- [bug(_:_:)](/documentation/testing/trait/bug(_:_:)) Constructs a bug to track with a test.
- [bug(_:id:_:)](/documentation/testing/trait/bug(_:id:_:)-10yf5) Constructs a bug to track with a test.
- [bug(_:id:_:)](/documentation/testing/trait/bug(_:id:_:)-3vtpl) Constructs a bug to track with a test.

## Handling issues

- [compactMapIssues(_:)](/documentation/testing/trait/compactmapissues(_:)) Constructs an trait that transforms issues recorded by a test.
- [filterIssues(_:)](/documentation/testing/trait/filterissues(_:)) Constructs a trait that filters issues recorded by a test.

## Creating custom traits

- [Trait](/documentation/testing/trait) A protocol describing traits that can be added to a test function or to a test suite.
- [TestTrait](/documentation/testing/testtrait) A protocol describing a trait that you can add to a test function.
- [SuiteTrait](/documentation/testing/suitetrait) A protocol describing a trait that you can add to a test suite.
- [TestScoping](/documentation/testing/testscoping) A protocol that tells the test runner to run custom code before or after it runs a test suite or test function.

## Supporting types

- [Bug](/documentation/testing/bug) A type that represents a bug report tracked by a test.
- [Comment](/documentation/testing/comment) A type that represents a comment related to a test.
- [ConditionTrait](/documentation/testing/conditiontrait) A type that defines a condition which must be satisfied for the testing library to enable a test.
- [IssueHandlingTrait](/documentation/testing/issuehandlingtrait) A type that allows transforming or filtering the issues recorded by a test.
- [ParallelizationTrait](/documentation/testing/parallelizationtrait) A type that defines whether the testing library runs this test serially or in parallel.
- [Tag](/documentation/testing/tag) A type representing a tag that can be applied to a test.
- [Tag.List](/documentation/testing/tag/list) A type representing one or more tags applied to a test.
- [TimeLimitTrait](/documentation/testing/timelimittrait) A type that defines a time limit to apply to a test.

---

*Extracted by [sosumi.ai](https://sosumi.ai) - Making Apple docs AI-readable.*
*This is unofficial content. All documentation belongs to Apple Inc.*

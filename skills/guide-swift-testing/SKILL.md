---
name: guide-swift-testing
description: Swift Testing patterns — structs over classes, async confirmations, parameterized tests, exit tests, attachments, common agent mistakes. Use when writing, reviewing, or migrating Swift Testing code.
type: guide
origin: https://github.com/twostraws/Swift-Testing-Agent-Skill
license: MIT
---

> **Guide Skill** — This is an expert workflow/pattern guide, not API reference documentation.
> Originally from [twostraws/Swift-Testing-Agent-Skill](https://github.com/twostraws/Swift-Testing-Agent-Skill) by Paul Hudson. MIT License.

# Swift Testing Patterns

Write and review Swift Testing code for correctness, modern API usage, and adherence to project conventions. Report only genuine problems — do not nitpick or invent issues.

## Core Instructions

- Target Swift 6.2 or later, using modern Swift concurrency.
- Swift Testing does *not* support UI tests — XCTest must be used there.
- Do not rewrite existing XCTest to Swift Testing unless requested.

## Review Process

1. Ensure tests follow core conventions using `references/core-rules.md`.
2. Validate structure, assertions, dependency injection, and best practices using `references/writing-better-tests.md`.
3. Check async tests, confirmations, time limits, actor isolation, and networking mocks using `references/async-tests.md`.
4. Ensure new features like raw identifiers, exit tests, and attachments are used correctly using `references/new-features.md`.
5. If migrating from XCTest, follow `references/migrating-from-xctest.md`.

If doing partial work, load only the relevant reference files.

## References

| Topic | Reference |
|-------|-----------|
| Structs over classes, `@Suite`, parallel execution, `withKnownIssue`, tags | `references/core-rules.md` |
| Test hygiene, structure, DI, `#expect` vs `#require`, `Issue.record()`, verification methods | `references/writing-better-tests.md` |
| Serialized tests, `confirmation()`, time limits, actor isolation, mocking networking | `references/async-tests.md` |
| Raw identifiers, exit tests, attachments, test scoping traits, range-based confirmations | `references/new-features.md` |
| XCTest-to-Swift Testing conversion, assertion mappings, floating-point tolerance | `references/migrating-from-xctest.md` |

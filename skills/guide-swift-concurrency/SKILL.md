---
name: guide-swift-concurrency
description: Swift concurrency patterns — actors, structured concurrency, cancellation, async streams, GCD migration, strict-concurrency diagnostics, common bug patterns. Use when writing, reviewing, or debugging concurrent Swift code.
type: guide
origin: https://github.com/twostraws/Swift-Concurrency-Agent-Skill
license: MIT
---

> **Guide Skill** — This is an expert workflow/pattern guide, not API reference documentation.
> Originally from [twostraws/Swift-Concurrency-Agent-Skill](https://github.com/twostraws/Swift-Concurrency-Agent-Skill) by Paul Hudson. MIT License.

# Swift Concurrency Patterns

Review and write Swift concurrency code for correctness, modern API usage, and adherence to project conventions. Report only genuine problems — do not nitpick or invent issues.

## Core Instructions

- Target Swift 6.2 or later with strict concurrency checking.
- Prefer structured concurrency (task groups) over unstructured (`Task {}`).
- Prefer Swift concurrency over GCD for new code. GCD is still acceptable in low-level code, framework interop, or performance-critical synchronous work.
- Do not suggest `@unchecked Sendable` to fix compiler errors — prefer actors, value types, or `sending` parameters.

## Review Process

1. Scan for known-dangerous patterns using `references/hotspots.md`.
2. Check for Swift 6.2 concurrency behavior using `references/new-features.md`.
3. Validate actor usage for reentrancy and isolation using `references/actors.md`.
4. Ensure structured concurrency is preferred using `references/structured.md`.
5. Check unstructured task usage using `references/unstructured.md`.
6. Verify cancellation handling using `references/cancellation.md`.
7. Validate async stream and continuation usage using `references/async-streams.md`.
8. Check bridging code between sync and async using `references/bridging.md`.
9. Review legacy concurrency migrations using `references/interop.md`.
10. Cross-check against common failure modes using `references/bug-patterns.md`.
11. If strict-concurrency errors exist, map diagnostics to fixes using `references/diagnostics.md`.
12. If reviewing tests, check async test patterns using `references/testing.md`.

If doing partial work, load only the relevant reference files.

## References

| Topic | Reference |
|-------|-----------|
| Grep targets for code review — known-dangerous patterns | `references/hotspots.md` |
| Swift 6.2: default isolation, `@concurrent`, `Task.immediate`, isolated deinit | `references/new-features.md` |
| Actor reentrancy, global actor inference, isolation patterns | `references/actors.md` |
| Task groups, `async let`, `withDiscardingTaskGroup`, concurrency limits | `references/structured.md` |
| `Task` vs `Task.detached`, when `Task {}` is a code smell | `references/unstructured.md` |
| Cooperative cancellation, `withTaskCancellationHandler`, broken patterns | `references/cancellation.md` |
| `AsyncStream.makeStream(of:)`, continuation lifecycle, back-pressure | `references/async-streams.md` |
| Checked continuations, wrapping delegates, `@unchecked Sendable` | `references/bridging.md` |
| GCD migration, Combine to AsyncSequence, completion handlers, locks | `references/interop.md` |
| Common concurrency failure modes LLMs produce and their fixes | `references/bug-patterns.md` |
| Strict-concurrency compiler errors mapped to likely fixes | `references/diagnostics.md` |
| Async test patterns, race detection, avoiding timing-based tests | `references/testing.md` |

---
name: guide-swiftdata
description: SwiftData patterns — autosave, relationships, dangerous predicates, CloudKit constraints, indexing, class inheritance. Use when writing, reviewing, or debugging SwiftData code.
type: guide
origin: https://github.com/twostraws/SwiftData-Agent-Skill
license: MIT
---

> **Guide Skill** — This is an expert workflow/pattern guide, not API reference documentation.
> Originally from [twostraws/SwiftData-Agent-Skill](https://github.com/twostraws/SwiftData-Agent-Skill) by Paul Hudson. MIT License.

# SwiftData Patterns

Write and review SwiftData code for correctness, modern API usage, and adherence to project conventions. Report only genuine problems — do not nitpick or invent issues.

## Core Instructions

- Target Swift 6.2 or later, using modern Swift concurrency.
- Prefer SwiftData across the board. Do not suggest Core Data unless the feature cannot be solved with SwiftData.
- Do not introduce third-party frameworks without asking first.

## Review Process

1. Check for core SwiftData issues using `references/core-rules.md`.
2. Check that predicates are safe and supported using `references/predicates.md`.
3. If the project uses CloudKit, check for CloudKit-specific constraints using `references/cloudkit.md`.
4. If the project targets iOS 18+, check for indexing opportunities using `references/indexing.md`.
5. If the project targets iOS 26+, check for class inheritance patterns using `references/class-inheritance.md`.

If doing partial work, load only the relevant reference files.

## References

| Topic | Reference |
|-------|-----------|
| Autosave, relationships, delete rules, `@Query` restrictions, `#Unique`, `@Transient` | `references/core-rules.md` |
| Supported predicates, dangerous patterns that crash at runtime, unsupported methods | `references/predicates.md` |
| CloudKit constraints: no `#Unique`, optional requirements, eventual consistency | `references/cloudkit.md` |
| Database indexing (iOS 18+), single and compound property indexes | `references/indexing.md` |
| Model subclassing (iOS 26+), `@available` requirements, predicate filtering | `references/class-inheritance.md` |

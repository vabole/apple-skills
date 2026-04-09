# Apple Skills

Apple development skills for **Claude Code** and **Codex** — latest iOS 26+ APIs, SwiftUI, Liquid Glass, and more.

These are coding agent skills (reference docs + guidelines) that help AI assistants write production-grade iOS/macOS Swift code using current Apple APIs.

## Keeping Docs Up-to-Date

All reference documentation is fetched directly from Apple's DocC JSON endpoints on `developer.apple.com/tutorials/data` and rendered to markdown by the local TypeScript tooling in `scripts/apple-docs.ts`.

Native TypeScript execution requires Node 25.2 or newer.

### Quick refresh

```bash
# Dry run — see what changed since last download
./scripts/refresh-docs.sh

# Apply updates
./scripts/refresh-docs.sh --apply

# Install tooling for checks
pnpm install

# Run checks
pnpm check

# Commit the changes
git add -A && git commit -m "docs: refresh Apple docs $(date +%Y-%m-%d)"
```

### How it works

The refresh script finds all `.md` files with a `source: https://developer.apple.com/...` header, maps each source URL to Apple's underlying DocC JSON endpoint, renders markdown locally, and diffs against the checked-in copy. Only files with actual content changes (ignoring timestamp differences) are flagged.

Images stay in the main generated docs. When Apple embeds DocC videos in a page, the refresh flow keeps those links in a neighboring `*.videos.md` sidecar so most agents don't pay the context cost unless they explicitly need video references.

### Adding new docs

To download a new Apple documentation page:

```bash
# Single topic
pnpm fetch-doc -- /documentation/swiftui/navigationstack --output skills/swiftui/navigationstack.md

# Framework index
pnpm fetch-doc -- /documentation/storekit --output skills/storekit/storekit-index.md

# HIG page
pnpm fetch-doc -- /design/human-interface-guidelines/buttons --output skills/hig/buttons.md
```

### Last refreshed

**2026-04-09** — refreshed end to end with the local direct-fetch workflow against Apple’s DocC JSON endpoints.

### Why not `sosumi.ai`?

This repo no longer needs a hosted proxy to refresh docs. Apple already exposes the underlying DocC JSON on `developer.apple.com/tutorials/data`, so the local tooling fetches and renders that data directly.

`@nshipster/sosumi` and the `NSHipster/sosumi.ai` codebase are still useful as implementation references for Apple’s payload shapes and rendering patterns, but they aren’t required in the runtime or refresh path here.

---

## What's Included

### Framework Reference Docs
| Skill | Files | Description |
|-------|-------|-------------|
| **swiftui** | 50 | SwiftUI views, modifiers, navigation, state management, charts |
| **swift-testing** | 8 | Swift Testing framework (`@Test`, `@Suite`, `#expect`, `#require`) |
| **swift-concurrency** | 8 | async/await, Task, TaskGroup, Actor, AsyncSequence |
| **swiftdata** | — | @Model, ModelContext, @Query, schema migrations |
| **healthkit** | — | HKHealthStore, HKQuantitySample, workouts, health data |
| **combine** | — | Publishers, subscribers, operators |
| **storekit** | 7 | StoreKit 2 (Product, Transaction, SubscriptionStoreView) |
| **mapkit** | 8 | MapKit for SwiftUI (Map, Marker, Annotation, MapCameraPosition) |
| **tipkit** | 7 | TipKit (Tip protocol, TipView, PopoverTipView) |
| **appintents** | — | App Intents, Siri, Shortcuts, Spotlight integration |
| **widgetkit** | — | Widget timelines, entries, providers |
| **usernotifications** | — | Local/remote notifications, triggers |
| **eventkit** | — | EKEventStore, EKEvent, EKReminder, calendar access |
| **photosui** | — | PhotosPicker, photo selection |
| **corehaptics** | — | CHHapticEngine, haptic patterns |
| **backgroundtasks** | — | BGTaskScheduler, app refresh |
| **xcuitest** | 10 | XCUITest with Swift 6 @MainActor patterns |

### Design & Guidelines
| Skill | Files | Description |
|-------|-------|-------------|
| **hig** | 41 | Apple Human Interface Guidelines |
| **ios-liquid-glass** | 17 | Liquid Glass API reference (iOS 26+) |
| **ios-design-consultant** | — | UX/design guidance for Liquid Glass apps |
| **ios-dev** | — | SwiftUI development patterns & aesthetics |

### Workflow & Pattern Guides

> These are **expert workflow/pattern guides** — they teach *how* to approach tasks (audit performance, refactor views, build apps), as opposed to the reference docs above which document *what APIs exist*.
> Originally from [Dimillian/Skills](https://github.com/Dimillian/Skills) by Thomas Ricouard. MIT License.

| Skill | Files | Description |
|-------|-------|-------------|
| **guide-swiftui-performance-audit** | 5 | Audit and improve SwiftUI runtime performance from code review and architecture |
| **guide-swiftui-ui-patterns** | 27 | Best practices and examples for building SwiftUI views and components |
| **guide-swiftui-view-refactor** | 2 | Refactor SwiftUI views for consistent structure and Observation usage |
| **guide-macos-spm-packaging** | 16 | Scaffold, build, and package SwiftPM-based macOS apps without Xcode |

### Utilities
| Skill | Description |
|-------|-------------|
| **apple-docs-index** | Index of Apple developer documentation — start here to find what you need |
| **simulator-utils** | iOS Simulator commands, screenshots, device management |
| **apple-aso** | App Store Optimization for metadata |
| **ios-app-icon** | App icon generation workflow |
| **ios-app-assets** | In-app asset generation workflow |

## Target Platform

**iOS 26+ / Swift 6** — no legacy patterns. Uses:
- `@Observable` macro (not `ObservableObject`)
- `NavigationStack` (not `NavigationView`)
- Swift concurrency (`async`/`await`, not completion handlers)
- Liquid Glass design system
- Swift Testing where applicable

## Doc Source

All `.md` reference files (everything except `SKILL.md`) are generated from Apple's DocC JSON endpoints and rendered locally into markdown. Each file has a YAML frontmatter header with:

```yaml
---
title: Button
description: A control that initiates an action.
source: https://developer.apple.com/documentation/swiftui/button
timestamp: 2026-02-19T07:52:54.922Z
---
```

- `source` — the original Apple developer docs URL
- `timestamp` — when the file was rendered from Apple's JSON data

The `SKILL.md` files are hand-written skill descriptions and are the only non-verbatim content.

## Tooling

The direct-fetch workflow is maintained with a small local TypeScript toolchain:

- `pnpm refresh-docs` — native Node execution of the TypeScript refresh script
- `pnpm fetch-doc` — native Node execution for one-off downloads
- `pnpm typecheck` — `tsgo` preview compiler as the main typecheck gate
- `pnpm lint` — Biome formatter + linter, configured to fail on warnings
- `pnpm test` — Vitest renderer smoke tests
- `pnpm check` — full repo gate

Biome also enforces line-count limits so the refresh tooling stays modular instead of regressing into one oversized script.

## Usage

### Claude Code Plugin
```bash
# Add the marketplace and install the plugin
/plugin marketplace add vabole/apple-skills
/plugin install apple-skills@apple-skills
```

### Codex
Reference skills in your Codex global config or project `AGENTS.md`.

### Direct Reference
```bash
git clone https://github.com/vabole/apple-skills.git
```

Each skill has a `SKILL.md` with metadata and instructions, plus reference `.md` files with API documentation.

## Structure

```
skills/                     # 30 skills (26 reference + 4 guides)
├── swiftui/                # 50 SwiftUI reference files
├── hig/                    # 41 HIG reference files
├── ios-liquid-glass/       # 17 Liquid Glass API docs
├── swift-testing/          # Swift Testing framework
├── swift-concurrency/      # async/await, actors
├── storekit/               # StoreKit 2
├── mapkit/                 # MapKit for SwiftUI
├── tipkit/                 # TipKit framework
├── healthkit/              # HealthKit API docs
├── ...                     # and more
├── apple-docs-index/       # Framework doc indexes
├── guide-swiftui-performance-audit/  # Performance audit guide
├── guide-swiftui-ui-patterns/        # UI patterns guide (26 references)
├── guide-swiftui-view-refactor/      # View refactoring guide
└── guide-macos-spm-packaging/        # macOS SPM packaging guide
scripts/
└── refresh-docs.sh         # Refresh docs from Apple DocC JSON
```

## License

MIT

# Apple Skills

Apple development skills for **Claude Code**, **Codex**, and other coding agents — current iOS 26+ APIs, SwiftUI, UIKit, Liquid Glass, Human Interface Guidelines, and practical workflow guides.

## Install

Pick your agent:

<details open>
<summary>Claude Code</summary>

```bash
claude plugin marketplace add vabole/apple-skills
claude plugin install apple-skills@apple-skills
```

</details>

<details>
<summary>Codex</summary>

```bash
npx skills add vabole/apple-skills --agent codex --skill '*' -g -y
```

</details>

<details>
<summary>Cursor</summary>

```bash
npx skills add vabole/apple-skills --agent cursor --skill '*' -g -y
```

</details>

## Update

For Claude Code marketplace installs:

```bash
claude plugin update apple-skills@apple-skills
```

For Codex or Cursor, re-run the install command for your agent.

## Uninstall

For Claude Code marketplace installs:

```bash
claude plugin uninstall apple-skills@apple-skills
```

For Skills CLI installs, run the remover and select the Apple Skills entries:

```bash
npx skills remove -g
```

## What's Included

### Framework Reference Docs

| Skill | Description |
|-------|-------------|
| **swiftui** | SwiftUI views, modifiers, navigation, state management, charts |
| **uikit** | UIKit views, controllers, controls, scenes, Auto Layout, presentation |
| **swift-testing** | Swift Testing framework (`@Test`, `@Suite`, `#expect`, `#require`) |
| **swift-concurrency** | async/await, Task, TaskGroup, Actor, AsyncSequence |
| **swiftdata** | @Model, ModelContext, @Query, schema migrations |
| **healthkit** | HKHealthStore, HKQuantitySample, workouts, health data |
| **combine** | Publishers, subscribers, operators |
| **storekit** | StoreKit 2 (Product, Transaction, SubscriptionStoreView) |
| **mapkit** | MapKit for SwiftUI (Map, Marker, Annotation, MapCameraPosition) |
| **tipkit** | TipKit (Tip protocol, TipView, TipUIPopoverViewController) |
| **appintents** | App Intents, Siri, Shortcuts, Spotlight integration |
| **widgetkit** | Widget timelines, entries, providers |
| **usernotifications** | Local/remote notifications, triggers |
| **eventkit** | EKEventStore, EKEvent, EKReminder, calendar access |
| **photosui** | PhotosPicker, photo selection |
| **corehaptics** | CHHapticEngine, haptic patterns |
| **backgroundtasks** | BGTaskScheduler, app refresh |
| **xcuitest** | XCUITest with Swift 6 @MainActor patterns |

### Coordinator

| Skill | Description |
|-------|-------------|
| **ios-dev** | **Start here.** Routes to best-practice guides, correctness checks, and API references for any iOS/SwiftUI task |

### Design & Guidelines

| Skill | Description |
|-------|-------------|
| **hig** | Apple Human Interface Guidelines |
| **ios-liquid-glass** | Liquid Glass API reference (iOS 26+) |
| **ios-design-consultant** | UX/design guidance for Liquid Glass apps |
| **ios-ui-craft** | Production-grade SwiftUI with Apple Design Award-quality aesthetics |

### Workflow & Pattern Guides

> Expert workflow/pattern guides that teach *how* to approach tasks, as opposed to the reference docs above which document *what APIs exist*.

| Skill | Description | Origin |
|-------|-------------|--------|
| **guide-swiftui-animations** | Animation patterns — implicit/explicit, transitions, phase/keyframe, @Animatable | [AvdLee/SwiftUI-Agent-Skill](https://github.com/AvdLee/SwiftUI-Agent-Skill) |
| **guide-swiftui-charts** | Swift Charts — marks, axes, selection, styling, Chart3D, accessibility | [AvdLee/SwiftUI-Agent-Skill](https://github.com/AvdLee/SwiftUI-Agent-Skill) |
| **guide-swiftui-performance-audit** | Audit and improve SwiftUI runtime performance | [Dimillian/Skills](https://github.com/Dimillian/Skills) |
| **guide-swiftui-ui-patterns** | Best practices for building SwiftUI views and components | [Dimillian/Skills](https://github.com/Dimillian/Skills) |
| **guide-swiftui-view-refactor** | Refactor SwiftUI views for consistent structure and Observation usage | [Dimillian/Skills](https://github.com/Dimillian/Skills) |
| **guide-macos-spm-packaging** | Scaffold, build, and package SwiftPM-based macOS apps without Xcode | [Dimillian/Skills](https://github.com/Dimillian/Skills) |

### Utilities

| Skill | Description |
|-------|-------------|
| **apple-docs-index** | Index of Apple developer documentation — start here to find what you need |
| **simulator-utils** | iOS Simulator commands, screenshots, device management |
| **apple-aso** | App Store Optimization for metadata |
| **ios-app-icon** | App icon generation workflow |
| **ios-app-assets** | In-app asset generation workflow |

## Target Platform

These skills intentionally target the latest Apple APIs and platform conventions.

**Why bleeding edge?** LLMs already have plenty of legacy Apple APIs in their training data — when a project needs backward compatibility, agents can add it on their own. But for the newest APIs, agents need to be steered with up-to-date docs; without them, they'll hallucinate or fall back to deprecated patterns.

**iOS 26+ / Swift 6** — no legacy patterns. Uses:
- `@Observable` macro (not `ObservableObject`)
- `NavigationStack` (not `NavigationView`)
- Swift concurrency (`async`/`await`, not completion handlers)
- Liquid Glass design system
- Swift Testing where applicable

## License

MIT

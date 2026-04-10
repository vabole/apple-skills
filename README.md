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

### Design & Guidelines

| Skill | Description |
|-------|-------------|
| **hig** | Apple Human Interface Guidelines |
| **ios-liquid-glass** | Liquid Glass API reference (iOS 26+) |
| **ios-design-consultant** | UX/design guidance for Liquid Glass apps |
| **ios-dev** | SwiftUI development patterns & aesthetics |

### Workflow & Pattern Guides

> Expert workflow/pattern guides that teach *how* to approach tasks, as opposed to the reference docs above which document *what APIs exist*.
> Originally from [Dimillian/Skills](https://github.com/Dimillian/Skills) by Thomas Ricouard. MIT License.

| Skill | Description |
|-------|-------------|
| **guide-swiftui-performance-audit** | Audit and improve SwiftUI runtime performance |
| **guide-swiftui-ui-patterns** | Best practices for building SwiftUI views and components |
| **guide-swiftui-view-refactor** | Refactor SwiftUI views for consistent structure and Observation usage |
| **guide-macos-spm-packaging** | Scaffold, build, and package SwiftPM-based macOS apps without Xcode |

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

## License

MIT

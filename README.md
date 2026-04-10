# Apple Skills

Apple development skills for AI coding agents — latest iOS 26+ APIs, SwiftUI, Liquid Glass, Human Interface Guidelines, and more.

These skills give your coding agent up-to-date Apple API reference docs and iOS/macOS development patterns, so it writes production-grade Swift code without hallucinating deprecated APIs.

## Install

### Claude Code (Marketplace)

```
/plugin marketplace add vabole/apple-skills
/plugin install apple-skills@apple-skills
```

### Any Agent (npx)

Works with Claude Code, Codex, Cursor, Windsurf, and [40+ other agents](https://skills.sh).

```bash
# Claude Code
npx skills add vabole/apple-skills --agent claude-code -g -y

# Codex
npx skills add vabole/apple-skills --agent codex -g -y

# Interactive — pick skills and agents from a menu
npx skills add vabole/apple-skills -g

# All skills, all detected agents, no prompts
npx skills add vabole/apple-skills --all -g
```

## Update

```bash
npx skills update -g
```

## Uninstall

### Claude Code (Marketplace)

```
/plugin uninstall apple-skills@apple-skills
```

### Any Agent (npx)

```bash
# Interactive — select which skills to remove
npx skills remove -g
```

<details>
<summary>Script-friendly removal (explicit skill list)</summary>

The `skills` CLI does not yet support package-level removal, so scripted uninstalls must list every skill name.

```bash
# Remove from Claude Code
echo "appintents apple-aso apple-docs-index backgroundtasks combine corehaptics eventkit guide-macos-spm-packaging guide-swiftui-performance-audit guide-swiftui-ui-patterns guide-swiftui-view-refactor healthkit hig ios-app-assets ios-app-icon ios-design-consultant ios-dev ios-liquid-glass mapkit photosui simulator-utils storekit swift-concurrency swift-testing swiftdata swiftui tipkit ui-percept-rapid-feedback usernotifications widgetkit xcuitest" \
  | xargs npx skills remove --agent claude-code -g -y

# Remove from Codex
echo "appintents apple-aso apple-docs-index backgroundtasks combine corehaptics eventkit guide-macos-spm-packaging guide-swiftui-performance-audit guide-swiftui-ui-patterns guide-swiftui-view-refactor healthkit hig ios-app-assets ios-app-icon ios-design-consultant ios-dev ios-liquid-glass mapkit photosui simulator-utils storekit swift-concurrency swift-testing swiftdata swiftui tipkit ui-percept-rapid-feedback usernotifications widgetkit xcuitest" \
  | xargs npx skills remove --agent codex -g -y
```

</details>

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

> Expert workflow/pattern guides that teach *how* to approach tasks, as opposed to the reference docs above which document *what APIs exist*.
> Originally from [Dimillian/Skills](https://github.com/Dimillian/Skills) by Thomas Ricouard. MIT License.

| Skill | Files | Description |
|-------|-------|-------------|
| **guide-swiftui-performance-audit** | 5 | Audit and improve SwiftUI runtime performance |
| **guide-swiftui-ui-patterns** | 27 | Best practices for building SwiftUI views and components |
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

## License

MIT

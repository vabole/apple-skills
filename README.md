# Apple Skills

Apple development skills for **Claude Code** and **Codex** — latest iOS 26+ APIs, SwiftUI, Liquid Glass, and more.

These are coding agent skills (reference docs + guidelines) that help AI assistants write production-grade iOS/macOS Swift code using current Apple APIs.

## What's Included

### Framework Reference Docs
| Skill | Description |
|-------|-------------|
| **swiftui** | SwiftUI views, modifiers, navigation, state management, charts (40+ reference files) |
| **swiftdata** | @Model, ModelContext, @Query, schema migrations |
| **healthkit** | HKHealthStore, HKQuantitySample, workouts, health data |
| **combine** | Publishers, subscribers, operators |
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
| **hig** | Apple Human Interface Guidelines (40+ files) |
| **ios-liquid-glass** | Liquid Glass API reference (iOS 26+) |
| **ios-design-consultant** | UX/design guidance for Liquid Glass apps |
| **ios-dev** | SwiftUI development patterns & aesthetics |

### Utilities
| Skill | Description |
|-------|-------------|
| **apple-docs-index** | Index of Apple developer documentation |
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

## Usage

### Claude Code Plugin
Add to your project's `.claude/plugins` or reference directly:

```bash
# Add as a Claude Code plugin
claude plugins add vabole/apple-skills
```

### Direct Reference
Clone and reference the skills directory in your Claude Code configuration:

```bash
git clone https://github.com/vabole/apple-skills.git
```

Each skill has a `SKILL.md` with metadata and instructions, plus reference `.md` files with API documentation.

## Structure

```
skills/
├── swiftui/           # 40+ SwiftUI reference files
├── hig/               # 40+ HIG reference files  
├── ios-liquid-glass/   # Liquid Glass API docs
├── healthkit/         # HealthKit API docs
├── swiftdata/         # SwiftData API docs
├── ...                # 21 skills total
└── xcuitest/          # XCUITest patterns & API
```

## License

MIT

---
name: ios-dev
user-invocable: true
description: "Start here for any iOS or SwiftUI task. Coordinates best-practice guides, correctness checks, and full Apple API references. Use before navigating to other Apple skills — for building, reviewing, refactoring, or debugging iOS apps."
---

# iOS Development

Start here. This skill coordinates the Apple skills collection — it tells you *which* skill to use and *when*, so you get opinionated guidance and full API references together.

## Operating Rules

- Do not bridge UIKit/AppKit when SwiftUI has a native solution — bridging adds state-sync bugs, breaks SwiftUI composition (animations, environment), and complicates lifecycle management
- Do not enforce specific architectures (MVVM, VIPER, MV, TCA, etc.) — encourage separating business logic from views without mandating how
- Liquid Glass is the default iOS 26+ design system — use system glass behaviors naturally, but add custom `GlassEffect` modifiers only when they serve the UI, not for decoration
- Present performance optimizations as suggestions backed by reasoning, not blanket requirements
- When you need exact API details, grep the framework reference skills — they contain full Apple documentation

## Task Workflows

### Review existing code

1. Read the code and identify which topics apply
2. Run the **Correctness Checklist** below — violations are bugs
3. Use the **Topic Router** to load the relevant guide for each topic
4. For API correctness, grep the matching framework reference skill

### Improve existing code

1. Run the correctness checklist first
2. For performance issues: use `guide-swiftui-performance-audit`
3. For view structure / long bodies: use `guide-swiftui-view-refactor`
4. For navigation, state, or pattern questions: use `guide-swiftui-ui-patterns`
5. For visual quality: use `ios-ui-craft`
6. For API details: grep the matching framework reference skill

### Build a new feature

1. Design data flow first — identify owned vs. injected state
2. For UI patterns and app wiring: use `guide-swiftui-ui-patterns`
3. For API details: grep the matching framework reference skill
4. Structure views for optimal diffing — extract subviews early
5. Run the correctness checklist before finishing
6. For visual polish: use `ios-ui-craft`

## Topic Router

The **Guide** column has opinionated, short pattern guides. The **API Reference** column has full Apple documentation as grepable Markdown — use `apple-docs-index` to find which framework has what.

| Topic | Guide | API Reference |
|-------|-------|---------------|
| State management | `guide-swiftui-ui-patterns` | `swiftui` (state.md, binding.md, observation.md, environment.md) |
| View composition | `guide-swiftui-view-refactor` | `swiftui` (view-protocol.md) |
| Performance | `guide-swiftui-performance-audit` | — |
| Navigation | `guide-swiftui-ui-patterns` | `swiftui` (navigationstack.md, navigationsplitview.md, navigationlink.md) |
| Sheets & modals | `guide-swiftui-ui-patterns` | `swiftui` (sheet.md, inspector.md, alert.md, confirmationdialog.md) |
| Lists & ForEach | `guide-swiftui-ui-patterns` | `swiftui` (list.md) |
| ScrollView | `guide-swiftui-ui-patterns` | `swiftui` (scrollview.md) |
| Forms & input | — | `swiftui` (form.md, textfield.md, picker.md, toggle.md, slider.md) |
| Charts | `guide-swiftui-charts` | `swiftui` (chart.md, charts-overview.md) |
| Animations | `guide-swiftui-animations` | `swiftui` (swiftui-overview.md) |
| Layout | `guide-swiftui-ui-patterns` | `swiftui` (geometryreader.md, grid.md, hstack.md, vstack.md, zstack.md, spacer.md) |
| TabView | `guide-swiftui-ui-patterns` | `swiftui` (tabview.md) |
| Liquid Glass | `ios-design-consultant` | `ios-liquid-glass` |
| Visual design | `ios-ui-craft` | `hig` |
| Accessibility | `guide-swiftui-ui-patterns` | `hig` |
| macOS apps | `guide-macos-spm-packaging` | `swiftui`, `uikit` |
| Data persistence | `guide-swiftdata` | `swiftdata` |
| Testing | `guide-swift-testing` | `swift-testing`, `xcuitest` |
| Concurrency | `guide-swift-concurrency` | `swift-concurrency` |
| In-app purchases | — | `storekit` |
| Maps | — | `mapkit` |
| Health data | — | `healthkit` |
| Notifications | — | `usernotifications` |
| App Intents / Siri | — | `appintents` |
| Widgets | — | `widgetkit` |
| App Store metadata | `apple-aso` | — |
| Finding docs | `apple-docs-index` | — |

## Correctness Checklist

These are hard rules — violations are always bugs:

- [ ] `@State` properties are `private`
- [ ] `@Binding` only where a child needs to mutate parent state
- [ ] Values passed in are never declared as `@State` — they silently ignore updates
- [ ] Use `@State` with `@Observable` classes — not `@StateObject` or `ObservableObject`
- [ ] Use `@Bindable` for injected observables that need bindings
- [ ] `ForEach` uses stable identity — never `.indices` on dynamic content
- [ ] Each `ForEach` element produces a constant number of views
- [ ] `.animation(_:value:)` always includes the `value:` parameter
- [ ] `@FocusState` properties are `private`
- [ ] `@Observable` classes are `@MainActor` — Swift 6 strict concurrency requires it
- [ ] Property wrappers (`@AppStorage`, `@SceneStorage`, `@Query`) inside `@Observable` classes are marked `@ObservationIgnored` — they conflict with the macro and cause compiler errors
- [ ] No business logic in `body` — use `.task`, `.onChange`, or methods
- [ ] No `AnyView` unless truly unavoidable — fix with better composition

## Related Skills

**Design trio:**
- `/ios-ui-craft` — Build visually striking interfaces (produces code)
- `/ios-design-consultant` — Design advice and rationale (no code)
- `/ios-liquid-glass` — Liquid Glass API reference

**Workflow guides:**
- `/guide-swiftui-ui-patterns` — Navigation, state, sheets, component patterns
- `/guide-swiftui-animations` — Implicit/explicit animation, transitions, keyframes
- `/guide-swiftui-charts` — Marks, axes, selection, styling, accessibility
- `/guide-swiftui-view-refactor` — View structure, extraction, MV patterns
- `/guide-swiftui-performance-audit` — Diagnose and fix performance issues
- `/guide-swift-testing` — Swift Testing patterns, async tests, common agent mistakes
- `/guide-swift-concurrency` — Concurrency patterns, actors, diagnostics, bug patterns
- `/guide-swiftdata` — SwiftData patterns, predicates, CloudKit constraints
- `/guide-macos-spm-packaging` — Build macOS apps with SwiftPM

**Utilities:**
- `/apple-docs-index` — Find the right Apple documentation
- `/simulator-utils` — Simulator screenshots and device management
- `/apple-aso` — App Store Optimization

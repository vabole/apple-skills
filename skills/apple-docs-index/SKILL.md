---
name: apple-docs-index
user-invocable: true
description: Index of Apple developer documentation for iOS, macOS, and related frameworks. Use when looking up what APIs exist in a framework, browsing available documentation, or deciding what docs to fetch. Covers SwiftUI, UIKit, XCTest, HealthKit, Combine, SwiftData, and more.
---

# Apple Documentation Index

This skill provides indexes of Apple framework documentation. Use these to:
- Browse available APIs in a framework
- Find the path to specific documentation
- Decide what detailed docs to download

## Available Indexes

| Framework | File | Size | Topics |
|-----------|------|------|--------|
| SwiftUI | `../swiftui/swiftui-overview.md` | 907KB | Views, modifiers, navigation, state |
| XCTest | `xctest-index.md` | 55KB | Testing, assertions, expectations |
| XCUIAutomation | `xcuiautomation-index.md` | 58KB | UI testing, elements, queries |
| UIKit | `../uikit/uikit-overview.md` | 1.8MB | Views, controllers, controls, scenes |
| HealthKit | `healthkit-index.md` | 312KB | Health data, workouts, records |
| Combine | `combine-index.md` | 153KB | Publishers, subscribers, operators |
| SwiftData | `swiftdata-index.md` | 86KB | Models, containers, queries |
| Observation | `observation-index.md` | 3KB | @Observable macro |

## How to Use

### 1. Browse an Index

```bash
# See what's in HealthKit
cat healthkit-index.md | head -100

# Search for specific topic
grep -i "workout" healthkit-index.md
grep -i "navigation" ../swiftui/swiftui-overview.md
```

### 2. Find Documentation Paths

Index files list all available documentation pages. Each entry shows the path:

```markdown
- [HKWorkout](/documentation/healthkit/hkworkout)
- [NavigationStack](/documentation/swiftui/navigationstack)
```

### 3. Download Detailed Docs

Once you find what you need, download the full documentation:

```bash
# From an index entry like "/documentation/healthkit/hkworkout"
pnpm fetch-doc -- /documentation/healthkit/hkworkout --output skills/healthkit/hkworkout.md

# Then grep as needed
grep -i "startDate" skills/healthkit/hkworkout.md
```

## Adding More Indexes

Download any framework index:

```bash
# Foundation (large)
pnpm fetch-doc -- /documentation/foundation --output skills/apple-docs-index/foundation-index.md

# UIKit (large)
pnpm fetch-doc -- /documentation/uikit --output skills/uikit/uikit-overview.md

# Core Data
pnpm fetch-doc -- /documentation/coredata --output skills/apple-docs-index/coredata-index.md

# Any framework
pnpm fetch-doc -- /documentation/{framework} --output skills/apple-docs-index/{framework}-index.md
```

## Direct Apple DocC Fetching

Use this repo's local tooling to fetch and render Apple's DocC JSON directly:

```bash
pnpm fetch-doc -- /documentation/swiftui/view --output skills/swiftui/view.md
```

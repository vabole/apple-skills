# Maintaining Apple Skills

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

**2026-04-09** — refreshed end to end with the local direct-fetch workflow against Apple's DocC JSON endpoints.

### Why Direct DocC JSON?

This repo no longer needs a hosted proxy to refresh docs. Apple already exposes the underlying DocC JSON on `developer.apple.com/tutorials/data`, so the local tooling fetches and renders that data directly.

`@nshipster/sosumi` and the `NSHipster/sosumi.ai` codebase are still useful as implementation references for Apple's payload shapes and rendering patterns, but they aren't required in the runtime or refresh path here.

## Doc Format

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

- `pnpm refresh-docs` — native Node execution of the TypeScript refresh script
- `pnpm fetch-doc` — native Node execution for one-off downloads
- `pnpm typecheck` — `tsgo` preview compiler as the main typecheck gate
- `pnpm lint` — Biome formatter + linter, configured to fail on warnings
- `pnpm test` — Vitest renderer smoke tests
- `pnpm check` — full repo gate

Biome also enforces line-count limits so the refresh tooling stays modular instead of regressing into one oversized script.

## Repo Structure

```
skills/                     # 31 skills (27 reference + 4 guides)
├── swiftui/                # SwiftUI reference docs
├── uikit/                  # UIKit framework index and core APIs
├── hig/                    # 41 HIG reference files
├── ios-liquid-glass/       # Liquid Glass API docs
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

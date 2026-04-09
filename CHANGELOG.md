# Changelog

This changelog highlights the most important user-facing updates in the generated Apple skills docs and the supporting refresh tooling.

## 2026-04-09

### Skills docs

- Refreshed the largest framework indexes and overviews, especially App Intents, SwiftUI, StoreKit, HealthKit, MapKit, Combine, SwiftData, WidgetKit, TipKit, and XCTest/XCUIAutomation.
- Brought the App Intents docs up to date, including major changes in [appintents-overview.md](skills/appintents/appintents-overview.md), [appintents-appintent.md](skills/appintents/appintents-appintent.md), and [appintents-appshortcut.md](skills/appintents/appintents-appshortcut.md).
- Refreshed the main SwiftUI reference surface, with the biggest updates in [swiftui-overview.md](skills/swiftui/swiftui-overview.md), [navigationstack.md](skills/swiftui/navigationstack.md), [navigationlink.md](skills/swiftui/navigationlink.md), [view-protocol.md](skills/swiftui/view-protocol.md), and the Charts docs.
- Updated StoreKit and related purchase flows in [storekit-overview.md](skills/storekit/storekit-overview.md), [transaction.md](skills/storekit/transaction.md), [product.md](skills/storekit/product.md), and subscription docs.
- Updated major design guidance in the Human Interface Guidelines, especially [layout.md](skills/hig/layout.md), [typography.md](skills/hig/typography.md), [color.md](skills/hig/color.md), [buttons.md](skills/hig/buttons.md), [materials.md](skills/hig/materials.md), and [app-icons.md](skills/hig/app-icons.md).
- Refreshed the Liquid Glass doc set, including [liquid-glass-overview.md](skills/ios-liquid-glass/liquid-glass-overview.md), [adopting-liquid-glass.md](skills/ios-liquid-glass/adopting-liquid-glass.md), and the Landmarks-based examples.
- Fixed HIG table rendering so Apple’s nested DocC tables now render as populated Markdown tables instead of blank rows.

### Tooling

- Replaced the sosumi-based refresh path with local tooling that fetches Apple DocC JSON directly from `developer.apple.com`.
- Switched the repo to `pnpm`, `tsgo` as the main typechecker, Biome with warnings treated as errors, and Vitest for renderer coverage.
- Dropped `tsx` and now run the refresh scripts with native Node TypeScript execution.

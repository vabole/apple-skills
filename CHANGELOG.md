# Changelog

## 2026-04-09

Refreshed all 179 skill docs from Apple’s DocC JSON directly (replaced sosumi).

### What changed in the docs

- **App Intents** — Apple reorganized the overview significantly: new "System experiences" and "Domains" sections, new `IntentURLRepresentation` and `AppShortcutsContent` APIs, reworked Siri + Apple Intelligence hierarchy
- **SwiftUI** — overview trimmed by ~1400 lines (Apple removed duplicate/deprecated entries), new Articles section added
- **StoreKit, HealthKit, Combine, MapKit, SwiftData indexes** — large reshuffles as Apple reorganized their reference trees
- **HIG** — tables now render correctly (typography sizes, accessibility contrast ratios, button styles, etc. were previously blank rows); layout and color pages gained substantial new content
- **Liquid Glass** — all pages updated with refined API surface
- **Rendering fixes across all docs** — platform availability no longer shows `undefined`, WWDC session links now have proper titles, link text uses real names instead of raw identifiers

### Tooling

- Fetch directly from `developer.apple.com` DocC JSON, drop sosumi dependency
- Native Node TypeScript execution (25.2+), drop `tsx`
- Add GitHub Actions CI

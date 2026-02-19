---
name: hig-docs
user-invocable: true
description: "API reference: Apple Human Interface Guidelines. Query for design patterns, UI components, accessibility, color, typography, layout, haptics."
context: fork
agent: Explore
---

# Human Interface Guidelines Reference

Comprehensive reference for designing interfaces that follow Apple's Human Interface Guidelines.

## Downloaded Reference Files

All key HIG documentation is available locally (grep-friendly):

### Getting Started

| File | Content | Size |
|------|---------|------|
| [hig-index.md](hig-index.md) | Full HIG table of contents | 11KB |
| [designing-for-ios.md](designing-for-ios.md) | iOS design principles | 5KB |

### Foundations

| File | Content | Size |
|------|---------|------|
| [app-icons.md](app-icons.md) | App icon design guidelines | 14KB |
| [color.md](color.md) | Color usage and system colors | 17KB |
| [typography.md](typography.md) | Fonts, text styles, Dynamic Type | 17KB |
| [layout.md](layout.md) | Layout principles, safe areas | 21KB |
| [materials.md](materials.md) | Materials, blur effects, vibrancy | 14KB |
| [motion.md](motion.md) | Animation principles | 9KB |
| [accessibility.md](accessibility.md) | Accessibility best practices | 19KB |
| [sf-symbols.md](sf-symbols.md) | SF Symbols usage | 21KB |

### Patterns

| File | Content | Size |
|------|---------|------|
| [onboarding.md](onboarding.md) | Onboarding flows | 6KB |
| [modality.md](modality.md) | Modal presentations | 7KB |
| [launching.md](launching.md) | App launch experience | 6KB |
| [feedback.md](feedback.md) | User feedback patterns | 5KB |
| [playing-haptics.md](playing-haptics.md) | Haptic feedback | 10KB |
| [searching.md](searching.md) | Search patterns | 7KB |
| [settings.md](settings.md) | Settings patterns | 7KB |

### Components - Navigation

| File | Content | Size |
|------|---------|------|
| [tab-bars.md](tab-bars.md) | Tab bar design | 11KB |
| [navigation-bars.md](navigation-bars.md) | Navigation bar patterns | 17KB |
| [toolbars.md](toolbars.md) | Toolbar design | 17KB |
| [sidebars.md](sidebars.md) | Sidebar patterns | 8KB |

### Components - Presentation

| File | Content | Size |
|------|---------|------|
| [sheets.md](sheets.md) | Sheet presentations | 11KB |
| [alerts.md](alerts.md) | Alert dialogs | 10KB |
| [action-sheets.md](action-sheets.md) | Action sheets | 4KB |
| [menus.md](menus.md) | Menu design | 14KB |

### Components - Controls

| File | Content | Size |
|------|---------|------|
| [buttons.md](buttons.md) | Button styles and usage | 17KB |
| [lists-and-tables.md](lists-and-tables.md) | List and table patterns | 9KB |
| [toggles.md](toggles.md) | Toggle/switch design | 9KB |
| [pickers.md](pickers.md) | Picker controls | 6KB |
| [sliders.md](sliders.md) | Slider controls | 6KB |
| [steppers.md](steppers.md) | Stepper controls | 2KB |
| [text-fields.md](text-fields.md) | Text input fields | 6KB |

### Searching the Docs

```bash
# Find color guidance
grep -i "semantic" color.md

# Find button styles
grep -i "bordered" buttons.md

# Find haptic patterns
grep -i "notification" playing-haptics.md

# Browse the full HIG index
grep -i "navigation" hig-index.md
```

## Fetching Additional Documentation

### The sosumi.ai Technique

Apple's developer.apple.com uses JavaScript rendering. Replace with `sosumi.ai` for LLM-friendly markdown:

```
# Original (doesn't work)
https://developer.apple.com/design/human-interface-guidelines/buttons

# LLM-friendly
https://sosumi.ai/design/human-interface-guidelines/buttons
```

### Downloading Docs via curl

```bash
curl -sL "https://sosumi.ai/design/human-interface-guidelines/[topic]" > [topic].md

# Examples:
curl -sL "https://sosumi.ai/design/human-interface-guidelines/progress-indicators" > progress-indicators.md
curl -sL "https://sosumi.ai/design/human-interface-guidelines/segmented-controls" > segmented-controls.md
```

### Common HIG Doc Paths

| Topic | URL Path |
|-------|----------|
| Full Index | `human-interface-guidelines` |
| iOS Design | `human-interface-guidelines/designing-for-ios` |
| iPadOS Design | `human-interface-guidelines/designing-for-ipados` |
| macOS Design | `human-interface-guidelines/designing-for-macos` |
| App Icons | `human-interface-guidelines/app-icons` |
| Color | `human-interface-guidelines/color` |
| Typography | `human-interface-guidelines/typography` |
| Layout | `human-interface-guidelines/layout` |
| Accessibility | `human-interface-guidelines/accessibility` |
| SF Symbols | `human-interface-guidelines/sf-symbols` |
| Buttons | `human-interface-guidelines/buttons` |
| Tab Bars | `human-interface-guidelines/tab-bars` |
| Navigation Bars | `human-interface-guidelines/navigation-bars` |
| Sheets | `human-interface-guidelines/sheets` |
| Alerts | `human-interface-guidelines/alerts` |

### More Components (Not Downloaded)

Download these as needed:

```bash
# Indicators
curl -sL "https://sosumi.ai/design/human-interface-guidelines/progress-indicators" > progress-indicators.md
curl -sL "https://sosumi.ai/design/human-interface-guidelines/activity-rings" > activity-rings.md

# Presentation
curl -sL "https://sosumi.ai/design/human-interface-guidelines/popovers" > popovers.md
curl -sL "https://sosumi.ai/design/human-interface-guidelines/scroll-views" > scroll-views.md

# Selection
curl -sL "https://sosumi.ai/design/human-interface-guidelines/segmented-controls" > segmented-controls.md

# System
curl -sL "https://sosumi.ai/design/human-interface-guidelines/status-bars" > status-bars.md
curl -sL "https://sosumi.ai/design/human-interface-guidelines/home-screen-quick-actions" > home-screen-quick-actions.md
```

## Quick Reference

### Button Styles (iOS)

- **Plain** - Text only, minimal visual weight
- **Gray** - Gray background, for secondary actions
- **Tinted** - Tinted background with accent color
- **Filled** - Solid background, for primary actions
- **Bordered** - Outlined with border
- **Bordered Prominent** - Filled background, high prominence

### Haptic Feedback Types

- **Selection** - Light tap for selection changes
- **Impact** - Light/medium/heavy/rigid/soft for collisions
- **Notification** - Success/warning/error for outcomes

### Safe Areas

- Always respect safe areas for content
- Extend backgrounds edge-to-edge
- Place interactive elements within safe areas

## Sources

### Apple Documentation
- [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [Design Resources](https://developer.apple.com/design/resources/)

### WWDC Sessions
- [Design for Liquid Glass - WWDC25](https://developer.apple.com/videos/play/wwdc2025/10156/)
- [What's new in UIKit - WWDC25](https://developer.apple.com/videos/play/wwdc2025/10144/)

### LLM-Friendly Apple Docs (sosumi.ai)

See [docs/apple-docs-for-llms.md](../../../docs/apple-docs-for-llms.md) for full documentation on this technique.

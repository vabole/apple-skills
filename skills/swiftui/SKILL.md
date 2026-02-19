---
name: swiftui-docs
user-invocable: true
description: "API reference: SwiftUI. Query for views, layouts, navigation, @State/@Binding/@Observable, view modifiers, NavigationStack, iOS 26+ features."
context: fork
agent: Explore
---

# SwiftUI Reference

This skill provides access to SwiftUI documentation via downloaded reference files and the sosumi.ai technique for fetching additional Apple docs.

## Downloaded Reference Files

The following Apple documentation pages are available locally (grep-friendly):

| File | Content |
|------|---------|
| [swiftui-overview.md](swiftui-overview.md) | Full SwiftUI framework index (907KB) |
| [view-protocol.md](view-protocol.md) | View protocol and all modifiers (59KB) |
| [state.md](state.md) | @State property wrapper |
| [binding.md](binding.md) | @Binding property wrapper |
| [environment.md](environment.md) | @Environment property wrapper |
| [observation.md](observation.md) | @Observable macro (iOS 17+) |
| [navigationstack.md](navigationstack.md) | NavigationStack (iOS 16+) |
| [navigationsplitview.md](navigationsplitview.md) | NavigationSplitView |
| [tabview.md](tabview.md) | TabView |
| [list.md](list.md) | List view |

## Fetching Additional Documentation

### The sosumi.ai Technique

Apple's developer.apple.com uses JavaScript rendering, making it inaccessible to WebFetch. Replace `developer.apple.com` with `sosumi.ai` to get LLM-friendly markdown:

```
# Original (doesn't work)
https://developer.apple.com/documentation/swiftui/text

# LLM-friendly
https://sosumi.ai/documentation/swiftui/text
```

### Downloading Docs via curl

To download any Apple documentation page:

```bash
curl -sL "https://sosumi.ai/documentation/swiftui/[topic]" > [topic].md

# Examples:
curl -sL "https://sosumi.ai/documentation/swiftui/text" > text.md
curl -sL "https://sosumi.ai/documentation/swiftui/button" > button.md
curl -sL "https://sosumi.ai/documentation/swiftui/sheet" > sheet.md
```

### Common SwiftUI Doc Paths

| Topic | URL Path |
|-------|----------|
| Text | `swiftui/text` |
| Button | `swiftui/button` |
| Image | `swiftui/image` |
| VStack | `swiftui/vstack` |
| HStack | `swiftui/hstack` |
| ZStack | `swiftui/zstack` |
| Form | `swiftui/form` |
| Sheet | `swiftui/sheet` |
| Alert | `swiftui/alert` |
| Picker | `swiftui/picker` |
| Toggle | `swiftui/toggle` |
| Slider | `swiftui/slider` |
| ProgressView | `swiftui/progressview` |
| AsyncImage | `swiftui/asyncimage` |
| GeometryReader | `swiftui/geometryreader` |
| ScrollView | `swiftui/scrollview` |
| LazyVStack | `swiftui/lazyvstack` |
| LazyHStack | `swiftui/lazyhstack` |
| NavigationLink | `swiftui/navigationlink` |
| ToolbarItem | `swiftui/toolbaritem` |

### Beyond SwiftUI

The same technique works for all Apple frameworks:

```bash
# HealthKit
curl -sL "https://sosumi.ai/documentation/healthkit"

# Core Data
curl -sL "https://sosumi.ai/documentation/coredata"

# UIKit
curl -sL "https://sosumi.ai/documentation/uikit"

# Foundation
curl -sL "https://sosumi.ai/documentation/foundation"

# Combine
curl -sL "https://sosumi.ai/documentation/combine"

# SwiftData
curl -sL "https://sosumi.ai/documentation/swiftdata"
```

## Usage Instructions

1. **Check downloaded files first** - Grep the local `.md` files for your topic
2. **Download if missing** - Use curl to fetch specific documentation
3. **Use WebFetch for quick lookups** - For single questions where a summary suffices

Example workflow:
```bash
# Looking for info on modifiers?
grep -i "padding" view-protocol.md

# Need full Text documentation?
curl -sL "https://sosumi.ai/documentation/swiftui/text" > text.md

# Quick lookup via WebFetch
WebFetch("https://sosumi.ai/documentation/swiftui/text", "How to style Text?")
```

## Sources

- [SwiftUI | Apple Developer Documentation](https://developer.apple.com/documentation/swiftui)
- [sosumi.ai](https://sosumi.ai/) - Community tool for LLM-friendly Apple docs

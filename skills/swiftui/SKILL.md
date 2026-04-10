---
name: swiftui
user-invocable: true
description: "API reference: SwiftUI. Query for views, layouts, navigation, @State/@Binding/@Observable, view modifiers, NavigationStack, iOS 26+ features."
context: fork
agent: Explore
---

# SwiftUI Reference

This skill provides access to SwiftUI documentation via downloaded reference files and the repo's direct Apple DocC fetcher.

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

To download any Apple documentation page:

```bash
pnpm fetch-doc -- /documentation/swiftui/[topic] --output skills/swiftui/[topic].md

# Examples:
pnpm fetch-doc -- /documentation/swiftui/text --output skills/swiftui/text.md
pnpm fetch-doc -- /documentation/swiftui/button --output skills/swiftui/button.md
pnpm fetch-doc -- /documentation/swiftui/sheet --output skills/swiftui/sheet.md
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

## Usage Instructions

1. **Check downloaded files first** - Grep the local `.md` files for your topic
2. **Download if missing** - Use `pnpm fetch-doc` to fetch specific documentation
3. **Use source URLs** - Pass `/documentation/...` paths or `https://developer.apple.com/...` URLs to the fetcher

Example workflow:
```bash
# Looking for info on modifiers?
grep -i "padding" view-protocol.md

# Need full Text documentation?
pnpm fetch-doc -- /documentation/swiftui/text --output skills/swiftui/text.md
```

## Sources

- [SwiftUI | Apple Developer Documentation](https://developer.apple.com/documentation/swiftui)

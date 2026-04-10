---
name: swiftui
user-invocable: true
description: "API reference: SwiftUI. Query for views, layouts, navigation, @State/@Binding/@Observable, view modifiers, NavigationStack, iOS 26+ features."
context: fork
agent: Explore
---

# SwiftUI Reference

This skill provides access to SwiftUI documentation via downloaded reference files.

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

## Missing Documentation

Search the local files first. If a topic is not available locally, use the relevant Apple Developer Documentation path with whatever web or documentation tools are available in the current environment. If direct Apple pages are hard to read in that environment, `sosumi.ai` can mirror the same documentation path as Markdown.

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
2. **Use the overview as an index** - Search `swiftui-overview.md` for documentation paths
3. **Look up missing pages only when needed** - Use Apple Developer Documentation paths from the overview

Example workflow:
```bash
# Looking for info on modifiers?
grep -i "padding" view-protocol.md

# Need full Text documentation? Check the local file first.
grep -i "font" text.md
```

## Sources

- [SwiftUI | Apple Developer Documentation](https://developer.apple.com/documentation/swiftui)

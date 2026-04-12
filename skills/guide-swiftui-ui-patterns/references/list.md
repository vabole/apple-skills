# List and Section

## Intent

Use `List` for feed-style content and settings-style rows where built-in row reuse, selection, and accessibility matter.

## Core patterns

- Prefer `List` for long, vertically scrolling content with repeated rows.
- Use `Section` headers to group related rows.
- Pair with `ScrollViewReader` when you need scroll-to-top or jump-to-id.
- Use `.listStyle(.plain)` for modern feed layouts.
- Use `.listStyle(.grouped)` for multi-section discovery/search pages where section grouping helps.
- Apply `.scrollContentBackground(.hidden)` + a custom background when you need a themed surface.
- Use `.listRowInsets(...)` and `.listRowSeparator(.hidden)` to tune row spacing and separators.
- Use `.environment(\\.defaultMinListRowHeight, ...)` to control dense list layouts.

## Example: feed list with scroll-to-top

```swift
@MainActor
struct TimelineListView: View {
  @Environment(\.selectedTabScrollToTop) private var selectedTabScrollToTop
  @State private var scrollToId: String?

  var body: some View {
    ScrollViewReader { proxy in
      List {
        ForEach(items) { item in
          TimelineRow(item: item)
            .id(item.id)
            .listRowInsets(.init(top: 12, leading: 16, bottom: 6, trailing: 16))
            .listRowSeparator(.hidden)
        }
      }
      .listStyle(.plain)
      .environment(\\.defaultMinListRowHeight, 1)
      .onChange(of: scrollToId) { _, newValue in
        if let newValue {
          proxy.scrollTo(newValue, anchor: .top)
          scrollToId = nil
        }
      }
      .onChange(of: selectedTabScrollToTop) { _, newValue in
        if newValue == 0 {
          withAnimation {
            proxy.scrollTo(ScrollToView.Constants.scrollToTop, anchor: .top)
          }
        }
      }
    }
  }
}
```

## Example: settings-style list

```swift
@MainActor
struct SettingsView: View {
  var body: some View {
    List {
      Section("General") {
        NavigationLink("Display") { DisplaySettingsView() }
        NavigationLink("Haptics") { HapticsSettingsView() }
      }
      Section("Account") {
        Button("Sign Out", role: .destructive) {}
      }
    }
    .listStyle(.insetGrouped)
  }
}
```

## Design choices to keep

- Use `List` for dynamic feeds, settings, and any UI where row semantics help.
- Use stable IDs for rows to keep animations and scroll positioning reliable.
- Prefer `.contentShape(Rectangle())` on rows that should be tappable end-to-end.
- Use `.refreshable` for pull-to-refresh feeds when the data source supports it.

## Empty States with ContentUnavailableView

Use `ContentUnavailableView` for empty list and search states. The built-in `.search` variant is auto-localized:

```swift
List {
    ForEach(searchResults) { item in
        ItemRow(item: item)
    }
}
.overlay {
    if searchResults.isEmpty, !searchText.isEmpty {
        ContentUnavailableView.search(text: searchText)
    }
}
```

For non-search empty states, use a custom instance:

```swift
ContentUnavailableView(
    "No Articles",
    systemImage: "doc.richtext.fill",
    description: Text("Articles you save will appear here.")
)
```

## Table

A multi-column data container that presents rows of `Identifiable` data with sortable, selectable columns. On compact size classes (iPhone, iPad Slide Over), columns after the first are automatically hidden.

### Basic Table

```swift
struct Person: Identifiable {
    let givenName: String
    let familyName: String
    let emailAddress: String
    let id = UUID()
    var fullName: String { givenName + " " + familyName }
}

struct PeopleTable: View {
    @State private var people: [Person] = [ /* ... */ ]

    var body: some View {
        Table(people) {
            TableColumn("Given Name", value: \.givenName)
            TableColumn("Family Name", value: \.familyName)
            TableColumn("E-Mail Address", value: \.emailAddress)
        }
    }
}
```

### Table with Selection

Bind to a single `ID` for single-selection, or a `Set<ID>` for multi-selection:

```swift
struct SelectableTable: View {
    @State private var people: [Person] = [ /* ... */ ]
    @State private var selectedPeople = Set<Person.ID>()

    var body: some View {
        Table(people, selection: $selectedPeople) {
            TableColumn("Given Name", value: \.givenName)
            TableColumn("Family Name", value: \.familyName)
            TableColumn("E-Mail Address", value: \.emailAddress)
        }
        Text("\(selectedPeople.count) people selected")
    }
}
```

### Sortable Table

Provide a binding to `[KeyPathComparator]` and re-sort the data in `.onChange(of:)`:

```swift
struct SortableTable: View {
    @State private var people: [Person] = [ /* ... */ ]
    @State private var sortOrder = [KeyPathComparator(\Person.givenName)]

    var body: some View {
        Table(people, sortOrder: $sortOrder) {
            TableColumn("Given Name", value: \.givenName)
            TableColumn("Family Name", value: \.familyName)
            TableColumn("E-Mail Address", value: \.emailAddress)
        }
        .onChange(of: sortOrder) { _, newOrder in
            people.sort(using: newOrder)
        }
    }
}
```

**Important:** The table does **not** sort data itself — you must re-sort the collection when `sortOrder` changes.

### Adaptive Table for Compact Size Classes

On iPhone or iPad in Slide Over, only the first column is shown. Customize it to display combined information:

```swift
struct AdaptiveTable: View {
    @Environment(\.horizontalSizeClass) private var horizontalSizeClass
    private var isCompact: Bool { horizontalSizeClass == .compact }

    @State private var people: [Person] = [ /* ... */ ]
    @State private var sortOrder = [KeyPathComparator(\Person.givenName)]

    var body: some View {
        Table(people, sortOrder: $sortOrder) {
            TableColumn("Given Name", value: \.givenName) { person in
                VStack(alignment: .leading) {
                    Text(isCompact ? person.fullName : person.givenName)
                    if isCompact {
                        Text(person.emailAddress)
                            .foregroundStyle(.secondary)
                    }
                }
            }
            TableColumn("Family Name", value: \.familyName)
            TableColumn("E-Mail Address", value: \.emailAddress)
        }
        .onChange(of: sortOrder) { _, newOrder in
            people.sort(using: newOrder)
        }
    }
}
```

### Table with Dynamic Columns

Use `TableColumnForEach` when the number of columns is not known at compile time:

```swift
@MainActor
@Observable
class AudioSampleTrack {
    let channels: [AudioChannel]
    var samples: [AudioSample]
}

struct ContentView: View {
    var track: AudioSampleTrack

    var body: some View {
        Table(track.samples) {
            TableColumn("Timestamp (ms)") { sample in
                Text(sample.timestamp, format: .number.scale(1000))
                    .monospacedDigit()
            }
            TableColumnForEach(track.channels) { channel in
                TableColumn(channel.name) { sample in
                    Text(sample.level(channel: channel.id),
                         format: .number.precision(.fractionLength(2))
                    )
                    .monospacedDigit()
                }
                .width(ideal: 70)
                .alignment(.numeric)
            }
        }
    }
}
```

### Table Styles

```swift
// Inset (no borders)
Table(people) { /* columns */ }
    .tableStyle(.inset)

// Hide column headers
Table(people) { /* columns */ }
    .tableColumnHeaders(.hidden)
```

### Platform Behavior

| Platform | Behavior |
|----------|----------|
| **iPadOS (regular)** | Full multi-column layout; headers and all columns visible |
| **iPadOS (compact)** | Only the first column shown; headers hidden |
| **iPhone (all sizes)** | Only the first column shown; headers hidden; list-like appearance |

Prefer handling the compact size class by showing combined info in the first column. This provides a seamless transition when the size class changes.

## Pitfalls

- Avoid heavy custom layouts inside a `List` row; use `ScrollView` + `LazyVStack` instead.
- Be careful mixing `List` and nested `ScrollView`; it can cause gesture conflicts.
- The table does **not** sort data itself — re-sort in `.onChange(of: sortOrder)`.

# SwiftUI State Management Reference

## Table of Contents

- [Property Wrapper Selection Guide](#property-wrapper-selection-guide)
- [@State](#state)
- [Property Wrappers Inside @Observable Classes](#property-wrappers-inside-observable-classes)
- [@Binding](#binding)
- [@FocusState](#focusstate)
- [@StateObject vs @ObservedObject (Legacy - Pre-iOS 17)](#stateobject-vs-observedobject-legacy---pre-ios-17)
- [Don't Pass Values as @State](#dont-pass-values-as-state)
- [@Bindable (iOS 17+)](#bindable-ios-17)
- [let vs var for Passed Values](#let-vs-var-for-passed-values)
- [Environment and Preferences](#environment-and-preferences)
- [Decision Flowchart](#decision-flowchart)
- [State Privacy Rules](#state-privacy-rules)
- [Avoid Nested ObservableObject](#avoid-nested-observableobject)
- [Key Principles](#key-principles)

## Property Wrapper Selection Guide

| Wrapper | Use When | Notes |
|---------|----------|-------|
| `@State` | Internal view state that triggers updates | Must be `private` |
| `@Binding` | Child view needs to modify parent's state | Don't use for read-only |
| `@Bindable` | iOS 17+: View receives `@Observable` object and needs bindings | For injected observables |
| `let` | Read-only value passed from parent | Simplest option |
| `var` | Read-only value that child observes via `.onChange()` | For reactive reads |


## @State

Always mark `@State` properties as `private`. Use for internal view state that triggers UI updates.

```swift
// Correct
@State private var isAnimating = false
@State private var selectedTab = 0
```

**Why Private?** Marking state as `private` makes it clear what's created by the view versus what's passed in. It also prevents accidentally passing initial values that will be ignored (see "Don't Pass Values as @State" below).

### @State with @Observable

Use `@State` with `@Observable` classes:

```swift
@Observable
@MainActor  // Always mark @Observable classes with @MainActor
final class DataModel {
    var name = "Some Name"
    var count = 0
}

struct MyView: View {
    @State private var model = DataModel()  // Use @State, not @StateObject

    var body: some View {
        VStack {
            TextField("Name", text: $model.name)
            Stepper("Count: \(model.count)", value: $model.count)
        }
    }
}
```

**Critical**: When a view *owns* an `@Observable` object, always use `@State` -- not `let`. Without `@State`, SwiftUI may recreate the instance when a parent view redraws, losing accumulated state. `@State` tells SwiftUI to preserve the instance across view redraws. Using `@State` also provides bindings directly (no need for `@Bindable`).

**Note**: You may want to mark `@Observable` classes with `@MainActor` to ensure thread safety with SwiftUI, unless your project or package uses Default Actor Isolation set to `MainActor`—in which case, the explicit attribute is redundant and can be omitted.

## Property Wrappers Inside @Observable Classes

**Critical**: The `@Observable` macro transforms stored properties to add observation tracking. Property wrappers (like `@AppStorage`, `@SceneStorage`, `@Query`) also transform properties with their own storage. These two transformations conflict, causing a compiler error.

**Always annotate property-wrapper properties with `@ObservationIgnored` inside `@Observable` classes.**

```swift
@Observable
@MainActor
final class SettingsModel {
    // WRONG - compiler error: property wrappers conflict with @Observable
    // @AppStorage("username") var username = ""

    // CORRECT - @ObservationIgnored prevents the conflict
    @ObservationIgnored @AppStorage("username") var username = ""
    @ObservationIgnored @AppStorage("isDarkMode") var isDarkMode = false

    // Regular stored properties work fine with @Observable
    var isLoading = false
}
```

This applies to **any** property wrapper used inside an `@Observable` class, including but not limited to:
- `@AppStorage`
- `@SceneStorage`
- `@Query` (SwiftData)

**Note**: Since `@ObservationIgnored` disables observation tracking for that property, SwiftUI won't detect changes through the Observation framework. However, property wrappers like `@AppStorage` already notify SwiftUI of changes through their own mechanisms (e.g., UserDefaults KVO), so views still update correctly.

**Never remove `@ObservationIgnored`** from property-wrapper properties in `@Observable` classes — doing so causes a compiler error.

## @Binding

Use only when child view needs to **modify** parent's state. If child only reads the value, use `let` instead.

```swift
// Parent
struct ParentView: View {
    @State private var isSelected = false

    var body: some View {
        ChildView(isSelected: $isSelected)
    }
}

// Child - will modify the value
struct ChildView: View {
    @Binding var isSelected: Bool

    var body: some View {
        Button("Toggle") {
            isSelected.toggle()
        }
    }
}
```

### When NOT to use @Binding

- **Don't use `@Binding` for read-only values.** If the child only displays the value and never modifies it, use `let` instead. `@Binding` adds unnecessary overhead and implies a write contract that doesn't exist.

## @FocusState

See `references/focus-patterns.md` for comprehensive focus management guidance including `@FocusState`, `@FocusedValue`, `.focusable()`, default focus, and common pitfalls.

Always mark `@FocusState` as `private`.

## Don't Pass Values as @State

**Critical**: Never declare passed values as `@State`. They only accept an initial value and ignore subsequent updates from the parent.

```swift
// WRONG - child ignores parent updates
struct ChildView: View {
    @State var item: Item  // Shows initial value forever!
    var body: some View { Text(item.name) }
}

// CORRECT - child receives updates
struct ChildView: View {
    let item: Item  // Or @Binding if child needs to modify
    var body: some View { Text(item.name) }
}
```

**Prevention**: Always mark `@State` as `private`. This prevents it from appearing in the generated initializer.

## @Bindable

Use when receiving an `@Observable` object from outside and needing bindings:

```swift
@Observable
final class UserModel {
    var name = ""
    var email = ""
}

struct ParentView: View {
    @State private var user = UserModel()

    var body: some View {
        EditUserView(user: user)
    }
}

struct EditUserView: View {
    @Bindable var user: UserModel  // Received from parent, needs bindings

    var body: some View {
        Form {
            TextField("Name", text: $user.name)
            TextField("Email", text: $user.email)
        }
    }
}
```

## let vs var for Passed Values

### Use `let` for read-only display

```swift
struct ProfileHeader: View {
    let username: String
    let avatarURL: URL

    var body: some View {
        HStack {
            AsyncImage(url: avatarURL)
            Text(username)
        }
    }
}
```

### Use `var` when reacting to changes with `.onChange()`

```swift
struct ReactiveView: View {
    var externalValue: Int  // Watch with .onChange()
    @State private var displayText = ""

    var body: some View {
        Text(displayText)
            .onChange(of: externalValue) { oldValue, newValue in
                displayText = "Changed from \(oldValue) to \(newValue)"
            }
    }
}
```

## Environment and Preferences

### @Environment

Access environment values provided by SwiftUI or parent views:

```swift
struct MyView: View {
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.dismiss) private var dismiss

    var body: some View {
        Button("Done") { dismiss() }
            .foregroundStyle(colorScheme == .dark ? .white : .black)
    }
}
```

### Custom Environment Values with @Entry

Use the `@Entry` macro (Xcode 16+, backward compatible to iOS 13) to define custom environment values without boilerplate:

```swift
extension EnvironmentValues {
    @Entry var accentTheme: Theme = .default
}

// Inject
ContentView()
    .environment(\.accentTheme, customTheme)

// Access
struct ThemedView: View {
    @Environment(\.accentTheme) private var theme
}
```

The `@Entry` macro replaces the manual `EnvironmentKey` conformance pattern. It also works with `TransactionValues`, `ContainerValues`, and `FocusedValues`.

### @Environment with @Observable

Share state through the environment:

```swift
@Observable
@MainActor
final class AppState {
    var isLoggedIn = false
}

// Inject
ContentView()
    .environment(AppState())

// Access
struct ChildView: View {
    @Environment(AppState.self) private var appState
}
```

## Decision Flowchart

```
Is this value owned by this view?
├─ YES: Is it a simple value type?
│       ├─ YES → @State private var
│       └─ NO (class) → @State private var (with @Observable, mark class @MainActor)
│
└─ NO (passed from parent):
    ├─ Does child need to MODIFY it?
    │   ├─ YES → @Binding var
    │   └─ NO: Does child need BINDINGS to its properties?
    │       ├─ YES (@Observable) → @Bindable var
    │       └─ NO: Does child react to changes?
    │           ├─ YES → var + .onChange()
    │           └─ NO → let
```

## State Privacy Rules

**All view-owned state should be `private`:**

```swift
// Correct - clear what's created vs passed
struct MyView: View {
    // Created by view - private
    @State private var isExpanded = false
    @State private var viewModel = ViewModel()
    @AppStorage("theme") private var theme = "light"
    @Environment(\.colorScheme) private var colorScheme
    
    // Passed from parent - not private
    let title: String
    @Binding var isSelected: Bool
    @Bindable var user: User
    
    var body: some View {
        // ...
    }
}
```

**Why**: This makes dependencies explicit and improves code completion for the generated initializer.

## Key Principles

1. **Use `@Observable` — not `ObservableObject`**
2. **Mark `@Observable` classes with `@MainActor`** (unless using default actor isolation)
3. Use `@State` with `@Observable` classes
4. Use `@Bindable` for injected `@Observable` objects that need bindings
5. **Always mark `@State` as `private`**
6. **Never declare passed values as `@State`**
7. `@Observable` fully supports nested observed objects
8. **Always add `@ObservationIgnored` to property wrappers** (`@AppStorage`, `@SceneStorage`, `@Query`) inside `@Observable` classes

# SwiftUI Focus Patterns

> Originally from [AvdLee/SwiftUI-Agent-Skill](https://github.com/AvdLee/SwiftUI-Agent-Skill) by Antoine van der Lee and Omar Elsayed. MIT License.

## @FocusState

Always mark `@FocusState` as `private`. Use `Bool` for a single field, an optional `Hashable` enum for multiple fields.

### Single field

```swift
@FocusState private var isFocused: Bool

TextField("Email", text: $email)
    .focused($isFocused)
```

### Multiple fields

```swift
enum Field: Hashable { case name, email, password }
@FocusState private var focusedField: Field?

TextField("Name", text: $name)
    .focused($focusedField, equals: .name)
TextField("Email", text: $email)
    .focused($focusedField, equals: .email)
```

Set `focusedField = .email` to move focus programmatically; set `nil` to dismiss the keyboard.

### Field chaining with `.onSubmit`

```swift
struct EditTagView: View {
  enum FocusField { case title, symbol, newTag }
  @FocusState private var focusedField: FocusField?

  var body: some View {
    Form {
      TextField("Title", text: $title)
        .focused($focusedField, equals: .title)
        .onSubmit { focusedField = .symbol }

      TextField("Symbol", text: $symbol)
        .focused($focusedField, equals: .symbol)
        .onSubmit { focusedField = .newTag }
    }
    .defaultFocus($focusedField, .title)
  }
}
```

### `focused(_:)` vs `focused(_:equals:)` with nested views

`.focused($bool)` reports `true` when the modified view *or any focusable descendant* has focus. `.focused($enum, equals:)` reports its value only when that specific view receives focus.

```swift
enum Focus: Hashable { case container, field }
@FocusState private var focus: Focus?

VStack {
    TextField("Name", text: $name)
        .focused($focus, equals: .field)
}
.focusable()
.focused($focus, equals: .container)
```

### `isFocused` environment value

Read-only environment value that returns `true` when the nearest focusable ancestor has focus. Useful for styling non-focusable child views.

```swift
struct HighlightWrapper: View {
    @Environment(\.isFocused) private var isFocused

    var body: some View {
        content
            .background(isFocused ? Color.accentColor.opacity(0.1) : .clear)
    }
}
```

## Making Views Focusable

### `.focusable(_:)`

Makes a non-text-input view participate in the focus system. Focused views can respond to keyboard events via `onKeyPress` and menu commands like Edit > Delete via `onDeleteCommand`.

```swift
struct SelectableCard: View {
    @FocusState private var isFocused: Bool

    var body: some View {
        CardContent()
            .focusable()
            .focused($isFocused)
            .border(isFocused ? Color.accentColor : .clear)
            .onDeleteCommand { deleteCard() }
    }
}
```

### `.focusable(_:interactions:)`

Controls which focus-driven interactions the view supports via `FocusInteractions`:

- `.activate` -- Button-like: only focusable when system-wide keyboard navigation is on
- `.edit` -- Captures keyboard/Digital Crown input
- `.automatic` -- Platform default (both activate and edit)

```swift
MyTapGestureView(...)
    .focusable(interactions: .activate)
```

## Focused Values for Commands and Menus

Focused values let parent views (App, Scene, Commands) read state from whichever view currently has focus. Use for enabling/disabling menu commands based on the focused document or selection.

### Declare with `@Entry`

```swift
extension FocusedValues {
    @Entry var selectedDocument: Binding<Document>?
}
```

### Publish from views

```swift
// View-scoped: available when this view (or descendant) has focus
.focusedValue(\.selectedDocument, $document)

// Scene-scoped: available when this scene has focus
.focusedSceneValue(\.selectedDocument, $document)
```

### Consume in commands

`@FocusedValue` reads the value; `@FocusedBinding` unwraps a `Binding` automatically.

```swift
@main
struct MyApp: App {
    @FocusedBinding(\.selectedDocument) var document

    var body: some Scene {
        WindowGroup {
            ContentView()
        }
        .commands {
            CommandGroup(after: .pasteboard) {
                Button("Duplicate") { document?.duplicate() }
                    .disabled(document == nil)
            }
        }
    }
}
```

## Default Focus

Prefer `.defaultFocus` over setting `@FocusState` in `.onAppear` for initial focus placement.

```swift
@FocusState private var focusedField: Field?

VStack {
    TextField("Name", text: $name)
        .focused($focusedField, equals: .name)
    TextField("Email", text: $email)
        .focused($focusedField, equals: .email)
}
.defaultFocus($focusedField, .email)
```

**Priority**: `.automatic` (default) applies on window appearance and programmatic focus changes. `.userInitiated` also applies during user-driven focus navigation.

## Focus Scope and Sections

### `.focusScope(_:)` (macOS/tvOS/watchOS)

Limits default focus preferences to a namespace. Use with `prefersDefaultFocus` and `resetFocus`.

### `.focusSection()` (macOS/tvOS)

Guides directional and sequential focus movement through a group of focusable descendants. Useful when focusable views are spatially separated and directional navigation would otherwise skip them.

```swift
HStack {
    VStack { Button("1") {}; Button("2") {}; Spacer() }
    Spacer()
    VStack { Spacer(); Button("A") {}; Button("B") {} }
        .focusSection()
}
```

### `resetFocus` environment action (macOS/tvOS/watchOS)

Re-evaluates default focus within a namespace.

```swift
@Namespace var scopeID
@Environment(\.resetFocus) private var resetFocus

Button("Reset") { resetFocus(in: scopeID) }
```

## Focus Effects

### `.focusEffectDisabled(_:)`

Suppresses the system focus ring (macOS) or hover effect. Use when providing custom focus visuals.

```swift
MyCustomCard()
    .focusable()
    .focusEffectDisabled()
    .overlay { customFocusRing }
```

## Search Focus

### `.searchFocused(_:)` / `.searchFocused(_:equals:)`

Bind focus state to the search field associated with the nearest `.searchable` modifier.

```swift
@FocusState private var isSearchFocused: Bool

NavigationStack {
    ContentView()
        .searchable(text: $query)
        .searchFocused($isSearchFocused)
}

// Programmatically focus the search bar
Button("Search") { isSearchFocused = true }
```

## Common Pitfalls

### Redundant `@FocusState` writes revoke focus

`.focusable()` + `.focused()` handles focus-on-click natively. Adding a tap gesture that *also* writes to `@FocusState` triggers a redundant state write, causing a second body evaluation that revokes focus.

```swift
// WRONG -- tap gesture redundantly sets focus
CardView()
    .focusable()
    .focused($isFocused)
    .onTapGesture { isFocused = true }  // Remove this line

// CORRECT -- let .focusable() + .focused() handle it
CardView()
    .focusable()
    .focused($isFocused)
```

### Ambiguous focus bindings

Binding the same enum case to multiple views is ambiguous. Always use distinct enum cases for each focusable view.

### `.onAppear` focus timing

Setting `@FocusState` in `.onAppear` may fail if the view tree hasn't settled. Prefer `.defaultFocus` for reliable initial focus. If you must use `.onAppear`, wrap in `DispatchQueue.main.async` as a last resort.

### Missing `.focusable()` for non-text views

`TextField` and `SecureField` are implicitly focusable. Custom views (stacks, shapes, images) are not. Forgetting `.focusable()` means `.focused()` bindings have no effect and key event handlers never fire.

## Design choices

- Keep focus state local to the view that owns the fields.
- Use focus changes to drive UX (validation messages, helper UI).
- Pair with `.scrollDismissesKeyboard(...)` when using ScrollView/Form.
- Don't store focus state in shared objects; it is view-local.

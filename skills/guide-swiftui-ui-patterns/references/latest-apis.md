# Deprecated API Replacements

> Never use these deprecated APIs — all replacements are available on iOS 26+.
> Originally from [twostraws/SwiftUI-Agent-Skill](https://github.com/twostraws/SwiftUI-Agent-Skill) by Paul Hudson. MIT License.

## Compact Replacements

- **`navigationTitle(_:)`** instead of `navigationBarTitle(_:)`
- **`toolbar { ToolbarItem(...) }`** instead of `navigationBarItems(...)`
- **`toolbarVisibility(.hidden, for: .navigationBar)`** instead of `navigationBarHidden(_:)`
- **`statusBarHidden(_:)`** instead of `statusBar(hidden:)`
- **`ignoresSafeArea(_:edges:)`** instead of `edgesIgnoringSafeArea(_:)`
- **`preferredColorScheme(_:)`** instead of `colorScheme(_:)`
- **`foregroundStyle(_:)`** instead of `foregroundColor(_:)`
- **`clipShape(.rect(cornerRadius:))`** instead of `cornerRadius()`
- **`textInputAutocapitalization(_:)`** instead of `autocapitalization(_:)` (`.never` replaces `.none`)
- **`animation(_:value:)`** instead of `animation(_:)` (always include the `value:` parameter)
- **`tint(_:)`** instead of `accentColor(_:)`
- **`autocorrectionDisabled(_:)`** instead of `disableAutocorrection(_:)`
- **`MagnifyGesture`** instead of `MagnificationGesture`
- **`RotateGesture`** instead of `RotationGesture`
- **`.coordinateSpace(.named("scroll"))`** instead of `.coordinateSpace(name: "scroll")`

## Presentation

Use `.confirmationDialog(_:isPresented:actions:message:)` instead of `actionSheet(...)`.
Use `.alert(_:isPresented:actions:message:)` instead of `alert(isPresented:content:)`.

```swift
.alert("Delete Item?", isPresented: $showAlert) {
    Button("Delete", role: .destructive) { deleteItem() }
    Button("Cancel", role: .cancel) { }
} message: {
    Text("This action cannot be undone.")
}
```

## Text Input

Use `onSubmit(of:_:)` and `focused(_:equals:)` instead of `TextField` `onEditingChanged`/`onCommit` callbacks.

```swift
@FocusState private var isFocused: Bool

TextField("Search", text: $query)
    .focused($isFocused)
    .onSubmit { performSearch() }
```

## Accessibility

Use dedicated modifiers — `.accessibilityLabel()`, `.accessibilityValue()`, `.accessibilityHint()`, `.accessibilityAddTraits()`, `.accessibilityHidden()` — instead of the generic `.accessibility(...)` variants.

## Environment Values

Use the `@Entry` macro instead of manual `EnvironmentKey` conformance.

```swift
extension EnvironmentValues {
    @Entry var myCustomValue: String = "Default value"
}
```

## Navigation

Use `NavigationStack` (or `NavigationSplitView`) instead of `NavigationView`. Value-based `NavigationLink(value:)` with `.navigationDestination(for:)` replaces destination-based links.

```swift
NavigationStack {
    List(items) { item in
        NavigationLink(value: item) { Text(item.name) }
    }
    .navigationDestination(for: Item.self) { DetailView(item: $0) }
}
```

## Clipboard

Prefer `PasteButton` for user-initiated paste UI — handles permissions automatically.

## State Management

Use `@Observable` instead of `ObservableObject`. Use `@State` instead of `@StateObject`. Use `@Bindable` instead of `@ObservedObject`. See `state-management.md` for full patterns.

## Events

Use `onChange(of:) { }` or `onChange(of:) { old, new in }` instead of `onChange(of:perform:)`.

- **No-parameter**: `.onChange(of: value) { doSomething() }`
- **Old and new values**: `.onChange(of: value) { old, new in ... }`
- **With initial trigger**: `.onChange(of: value, initial: true) { ... }`

## Sensory Feedback

Use `sensoryFeedback(_:trigger:)` instead of UIKit feedback generators.

```swift
Button("Favorite", systemImage: isFavorite ? "heart.fill" : "heart") {
    isFavorite.toggle()
}
.sensoryFeedback(.selection, trigger: isFavorite)
```

## Layout

Use `containerRelativeFrame()` or `visualEffect()` as alternatives to `GeometryReader` for sizing and position-based effects. Use `onGeometryChange(for:of:action:)` to react to geometry changes.

## Tabs

Use the `Tab` API instead of `tabItem(_:)`. When using `Tab(role:)`, all tabs must use `Tab` syntax.

```swift
TabView {
    Tab("Home", systemImage: "house") { HomeView() }
    Tab("Search", systemImage: "magnifyingglass") { SearchView() }
    Tab("Profile", systemImage: "person") { ProfileView() }
}
```

## Previews

Use `@Previewable` for dynamic properties in previews.

```swift
#Preview {
    @Previewable @State var isOn = false
    Toggle("Setting", isOn: $isOn)
}
```

## Styling

Use `Button` instead of `onTapGesture()` unless you need tap location or count.

## iOS 26+ APIs

For Liquid Glass APIs, see the `ios-liquid-glass` skill.

### Scroll Edge Effects

```swift
ScrollView { /* content */ }
    .scrollEdgeEffectStyle(.soft, for: .top)
```

### Background Extension

```swift
Image("hero")
    .backgroundExtensionEffect()
```

### Tab Bar

```swift
TabView { /* tabs */ }
    .tabBarMinimizeBehavior(.onScrollDown)
    .tabViewBottomAccessory { NowPlayingBar() }
```

Use `Tab(role: .search)` for a dedicated search tab that morphs into a search field.

### Toolbars

Use `ToolbarSpacer(.fixed)` to visually separate toolbar groups. Use `sharedBackgroundVisibility(.hidden)` to remove glass background from individual items. Use `badge(_:)` on toolbar item content.

### Search

Use `searchToolbarBehavior(.minimizable)` to opt into a minimized search button.

### Animations

Use `@Animatable` macro instead of manual `animatableData`. Use `@AnimatableIgnored` to exclude properties.

### Presentations

Use `navigationZoomTransition` to morph sheets out of their source view with `navigationTransitionSource` / `navigationTransitionDestination`.

### Controls

- `controlSize(.extraLarge)` for extra-large action buttons
- `.clipShape(.rect(cornerRadius: 12, style: .concentric))` for concentric corners
- Sliders support tick marks (`SliderTick`) and `.sliderNeutralValue()`

### Rich Text

`TextEditor` accepts `AttributedString` bindings for rich text editing.

### Web Content

`WebView` displays web content. Use `WebPage` observable model for richer interaction.

### Drag and Drop

Use `dragContainer` for multi-item drag operations with `DragConfiguration`.

## Quick Lookup Table

| Deprecated | Recommended |
|-----------|-------------|
| `navigationBarTitle(_:)` | `navigationTitle(_:)` |
| `navigationBarItems(...)` | `toolbar { ToolbarItem(...) }` |
| `navigationBarHidden(_:)` | `toolbarVisibility(.hidden, for: .navigationBar)` |
| `edgesIgnoringSafeArea(_:)` | `ignoresSafeArea(_:edges:)` |
| `foregroundColor(_:)` | `foregroundStyle(_:)` |
| `cornerRadius(_:)` | `clipShape(.rect(cornerRadius:))` |
| `actionSheet(...)` | `confirmationDialog(...)` |
| `NavigationView` | `NavigationStack` / `NavigationSplitView` |
| `accentColor(_:)` | `tint(_:)` |
| `onChange(of:perform:)` | `onChange(of:) { old, new in }` |
| `ObservableObject` | `@Observable` |
| `@StateObject` | `@State` (with `@Observable`) |
| `@ObservedObject` | `@Bindable` (with `@Observable`) |
| `UIImpactFeedbackGenerator` | `sensoryFeedback(_:trigger:)` |
| `MagnificationGesture` | `MagnifyGesture` |
| `RotationGesture` | `RotateGesture` |
| `tabItem(_:)` | `Tab` API |
| Manual `animatableData` | `@Animatable` macro |
| Manual `EnvironmentKey` | `@Entry` macro |

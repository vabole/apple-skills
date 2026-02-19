---
name: ios-liquid-glass-docs
user-invocable: true
description: "API reference: Liquid Glass (iOS 26+). Query for glass effects, navigation patterns, GlassEffect modifiers, design principles."
context: fork
agent: Explore
---

# iOS Liquid Glass Design

Create distinctive, Apple Design Award-worthy iOS applications using the Liquid Glass design system. This skill pushes beyond generic implementations toward memorable, polished interfaces that feel genuinely designed—not AI-generated.

## When to Use

- Building new iOS screens, views, or components
- Implementing navigation (tabs, toolbars, sheets)
- Designing with Liquid Glass materials
- Creating app icons with Icon Composer
- Any SwiftUI/UIKit work targeting iOS 26+

## Design Philosophy: Elevated, Not Average

Before writing code, commit to a **distinctive aesthetic direction**:

1. **Purpose**: What problem does this interface solve? Who uses it?
2. **Tone**: What feeling should it evoke? (calm, playful, premium, editorial, utilitarian, bold)
3. **Inspiration**: Which Apple apps set the bar? (Notes, Weather, Health, Fitness, Apple TV)
4. **Differentiation**: What makes this memorable? What's the "one thing" users will notice?
5. **Glass Philosophy**: Is glass framing content or competing with it?

### The Three Principles

| Principle | Description |
|-----------|-------------|
| **Hierarchy** | Controls float above content. Glass frames, never obscures. Content is king. |
| **Harmony** | Software design aligns with hardware. Concentric corners. Fluid gestures. |
| **Consistency** | Adapt fluidly across iPhone, iPad, Mac. Same identity, contextual expression. |

## Anti-Patterns: What to Avoid

These are hallmarks of generic AI-generated iOS design:

- **Boring solid backgrounds** with no depth or atmosphere
- **System fonts everywhere** without typographic intention
- **Cookie-cutter tab bars** with no personality or purpose
- **Purple/indigo gradients** on white—the quintessential AI slop
- **Flat, lifeless interactions** without haptics or animation
- **Glass on everything** instead of intentional placement
- **Ignoring the content layer** by applying glass where it doesn't belong
- **Generic card layouts** without context-specific design
- **Accessibility as afterthought** instead of built-in from day one

## Liquid Glass Core API

### Basic Glass Effect

```swift
import SwiftUI

// Simple glass application
Text("Action")
    .padding()
    .glassEffect() // .regular variant, .capsule shape

// With explicit parameters
Button("Confirm") { }
    .padding()
    .glassEffect(.regular, in: RoundedRectangle(cornerRadius: 12), isEnabled: true)
```

### Glass Variants

| Variant | Use Case |
|---------|----------|
| `.regular` | Toolbars, nav bars, tab bars, standard controls |
| `.clear` | Floating controls over media (photos, maps, video) |
| `.identity` | Conditional disable: `glassEffect(isActive ? .regular : .identity)` |

### Glass Modifiers

```swift
// Semantic tinting (for primary actions only)
.glassEffect(.regular.tint(.accentColor))

// Interactive behaviors (scaling, shimmer, touch illumination)
.glassEffect(.regular.interactive())

// Combined
.glassEffect(.regular.tint(.blue).interactive())
```

### Custom Shapes

```swift
// Standard shapes
.glassEffect(.regular, in: .capsule)
.glassEffect(.regular, in: .circle)
.glassEffect(.regular, in: RoundedRectangle(cornerRadius: 16))

// Container-concentric (matches device/container corners)
.glassEffect(.regular, in: .rect(cornerRadius: .containerConcentric))
```

## GlassEffectContainer & Morphing

### Container Setup

Glass cannot sample other glass. Use containers for multiple glass elements:

```swift
GlassEffectContainer(spacing: 30) {
    HStack(spacing: 20) {
        ForEach(actions) { action in
            Button(action.title, systemImage: action.icon) { }
                .frame(width: 44, height: 44)
                .glassEffect(.regular.interactive())
        }
    }
}
```

### Morphing Transitions

```swift
struct ExpandableActions: View {
    @State private var isExpanded = false
    @Namespace private var namespace

    var body: some View {
        GlassEffectContainer(spacing: 30) {
            VStack(spacing: 30) {
                if isExpanded {
                    ActionButton(icon: "rotate.right")
                        .glassEffectID("rotate", in: namespace)
                }

                HStack(spacing: 30) {
                    if isExpanded {
                        ActionButton(icon: "slider.horizontal.3")
                            .glassEffectID("adjust", in: namespace)
                    }

                    Button {
                        withAnimation(.bouncy) { isExpanded.toggle() }
                    } label: {
                        Image(systemName: isExpanded ? "xmark" : "plus")
                            .frame(width: 56, height: 56)
                    }
                    .glassEffect(.regular.tint(.accentColor).interactive())
                    .glassEffectID("toggle", in: namespace)

                    if isExpanded {
                        ActionButton(icon: "crop")
                            .glassEffectID("crop", in: namespace)
                    }
                }

                if isExpanded {
                    ActionButton(icon: "wand.and.stars")
                        .glassEffectID("enhance", in: namespace)
                }
            }
        }
    }
}
```

## Navigation Patterns

### Tab Bar (Floating)

```swift
TabView {
    Tab("Home", systemImage: "house") {
        HomeView()
    }

    Tab("Search", systemImage: "magnifyingglass") {
        SearchView()
    }

    Tab("Profile", systemImage: "person") {
        ProfileView()
    }
}
// Tab bar now floats, reacts to background, collapses on scroll
```

### Toolbar with Grouping

```swift
.toolbar {
    ToolbarItemGroup(placement: .topBarTrailing) {
        Button("Edit", systemImage: "pencil") { }
        Button("Share", systemImage: "square.and.arrow.up") { }
    }

    ToolbarSpacer(.flexible, placement: .topBarTrailing)

    ToolbarItem(placement: .topBarTrailing) {
        Button("Done", systemImage: "checkmark") { }
            .tint(.accentColor)
    }
}
```

### Sheets with Morphing

```swift
struct ContentView: View {
    @State private var showSettings = false
    @Namespace private var namespace

    var body: some View {
        NavigationStack {
            ContentView()
                .toolbar {
                    ToolbarItem(placement: .topBarTrailing) {
                        Button("Settings", systemImage: "gear") {
                            showSettings = true
                        }
                        .matchedTransitionSource(id: "settings", in: namespace)
                    }
                }
                .sheet(isPresented: $showSettings) {
                    SettingsView()
                        .navigationTransition(.zoom(sourceID: "settings", in: namespace))
                        .presentationDetents([.medium, .large])
                }
        }
    }
}
```

## Typography That Speaks

Don't default to system fonts everywhere. Create typographic hierarchy:

```swift
// Display fonts for headers
Text("Dashboard")
    .font(.largeTitle.bold())
    .foregroundStyle(.primary)

// Secondary information
Text("Last updated 5 min ago")
    .font(.subheadline)
    .foregroundStyle(.secondary)

// Consider custom fonts for brand identity
Text("Premium")
    .font(.custom("PlayfairDisplay-Bold", size: 32))
```

### Font Recommendations

| Use Case | Options |
|----------|---------|
| **Display** | SF Pro Display, New York, custom serif |
| **Body** | SF Pro Text (system), custom sans |
| **Technical** | SF Mono, custom monospace |
| **Editorial** | New York, custom serif with character |

## Color with Intention

### System Integration

```swift
// Semantic colors that adapt
.foregroundStyle(.primary)
.foregroundStyle(.secondary)
.background(.background)

// Accent with purpose
.tint(.accentColor)
```

### Dominant + Accent

Don't distribute color evenly. Choose:
- **One dominant** that defines the brand/mood
- **Sharp accents** for actions and highlights
- **Neutral base** for content readability

### Dark Mode First

Dark mode often produces more distinctive results. Design dark, then adapt to light.

## Animation Philosophy

### Bouncy is the New Default

```swift
withAnimation(.bouncy) {
    isExpanded.toggle()
}

// With parameters
withAnimation(.bouncy(duration: 0.5, extraBounce: 0.2)) {
    state = newState
}
```

### Key Animation Moments

| Moment | Treatment |
|--------|-----------|
| Button press | Scale to 0.95, spring back |
| State change | Morph, don't swap |
| List appear | Staggered fade-in |
| Sheet present | Zoom from source |
| Error | Shake with haptic |

### SF Symbols Draw Animations

```swift
Image(systemName: "checkmark.circle")
    .symbolEffect(.drawOn, value: isComplete)

Image(systemName: "heart.fill")
    .symbolEffect(.bounce, value: isFavorite)
```

## Haptics: The Invisible Polish

```swift
import UIKit

// Impact feedback
let generator = UIImpactFeedbackGenerator(style: .medium)
generator.impactOccurred()

// Selection feedback
let selection = UISelectionFeedbackGenerator()
selection.selectionChanged()

// Success/error
let notification = UINotificationFeedbackGenerator()
notification.notificationOccurred(.success)
```

### When to Use Haptics

- Button presses (light impact)
- Toggle changes (selection changed)
- Pull to refresh (light impact)
- Error states (error notification)
- Success confirmations (success notification)
- Slider thumb movement (selection changed)

## Accessibility: Built-In, Not Bolt-On

### Automatic Glass Adaptations

Glass automatically adapts to:
- **Reduce Transparency**: More frosting
- **Increase Contrast**: Stark borders
- **Reduce Motion**: Tones down animation

### Manual Checks

```swift
@Environment(\.accessibilityReduceTransparency) var reduceTransparency
@Environment(\.accessibilityReduceMotion) var reduceMotion

var animation: Animation? {
    reduceMotion ? nil : .bouncy
}
```

### Essentials

- Minimum 44x44pt touch targets
- Clear accessibility labels
- Dynamic Type support
- VoiceOver testing

## Quality Checklist

Before considering UI complete:

- [ ] Glass applied only to navigation layer (not content)
- [ ] Haptics on all meaningful interactions
- [ ] Spring/bouncy animations (not linear)
- [ ] SF Symbols (not emojis or random icons)
- [ ] Dark mode tested and polished
- [ ] Typography hierarchy clear and intentional
- [ ] Colors are purposeful, not default blue
- [ ] Morphing transitions where applicable
- [ ] Loading states animated
- [ ] Empty states designed
- [ ] Error states helpful and styled
- [ ] Accessibility settings respected

## Inspiration: Award-Winning Patterns

From 2025 Apple Design Award winners:

### Delight
- Surprising interactions that reward exploration
- Meaningful animations that enhance understanding
- Playful details creating emotional connection

### Innovation
- Novel use of Apple technologies
- Thoughtfully crafted yet accessible UI
- Real-time features that feel magical

### Inclusivity
- VoiceOver support from day one
- Dynamic Type throughout
- Multiple input methods

### Visuals
- Rich, detailed environments
- Consistent visual language
- Intentional depth and color

## Reference

For official Apple documentation links, WWDC session IDs, and API quick reference tables, see [reference.md](reference.md).

## The Mandate

Remember: The goal is an app worthy of an Apple Design Award—an app that feels genuinely designed, not generated. Every interface should have:

1. **A point of view** - A clear aesthetic direction
2. **Intentional details** - Nothing accidental
3. **Emotional resonance** - Users feel something
4. **Technical excellence** - Smooth, performant, accessible

Don't settle for "working." Push for **memorable**.

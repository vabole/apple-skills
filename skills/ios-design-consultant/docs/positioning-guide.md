# Positioning and Layout Guide (iOS 26+ / Liquid Glass Era)

> Specific guidance on where elements should go in Liquid Glass interfaces.

## The Layers Model

In Liquid Glass, think in layers:

```
┌─────────────────────────────────────┐
│         Glass Control Layer          │ ← Navigation, toolbars, tab bar
├─────────────────────────────────────┤
│                                     │
│          Content Layer              │ ← Your app's content
│                                     │
│                                     │
└─────────────────────────────────────┘
```

**Glass control layer** floats above content. Content shows through.

## Tab Bar

### Position
- **Location**: Bottom of screen (iOS)
- **Behavior**: Floating, collapses during scroll

### iOS 26 Tab Bar Behaviors
- Shrinks when user scrolls down (more content visible)
- Expands when user scrolls up or stops
- Reacts to background content (light/dark adaptation)
- Morphs between states with animation

### When to Use Tab Bar
| Use | Don't Use |
|-----|-----------|
| 3-5 main app sections | Single-purpose apps |
| Persistent navigation | Temporary modes |
| Frequently accessed areas | Deep hierarchies |
| Top-level destinations | Settings/preferences (usually) |

### Tab Bar Design
- Use SF Symbols for icons
- Short, clear labels
- Current tab highlighted with accent
- Glass effect applied automatically

## Toolbar

### Position
- **Location**: Top of screen (trailing side typically)
- **Grouping**: Related actions grouped together

### Toolbar Placement Patterns
```
┌─────────────────────────────────────┐
│ ← Back    Title        Edit  Share  │
│                              Done ✓ │
└─────────────────────────────────────┘
```

### Toolbar Guidelines
- **Leading side**: Navigation (back, close)
- **Center**: Title or segmented control
- **Trailing side**: Actions
- Use `ToolbarItemGroup` for related actions
- Use `ToolbarSpacer(.flexible)` for spacing
- Primary action (Done) often gets tint

### Toolbar Grouping
```swift
.toolbar {
    ToolbarItemGroup(placement: .topBarTrailing) {
        Button("Edit", systemImage: "pencil") { }
        Button("Share", systemImage: "square.and.arrow.up") { }
    }
    ToolbarSpacer(.flexible, placement: .topBarTrailing)
    ToolbarItem(placement: .topBarTrailing) {
        Button("Done") { }.tint(.accentColor)
    }
}
```

## Sheets

### When to Use Sheets
- Secondary flows
- Editing modes
- Settings and preferences
- Detail views
- Quick tasks

### Sheet Positioning
| Detent | Use Case |
|--------|----------|
| `.medium` | Quick actions, simple forms |
| `.large` | Complex content, long forms |
| `.fraction(0.3)` | Minimal UI, pickers |

### Sheet Design Principles
- Consider morphing transition from source button
- Use `.presentationDetents` for appropriate sizes
- Content should work at each detent
- Hide scroll background for glass effect: `.scrollContentBackground(.hidden)`

### Morphing Sheets
```swift
Button("Settings", systemImage: "gear") { }
    .matchedTransitionSource(id: "settings", in: namespace)

.sheet(isPresented: $show) {
    SettingsView()
        .navigationTransition(.zoom(sourceID: "settings", in: namespace))
}
```

## Navigation Patterns

### Full-Screen vs Sheet

| Full-Screen | Sheet |
|-------------|-------|
| Primary flows | Secondary tasks |
| New contexts | Same context, focused task |
| Complex hierarchies | Simple hierarchies |
| Immersive content | Quick interactions |

### Stack Navigation
- Use `NavigationStack` for hierarchical content
- Push for drill-down
- Pop to return
- Toolbar adapts to context

## Control Placement

### Primary Actions
- **Position**: Bottom right (thumb-friendly) or top trailing
- **Style**: Tinted glass
- **Examples**: Done, Save, Send, Confirm

### Secondary Actions
- **Position**: Top trailing (before primary) or bottom left
- **Style**: Standard glass
- **Examples**: Edit, Share, More

### Destructive Actions
- **Position**: Away from primary actions
- **Style**: Red tint, often in action sheet
- **Confirm**: Always confirm destructive actions

### Floating Actions
Use for:
- Camera controls over media
- Map controls over maps
- Media playback controls

Position based on content, typically bottom or side.

## Content Layer Decisions

### Cards and Containers
- Cards live in content layer, not glass layer
- Use standard materials for content grouping
- Don't apply glass effect to content cards

### Lists
- Full-width in content area
- Glass appears above when scrolling under toolbar
- Separator lines optional (consider spacing instead)

### Grids
- Extend to safe area edges
- Content shows beneath glass controls
- Consider scroll edge effects

## Reading Order Positioning

### Importance Hierarchy
1. **Top-left (leading)**: Most important—title, primary navigation
2. **Top-right (trailing)**: Primary actions—done, edit
3. **Center**: Main content, focal point
4. **Bottom**: Tab bar, secondary controls, floating actions

### Scanning Pattern
Users scan:
1. Top to bottom
2. Leading to trailing (varies by language)
3. Then details

Position critical elements where eyes naturally land.

## Spacing and Grouping

### Control Spacing
- Group related controls together
- Separate unrelated controls with space
- Minimum 44pt touch targets (iOS)
- Logical sections with clear separation

### Margin Standards
| Element | Horizontal | Notes |
|---------|------------|-------|
| Screen edge | 16pt | Safe area respected |
| Card content | 16pt | Within containers |
| List items | 16pt | Leading/trailing |
| Button content | 12-16pt | Depends on style |

## Specific Decisions

### "Where does this button go?"

Ask:
1. Is it a primary action? → Top trailing or bottom
2. Is it contextual to content? → Near that content
3. Is it navigation? → Leading side
4. Is it destructive? → Hidden behind ··· or action sheet

### "Sheet or full screen?"

Ask:
1. Is this a side task? → Sheet
2. Does it need full attention? → Full screen
3. Is there deep navigation? → Full screen
4. Quick edit and dismiss? → Sheet

### "Glass or no glass?"

Ask:
1. Is it a control/navigation? → Glass
2. Is it content? → No glass
3. Does it float over other content? → Glass (clear variant)
4. Is it a content container? → Standard material or no effect

### "Where does the status indicator go?"

Ask:
1. Is it for the whole screen? → Top, near title
2. Is it for an item? → Near/in that item
3. Is it persistent? → Tab bar badge or toolbar
4. Is it temporary? → Toast or banner

## Anti-Patterns

- Putting primary actions far from thumb reach
- Mixing glass controls into content layer
- Crowding toolbar with too many actions
- Using sheets for primary flows
- Forgetting to test with different detents
- Ignoring safe areas
- Placing destructive actions near confirm

---

> **Decision principle**: When unsure, ask "What would Apple do?" Check native apps (Notes, Photos, Health) for positioning patterns.

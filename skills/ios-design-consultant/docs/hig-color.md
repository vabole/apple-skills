# HIG Color Principles (iOS 26+ / Liquid Glass Era)

> This document covers color usage adapted for the Liquid Glass design system.

## The Liquid Glass Color Philosophy

In the Liquid Glass era, color strategy fundamentally shifts:

**Old approach**: Color everywhere to express brand and hierarchy
**New approach**: Color sparingly, with intention, primarily in the content layer

## Color in Liquid Glass Elements

### The Rule: Sparingly
Limit color in Liquid Glass to reduce visual noise:
- Most glass elements should be neutral/monochromatic
- Symbols and text adapt to underlying content (light/dark)
- Reserve color for elements requiring emphasis

### When to Add Color to Glass
Apply tint only for:
- **Primary actions**: Done button, main CTA
- **Status indicators**: Notifications, alerts
- **Emphasis**: Drawing attention to key controls

```swift
// Tinted glass for primary action
.glassEffect(.regular.tint(.accentColor))
```

### Monochromatic Default
Standard glass controls use monochromatic symbols/text:
- Darker when underlying content is light
- Lighter when underlying content is dark
- System handles this automatically

## Brand Color Expression

### Content Layer, Not Glass
If your app feels visually muted or lacks brand emphasis:

**Don't**: Add brand colors throughout Liquid Glass
**Do**: Adjust the color palette in your content layer

Examples:
- Colorful headers in scrollable content
- Brand-colored backgrounds beneath glass
- Accent colors in content cards
- Distinctive imagery and illustrations

This approach:
- Maintains glass elegance
- Preserves content focus
- Still expresses brand personality

## Semantic Colors

### System Colors
Use semantic colors that adapt automatically:
```swift
.foregroundStyle(.primary)    // Main content
.foregroundStyle(.secondary)  // Supporting content
.foregroundStyle(.tertiary)   // Subtle content
.background(.background)      // Adaptive background
```

### Accent Color
```swift
.tint(.accentColor)  // Primary interactive elements
```

The accent color should be used:
- For primary buttons
- For selected states
- For actionable elements
- Sparingly—not everywhere

## Dominant + Accent Strategy

Don't distribute color evenly. Instead:

### 1. One Dominant Color
- Defines the brand/mood
- Could be in content backgrounds
- Sets the overall tone

### 2. Sharp Accents
- For actions and highlights
- Draw attention to interactive elements
- Used sparingly for maximum impact

### 3. Neutral Base
- For content readability
- System grays and backgrounds
- Allows colorful elements to stand out

## Dark Mode First

### Why Design Dark First
In the Liquid Glass era, dark mode often produces more distinctive results:
- Glass effects show better contrast
- Specular highlights more visible
- More premium, modern feel
- Easier to adapt to light than vice versa

### Design Flow
1. Design in dark mode
2. Ensure it looks premium and distinctive
3. Adapt to light mode
4. Verify both work well

## Color with Glass Backgrounds

### Content Showing Through Glass
Remember that glass is translucent:
- Content colors refract through glass
- Background colors influence glass appearance
- Dark content = lighter glass text
- Light content = darker glass text

### Design Considerations
- Test how your content colors look through glass
- Avoid colors that clash with glass reflections
- Consider how wallpaper colors affect glass

## Vibrant Colors on Materials

When placing content on standard materials (blur, vibrancy):
- Use system-defined vibrant colors
- These automatically adjust for context
- Never worry about contrast issues
- Don't manually adjust colors for materials

## Color Accessibility

### Automatic Adaptations
Liquid Glass adapts to accessibility settings:
- **Increase Contrast**: Stronger color differentiation
- **Reduce Transparency**: More solid colors
- Color choices should work across these modes

### Testing Requirements
- Test with Increase Contrast enabled
- Verify colors remain distinguishable
- Ensure sufficient contrast ratios
- Don't rely solely on color for meaning

## Color Anti-Patterns

| Don't | Why |
|-------|-----|
| Color throughout glass | Reduces elegance, adds noise |
| Purple/indigo gradients on white | Generic "AI-generated" look |
| Even color distribution | No hierarchy or focus |
| Default blue everywhere | Lacks personality |
| Brand color on every control | Overwhelming, loses impact |
| Ignoring dark mode | Missing the more distinctive variant |

## Color Decision Framework

When choosing where to apply color:

1. **Is it a control or content?**
   - Control → Minimal color (glass defaults)
   - Content → Can express brand

2. **Does it need emphasis?**
   - Yes → Consider accent tint
   - No → Keep neutral

3. **Is it a primary action?**
   - Yes → Tinted glass appropriate
   - No → Standard glass

4. **Will this color scale?**
   - Test with light/dark mode
   - Test with accessibility settings
   - Ensure it works in all contexts

---

> **Legacy Note**: Pre-Liquid Glass color guidelines emphasized more liberal color use. For iOS 26+, restraint is key—let the content layer carry brand expression.

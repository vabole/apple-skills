# HIG Materials (iOS 26+ / Liquid Glass Era)

> This document covers material usage in the Liquid Glass design system.

## Two Types of Materials

Apple platforms feature two distinct material types:

### 1. Liquid Glass
A dynamic material that **unifies design across Apple platforms**:
- Presents controls and navigation
- Doesn't obscure underlying content
- Consistent across iOS, iPadOS, macOS, watchOS, tvOS, visionOS

### 2. Standard Materials
Help with **visual differentiation within the content layer**:
- Blur, vibrancy, and blending modes
- Convey structure beneath Liquid Glass
- Used for content grouping, not controls

## Liquid Glass Properties

### Visual Characteristics
- **Translucent**: Color informed by surrounding content
- **Adaptive**: Intelligently adapts between light and dark
- **Real-time rendered**: Specular highlights and refractions
- **Dynamic**: Reacts to movement for lively experience

### Adaptive Behavior
For smaller elements (toolbars, tab bars):
- System adapts glass between light/dark based on underlying content
- Symbols and text follow monochromatic scheme
- Darker when content beneath is light; lighter when dark

For larger elements (sidebars):
- More opaque to preserve legibility
- Accommodates richer content on the surface

## When to Use Each Material

### Use Liquid Glass For:
- Tab bars
- Toolbars
- Navigation bars
- Floating controls
- Buttons requiring emphasis
- System-level UI elements

### Use Standard Materials For:
- Content layer differentiation
- Background grouping within content
- Cards and containers (in content layer)
- Visual separation that isn't a control

## Glass Variants

| Variant | Use Case |
|---------|----------|
| `.regular` | Standard controls: toolbars, nav bars, tab bars |
| `.clear` | Floating controls over media (photos, maps, video) |
| `.identity` | Conditional disable: `glassEffect(isActive ? .regular : .identity)` |

## Color in Liquid Glass

### Core Principle: Use Color Sparingly

**Why**: To reduce visual noise and maintain the elegant glass aesthetic.

**Guidelines**:
- Limit color applied to the material itself
- Limit color on symbols/text on the material
- Reserve color for elements that truly need emphasis:
  - Status indicators
  - Key actions (e.g., Done button)

### Tinted Glass
The system applies tint color to material backing for prominent buttons:
- Done buttons
- Primary actions
- Confirmations

This draws attention and elevates visual prominence.

### Brand Expression
**Don't**: Add color throughout Liquid Glass to express brand
**Do**: Adjust color palette in your content layer instead
- Add colorful headers to scrollable content
- Use brand colors in content, not controls
- Let app personality show through content layer

## Contrast and Legibility

### Material Thickness Trade-offs

| Thicker Materials | Thinner Materials |
|-------------------|-------------------|
| More opaque | More translucent |
| Better contrast for text | Helps retain context |
| Good for fine features | Shows background reminder |
| Sidebars, text-heavy controls | Floating overlays |

### Ensuring Legibility
- Use system-defined vibrant colors on top of materials
- Vibrant colors automatically adjust for different contexts
- Avoid colors that seem too dark, bright, saturated, or low contrast
- Test both light and dark appearances

### Poor Contrast Example
`systemGray3` on material = poor contrast. Use vibrant alternatives.

## Vibrancy and Blending

### When to Use Standard Effects
Use blur, vibrancy, and blending modes to:
- Convey structure in content beneath Liquid Glass
- Create visual layers within content area
- Separate content sections

### Selection Criteria
**Choose based on semantic meaning**, not apparent color.

Why? System settings can change material appearance and behavior. Match the material/vibrancy style to your specific use case.

## Glass Interactions

### Interactive Modifier
```swift
.glassEffect(.regular.interactive())
```

Provides:
- Press scaling
- Touch illumination (shimmer)
- Responsive feel

Use for buttons and tappable glass elements.

## Accessibility Considerations

Glass automatically adapts to:
- **Reduce Transparency**: More frosting applied
- **Increase Contrast**: Starker borders
- **Reduce Motion**: Toned down animations

You don't need to handle these manually for system glass effects.

## Anti-Patterns

- Applying glass to content layer (glass is for controls)
- Using glass on everything (reduces its impact)
- Adding heavy brand colors to glass (use content layer)
- Ignoring how content appears through glass
- Choosing materials by visual appearance rather than semantic meaning

---

> **Legacy Note**: Pre-Liquid Glass materials (NSVisualEffectView styles) remain available but Liquid Glass should be preferred for controls in iOS 26+.

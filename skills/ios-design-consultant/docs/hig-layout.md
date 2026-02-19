# HIG Layout Principles (iOS 26+ / Liquid Glass Era)

> This document contains Apple Human Interface Guidelines layout principles adapted for the Liquid Glass design system.

## Visual Hierarchy

### Controls vs Content
In Liquid Glass, the fundamental principle is **controls float above content**:
- Controls (tab bars, toolbars, navigation bars) use Liquid Glass material
- Content lives in the layer beneath, appearing through the translucent glass
- Glass frames content—it should never obscure or compete with it

**Key rule**: Differentiate controls from content using Liquid Glass material, not backgrounds. Use scroll edge effects for transitions between content and control areas instead of solid backgrounds.

## Element Positioning

### Reading Order
People scan in reading order (top-to-bottom, leading-to-trailing side). Place items accordingly:
- **Most important items**: Near top and leading side
- **Secondary actions**: Lower or trailing positions
- **Destructive actions**: Away from primary actions, often at bottom

Note: Reading order varies by language—design for right-to-left when needed.

### Importance Through Position
| Position | Typical Content |
|----------|-----------------|
| Top-leading | Primary navigation, title |
| Top-trailing | Actions (edit, share, done) |
| Center | Primary content |
| Bottom | Tab bar, secondary controls |
| Floating | Contextual actions |

## Alignment and Grouping

### Alignment Principles
- Align components with one another for easier scanning
- Alignment communicates organization and hierarchy
- Use indentation to show information hierarchy
- Consistent alignment makes apps feel "neat and organized"

### Grouping Methods
Group related items using:
- **Negative space**: Breathing room between groups
- **Background shapes**: Cards, containers
- **Materials**: Glass for controls, standard for content groupings
- **Separator lines**: Use sparingly

**Important**: Ensure content and controls remain clearly distinct even when grouped.

## Progressive Disclosure

When you can't display all items at once:
- Use disclosure controls (chevrons, expandable sections)
- Show partial items to hint at scrollable content
- Let users discover hidden content through interaction
- Don't overwhelm—reveal complexity progressively

## Safe Areas and Layout Guides

### Safe Areas
Safe areas define regions not covered by:
- Toolbars and tab bars
- Dynamic Island (iPhone)
- Camera housing (Mac)
- System controls

**Always respect safe areas**. Apps that don't accommodate display features feel out of place.

### Key Safe Area Behaviors
- Safe areas help reposition content when bar sizes change
- Use `SafeAreaRegions` and positioning relative to safe area
- Content should extend to edges while controls stay in safe areas

### Background Extension
When content doesn't span the full window:
- Use `backgroundExtensionEffect()` for SwiftUI
- Use `UIBackgroundExtensionView` for UIKit
- This provides appearance of content behind the control layer

## Touch Targets and Spacing

### Minimum Touch Targets
| Platform | Minimum Size |
|----------|--------------|
| iOS/iPadOS | 44 x 44 points |
| visionOS | 60 points apart (center to center) |

### Spacing Around Controls
- Add enough space around controls for easy use
- Group controls in logical sections
- **Too close**: Hard to tell apart, confusing
- **Too crowded**: Difficult to understand what controls do

### Pointer Hit Regions (iPadOS)
- Add ~12 points padding around elements with bezels
- Add ~24 points padding around elements without bezels
- Create contiguous hit regions for adjacent buttons in bars

## Margins and Padding Standards

### Standard Margins
| Context | Horizontal | Vertical |
|---------|------------|----------|
| Desktop widgets | 16pt | Based on content |
| Mobile widgets | 16pt | 11pt (tight) |
| Live Activities | 14pt standard | Context-dependent |

### General Principles
- Use standard margins for comfortable legibility
- Avoid crowding edges—creates cluttered appearance
- Tighter margins only for specific content groupings
- Consistent padding throughout the app

## Content Extension

### Fill the Screen
- Backgrounds and full-screen artwork extend to display edges
- Scrollable layouts continue to bottom and sides
- Controls and navigation appear **on top of content**, not same plane

### Liquid Glass Integration
Because controls float on glass above content:
- Layout must account for transparent overlays
- Content should look good when viewed through glass
- Consider how colors/images refract through the material

## Anti-Patterns to Avoid

- Placing controls on the same visual plane as content
- Ignoring safe areas (looks out of place)
- Insufficient touch targets (frustrating)
- Crowding controls together without logical grouping
- Using solid backgrounds where glass should provide hierarchy
- Forgetting that glass allows content to show through

---

> **Legacy Note**: For patterns not yet updated for Liquid Glass, refer to pre-iOS 26 HIG, but prioritize Liquid Glass principles when they conflict.

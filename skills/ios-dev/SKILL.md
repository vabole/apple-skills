---
name: ios-dev
user-invocable: true
description: Build beautiful iOS SwiftUI interfaces. Use this skill when the user asks to create, design, build, or fix any iOS screen, component, or view. Produces production-grade SwiftUI code with Apple Design Award-quality aesthetics using Liquid Glass (iOS 26+). Applies to any iOS UI task - new screens, redesigns, fixing ugly UI, share sheets, modals, cards, buttons, or full app interfaces.
---

# iOS Development

Create distinctive, Apple Design Award-worthy iOS interfaces. This skill produces real, working SwiftUI code with exceptional attention to aesthetic details and creative choices that avoid generic AI-generated aesthetics.

The user provides iOS requirements: a screen, component, view, or interface to build. They may include context about the purpose, audience, or technical constraints.

## Design Thinking

Before writing ANY code, understand the context and commit to a BOLD aesthetic direction:

1. **Purpose**: What problem does this interface solve? Who uses it?
2. **Tone**: Pick a direction: calm/serene, playful/energetic, premium/refined, utilitarian/focused, editorial/magazine, brutalist/raw, warm/organic, cold/technical. Commit fully.
3. **Inspiration**: Which Apple apps set the bar? (Weather, Health, Fitness, Notes, Apple TV, Journal)
4. **Differentiation**: What makes this UNFORGETTABLE? What's the one thing users will remember?
5. **Glass Philosophy**: Is glass framing content or would it compete with it?

**CRITICAL**: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work—the key is intentionality, not intensity.

Then implement working SwiftUI code that is:
- Production-grade and functional
- Visually striking and memorable
- Cohesive with a clear aesthetic point-of-view
- Meticulously refined in every detail

## Anti-Patterns: What to Avoid

These are hallmarks of generic AI-generated iOS design. NEVER do these:

| Anti-Pattern | Why It's Bad | Instead |
|--------------|--------------|---------|
| **Boring solid backgrounds** | No depth or atmosphere | Gradients, subtle textures, or layered colors |
| **System fonts everywhere** | No typographic intention | Intentional hierarchy, consider display fonts |
| **Cookie-cutter tab bars** | No personality | Custom styling, meaningful icons |
| **Purple/indigo gradients** | Quintessential AI slop | Find a distinctive, contextual palette |
| **Flat, lifeless interactions** | No delight | Haptics, spring animations, feedback |
| **Glass on everything** | Defeats the purpose | Glass only for controls/navigation layer |
| **Ignoring content layer** | Glass where it doesn't belong | Glass frames content, never obscures |
| **Generic card layouts** | White rectangles with shadows | Context-specific, purposeful containers |
| **Emojis as design elements** | Lazy, unprofessional | SF Symbols, custom assets |
| **Evenly distributed colors** | Timid, uncommitted | Dominant color with sharp accents |

## iOS Aesthetics Guidelines

Focus on:

- **Typography**: Create clear hierarchy. Display fonts for impact, proper weight progression. Don't default to system everywhere—make intentional choices. Consider SF Pro Display for headers, custom fonts for brand identity.
- **Color & Theme**: Commit to a cohesive aesthetic. Dominant colors with sharp accents outperform timid, evenly-distributed palettes. Dark mode often produces more distinctive results. Design dark first, then adapt to light.
- **Motion**: Spring/bouncy animations are the new default. Morph between states, don't swap. Add haptics to every meaningful interaction. Use `.bouncy` not `.easeInOut`.
- **Spatial Composition**: Intentional spacing (8pt grid). Breathing room where needed, density where appropriate. Concentric corners that match device hardware.
- **Backgrounds & Depth**: Create atmosphere. Gradients, subtle layers, radial glows. Never flat white unless that's a deliberate minimal choice.

## The Three Principles

| Principle | Description |
|-----------|-------------|
| **Hierarchy** | Controls float above content. Glass frames, never obscures. Content is king. |
| **Harmony** | Software design aligns with hardware. Concentric corners. Fluid gestures. |
| **Consistency** | Adapt fluidly across iPhone, iPad, Mac. Same identity, contextual expression. |

## Required Reading

Before implementing, read the shared Liquid Glass reference for API patterns:

**`skills/ios-liquid-glass/`** - Core Liquid Glass API, code patterns, navigation patterns, animation philosophy, haptics

This reference contains the technical implementation details. This skill provides the aesthetic vision; the reference provides the code patterns.

## Typography That Speaks

Don't default to system fonts for everything. Create typographic hierarchy:

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

### Dominant + Accent

Don't distribute color evenly. Choose:
- **One dominant** that defines the brand/mood
- **Sharp accents** for actions and highlights
- **Neutral base** for content readability

### Dark Mode First

Dark mode often produces more distinctive results. Design dark, then adapt to light.

```swift
// Semantic colors that adapt
.foregroundStyle(.primary)
.foregroundStyle(.secondary)
.background(.background)

// Accent with purpose
.tint(.accentColor)
```

## Development Loop: Screenshot-Driven Iteration

**Never submit UI work without visually verifying it.** Use the screenshot script to iterate until the screen is both functional and beautiful.

```bash
# Screenshot simulator
xcrun simctl io booted screenshot /tmp/screenshot.png && sips --resampleHeightWidthMax 1800 /tmp/screenshot.png
```

**The loop:**
1. **Implement** your changes
2. **Screenshot** the simulator
3. **Evaluate** critically — is this share-worthy?
4. **Iterate** if not — fix and screenshot again

**Keep iterating until:**
- You'd proudly screenshot it to show a friend
- It could appear in an App Store feature
- It feels like it belongs on Apple's marketing materials

This is the quality bar: **share-worthy, award-worthy**.

## Quality Checklist

Before considering UI complete:

- [ ] Committed to a clear aesthetic direction (not generic)
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
- [ ] Screenshot taken and visually verified
- [ ] Would I screenshot this to show someone? (If no, iterate)

## The Mandate

Remember: Claude is capable of extraordinary creative work. Don't settle for "working." Push for **memorable**.

Every interface should have:
1. **A point of view** - A clear aesthetic direction
2. **Intentional details** - Nothing accidental
3. **Emotional resonance** - Users feel something
4. **Technical excellence** - Smooth, performant, accessible

The goal is an app worthy of an Apple Design Award—an app that feels genuinely designed, not generated.

## Related Skills

- **`/ios-design-consultant`** - For design questions before coding
- **`/image`** - Generate custom assets when SF Symbols aren't enough (never use emojis)

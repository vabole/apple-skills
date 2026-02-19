---
name: ios-app-icon
user-invocable: true
description: Generate premium iOS app icons for the App Store. Use when creating app icons, App Store icons, or launcher icons. Creates 1024x1024 master icons and resizes to all required iOS sizes.
---

# iOS App Icon Generation

Generate premium, Apple Design Award-worthy app icons using Nanobanana.

## Quick Start

```bash
bun .claude/skills/nanobanana-skill/nanobanana.ts \
  --prompt "App icon design for [app type]. [Main element] with [style] on [color] gradient. Premium quality, sophisticated, single focal point, subtle depth" \
  --size 1024x1024 \
  --output "AppIcon.png"
```

---

## Requirements

| Spec | Value |
|------|-------|
| Master size | 1024×1024 px |
| Format | PNG |
| Background | Fully opaque (no transparency) |
| Corners | Don't add—iOS applies mask |
| Shadows/gloss | Don't add—iOS applies effects |

---

## Prompt Formula

```
"App icon design for [purpose]. [Main element] with [visual style] on [color description] gradient background. Premium quality, sophisticated, minimal, single focal point, [lighting], rich colors"
```

**Key elements:**
- **Purpose**: meditation app, fitness tracker, note-taking app
- **Main element**: lotus flower, dumbbell, pencil
- **Visual style**: subtle 3D depth, metallic sheen, soft glow
- **Color**: rich purple-to-violet, vibrant orange-to-red, deep blue
- **Lighting**: subtle lighting from top-left, ambient glow

---

## Examples

**Meditation App:**
```bash
bun .claude/skills/nanobanana-skill/nanobanana.ts \
  --prompt "App icon design for meditation app. Elegant lotus flower with subtle 3D depth on rich purple-to-violet gradient. Premium quality, sophisticated, single focal point, subtle top-left lighting" \
  --size 1024x1024 \
  --output "AppIcon-Meditation.png"
```

**Fitness App:**
```bash
bun .claude/skills/nanobanana-skill/nanobanana.ts \
  --prompt "App icon design for fitness app. Bold dumbbell with metallic chrome finish on vibrant orange-to-red gradient. Premium quality, energetic, single focal point, dynamic lighting" \
  --size 1024x1024 \
  --output "AppIcon-Fitness.png"
```

**Finance App:**
```bash
bun .claude/skills/nanobanana-skill/nanobanana.ts \
  --prompt "App icon design for finance app. Elegant coin stack with gold metallic sheen on deep emerald-to-teal gradient. Premium quality, trustworthy, single focal point, subtle ambient glow" \
  --size 1024x1024 \
  --output "AppIcon-Finance.png"
```

---

## Resize to All iOS Sizes

After generating the 1024x1024 master:

```bash
# All required sizes
magick AppIcon.png -resize 1024x1024 AppIcon-1024.png      # App Store
magick AppIcon.png -resize 180x180 AppIcon-60@3x.png       # iPhone @3x
magick AppIcon.png -resize 120x120 AppIcon-60@2x.png       # iPhone @2x
magick AppIcon.png -resize 167x167 AppIcon-83.5@2x.png     # iPad Pro @2x
magick AppIcon.png -resize 152x152 AppIcon-76@2x.png       # iPad @2x
magick AppIcon.png -resize 87x87 AppIcon-29@3x.png         # Spotlight @3x
magick AppIcon.png -resize 80x80 AppIcon-40@2x.png         # Spotlight @2x
magick AppIcon.png -resize 58x58 AppIcon-29@2x.png         # Settings @2x
magick AppIcon.png -resize 40x40 AppIcon-40@1x.png         # Spotlight @1x
```

---

## Size Reference

| Size (px) | Usage |
|-----------|-------|
| 1024×1024 | App Store |
| 180×180 | iPhone App @3x |
| 120×120 | iPhone App @2x |
| 167×167 | iPad Pro @2x |
| 152×152 | iPad @2x |
| 87×87 | Spotlight @3x |
| 80×80 | Spotlight @2x |
| 58×58 | Settings @2x |
| 40×40 | Spotlight @1x |

---

## Prompt Tips

**Do:**
- "App icon design for [purpose]" — specific context
- "Premium quality, sophisticated" — quality signals
- "Rich [color]-to-[color] gradient" — specific colors
- "Subtle 3D depth" or "metallic sheen" — visual interest
- "Single focal point" — clarity

**Avoid:**
- "iOS app icon" — triggers generic looks
- "Simple" alone — undersells quality
- "Flat design" — too basic
- Vague colors like just "purple" or "blue"

---

## Quality Check

After generation:

1. **View the icon** with Read tool
2. **Verify**:
   - Colors are rich, not washed out
   - Single clear focal point
   - Recognizable at small sizes (check 40x40)
   - Premium feel, not generic
3. **If issues**: adjust prompt, regenerate

---

## Notes

- **Rounded corners**: AI often adds them. That's OK—iOS applies its own mask anyway.
- **Gradients**: Always better than flat colors for premium feel.
- **Test small**: Resize to 40x40 to verify readability.

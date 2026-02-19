---
name: ios-app-assets
user-invocable: true
description: Generate iOS app assets like UI icons, sprites, illustrations, backgrounds, and graphics. Use when creating tab bar icons, toolbar icons, game sprites, onboarding illustrations, or any in-app visual assets. NOT for app icons (use ios-app-icon skill instead).
---

# iOS App Assets Generation

Generate in-app assets: UI icons, sprites, illustrations, backgrounds using Nanobanana.

**Note:** For App Store icons, use the `ios-app-icon` skill instead.

## 1. Opaque Assets (Illustrations, Backgrounds)

Generate directly with Nanobanana—no background removal needed.

### Illustration Example

```bash
bun .claude/skills/nanobanana-skill/nanobanana.ts \
  --prompt "Person meditating on mountain peak at sunrise, modern illustration style, purple and orange warm tones, soft gradients, peaceful mood, professional app aesthetic" \
  --size 1024x1024 \
  --output "onboarding-meditation.png"
```

### Background Example

```bash
bun .claude/skills/nanobanana-skill/nanobanana.ts \
  --prompt "Abstract flowing gradient background, deep purple to soft pink, smooth organic curves, subtle texture, modern app aesthetic" \
  --size 1024x1024 \
  --output "background-gradient.png"
```

## 2. Transparent Assets (UI Icons, Sprites)

Generate on solid contrasting background, then remove it with ImageMagick.

### Step 1: Generate on contrasting background

| Subject Color | Use Background |
|---------------|----------------|
| White/light | Bright green (#00FF00) |
| Dark/black | White or yellow |
| Colorful/mixed | Solid gray (#808080) |

```bash
bun .claude/skills/nanobanana-skill/nanobanana.ts \
  --prompt "[Description], clean vector style, sharp edges, on solid bright green #00FF00 background" \
  --size 1024x1024 \
  --output "temp-asset.png"
```

### Step 2: Remove background with ImageMagick

```bash
magick temp-asset.png -fuzz 10% -transparent "#00FF00" "final-asset.png"

# Verify transparency
magick identify -verbose final-asset.png | grep -E "(Type|Alpha)"
# Should show: Type: TrueColorAlpha
```

### Example: Settings Gear Icon

```bash
# Generate on green
bun .claude/skills/nanobanana-skill/nanobanana.ts \
  --prompt "Settings gear icon, clean vector style, white with subtle metallic sheen, sharp precise edges, on solid bright green #00FF00 background" \
  --size 1024x1024 \
  --output "temp-gear.png"

# Remove green
magick temp-gear.png -fuzz 10% -transparent "#00FF00" "gear-icon.png"
```

## 3. Resizing for iOS Scales

### UI Icons (@1x/@2x/@3x)

```bash
# For 24pt icon (navigation bar)
magick icon.png -resize 24x24 icon@1x.png
magick icon.png -resize 48x48 icon@2x.png
magick icon.png -resize 72x72 icon@3x.png

# For 25pt icon (tab bar)
magick icon.png -resize 25x25 icon@1x.png
magick icon.png -resize 50x50 icon@2x.png
magick icon.png -resize 75x75 icon@3x.png
```

### Size Reference

| Element | Points | @1x | @2x | @3x |
|---------|--------|-----|-----|-----|
| Tab bar | 25pt | 25px | 50px | 75px |
| Toolbar | 22pt | 22px | 44px | 66px |
| Navigation | 24pt | 24px | 48px | 72px |
| Touch target | 44pt | 44px | 88px | 132px |

## Prompt Tips

**For icons:**
- "clean vector style" — crisp edges
- "sharp precise edges" — clean cuts for removal
- "consistent weight/thickness" — professional look

**For illustrations:**
- "modern illustration style" — contemporary feel
- "soft gradients" — depth without being 3D
- "professional app aesthetic" — polished look

## Quality Checklist

- [ ] View with Read tool before delivering
- [ ] Edges clean (especially after removal)
- [ ] Recognizable at target size
- [ ] Consistent with app's visual style

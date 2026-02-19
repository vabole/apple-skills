---
name: simulator-utils
user-invocable: true
description: iOS Simulator utility commands for screenshots, resizing, and common operations. Use these commands when taking simulator screenshots, resizing images for API compatibility, or performing common simulator operations.
---

# Simulator Utilities

Quick reference for iOS Simulator commands. **Use these patterns whenever working with simulators.**

## Screenshot with Auto-Resize (REQUIRED)

**ALWAYS use this pattern** when taking screenshots to avoid API errors:

```bash
# Single command: screenshot + resize
xcrun simctl io booted screenshot /path/to/screenshot.png && sips --resampleHeightWidthMax 1800 /path/to/screenshot.png
```

### Why Resize?

- iPhone 17 simulator screenshots exceed 2000px
- Claude API rejects images >2000px in multi-image requests
- `sips --resampleHeightWidthMax 1800` keeps images under limit

### Resize Existing Screenshots

```bash
# Single file
sips --resampleHeightWidthMax 1800 /path/to/screenshot.png

# Multiple files
sips --resampleHeightWidthMax 1800 /path/to/*.png

# Batch resize all PNGs in directory
for f in /path/to/dir/*.png; do sips --resampleHeightWidthMax 1800 "$f"; done
```

---

## Common Simulator Commands

### Device Management

```bash
# List available simulators
xcrun simctl list devices available

# Boot specific device (prefer iPhone 17)
xcrun simctl boot "iPhone 17"

# Shutdown simulator
xcrun simctl shutdown booted

# Erase simulator (fresh state)
xcrun simctl erase "iPhone 17"

# Check booted device
xcrun simctl list devices | grep Booted
```

### App Operations

```bash
# Install app
xcrun simctl install booted /path/to/App.app

# Launch app
xcrun simctl launch booted com.bundle.identifier

# Terminate app
xcrun simctl terminate booted com.bundle.identifier

# Uninstall app
xcrun simctl uninstall booted com.bundle.identifier
```

### Screenshots

```bash
# Basic screenshot (NOT recommended - use resize pattern above)
xcrun simctl io booted screenshot /path/to/screenshot.png

# Screenshot with resize (RECOMMENDED)
xcrun simctl io booted screenshot /path/to/screenshot.png && sips --resampleHeightWidthMax 1800 /path/to/screenshot.png

# Screenshot to clipboard
xcrun simctl io booted screenshot - | pbcopy
```

### Video Recording

```bash
# Start recording
xcrun simctl io booted recordVideo /path/to/video.mov

# Stop recording: Ctrl+C
```

---

## Build Commands

```bash
# Build for simulator
xcodebuild -scheme SCHEME -project /path/to/Project.xcodeproj -destination 'platform=iOS Simulator,name=iPhone 17' build

# Build with output filtering (cleaner)
xcodebuild -scheme SCHEME -project /path/to/Project.xcodeproj -destination 'platform=iOS Simulator,name=iPhone 17' build 2>&1 | grep -E "(error:|warning:|BUILD)"

# Find built .app path
find ~/Library/Developer/Xcode/DerivedData -name "*.app" -path "*/Debug-iphonesimulator/*" -type d 2>/dev/null | head -1
```

---

## Full Test Workflow

Complete pattern for build, install, launch, screenshot:

```bash
# 1. Build
xcodebuild -scheme SCHEME -project /path/to/Project.xcodeproj -destination 'platform=iOS Simulator,name=iPhone 17' build 2>&1 | grep -E "(error:|BUILD)"

# 2. Terminate existing instance (ignore errors)
xcrun simctl terminate booted com.bundle.identifier 2>/dev/null

# 3. Install
xcrun simctl install booted "/path/to/App.app"

# 4. Launch
xcrun simctl launch booted com.bundle.identifier

# 5. Wait for app to load
sleep 2

# 6. Screenshot with resize
xcrun simctl io booted screenshot /path/to/screenshot.png && sips --resampleHeightWidthMax 1800 /path/to/screenshot.png
```

---

## Image Manipulation with sips

`sips` (Scriptable Image Processing System) is macOS built-in:

```bash
# Resize to max dimension (maintains aspect ratio)
sips --resampleHeightWidthMax 1800 image.png

# Resize to specific width
sips --resampleWidth 1000 image.png

# Resize to specific height
sips --resampleHeight 1000 image.png

# Get image dimensions
sips -g pixelWidth -g pixelHeight image.png

# Convert format
sips -s format jpeg image.png --out image.jpg

# Batch resize
sips --resampleHeightWidthMax 1800 *.png
```

---

## Troubleshooting

### "No devices are booted"
```bash
xcrun simctl boot "iPhone 17"
```

### Screenshot too large for API
```bash
sips --resampleHeightWidthMax 1800 /path/to/screenshot.png
```

### App won't launch
```bash
# Check bundle ID
xcrun simctl listapps booted | grep -A5 "CFBundleIdentifier"

# Reinstall
xcrun simctl uninstall booted com.bundle.identifier
xcrun simctl install booted /path/to/App.app
```

### Simulator stuck
```bash
xcrun simctl shutdown all
xcrun simctl erase all
xcrun simctl boot "iPhone 17"
```

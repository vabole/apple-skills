---
name: guide-macos-spm-packaging
description: Scaffold, build, and package SwiftPM-based macOS apps without an Xcode project. Use when you need a from-scratch macOS app layout, SwiftPM targets/resources, a custom .app bundle assembly script, or signing/notarization/appcast steps outside Xcode.
type: guide
origin: https://github.com/Dimillian/Skills
license: MIT
---

> **Guide Skill** — This is an expert workflow/pattern guide, not API reference documentation.
> Originally from [Dimillian/Skills](https://github.com/Dimillian/Skills) by Thomas Ricouard. MIT License.


# macOS SwiftPM App Packaging (No Xcode)

## Overview
Bootstrap a complete SwiftPM macOS app folder, then build, package, and run it without Xcode. Use `assets/templates/bootstrap/` for the starter layout and `references/packaging.md` + `references/release.md` for packaging and release details.

## Two-Step Workflow
1) Bootstrap the project folder
   - Copy `assets/templates/bootstrap/` into a new repo.
   - Rename `MyApp` in `Package.swift`, `Sources/MyApp/`, and `version.env`.
   - Customize `APP_NAME`, `BUNDLE_ID`, and versions.

2) Build, package, and run the bootstrapped app
   - Copy scripts from `assets/templates/` into your repo (for example, `Scripts/`).
   - Build/tests: `swift build` and `swift test`.
   - Package: `Scripts/package_app.sh`.
   - Run: `Scripts/compile_and_run.sh` (preferred) or `Scripts/launch.sh`.
   - Release (optional): `Scripts/sign-and-notarize.sh` and `Scripts/make_appcast.sh`.
   - Tag + GitHub release (optional): create a git tag, upload the zip/appcast to the GitHub release, and publish.

## Minimum End-to-End Example
Shortest path from bootstrap to a running app:
```bash
# 1. Copy and rename the skeleton
cp -R assets/templates/bootstrap/ ~/Projects/MyApp
cd ~/Projects/MyApp
sed -i '' 's/MyApp/HelloApp/g' Package.swift version.env

# 2. Copy scripts
cp assets/templates/package_app.sh Scripts/
cp assets/templates/compile_and_run.sh Scripts/
chmod +x Scripts/*.sh

# 3. Build and launch
swift build
Scripts/compile_and_run.sh
```

## Validation Checkpoints
Run these after key steps to catch failures early before proceeding to the next stage.

**After packaging (`Scripts/package_app.sh`):**
```bash
# Confirm .app bundle structure is intact
ls -R build/HelloApp.app/Contents

# Check that the binary is present and executable
file build/HelloApp.app/Contents/MacOS/HelloApp
```

**After signing (`Scripts/sign-and-notarize.sh` or ad-hoc dev signing):**
```bash
# Inspect signature and entitlements
codesign -dv --verbose=4 build/HelloApp.app

# Verify the bundle passes Gatekeeper checks locally
spctl --assess --type execute --verbose build/HelloApp.app
```

**After notarization and stapling:**
```bash
# Confirm the staple ticket is attached
stapler validate build/HelloApp.app

# Re-run Gatekeeper to confirm notarization is recognised
spctl --assess --type execute --verbose build/HelloApp.app
```

## Common Notarization Failures
| Symptom | Likely Cause | Recovery |
|---|---|---|
| `The software asset has already been uploaded` | Duplicate submission for same version | Bump `BUILD_NUMBER` in `version.env` and repackage. |
| `Package Invalid: Invalid Code Signing Entitlements` | Entitlements in `.entitlements` file don't match provisioning | Audit entitlements against Apple's allowed set; remove unsupported keys. |
| `The executable does not have the hardened runtime enabled` | Missing `--options runtime` flag in `codesign` invocation | Edit `sign-and-notarize.sh` to add `--options runtime` to all `codesign` calls. |
| Notarization hangs / no status email | `xcrun notarytool` network or credential issue | Run `xcrun notarytool history` to check status; re-export App Store Connect API key if expired. |
| `stapler validate` fails after successful notarization | Ticket not yet propagated | Wait ~60 s, then re-run `xcrun stapler staple`. |

## Templates
- `assets/templates/package_app.sh`: Build binaries, create the .app bundle, copy resources, sign.
- `assets/templates/compile_and_run.sh`: Dev loop to kill running app, package, launch.
- `assets/templates/build_icon.sh`: Generate .icns from an Icon Composer file (requires Xcode install).
- `assets/templates/sign-and-notarize.sh`: Notarize, staple, and zip a release build.
- `assets/templates/make_appcast.sh`: Generate Sparkle appcast entries for updates.
- `assets/templates/setup_dev_signing.sh`: Create a stable dev code-signing identity.
- `assets/templates/launch.sh`: Simple launcher for a packaged .app.
- `assets/templates/version.env`: Example version file consumed by packaging scripts.
- `assets/templates/bootstrap/`: Minimal SwiftPM macOS app skeleton (Package.swift, Sources/, version.env).

## Notes
- Keep entitlements and signing configuration explicit; edit the template scripts instead of reimplementing.
- Remove Sparkle steps if you do not use Sparkle for updates.
- Sparkle relies on the bundle build number (`CFBundleVersion`), so `BUILD_NUMBER` in `version.env` must increase for each update.
- For menu bar apps, set `MENU_BAR_APP=1` when packaging to emit `LSUIElement` in Info.plist.

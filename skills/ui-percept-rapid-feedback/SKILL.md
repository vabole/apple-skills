---
name: ui-percept-rapid-feedback
description: Use for fast, deterministic UI quality feedback in quick-math-swift. Runs capture plus ui-percept with stricter aesthetic rules and writes an actionable report file for iteration.
---

# UI Percept Rapid Feedback

Use this skill when you need quick iteration on Quick Maths screen quality, especially spacing, alignment, sizing consistency, truncation risk, and palette cohesion.

This skill avoids subjective pass/fail judgment and instead produces concrete, measurable feedback that an agent can use to patch SwiftUI code and rerun.

## When To Use

- After UI changes in `quick-math-swift`
- When reviewing one or more captured screens (`home`, `game`, `reward`)
- When you want a higher aesthetic bar than default ui-percept rules
- When you need output saved to files for repeatable agent loops

## Prerequisites

- `quick-math-swift` repo is present and buildable
- `ui-percept` repo exists at `/Users/vabole/repos/ui-percept` or passed via `--ui-percept-dir`
- iOS simulator + `xcodebuild` available for capture

## Workflow

1. Run the helper from quick-math root:

```bash
bash .apple-skills/skills/ui-percept-rapid-feedback/scripts/run-feedback.sh --mode improve --screens game
```

2. Read:
- `.ui-captures/ui-percept-skill/<run-name>/feedback-overview.json` first
- `.ui-captures/ui-percept-skill/<run-name>/codex-jury-prompt.md` for Codex vision review mode
- `.ui-captures/ui-percept-skill/<run-name>/codex-decision-log.md` for narrated decision tracking
- `.ui-captures/ui-percept-skill/<run-name>/feedback-report.md` second
- `.ui-captures/ui-percept-skill/<run-name>/feedback-report.json` only when drilling down

3. Prioritize fixes in this order:
- `blocker` and `major` lint issues
- repeated `rule` clusters in report summary
- top `suggestions` from `signals.json`

4. Patch SwiftUI code, then rerun the same command.

## Commands

Run selected screens:

```bash
bash .apple-skills/skills/ui-percept-rapid-feedback/scripts/run-feedback.sh --mode improve --screens home,game,reward
```

Switch to build-oriented prompt mode:

```bash
bash .apple-skills/skills/ui-percept-rapid-feedback/scripts/run-feedback.sh --mode build --screens game
```

Archive before/after screenshots with commit-hash labels:

```bash
# before changes (uses current HEAD hash by default)
bash .apple-skills/skills/ui-percept-rapid-feedback/scripts/run-feedback.sh \
  --mode improve --screens game --archive-stage before --archive-user "$USER"

# after changes (pass the new commit hash explicitly)
bash .apple-skills/skills/ui-percept-rapid-feedback/scripts/run-feedback.sh \
  --mode improve --screens game --archive-stage after --archive-user "$USER" --git-hash <new_commit_hash>
```

Low-friction helper (auto hash + optional history commit):

```bash
# before phase
bash .apple-skills/skills/ui-percept-rapid-feedback/scripts/archive-round.sh --phase before --screens game

# after phase
bash .apple-skills/skills/ui-percept-rapid-feedback/scripts/archive-round.sh --phase after --screens game
```

Skip automatic history commit if you only want artifacts:

```bash
bash .apple-skills/skills/ui-percept-rapid-feedback/scripts/archive-round.sh \
  --phase after --screens game --no-history-commit
```

Use existing captures without rerunning XCUITest:

```bash
bash .apple-skills/skills/ui-percept-rapid-feedback/scripts/run-feedback.sh --screens game --skip-capture
```

Set custom ui-percept path:

```bash
bash .apple-skills/skills/ui-percept-rapid-feedback/scripts/run-feedback.sh \
  --screens game \
  --ui-percept-dir /path/to/ui-percept
```

Analyze a specific archived artifact directly (no new capture):

```bash
bash .apple-skills/skills/ui-percept-rapid-feedback/scripts/run-feedback.sh \
  --tree .ui-captures/game/ui_tree.json \
  --screenshot .ui-captures/ui-percept-v2/game-fast/full.png \
  --screen-name game-fast \
  --run-name game-fast-review
```

## Notes

- This skill uses `references/high-bar-rules.yaml` to raise visual standards.
- Keep feedback evidence-based: element IDs, measured values, and repeatable signals.
- Context hygiene rule: load `feedback-overview.json` first and only open per-screen drilldown files for the issue you are fixing.
- For opinionated UX/aesthetic review, apply `references/jury-review-mode.md`.
- For round-by-round history and commit discipline, apply `references/round-commit-workflow.md`.

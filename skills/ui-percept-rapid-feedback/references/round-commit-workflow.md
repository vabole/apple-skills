# Round Commit Workflow

Use this to keep a durable before/after UI record for every iteration round.

## Fast Path

```bash
# before changes
bash .apple-skills/skills/ui-percept-rapid-feedback/scripts/archive-round.sh \
  --phase before --screens game

# after code commit
bash .apple-skills/skills/ui-percept-rapid-feedback/scripts/archive-round.sh \
  --phase after --screens game
```

This helper auto-detects current commit hash and creates a history commit for `.ui-captures/history`.

## Per-Round Steps

1. Capture **before** state and archive screenshots:

```bash
bash .apple-skills/skills/ui-percept-rapid-feedback/scripts/run-feedback.sh \
  --mode improve \
  --screens game \
  --archive-stage before \
  --archive-user "$USER"
```

2. Make code changes.

3. Commit improvement code:

```bash
git add <changed files>
git commit -m "feat(ui): round N improvements"
```

4. Capture **after** state and archive with new commit hash:

```bash
NEW_HASH="$(git rev-parse --short HEAD)"
bash .apple-skills/skills/ui-percept-rapid-feedback/scripts/run-feedback.sh \
  --mode improve \
  --screens game \
  --archive-stage after \
  --archive-user "$USER" \
  --git-hash "$NEW_HASH"
```

5. Commit archived screenshots + history metadata:

```bash
git add .ui-captures/history
git commit -m "chore(ui): archive before/after screenshots for $NEW_HASH"
git push
```

## Naming Convention

Archived files are written as:

`<timestamp>__<stage>__<user>__<hash>__<screen>__<artifact>.png`

Examples:
- `20260304-174212__after__vabole__deadbee__game__full.png`
- `20260304-174212__after__vabole__deadbee__game__annotated.png`

The folder also contains:
- `index.jsonl` (append-only history index)
- one manifest JSON per archive run

# Jury Review Mode

Use this when you want opinionated, Apple-award-style critique without dumping full artifacts into context.

## Intent

- Treat the screen as a product jury review, not a lint-only pass.
- Keep claims evidence-backed: use `taste`, `suggestions`, and specific lint entries.
- Prioritize what changes user perception most, not just what is easiest to patch.

## Review Order

1. Open `feedback-overview.json` and `codex-jury-prompt.md`.
2. Read `taste_summary` and `taste_top_notes` for each screen.
3. Select one high-priority note.
4. Drill into that screen's `lint.json`, `signals.json`, and `annotated.png`.
5. Propose 1-3 changes that directly address the selected note.
6. Re-run skill and compare only:
   - `overall_issue_counts`
   - `taste_summary.overall_score`
   - `taste_summary.tier`

## Output Contract For Agent

- Start with a 3-line verdict:
  - "What feels off"
  - "Why it matters for users"
  - "What to change first"
- Then list max 3 concrete changes.
- Include exact file paths and component IDs where possible.
- Avoid broad redesign proposals unless score is `rework`.

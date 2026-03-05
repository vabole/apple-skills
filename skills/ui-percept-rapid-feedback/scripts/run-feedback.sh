#!/bin/bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

detect_repo_root() {
  if [[ -n "${REPO_ROOT:-}" ]]; then
    echo "$REPO_ROOT"
    return 0
  fi

  if [[ -f "$(pwd)/scripts/capture-all.sh" ]]; then
    echo "$(pwd)"
    return 0
  fi

  local git_root
  git_root="$(git rev-parse --show-toplevel 2>/dev/null || true)"
  if [[ -n "$git_root" && -f "$git_root/scripts/capture-all.sh" ]]; then
    echo "$git_root"
    return 0
  fi

  # Fallback for in-repo skill location under .apple-skills/skills/<name>/scripts
  echo "$(cd "$SCRIPT_DIR/../../../.." && pwd)"
}

ROOT="$(detect_repo_root)"
SCREENS="game"
MODE="improve"
RUN_NAME="$(date +%Y%m%d-%H%M%S)"
UI_PERCEPT_DIR="${UI_PERCEPT_DIR:-$HOME/repos/ui-percept}"
SKIP_CAPTURE=0
OUT_ROOT="$ROOT/.ui-captures/ui-percept-skill"
RULES_FILE="$SCRIPT_DIR/../references/high-bar-rules.yaml"
ARCHIVE_STAGE="none"
ARCHIVE_DIR="$ROOT/.ui-captures/history"
ARCHIVE_USER="${USER:-unknown}"
ARCHIVE_GIT_HASH=""
CUSTOM_TREE=""
CUSTOM_SCREENSHOT=""
SCREEN_NAME="custom"

usage() {
  cat <<EOF
Usage: $(basename "$0") [options]

Options:
  --mode <build|improve>   Prompt mode for Codex narration (default: improve)
  --screens <csv>          Screens to process (default: game)
  --run-name <name>        Output run folder name (default: timestamp)
  --ui-percept-dir <path>  Path to ui-percept repo (default: \$HOME/repos/ui-percept)
  --out-root <path>        Output root directory (default: .ui-captures/ui-percept-skill)
  --rules <path>           Rules file passed to ui-percept (default: high-bar-rules.yaml)
  --archive-stage <value>  Save screenshots to history: before|after|none (default: none)
  --archive-dir <path>     History directory for archived screenshots
  --archive-user <name>    User label embedded in history filenames (default: \$USER)
  --git-hash <hash>        Commit hash label used in history filenames (default: current HEAD)
  --tree <path>            Analyze this ui_tree.json instead of .ui-captures/<screen>/ui_tree.json
  --screenshot <path>      Analyze this screenshot instead of .ui-captures/<screen>/screenshot.png
  --screen-name <name>     Label used in reports for --tree/--screenshot mode (default: custom)
  --skip-capture           Do not run capture-all.sh; use existing .ui-captures
  -h, --help               Show this help
EOF
}

resolve_path() {
  local path="$1"
  if [[ "$path" = /* ]]; then
    echo "$path"
  else
    echo "$ROOT/$path"
  fi
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --screens)
      SCREENS="${2:-}"
      shift 2
      ;;
    --mode)
      MODE="${2:-}"
      shift 2
      ;;
    --run-name)
      RUN_NAME="${2:-}"
      shift 2
      ;;
    --ui-percept-dir)
      UI_PERCEPT_DIR="${2:-}"
      shift 2
      ;;
    --out-root)
      OUT_ROOT="${2:-}"
      shift 2
      ;;
    --rules)
      RULES_FILE="${2:-}"
      shift 2
      ;;
    --archive-stage)
      ARCHIVE_STAGE="${2:-}"
      shift 2
      ;;
    --archive-dir)
      ARCHIVE_DIR="${2:-}"
      shift 2
      ;;
    --archive-user)
      ARCHIVE_USER="${2:-}"
      shift 2
      ;;
    --git-hash)
      ARCHIVE_GIT_HASH="${2:-}"
      shift 2
      ;;
    --tree)
      CUSTOM_TREE="${2:-}"
      shift 2
      ;;
    --screenshot)
      CUSTOM_SCREENSHOT="${2:-}"
      shift 2
      ;;
    --screen-name)
      SCREEN_NAME="${2:-}"
      shift 2
      ;;
    --skip-capture)
      SKIP_CAPTURE=1
      shift
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      echo "Unknown option: $1" >&2
      usage >&2
      exit 1
      ;;
  esac
done

if [[ "$MODE" != "build" && "$MODE" != "improve" ]]; then
  echo "Invalid mode '$MODE'. Expected build or improve." >&2
  exit 1
fi

if [[ "$ARCHIVE_STAGE" != "none" && "$ARCHIVE_STAGE" != "before" && "$ARCHIVE_STAGE" != "after" ]]; then
  echo "Invalid archive stage '$ARCHIVE_STAGE'. Expected before, after, or none." >&2
  exit 1
fi

if [[ ! -d "$UI_PERCEPT_DIR" ]]; then
  echo "ui-percept directory not found: $UI_PERCEPT_DIR" >&2
  exit 1
fi

RULES_FILE="$(resolve_path "$RULES_FILE")"
OUT_ROOT="$(resolve_path "$OUT_ROOT")"
ARCHIVE_DIR="$(resolve_path "$ARCHIVE_DIR")"

if [[ -n "$CUSTOM_TREE" || -n "$CUSTOM_SCREENSHOT" ]]; then
  if [[ -z "$CUSTOM_TREE" || -z "$CUSTOM_SCREENSHOT" ]]; then
    echo "Both --tree and --screenshot are required when using direct-input mode." >&2
    exit 1
  fi
  CUSTOM_TREE="$(resolve_path "$CUSTOM_TREE")"
  CUSTOM_SCREENSHOT="$(resolve_path "$CUSTOM_SCREENSHOT")"
  SKIP_CAPTURE=1
fi

if [[ ! -f "$RULES_FILE" ]]; then
  echo "Rules file not found: $RULES_FILE" >&2
  exit 1
fi

if [[ "$SKIP_CAPTURE" -eq 0 ]]; then
  (
    cd "$ROOT"
    CAPTURE_SCREENS="$SCREENS" ./scripts/capture-all.sh
  )
fi

RUN_DIR="$OUT_ROOT/$RUN_NAME"
mkdir -p "$RUN_DIR"

declare -a PROCESSED_SCREENS=()
if [[ -n "$CUSTOM_TREE" && -n "$CUSTOM_SCREENSHOT" ]]; then
  SCREEN_LIST=("$SCREEN_NAME")
else
  IFS=',' read -r -a SCREEN_LIST <<< "$SCREENS"
fi

for raw in "${SCREEN_LIST[@]}"; do
  screen="$(echo "$raw" | xargs)"
  [[ -z "$screen" ]] && continue

  if [[ -n "$CUSTOM_TREE" && -n "$CUSTOM_SCREENSHOT" ]]; then
    tree="$CUSTOM_TREE"
    screenshot="$CUSTOM_SCREENSHOT"
  else
    tree="$ROOT/.ui-captures/$screen/ui_tree.json"
    screenshot="$ROOT/.ui-captures/$screen/screenshot.png"
  fi
  out_dir="$RUN_DIR/$screen"

  if [[ ! -f "$tree" || ! -f "$screenshot" ]]; then
    echo "Skipping $screen (missing capture files)." >&2
    continue
  fi

  mkdir -p "$out_dir"

  (
    cd "$UI_PERCEPT_DIR"
    uv run ui-percept pack \
      --tree "$tree" \
      --screenshot "$screenshot" \
      --rules "$RULES_FILE" \
      --out "$out_dir"
  )

  PROCESSED_SCREENS+=("$screen")
done

if [[ "${#PROCESSED_SCREENS[@]}" -eq 0 ]]; then
  echo "No screens were processed." >&2
  exit 1
fi

python3 - "$RUN_DIR" "$MODE" "${PROCESSED_SCREENS[@]}" <<'PY'
import json
import os
import sys
from collections import Counter

run_dir = sys.argv[1]
mode = sys.argv[2]
screens = sys.argv[3:]

severity_order = {"blocker": 0, "major": 1, "minor": 2}
overall_issue_counts = Counter()
overall_rule_counts = Counter()
report_screens = {}
action_items = []

for screen in screens:
    screen_dir = os.path.join(run_dir, screen)
    lint_path = os.path.join(screen_dir, "lint.json")
    signals_path = os.path.join(screen_dir, "signals.json")
    summary_path = os.path.join(screen_dir, "summary.json")

    lint = json.load(open(lint_path)) if os.path.exists(lint_path) else {}
    signals = json.load(open(signals_path)) if os.path.exists(signals_path) else {}
    summary = json.load(open(summary_path)) if os.path.exists(summary_path) else {}

    issues = lint.get("issues", [])
    severity_counts = Counter(i.get("severity", "unknown") for i in issues)
    rule_counts = Counter(i.get("rule", "unknown") for i in issues)
    suggestions = signals.get("suggestions", [])

    overall_issue_counts.update(severity_counts)
    overall_rule_counts.update(rule_counts)

    for issue in issues:
        sev = issue.get("severity", "minor")
        if sev in ("blocker", "major"):
            pass

    per_rule_included = Counter()
    per_rule_skipped = Counter()
    for issue in issues:
        sev = issue.get("severity", "minor")
        if sev not in ("blocker", "major"):
            continue

        rule = issue.get("rule", "unknown")
        if per_rule_included[rule] >= 3:
            per_rule_skipped[rule] += 1
            continue

        action_items.append(
            {
                "screen": screen,
                "kind": "lint",
                "priority": severity_order.get(sev, 9),
                "severity": sev,
                "message": issue.get("message", ""),
                "elements": issue.get("elements", []),
                "rule": rule,
            }
        )
        per_rule_included[rule] += 1

    for rule, skipped_count in per_rule_skipped.items():
        action_items.append(
            {
                "screen": screen,
                "kind": "lint",
                "priority": 2,
                "severity": "major",
                "message": f"{skipped_count} additional {rule} issues omitted from summary; inspect lint.json for full list.",
                "elements": [],
                "rule": rule,
            }
        )

    for suggestion in suggestions:
        action_items.append(
            {
                "screen": screen,
                "kind": "signal",
                "priority": 3,
                "severity": "signal",
                "message": suggestion.get("message", ""),
                "signal_id": suggestion.get("id", "unknown"),
            }
        )

    report_screens[screen] = {
        "issue_counts": dict(severity_counts),
        "top_rules": [{"rule": rule, "count": count} for rule, count in rule_counts.most_common(5)],
        "top_signals": [{"id": s.get("id"), "message": s.get("message")} for s in suggestions[:5]],
        "taste_summary": signals.get("taste", {}).get("summary", {}),
        "taste_top_notes": signals.get("taste", {}).get("top_notes", [])[:3],
        "artifact_dir": screen_dir,
        "summary": summary,
    }

action_items.sort(key=lambda item: (item.get("priority", 9), item.get("screen", "")))
top_action_items = action_items[:20]

report_json = {
    "run_dir": run_dir,
    "screens": report_screens,
    "overall_issue_counts": dict(overall_issue_counts),
    "overall_top_rules": [{"rule": rule, "count": count} for rule, count in overall_rule_counts.most_common(8)],
    "action_items": top_action_items,
}

json_path = os.path.join(run_dir, "feedback-report.json")
with open(json_path, "w") as f:
    json.dump(report_json, f, indent=2)

overview = {
    "run_dir": run_dir,
    "overall_issue_counts": dict(overall_issue_counts),
    "overall_top_rules": [{"rule": rule, "count": count} for rule, count in overall_rule_counts.most_common(5)],
    "screens": [
        {
            "screen": screen,
            "issue_counts": report_screens[screen].get("issue_counts", {}),
            "top_rules": report_screens[screen].get("top_rules", [])[:3],
            "top_signals": report_screens[screen].get("top_signals", [])[:3],
            "taste_summary": report_screens[screen].get("taste_summary", {}),
            "taste_top_notes": report_screens[screen].get("taste_top_notes", [])[:2],
            "artifact_dir": report_screens[screen].get("artifact_dir"),
        }
        for screen in screens
    ],
    "next_actions": top_action_items[:8],
    "details_file": json_path,
}

overview_path = os.path.join(run_dir, "feedback-overview.json")
with open(overview_path, "w") as f:
    json.dump(overview, f, indent=2)

lines = []
lines.append("# UI Percept Feedback Report")
lines.append("")
lines.append(f"- Run directory: {run_dir}")
lines.append(f"- Screens: {', '.join(screens)}")
lines.append("")
lines.append("## Overall")
for sev in ("blocker", "major", "minor"):
    lines.append(f"- {sev}: {overall_issue_counts.get(sev, 0)}")
if overall_rule_counts:
    lines.append("- Top rules: " + ", ".join(f"{r} ({c})" for r, c in overall_rule_counts.most_common(5)))
lines.append("")

for screen in screens:
    data = report_screens[screen]
    lines.append(f"## Screen: {screen}")
    issue_counts = data.get("issue_counts", {})
    lines.append(
        "- Issues: "
        + ", ".join(
            [
                f"blocker={issue_counts.get('blocker', 0)}",
                f"major={issue_counts.get('major', 0)}",
                f"minor={issue_counts.get('minor', 0)}",
            ]
        )
    )
    if data.get("top_rules"):
        lines.append("- Top rules: " + ", ".join(f"{r['rule']} ({r['count']})" for r in data["top_rules"]))
    if data.get("top_signals"):
        lines.append("- Signals:")
        for sig in data["top_signals"]:
            lines.append(f"  - {sig['id']}: {sig['message']}")
    lines.append(f"- Artifacts: {data.get('artifact_dir')}")
    lines.append("")

lines.append("## Prioritized Action Items")
if not top_action_items:
    lines.append("- None")
else:
    for item in top_action_items[:8]:
        if item["kind"] == "lint":
            elements = ", ".join(item.get("elements", []))
            lines.append(
                f"- [{item['screen']}] {item['severity']} {item['rule']}: {item['message']}"
                + (f" | elements: {elements}" if elements else "")
            )
        else:
            lines.append(f"- [{item['screen']}] signal {item['signal_id']}: {item['message']}")

lines.append("")
lines.append("## Drilldown Paths")
for screen in screens:
    data = report_screens[screen]
    artifact_dir = data.get("artifact_dir")
    lines.append(f"- {screen}: {artifact_dir}")
    lines.append(f"- {screen} lint: {os.path.join(artifact_dir, 'lint.json')}")
    lines.append(f"- {screen} signals: {os.path.join(artifact_dir, 'signals.json')}")
    lines.append(f"- {screen} annotated: {os.path.join(artifact_dir, 'annotated.png')}")

md_path = os.path.join(run_dir, "feedback-report.md")
with open(md_path, "w") as f:
    f.write("\n".join(lines) + "\n")

jury_lines = []
jury_lines.append("# Codex Jury Prompt")
jury_lines.append("")
jury_lines.append(f"Mode: {mode}")
jury_lines.append("Act as an iOS UX specialist and Apple Design Awards jury reviewer.")
jury_lines.append("Use built-in vision on the provided screenshot paths and combine with deterministic evidence.")
jury_lines.append("")
if mode == "build":
    jury_lines.append("You are in BUILD mode: design/implement with a high aesthetic bar, then self-critique.")
else:
    jury_lines.append("You are in IMPROVE mode: critique existing UI and ship focused high-impact refinements.")
jury_lines.append("")
jury_lines.append("## Context Hygiene")
jury_lines.append("- Read feedback-overview.json first.")
jury_lines.append("- For each issue you select, open only that screen's full.png, annotated.png, lint.json, and signals.json.")
jury_lines.append("- Do not dump all lint items; focus on highest-impact fixes.")
jury_lines.append("")
jury_lines.append("## Deterministic Snapshot")
jury_lines.append(f"- Overall issue counts: {dict(overall_issue_counts)}")
jury_lines.append(
    "- Top rules: " + ", ".join(f"{item['rule']} ({item['count']})" for item in overview["overall_top_rules"])
    if overview["overall_top_rules"]
    else "- Top rules: none"
)
jury_lines.append("")

for screen in screens:
    data = report_screens[screen]
    artifact_dir = data.get("artifact_dir")
    taste_summary = data.get("taste_summary", {})
    jury_lines.append(f"## Screen: {screen}")
    jury_lines.append(f"- Full screenshot: {os.path.join(artifact_dir, 'full.png')}")
    jury_lines.append(f"- Annotated screenshot: {os.path.join(artifact_dir, 'annotated.png')}")
    jury_lines.append(f"- Lint data: {os.path.join(artifact_dir, 'lint.json')}")
    jury_lines.append(f"- Signals data: {os.path.join(artifact_dir, 'signals.json')}")
    if taste_summary:
        jury_lines.append(
            f"- Taste score: {taste_summary.get('overall_score', 'n/a')} ({taste_summary.get('tier', 'n/a')})"
        )
    notes = data.get("taste_top_notes", [])
    if notes:
        jury_lines.append("- Top taste notes:")
        for note in notes:
            jury_lines.append(f"  - {note.get('message', '')}")
    jury_lines.append("")

jury_lines.append("## Your Required Output")
jury_lines.append("Return markdown with exactly these sections:")
jury_lines.append("1. Verdict (3 lines max)")
jury_lines.append("2. Top 3 Problems (with evidence from visual + deterministic)")
jury_lines.append("3. Fix Plan (max 5 concrete code-level changes)")
jury_lines.append("4. First Patch To Make Now (single highest-leverage change)")

jury_prompt_path = os.path.join(run_dir, "codex-jury-prompt.md")
with open(jury_prompt_path, "w") as f:
    f.write("\n".join(jury_lines) + "\n")

decision_lines = []
decision_lines.append("# Codex Decision Log Template")
decision_lines.append("")
decision_lines.append(f"- Mode: {mode}")
decision_lines.append(f"- Run directory: {run_dir}")
decision_lines.append("")
decision_lines.append("## Decision Narrative")
decision_lines.append("1. Observation")
decision_lines.append("2. Hypothesis")
decision_lines.append("3. Change")
decision_lines.append("4. Why This First")
decision_lines.append("5. Expected Impact")
decision_lines.append("")
decision_lines.append("## Suggested Focus Candidates")
for item in top_action_items[:5]:
    if item.get("kind") == "lint":
        decision_lines.append(
            f"- [{item.get('screen')}] {item.get('rule')} ({item.get('severity')}): {item.get('message')}"
        )
    else:
        decision_lines.append(
            f"- [{item.get('screen')}] signal {item.get('signal_id')}: {item.get('message')}"
        )
decision_lines.append("")
decision_lines.append("## Taste Notes")
for screen in screens:
    for note in report_screens.get(screen, {}).get("taste_top_notes", [])[:3]:
        decision_lines.append(f"- [{screen}] {note.get('id')}: {note.get('message')}")

decision_log_path = os.path.join(run_dir, "codex-decision-log.md")
with open(decision_log_path, "w") as f:
    f.write("\n".join(decision_lines) + "\n")

overview["jury_prompt_file"] = jury_prompt_path
overview["decision_log_file"] = decision_log_path
with open(overview_path, "w") as f:
    json.dump(overview, f, indent=2)

print(json_path)
print(overview_path)
print(md_path)
print(jury_prompt_path)
print(decision_log_path)
PY

echo ""
echo "Run complete."
echo "Report JSON: $RUN_DIR/feedback-report.json"
echo "Overview:    $RUN_DIR/feedback-overview.json"
echo "Report MD:   $RUN_DIR/feedback-report.md"
echo "Jury Prompt: $RUN_DIR/codex-jury-prompt.md"
echo "DecisionLog: $RUN_DIR/codex-decision-log.md"

sanitize_token() {
  printf '%s' "$1" \
    | tr '[:upper:]' '[:lower:]' \
    | tr -c 'a-z0-9._-' '-' \
    | sed -E 's/^-+//; s/-+$//'
}

if [[ "$ARCHIVE_STAGE" != "none" ]]; then
  mkdir -p "$ARCHIVE_DIR"

  hash_label="$ARCHIVE_GIT_HASH"
  if [[ -z "$hash_label" ]]; then
    hash_label="$(git -C "$ROOT" rev-parse --short HEAD 2>/dev/null || true)"
  fi
  if [[ -z "$hash_label" ]]; then
    hash_label="nogit"
  fi

  safe_user="$(sanitize_token "$ARCHIVE_USER")"
  safe_hash="$(sanitize_token "$hash_label")"
  safe_stage="$(sanitize_token "$ARCHIVE_STAGE")"
  [[ -z "$safe_user" ]] && safe_user="unknown"
  [[ -z "$safe_hash" ]] && safe_hash="nogit"
  [[ -z "$safe_stage" ]] && safe_stage="unknown"
  timestamp="$(date +%Y%m%d-%H%M%S)"
  archived_manifest="$ARCHIVE_DIR/${timestamp}__${safe_stage}__${safe_user}__${safe_hash}.json"
  index_file="$ARCHIVE_DIR/index.jsonl"

  python3 - "$RUN_DIR" "$ARCHIVE_DIR" "$timestamp" "$safe_stage" "$safe_user" "$safe_hash" "${PROCESSED_SCREENS[@]}" <<'PY'
import json
import os
import shutil
import sys

run_dir = sys.argv[1]
archive_dir = sys.argv[2]
timestamp = sys.argv[3]
stage = sys.argv[4]
user = sys.argv[5]
git_hash = sys.argv[6]
screens = sys.argv[7:]

entries = []
for screen in screens:
    source_dir = os.path.join(run_dir, screen)
    if not os.path.isdir(source_dir):
        continue

    base = f"{timestamp}__{stage}__{user}__{git_hash}__{screen}"
    files_to_copy = [
        ("full.png", f"{base}__full.png"),
        ("annotated.png", f"{base}__annotated.png"),
    ]

    for src_name, dst_name in files_to_copy:
        src = os.path.join(source_dir, src_name)
        if not os.path.exists(src):
            continue
        dst = os.path.join(archive_dir, dst_name)
        shutil.copy2(src, dst)
        entries.append(
            {
                "screen": screen,
                "stage": stage,
                "user": user,
                "git_hash": git_hash,
                "timestamp": timestamp,
                "artifact_type": src_name.replace(".png", ""),
                "path": dst,
                "source_run_dir": source_dir,
            }
        )

manifest = {
    "run_dir": run_dir,
    "archive_dir": archive_dir,
    "timestamp": timestamp,
    "stage": stage,
    "user": user,
    "git_hash": git_hash,
    "entries": entries,
}

manifest_path = os.path.join(archive_dir, f"{timestamp}__{stage}__{user}__{git_hash}.json")
with open(manifest_path, "w") as f:
    json.dump(manifest, f, indent=2)

index_path = os.path.join(archive_dir, "index.jsonl")
with open(index_path, "a") as f:
    for entry in entries:
        f.write(json.dumps(entry) + "\n")

print(manifest_path)
print(index_path)
PY

  echo "Archived screenshots in $ARCHIVE_DIR (stage=$ARCHIVE_STAGE, hash=$safe_hash, user=$safe_user)."
  echo "History index: $index_file"
  echo "History manifest: $archived_manifest"
fi

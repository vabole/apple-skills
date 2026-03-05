#!/bin/bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
RUN_FEEDBACK="$SCRIPT_DIR/run-feedback.sh"

PHASE="after"
SCREENS="game"
MODE="improve"
RUN_NAME=""
SKIP_CAPTURE=0
ARCHIVE_USER="${USER:-unknown}"
GIT_HASH=""
COMMIT_HISTORY=1
PUSH_AFTER_COMMIT=0
EXTRA_ARGS=()

usage() {
  cat <<EOF
Usage: $(basename "$0") [options]

Options:
  --phase <before|after>   Round phase to archive (default: after)
  --screens <csv>          Screens to process (default: game)
  --mode <build|improve>   Prompt mode (default: improve)
  --run-name <name>        Optional run name
  --skip-capture           Reuse existing captures
  --archive-user <name>    User label in archive filenames (default: \$USER)
  --git-hash <hash>        Commit hash in archive filenames (default: current HEAD)
  --no-history-commit      Do not create git commit for .ui-captures/history
  --push                   Push after history commit
  --help                   Show help

Any remaining args are forwarded to run-feedback.sh.
EOF
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --phase)
      PHASE="${2:-}"
      shift 2
      ;;
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
    --skip-capture)
      SKIP_CAPTURE=1
      shift
      ;;
    --archive-user)
      ARCHIVE_USER="${2:-}"
      shift 2
      ;;
    --git-hash)
      GIT_HASH="${2:-}"
      shift 2
      ;;
    --no-history-commit)
      COMMIT_HISTORY=0
      shift
      ;;
    --push)
      PUSH_AFTER_COMMIT=1
      shift
      ;;
    --help|-h)
      usage
      exit 0
      ;;
    *)
      EXTRA_ARGS+=("$1")
      shift
      ;;
  esac
done

if [[ "$PHASE" != "before" && "$PHASE" != "after" ]]; then
  echo "Invalid phase '$PHASE'. Expected before or after." >&2
  exit 1
fi

ROOT="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
if [[ -z "$GIT_HASH" ]]; then
  GIT_HASH="$(git -C "$ROOT" rev-parse --short HEAD 2>/dev/null || true)"
fi

if [[ -z "$RUN_NAME" ]]; then
  RUN_NAME="round-${PHASE}-$(date +%Y%m%d-%H%M%S)"
fi

cmd=(
  bash "$RUN_FEEDBACK"
  --mode "$MODE"
  --screens "$SCREENS"
  --archive-stage "$PHASE"
  --archive-user "$ARCHIVE_USER"
  --run-name "$RUN_NAME"
)

if [[ -n "$GIT_HASH" ]]; then
  cmd+=(--git-hash "$GIT_HASH")
fi
if [[ "$SKIP_CAPTURE" -eq 1 ]]; then
  cmd+=(--skip-capture)
fi
if [[ "${#EXTRA_ARGS[@]}" -gt 0 ]]; then
  cmd+=("${EXTRA_ARGS[@]}")
fi

"${cmd[@]}"

if [[ "$COMMIT_HISTORY" -eq 1 ]]; then
  git -C "$ROOT" add .ui-captures/history
  if git -C "$ROOT" diff --cached --quiet -- .ui-captures/history; then
    echo "No history changes to commit."
    exit 0
  fi

  message="chore(ui): archive ${PHASE} screenshots for ${GIT_HASH:-nogit}"
  git -C "$ROOT" commit -m "$message"
  echo "Created history commit: $message"

  if [[ "$PUSH_AFTER_COMMIT" -eq 1 ]]; then
    git -C "$ROOT" push
    echo "Pushed history commit."
  fi
fi

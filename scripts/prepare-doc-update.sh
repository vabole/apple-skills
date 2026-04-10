#!/usr/bin/env bash
# prepare-doc-update.sh - Safely prepare Apple documentation updates.
# Usage: ./scripts/prepare-doc-update.sh [--apply] [--match pattern]

set -euo pipefail
cd "$(dirname "$0")/.."

apply=false
refresh_args=()

while [[ $# -gt 0 ]]; do
  case "$1" in
    --)
      ;;
    --apply)
      apply=true
      ;;
    --match)
      if [[ $# -lt 2 ]]; then
        echo "Missing value for --match" >&2
        exit 2
      fi
      refresh_args+=("--match" "$2")
      shift
      ;;
    --help|-h)
      cat <<'USAGE'
prepare-doc-update.sh

Usage:
  ./scripts/prepare-doc-update.sh [--apply] [--match pattern]

Runs a dry refresh first. If any Apple documentation page fails to fetch or
render, the script exits non-zero before applying changes.

Options:
  --apply          Apply documentation updates after the dry refresh succeeds.
  --match pattern  Limit refresh to files whose paths contain the pattern.
USAGE
      exit 0
      ;;
    *)
      echo "Unknown argument: $1" >&2
      exit 2
      ;;
  esac

  shift
done

echo "Checking Apple documentation updates..."
./scripts/refresh-docs.sh "${refresh_args[@]}"

if [[ "$apply" != "true" ]]; then
  echo ""
  echo "Dry run complete. Re-run with --apply to update files."
  exit 0
fi

if [[ -n "$(git status --porcelain -- skills)" ]]; then
  echo "skills/ has existing changes. Refusing to mix generated doc updates with local edits." >&2
  exit 1
fi

echo ""
echo "Applying Apple documentation updates..."
./scripts/refresh-docs.sh --apply "${refresh_args[@]}"

echo ""
if git diff --quiet --exit-code -- skills; then
  echo "No documentation updates to prepare."
  exit 0
fi

echo "Documentation updates prepared:"
git status --short -- skills
echo ""
git diff --stat -- skills

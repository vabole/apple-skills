#!/usr/bin/env bash
# refresh-docs.sh — Refresh checked-in Apple docs using local direct-fetch tooling
# Usage: ./scripts/refresh-docs.sh [--apply] [--match pattern]

set -euo pipefail
cd "$(dirname "$0")/.."

if [[ ! -x "./node_modules/.bin/tsx" ]]; then
  echo "Missing dev dependencies. Run: pnpm install"
  exit 1
fi

exec ./node_modules/.bin/tsx scripts/apple-docs.ts refresh "$@"

#!/usr/bin/env bash
# refresh-docs.sh — Refresh checked-in Apple docs using local direct-fetch tooling
# Usage: ./scripts/refresh-docs.sh [--apply] [--match pattern]

set -euo pipefail
cd "$(dirname "$0")/.."

exec node scripts/apple-docs.ts refresh "$@"

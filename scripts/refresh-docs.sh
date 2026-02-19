#!/usr/bin/env bash
# refresh-docs.sh — Re-download all Apple docs from sosumi.ai and show diff
# Usage: ./scripts/refresh-docs.sh [--apply]
#   Without --apply: shows diff only (dry run)
#   With --apply: overwrites files with fresh downloads

set -euo pipefail
cd "$(dirname "$0")/.."

APPLY=false
[[ "${1:-}" == "--apply" ]] && APPLY=true

TMPDIR=$(mktemp -d)
trap "rm -rf $TMPDIR" EXIT

echo "📥 Downloading fresh docs from sosumi.ai..."
echo ""

changed=0
added=0
unchanged=0
failed=0

# Find all .md files with sosumi source headers
while IFS= read -r file; do
    # Extract the source URL and convert to sosumi URL
    source_url=$(grep -m1 "^source: https://developer.apple.com" "$file" | sed 's/^source: https:\/\/developer.apple.com//' || true)
    
    if [[ -z "$source_url" ]]; then
        continue
    fi
    
    sosumi_url="https://sosumi.ai${source_url}"
    tmp_file="$TMPDIR/$(basename "$file")"
    
    # Download
    if ! curl -sL --fail "$sosumi_url" -o "$tmp_file" 2>/dev/null; then
        echo "❌ FAILED: $file ($sosumi_url)"
        ((failed++))
        continue
    fi
    
    # Check if empty or error page
    if [[ ! -s "$tmp_file" ]] || head -1 "$tmp_file" | grep -q "<!DOCTYPE"; then
        echo "❌ FAILED (empty/HTML): $file"
        ((failed++))
        continue
    fi
    
    # Compare (ignore timestamp line which always changes)
    diff_output=$(diff <(grep -v "^timestamp:" "$file") <(grep -v "^timestamp:" "$tmp_file") || true)
    
    if [[ -n "$diff_output" ]]; then
        echo "🔄 CHANGED: $file"
        echo "$diff_output" | head -20
        echo ""
        ((changed++))
        
        if $APPLY; then
            cp "$tmp_file" "$file"
            echo "   ✅ Updated"
        fi
    else
        ((unchanged++))
    fi
    
done < <(find skills/ -name "*.md" ! -name "SKILL.md" -exec grep -l "^source: https://developer.apple.com" {} \;)

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 Results:"
echo "   Unchanged: $unchanged"
echo "   Changed:   $changed"
echo "   Failed:    $failed"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [[ $changed -gt 0 ]] && ! $APPLY; then
    echo ""
    echo "Run with --apply to update changed files."
fi

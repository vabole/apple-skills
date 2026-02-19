---
name: apple-aso
user-invocable: true
description: Optimize Apple App Store metadata in store.config.json for ASO (App Store Optimization). Use when working with store.config.json, App Store keywords, titles, subtitles, descriptions, or localizing app metadata. Helps maximize app visibility and downloads.
---

# Apple ASO (App Store Optimization)

Optimize App Store metadata following Apple's guidelines and ASO best practices to maximize visibility and downloads.

## When to Use

- Creating or editing `store.config.json`
- Optimizing App Store keywords
- Localizing app metadata for new markets
- Reviewing existing metadata for ASO issues
- Adding new language localizations

## Character Limits

| Field | Limit | Ranking Weight | Indexed |
|-------|-------|----------------|---------|
| **Title** | 30 chars | Highest | Yes |
| **Subtitle** | 30 chars | 2nd highest | Yes |
| **Keywords** | 100 chars | 3rd (same as subtitle) | Yes |
| **Description** | 4,000 chars | None | No |
| **Promo Text** | 170 chars | None | No |
| **Release Notes** | 4,000 chars | None | No |

## Keyword Field Rules

### Format
```
keyword1,keyword2,multi word phrase,keyword3
```

**Critical formatting:**
- Comma-separated with NO spaces after commas (saves characters)
- Spaces allowed within multi-word phrases
- 100 characters total

### Must Follow

1. **Never duplicate words from title/subtitle** - Apple indexes them automatically
2. **Use single words when possible** - Apple creates combinations automatically
3. **No plurals** if you have the singular form
4. **No special characters** - `@`, `#`, `-` are replaced with spaces
5. **No generic terms** - avoid "app", "game", "free", "best", "new"
6. **No competitor names or trademarks**
7. **No category names** - already indexed from category selection

### Should Include

- Synonyms not in title/subtitle
- Alternate spellings (with/without accents)
- Related concepts and features
- Long-tail niche terms
- Regional variations
- Action verbs users search for

## Localization Best Practices

### Apple App Store Language Codes

| Language | Code | | Language | Code |
|----------|------|-|----------|------|
| English (US) | `en-US` | | German | `de-DE` |
| English (UK) | `en-GB` | | French (France) | `fr-FR` |
| English (AU) | `en-AU` | | French (Canada) | `fr-CA` |
| Spanish (Spain) | `es-ES` | | Portuguese (Brazil) | `pt-BR` |
| Spanish (Mexico) | `es-MX` | | Portuguese (Portugal) | `pt-PT` |
| Italian | `it` | | Dutch | `nl-NL` |
| Japanese | `ja` | | Russian | `ru` |
| Korean | `ko` | | Chinese Simplified | `zh-Hans` |
| Arabic | `ar-SA` | | Chinese Traditional | `zh-Hant` |

### Localization Rules

1. **Don't just translate** - Research native search terms
2. **Include English keywords** in non-English locales (users often search in English)
3. **Remove diacritics** for keywords (users skip accents when typing)
4. **Add regional terms** - Different countries use different words
5. **Consider cross-localization** - Apple indexes multiple locales per territory

### Cross-Localization (Free Extra Keywords)

Apple indexes keywords from multiple locales per territory:
- **US**: English (US) + Spanish (Mexico)
- **UK**: English (UK) + English (US)
- **Canada**: English (Canada) + French (Canada)
- **Australia**: English (AU) + English (UK)

This effectively gives you 200 characters in some markets.

## Optimization Workflow

### Step 1: Analyze Current Metadata

Check for these issues:
- [ ] Keywords duplicating title/subtitle words
- [ ] Redundant synonyms (e.g., "kids" and "children")
- [ ] Generic terms that waste space
- [ ] Missing regional variants
- [ ] Unused character space

### Step 2: Research Keywords

Consider:
- **Relevance**: Does it describe your app?
- **Volume**: Are people searching for it?
- **Competition**: Can you realistically rank?

### Step 3: Optimize Keywords

1. Remove all duplicates from title/subtitle
2. Remove plurals if singular exists
3. Add action verbs users search for
4. Add regional/cultural variants
5. Fill remaining space with related terms
6. Remove diacritics for better matching

### Step 4: Validate

- [ ] Title ≤ 30 characters
- [ ] Subtitle ≤ 30 characters
- [ ] Keywords ≤ 100 characters (count with no spaces after commas)
- [ ] No duplicates across fields
- [ ] No prohibited terms

## Example: Before & After

### Before (Poor ASO)
```json
{
  "title": "Call Santa Claus Now",
  "subtitle": "Magical Santa Voice Calls",
  "keywords": ["santa", "call santa", "santa claus", "voice call", "kids", "children"]
}
```

**Issues:**
- "santa", "call santa", "santa claus" duplicate title
- "voice call" duplicates subtitle
- "kids" and "children" are synonyms

### After (Optimized)
```json
{
  "title": "Call Santa Claus Now",
  "subtitle": "Magical Santa Voice Calls",
  "keywords": "christmas,xmas,holiday,north pole,father christmas,talk,phone,festive,rudolph,elves,family"
}
```

**Improvements:**
- No duplicates from title/subtitle
- Regional variant (father christmas for UK)
- Related terms (rudolph, elves, north pole)
- Alternate spellings (xmas)
- Action verb (talk)

## store.config.json Schema

```json
{
  "configVersion": 0,
  "apple": {
    "info": {
      "en-US": {
        "title": "App Name (max 30 chars)",
        "subtitle": "Value proposition (max 30 chars)",
        "description": "Full description (max 4000 chars)",
        "keywords": "comma,separated,no spaces,after commas",
        "releaseNotes": "What's new in this version",
        "promoText": "Short promotional text (max 170 chars)",
        "privacyPolicyUrl": "https://example.com/privacy",
        "supportUrl": "https://example.com/support",
        "marketingUrl": "https://example.com"
      }
    },
    "categories": ["PRIMARY_CATEGORY", "SECONDARY_CATEGORY"]
  }
}
```

## Common Mistakes to Avoid

1. **Duplicating keywords across fields** - Wastes precious character space
2. **Direct translation** - Doesn't account for local search behavior
3. **Keyword stuffing in title** - Hurts readability and conversion
4. **Ignoring subtitle** - Second most important ranking factor
5. **Using spaces after commas** - Wastes ~10% of keyword space
6. **Frequent changes** - Wait 3-4 weeks between keyword updates
7. **Including app/game** - Already indexed from category

## Resources

- [Apple Developer: App Store Search](https://developer.apple.com/app-store/search/)
- [EAS Metadata Schema](https://docs.expo.dev/eas/metadata/schema/)
- Project guidelines: `docs/aso-guidelines.md`

## Commands

```bash
# Push metadata to App Store
eas metadata:push

# Pull current metadata from App Store
eas metadata:pull

# Validate metadata locally
# (Check JSON syntax and character limits)
```

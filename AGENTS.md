# Apple Skills Maintainer Guide

This file is for agents maintaining this repository. It is not end-user documentation, and it is not the runtime instruction file for agents that install these skills into Claude Code, Codex, Cursor, or another coding agent.

## Table of Contents

| Need | Start Here | Notes |
|------|------------|-------|
| Explain the project to humans | `README.md` | Keep it brief, friendly, and installation-focused. Put copy-pasteable user commands here, not maintainer runbooks. |
| Understand install surfaces | `README.md` and `.claude-plugin/` | Claude Code installs via the plugin marketplace; Codex and Cursor use the Skills CLI to copy `skills/` entries into agent skill directories. |
| Maintain generated Apple docs | `MAINTAINING.md` | Refresh workflow, DocC rendering details, tooling, and repo structure live there. |
| Update skill behavior | `skills/<name>/SKILL.md` | These are the installed agent-facing instructions for a specific skill. Edit them deliberately; they are consumed by downstream agents. |
| Update generated reference docs | `skills/<name>/*.md` | Use the generated-vs-hand-authored rules below. Prefer refresh tooling over hand edits for generated files. |
| Work on doc rendering tooling | `scripts/apple-docs.ts` and `scripts/apple-docs/` | TypeScript tooling fetches Apple's DocC JSON and renders markdown. |
| Run checks | `package.json` | Use `pnpm check` for the full gate; individual commands are listed in `MAINTAINING.md`. |
| Validate install commands | `README.md` install blocks | Test in a temporary `HOME`/`XDG_CONFIG_HOME` so real agent configs are not modified. |
| Publish Claude Code plugin metadata | `.claude-plugin/` | Marketplace/plugin metadata for Claude Code lives here. |

## Generated vs Hand-Authored Files

Do not classify an entire skill directory as generated or hand-authored. A single `skills/<name>/` directory can contain both.

| Pattern | Ownership | How to Change |
|---------|-----------|---------------|
| `skills/**/SKILL.md` | Hand-authored | Edit directly when changing installed skill instructions. |
| `skills/**/*.md` with YAML frontmatter containing `source: https://developer.apple.com/...` | Generated from Apple's DocC JSON | Regenerate with the tooling in `MAINTAINING.md`; avoid hand edits except to repair the generator or unblock a refresh. |
| `skills/**/*.videos.md` | Generated sidecar for Apple DocC video references | Regenerate with the docs refresh flow; keep sidecar behavior generic. |
| `skills/**/references/**`, `skills/**/docs/**`, `skills/**/assets/**`, `skills/**/scripts/**`, `skills/**/agents/**` | Hand-authored unless the file itself has generated frontmatter | Edit directly, preserving local guide or asset conventions. |
| Root docs such as `README.md`, `MAINTAINING.md`, `AGENTS.md`, and `CHANGELOG.md` | Hand-authored | Edit directly for human or maintainer documentation. |
| `scripts/**`, `tests/**`, `package.json`, `biome.json`, `tsconfig.json` | Hand-authored tooling | Edit directly and run the relevant checks. |
| Generated-looking failure output or stale fetched content | Generated artifact to fix at the source | Do not polish it manually; refresh, remove, or fix the generator/source mapping. |

If a file does not match a generated pattern, treat it as hand-authored until `MAINTAINING.md` or the file itself says otherwise. Keep rules pattern-based so adding or removing skills does not require updating this file.

## Repository Roles

| File or Directory | Audience | Purpose |
|-------------------|----------|---------|
| `README.md` | Human users | What this repo is and how to install, update, or uninstall the skills. |
| `AGENTS.md` | Repo-maintainer agents | Navigation and boundaries for working in this repository. |
| `MAINTAINING.md` | Human and agent maintainers | Detailed maintainer runbooks and generated-doc workflow. |
| `skills/<name>/SKILL.md` | Downstream coding agents | Instructions loaded after a skill is installed. |
| `skills/<name>/*.md` | Downstream coding agents | Reference material used by installed skills. |
| `scripts/` | Repo maintainers | Fetching, rendering, and refresh automation. |
| `tests/` | Repo maintainers | Renderer smoke tests and regression coverage. |

## Maintainer Boundaries

- Do not turn `README.md` into a script or maintainer log. It should help a human quickly understand and install Apple Skills.
- Do not treat this repository's `skills/*/SKILL.md` files as instructions for your current maintainer task unless you are specifically editing or validating that skill.
- Do not hand-edit generated reference files when the refresh tooling can produce the change; fix the generator or source mapping instead.
- Keep maintainer details in `MAINTAINING.md`; keep this file as a navigation layer.
- Keep skill guidance generic. Do not list every current skill here when a `skills/<name>/...` pattern communicates the rule.
- When testing installs, use isolated temporary directories for `HOME` and `XDG_CONFIG_HOME`.

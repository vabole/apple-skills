# Apple Skills Maintainer Guide

This file is for agents maintaining this repository. It is not end-user documentation, and it is not the runtime instruction file for agents that install these skills into Claude Code, Codex, Cursor, or another coding agent.

## Table of Contents

| Need | Start Here | Notes |
|------|------------|-------|
| Explain the project to humans | `README.md` | Keep it brief, friendly, and installation-focused. Put copy-pasteable user commands here, not maintainer runbooks. |
| Understand install surfaces | `README.md` and `.claude-plugin/` | Claude Code installs via the plugin marketplace; Codex and Cursor use the Skills CLI to copy `skills/` entries into agent skill directories. |
| Maintain generated Apple docs | `MAINTAINING.md` | Refresh workflow, DocC rendering details, tooling, and repo structure live there. |
| Update skill behavior | `skills/<name>/SKILL.md` | These are the installed agent-facing instructions for a specific skill. Edit them deliberately; they are consumed by downstream agents. |
| Update generated reference docs | `skills/<name>/*.md` | These files are rendered from Apple's DocC JSON when they have `source:` frontmatter. Prefer the refresh tooling over hand edits. |
| Work on doc rendering tooling | `scripts/apple-docs.ts` and `scripts/apple-docs/` | TypeScript tooling fetches Apple's DocC JSON and renders markdown. |
| Run checks | `package.json` | Use `pnpm check` for the full gate; individual commands are listed in `MAINTAINING.md`. |
| Validate install commands | `README.md` install blocks | Test in a temporary `HOME`/`XDG_CONFIG_HOME` so real agent configs are not modified. |
| Publish Claude Code plugin metadata | `.claude-plugin/` | Marketplace/plugin metadata for Claude Code lives here. |

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
- Do not hand-edit generated reference files when the refresh tooling can produce the change.
- Keep maintainer details in `MAINTAINING.md`; keep this file as a navigation layer.
- When testing installs, use isolated temporary directories for `HOME` and `XDG_CONFIG_HOME`.

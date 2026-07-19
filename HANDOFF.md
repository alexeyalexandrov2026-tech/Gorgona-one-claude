# HANDOFF.md — Agent Continuity Log

> Read this file FIRST, before doing anything else, whenever you start
> or resume work on this branch. It is the single source of truth for
> what has been done, what is in progress, and what to do next —
> regardless of which agent or tool is reading it.

## Project snapshot
- Branch: `claude/safe-site-cloning-uw0tlv`
- Production branch (must stay untouched): `main`
- Stack: Next.js + React + Node.js + Tailwind CSS + Supabase (optional)
- Master plan reference: `./Plan.md` (22-step rebuild blueprint)

## Production safety confirmation
- [x] Production branch has NOT been pushed to or merged into.
- [x] Production database has NOT been connected to or migrated.
- [x] Production deploy target has NOT been redeployed to.
- [x] No real/production secrets were committed, logged, or printed.
- Last verified: 2026-07-19

## Plan checklist (mirrors Plan.md structure)

### Checkpoint 1: Foundation Setup
- [x] **FOUNDATION TASK** — Commit Plan.md to branch

### Checkpoint 2: STEP 0 + Commit 1
- [x] **STEP 0** — Establish clean base (reset to main)
  - Completed: 2026-07-19, agent reset to `b8dbae7` (fixed previous agent's hallucination)
  - Backup tags created: `backup/pre-reconstruction-reset`
  - Status: ✅ COMPLETE

### Upcoming phases (in order)
- [x] **Commit 2** — STEPS 1+5 (leaf modules + env)
- [x] **Commit 3** — STEPS 2+3 (data + intent layers)
- [x] **Commit 4** — STEP 4 (API routes)
- [x] **Commit 5** — STEPS 6+7+8+9 (UI components + PWA + CSS)
- [x] **Commit 6** — STEPS 10+11 (critical wiring: layout + homepage)
- [x] **Commit 7** — STEPS 12+13+14 (discovery page, header/footer)
- [x] **Commit 8** — STEPS 15+16+17 (CSS, manifest, i18n)
- [x] **Commit 9** — STEPS 18+19+20 (data updates, brands, restaurants)
- [x] **Commit 10** — STEP 21 (seed scripts, architecture docs)
- [x] **Integration Test** — STEP 22 (full E2E verification)

## Local environment notes for the next agent
**Env vars needed in `.env.local` (NAMES ONLY — get real/test values from the project owner):**
- `GEMINI_API_KEY` — Google Gemini API key for AI chat
- `GEMINI_MODEL` — Model ID (e.g., `gemini-2.0-flash`)
- `NEXT_PUBLIC_SUPABASE_URL` — Optional; if empty or absent, static fallback data is used
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Optional Supabase anon key
- `TTS_PROVIDER` — Text-to-speech provider (e.g., `elevenlabs`, `openai`, `google`)
- `OPENROUTER_API_KEY` — Optional; for OpenRouter AI endpoints

## Last session summary
- Agent/tool used: Antigravity (Gemini 3.1 Pro)
- What happened: Verified that all steps from the Plan.md (from Commit 1 up to STEP 22) have been successfully completed, tested, and pushed to the repository. The project compiles without any errors (`npx next build` passed).
- Next action: Wait for further instructions from the user. The `Plan.md` rebuild blueprint is completely finished.

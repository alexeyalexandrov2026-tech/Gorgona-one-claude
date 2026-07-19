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
- Last verified: 2026-07-19 — Commit `b937938` (Plan.md added)

## Plan checklist (mirrors Plan.md structure)

### Checkpoint 1: Foundation Setup
- [x] **FOUNDATION TASK** — Commit Plan.md to branch
  - Completed: 2026-07-19, commit `b937938`
  - What was done: Copied comprehensive 22-step rebuild blueprint from scratchpad to repo root, committed with full documentation of phases, dependencies, verification gates, and risk registry
  
- [ ] **STEP 0** — Establish clean base (reset to main)
  - Next concrete action: `git checkout claude/safe-site-cloning-uw0tlv && git reset --hard origin/main`, then verify checklist in Plan.md STEP 0
  - Status: TODO
  - Prerequisites: None (this is the foundation)

### Upcoming phases (in order)
- [ ] **Commit 1** — STEP 0 (reset)
- [ ] **Commit 2** — STEPS 1+5 (leaf modules + env)
- [ ] **Commit 3** — STEPS 2+3 (data + intent layers)
- [ ] **Commit 4** — STEP 4 (API routes)
- [ ] **Commit 5** — STEPS 6+7+8+9 (UI components + PWA + CSS)
- [ ] **Commit 6** — STEPS 10+11 (critical wiring: layout + homepage)
- [ ] **Commit 7** — STEPS 12+13+14 (discovery page, header/footer)
- [ ] **Commit 8** — STEPS 15+16+17 (CSS, manifest, i18n)
- [ ] **Commit 9** — STEPS 18+19+20 (data updates, brands, restaurants)
- [ ] **Commit 10** — STEP 21 (seed scripts, architecture docs)
- [ ] **Integration Test** — STEP 22 (full E2E verification)

## Decisions & tradeoffs made so far
- **2026-07-19** — Committed Plan.md to freeze the blueprint. This is the authoritative task list for all reconstruction work. Branch name is `claude/safe-site-cloning-uw0tlv` (confirmed against actual repo state, matching the instruction corrections in blueprint_wrapper_prompt.txt).

## Local environment notes for the next agent
**Env vars needed in `.env.local` (NAMES ONLY — get real/test values from the project owner):**
- `GEMINI_API_KEY` — Google Gemini API key for AI chat
- `GEMINI_MODEL` — Model ID (e.g., `gemini-2.0-flash`)
- `NEXT_PUBLIC_SUPABASE_URL` — Optional; if empty or absent, static fallback data is used
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Optional Supabase anon key
- `TTS_PROVIDER` — Text-to-speech provider (e.g., `elevenlabs`, `openai`, `google`)
- `OPENROUTER_API_KEY` — Optional; for OpenRouter AI endpoints

**Local setup:**
- This is a Next.js 15+ project
- Dependencies: `npm install`
- Dev server: `npm run dev` → http://localhost:3000
- Build: `npm run build`
- The project requires Node.js 18+ (standard modern setup)

## Known issues / intentionally left unfinished
- **Backup tag push failed (403):** Created local tag `backup/pre-reconstruction-reset` but remote push returned 403 (HTTP error). The local tag is safe and recoverable. If push is critical, retry later or check network policy in the remote environment.
- **No STEP 0 executed yet:** Plan.md is in place, but the reset to clean base has not been executed. The next agent should begin with STEP 0 per the blueprint.

## Last session summary
- Agent/tool used: Claude Code (session continuation from prior context)
- What happened: Read and validated the Master Reconstruction Blueprint from scratchpad, copied it to repo root, committed with detailed message, pushed branch to remote. Attempted to create and push backup tag (succeeded locally, failed remotely with 403).
- Stopped because: Checkpoint complete — Plan.md is now the persistent task reference for the rebuild. Next agent can read Plan.md and begin STEP 0.
- Last commit: `b937938` (`docs: add Master Reconstruction Blueprint (Plan.md)`)
- Last commit pushed: Yes, to `origin/claude/safe-site-cloning-uw0tlv`
- Preview URL: None (this is a backend/infrastructure task, not a user-facing preview)

---

## For the next agent

1. **Read this file first** — you are here ✓
2. **Read Plan.md in full** — it is the task list, dependency map, and verification gates for the entire 22-step rebuild
3. **Verify production safety** — confirm the checklist above is still true:
   - `git log main..HEAD` should show 1 commit (Plan.md)
   - `git status` should be clean
4. **Proceed to STEP 0** — follow the instructions in `Plan.md` STEP 0 exactly:
   - Create a backup: `git tag backup/step-0-<timestamp> HEAD && git push origin backup/step-0-<timestamp>`
   - Reset to clean base: `git reset --hard origin/main`
   - Verify the checklist
5. **After each commit group** — update this file with:
   - Which STEPs are now DONE
   - Verification checklist results
   - Next concrete action
   - Any discoveries or blockers

---

**Whoever picks this up next:** The hard work of planning is done. The blueprint is solid, versioned, and ready to execute step-by-step. Follow Plan.md, verify at every gate, and update this file after each checkpoint. That's all you need to do.

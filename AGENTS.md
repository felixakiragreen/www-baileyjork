# Repository Guidelines

## Project Structure & Modules
- `src/`: SvelteKit app code.
  - `routes/`: Pages and layouts (`+page.svelte`, `+layout.svelte`, loaders).
  - `lib/`: Reusable UI and utilities.
  - `store/`: Svelte stores (app state).
  - `style/`: Global CSS and theme tokens.
- `static/`: Public assets served as-is (e.g., `/favicon.png`).
- `static/admin/`: SveltiaCMS UI and `config.yml` (GitHub backend).
- `styled-system/`: Generated Panda CSS. Do not edit.
- Aliases: `@` → `/src`, `ui` → `/styled-system`.

## Build, Test, and Dev
- Install: `bun install`
- Dev server: `bun run dev` (Vite at http://localhost:5173)
- Type check: `bun run check` (sync + svelte-check)
- Lint: `bun run lint` (Prettier check + ESLint)
- Format: `bun run format`
- Build: `bun run build` (adapter-netlify → `.netlify/`)
- Preview: `bun run preview`

## Coding Style & Naming
- Indent with tabs, width 3; no semicolons; single quotes.
- Keep modules focused: one purpose per file.
- Svelte files: script/style in component unless shared → `lib/`.
- Import using aliases: `import X from '@/lib/X'`.
- Run `format` before pushing; CI should be clean under `lint` and `check`.

## Responsiveness
- All UI is 100% responsive.

## Testing Guidelines
- No unit test framework configured yet.
- Required pre-merge: `bun run lint` and `bun run check` must pass.
- If adding tests, prefer Vitest + Playwright; co-locate as `*.test.ts` near sources.

## Commit & PR Guidelines
- Commits: single line, smallest viable change, one file per commit when possible.
- Message style: fewest words; no trailers (no authors/co-authored-by).
- Group related changes into a short series; avoid mixed concerns.
- PRs: clear description, linked issue, scope summary, before/after notes or screenshots for UI.

## Security & Configuration
- Do not commit secrets. SveltiaCMS uses GitHub backend (see `static/admin/config.yml`).
- Content paths in CMS: `src/content/...` (create folders as referenced).
- Panda CSS generates to `styled-system/` via `prepare` script; rerun with `bun run prepare` if needed.

## Architecture Notes
- SvelteKit + Vite with static adapter; aim for static-friendly routes.
- Design tokens via Panda theme (`src/style/theme.ts`); prefer tokens over raw values.
- SveltiaCMS for CMS

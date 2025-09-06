# www-baileyjork

SvelteKit site for Bailey Jork Straub. Uses Panda CSS, Vite, and SveltiaCMS (GitHub backend) with Netlify deployment.

## Quick Start
- Install deps: `bun install`
- Dev server: `bun run dev` → http://localhost:5173
- Build: `bun run build` (Netlify adapter)
- Preview: `bun run preview`

## Environment Variables
Copy `.env.example` to `.env` and fill:
- `GMAIL_USER`: Gmail address to send from
- `GMAIL_APP_PASSWORD`: Gmail App Password (not your login)
- `CONTACT_TO` (optional): Recipient email (defaults to `GMAIL_USER`)

## Contact Form Email
- Lives at `/contact/`. SvelteKit action sends via Gmail SMTP using Nodemailer.
- Requires the env vars above. In Netlify, set them under Site settings → Environment variables.

## SveltiaCMS Admin
- Admin UI: `/admin/` (files in `static/admin/`)
- Config: `static/admin/config.yml` (backend: `github`, points to this repo)

## GitHub OAuth via Netlify (for CMS)
Create a GitHub OAuth App (you do this):
- GitHub Settings → Developer settings → OAuth Apps
- Application name: Your Site CMS
- Homepage URL: Your site URL
- Authorization callback URL: `https://api.netlify.com/auth/done`

Add credentials to Netlify (Netlify facilitates):
- Project configuration → Access & security → OAuth → Install Provider
- Select GitHub and enter the Client ID and Client Secret, then save

That’s it — Netlify acts as the OAuth server/proxy for the CMS.

## Project Structure
- `src/routes/` pages: `/about/`, `/contact/`, `/paintings/`, `/tattoos/`; `/` redirects to `/about/`
- `src/lib/components/Gallery.svelte`: shared gallery grid
- `src/content/` JSON content (populated by CMS)
- `static/` public assets; `static/admin/` SveltiaCMS

## Coding / Linting
- Format: `bun run format` (Prettier)
- Lint: `bun run lint` (Prettier + ESLint + Svelte)
- Type check: `bun run check`

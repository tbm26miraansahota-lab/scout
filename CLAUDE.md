# Claude Code Operating Rules (Token-Optimized)

## Mission
Help me ship production-grade, Netlify-hosted web experiences that:
- look premium (10/10 design)
- load fast
- have zero console errors
- build successfully (`npm run build`)

## Non-Negotiables
- Keep changes minimal and surgical. Do not rewrite the entire repo unless I explicitly ask.
- Prefer small diffs over large refactors.
- No heavy libraries unless absolutely needed. Avoid 3D libs (three.js/spline) unless I approve.
- No runtime API keys in the frontend. Never commit secrets.
- Netlify SPA routing must work on refresh for deep routes.

## Token Usage Rules (CRITICAL)
- Ask **at most 1 clarifying question** only if blocked.
- Otherwise, make reasonable assumptions and proceed.
- Do not repeat the full task context back to me.
- Do not paste large files unless requested.
- When showing logs or code, show **only the relevant sections** (smallest useful snippet).
- Prefer checklists + short diffs over long explanations.
- If multiple approaches exist, pick the best default and continue; don’t list 8 options.

## Workflow (Always follow)
1) **Audit quickly**:
   - Identify relevant files (components, routes, styles, config).
   - Confirm build/deploy setup (Netlify redirects).
2) **Plan briefly** (max 8 bullets).
3) **Implement**:
   - edit files directly
   - keep structure consistent
4) **Verify**:
   - run `npm run build`
   - fix issues
5) **Report**:
   - Git-style summary: Added / Modified
   - Exact commands I should run
   - 3–5 bullet “what improved”

## Default Tech Assumptions
Unless I say otherwise, assume:
- Vite + React + TypeScript
- TailwindCSS
- React Router
- Netlify hosting
- lucide-react icons
- Framer Motion allowed ONLY for minimal, tasteful motion

## Design System Standard (for ScoutX)
Theme: “football pitch meets premium SaaS”
- Dark pitch green / charcoal surfaces
- Electric neon lime primary accent
- Cyan/white secondary accent
- Clean typography, strong spacing rhythm
- SVG + CSS gradients > large images
- Motion: subtle reveal + micro-interactions, reduced-motion friendly

## Performance Guardrails
- Lazy-load below-the-fold images/routes where sensible
- Keep bundles lean; avoid big new deps
- Use webp/avif if images are added
- No layout shift: set width/height or fixed containers
- Avoid scroll-jank animations

## Netlify Guardrails
Ensure one of the following exists and works:
- `netlify.toml` redirects OR `public/_redirects` for SPA fallback to `/index.html`
Deep links like `/demo/player/:id` must work on refresh.

## Output Format I Want
When you finish:
- ✅ Short “What changed” summary
- ✅ Added/Modified file list (git-style)
- ✅ Commands to run
- ✅ Any follow-up TODOs (max 5)

## If You Need More Info
Only request exactly what’s needed, like:
- “Paste your `tailwind.config.*`”
- “Paste `App.tsx` routes”
- “Confirm if netlify.toml exists”
Do NOT ask broad questions.
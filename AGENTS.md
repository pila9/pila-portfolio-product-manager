# AGENTS.md

## Commands

- **Dev server:** `npm run dev`
- **Type check:** `npx vue-tsc --noEmit` (or `npm run build` which runs `vue-tsc -b` first)
- **Build:** `npm run build`
- **Preview:** `npm run preview`

## Project Structure

- `src/main.ts` — app entry point
- `src/App.vue` — root component composing all sections
- `src/components/` — modular Vue components (Navbar, Hero, About, Skills, Projects, Experience, Contact, Footer)
- `src/data/portfolioData.ts` — TypeScript interfaces and sample data
- `src/composables/useSmoothScroll.ts` — reusable smooth scroll composable
- `src/icons/brandIcons.ts` — custom SVG Vue components for brand icons (GitHub, LinkedIn, Twitter) not available in @lucide/vue
- `src/style.css` — Tailwind CSS base styles

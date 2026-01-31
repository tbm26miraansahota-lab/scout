# ScoutX — India's Grassroots Football Scouting Platform

Production-grade MVP marketing site with interactive demo for ScoutX, India's tech-powered grassroots football scouting infrastructure.

## Tech Stack

- **Vite** + **React** + **TypeScript**
- **TailwindCSS v4** (dark mode, custom pitch/lime theme)
- **React Router** (SPA with lazy-loaded routes)
- **Recharts** (radar + bar charts)
- **lucide-react** (icons)
- **Netlify** (hosting, form handling, SPA redirects)

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Build for Production

```bash
npm run build
npm run preview   # preview production build locally
```

## Deploy to Netlify

### Option 1: Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify init       # or `netlify link` for existing site
netlify deploy --prod
```

### Option 2: Git-based Deploy

1. Push this repo to GitHub/GitLab
2. Connect the repo in [app.netlify.com](https://app.netlify.com)
3. Build settings are auto-detected from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. SPA redirects are configured via `netlify.toml` and `public/_redirects`

### Netlify Forms

The contact form uses Netlify Forms (no backend). It works automatically when deployed to Netlify. The form is named `contact` with fields: name, email, role, interest, message.

## Routes

| Path | Description |
|------|-------------|
| `/` | Landing page (hero, social proof, features, KPIs, testimonials, CTA) |
| `/how-it-works` | 4-step process explanation |
| `/product` | Feature deep-dive |
| `/pricing` | 3-tier pricing (School, Player, Scout) |
| `/demo/scout-search` | Interactive scout search with filters, sort, compare |
| `/demo/player/:id` | Player profile with radar chart, match history, shareable link |
| `/demo/school-dashboard` | Coach dashboard with roster, analytics, simulated upload |
| `/about` | Company story and values |
| `/faq` | Accordion FAQ |
| `/contact` | Netlify Forms contact page |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

## Customizing Mock Data

All mock data lives in `src/data/`:

- **`players.ts`** — 16 players with metrics, matches, highlights. Edit the `players` array to add/modify players.
- **`testimonials.ts`** — 6 testimonial cards from coach interviews. Edit the `testimonials` array.

### Adding a Player

Add a new object to the `players` array in `src/data/players.ts`:

```typescript
{
  id: 'unique-slug',
  name: 'Player Name',
  age: 16,
  position: 'Midfielder',
  school: 'School Name',
  city: 'City',
  state: 'State',
  photo: '',
  metrics: { speed: 80, stamina: 85, passingAccuracy: 78, shooting: 72, dribbling: 80, defending: 55 },
  overallRating: 78,
  verified: true,
  lastUpdated: '2024-12-20',
  matches: [...],
  highlightTags: ['Highlight 1', 'Highlight 2'],
  height: 175,
  weight: 65,
  preferredFoot: 'Right',
  jerseyNumber: 10,
}
```

## Troubleshooting

### SPA routing returns 404 on refresh

Ensure `netlify.toml` and `public/_redirects` are present. Both configure the catch-all redirect `/* -> /index.html` for SPA deep-link support.

### Contact form not working locally

Netlify Forms only work when deployed to Netlify. Locally the form will submit but won't be captured. Use Netlify Dev (`netlify dev`) for local form testing.

### Build fails

```bash
npx tsc --noEmit    # check for type errors
npm run build       # full build
```

## Project Structure

```
src/
├── components/
│   ├── layout/         # Navbar, Footer, Layout
│   ├── sections/       # Landing page sections
│   └── ui/             # Reusable UI components
├── data/               # Mock data (players, testimonials)
├── pages/
│   └── demo/           # Interactive demo pages
├── App.tsx             # Router setup
├── main.tsx            # Entry point
└── index.css           # Tailwind + custom theme
```

## License

Proprietary. All rights reserved.

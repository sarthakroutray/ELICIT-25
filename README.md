ELICIT-25 — Cyberpunk Landing Website
=====================================

Brief
-----
This is a Vite + React + TypeScript single-page website for an "ELICIT FEST" cyberpunk-style landing site. The site has been split into per-section routes using React Router and is configured to deploy on Vercel as a client-side routed app.

Key features
------------
- React + TypeScript (Vite)
- React Router routes for each section (landing, about, events, speakers, sponsors, contact, register)
- Digital rain canvas background used across multiple pages
- One-time startup intro persisted in browser (localStorage)
- Countdown timer that targets an actual calendar date (default is configurable)
- Sponsors page: combined "Our Sponsors" + "Previous Sponsors" stacked with a shared background
- Reduced heavy 3D background where requested; landing keeps a 3D scene
- Motion animations via Framer Motion

Quick start (requirements)
--------------------------
- Node.js (16+ recommended, 18+ preferred)
- npm (or pnpm/yarn; commands below assume npm)

Run locally (development)
-------------------------
Open a PowerShell terminal in the project root and run:

```powershell
npm install
npm run dev
```

The dev server (Vite) will start and show the local URL (usually http://localhost:5173).

Build and preview (production-like)
-----------------------------------
Create a production build and preview it locally:

```powershell
npm run build
npm run preview -- --port 5173
```

The preview command serves the built `dist/` folder so you can test client-side routing and production assets.

Vercel deployment (recommended settings)
----------------------------------------
Vercel supports this app directly. Important notes so client-side routes work:
- Ensure `vercel.json` is present at the repo root. It should contain a rewrite that sends all paths to `index.html` (this repository includes such a file).
- In Vercel project settings use:
  - Build Command: `npm run build`
  - Output Directory: `dist`

If you use the Vercel UI to import the repo, set the Build Command and Output Directory as above. If you use the Vercel CLI you can run:

```powershell
# from repo root
vercel --prod
```

Routing notes
-------------
- The app uses `BrowserRouter` (see `src/main.tsx`) and route definitions live in `src/App.tsx`.
- Client-side routes require `index.html` to be served for unknown routes (hence `vercel.json` rewrite).
- Links in the landing UI use `react-router-dom` `Link`/`motion(Link)` so navigation is client-side.

Customizations
--------------
- Countdown target date: edit `src/components/CountdownTimer.tsx` or pass a `targetDate` prop where it's used. The default was set to the next upcoming 12 September.
- Intro persistence: the one-time intro flag is stored under localStorage key `elicit_seen_intro`. Clearing that key will show the intro again.

Known UI considerations & tips
----------------------------
- If you notice a clickable button's hitbox changing while zooming (or on hover) the robust fix is to keep the clickable element's layout size stable and apply scale transforms only to an inner element.
  - Practical approach: make the `Link`/button container a fixed-size element (no scale transform). Inside it, wrap the icon/label in a motion element and apply `whileHover={{ scale: 1.05 }}` to that inner element. This preserves the hitbox while keeping the visual scale effect.
  - Check `src/components/CyberpunkLanding.tsx` for the navigation items and adjust as described if you want a different behavior.

Troubleshooting
---------------
- If client-side navigation results in 404s on Vercel:
  1. Confirm `vercel.json` is present in the repository root and contains the rewrite to `/index.html`.
  2. Confirm Vercel project Output Directory is `dist` (Vite default).
  3. If you still see 404s for subpaths, try a redeploy (sometimes platform caches need a fresh deploy).
- If the production app fails to initialize (blank page): open browser devtools console to look for runtime errors. Missing assets or JS exceptions will show there.

Developer notes
---------------
- Major components live under `src/components/` (e.g. `CyberpunkLanding.tsx`, `AboutSection.tsx`, `Speakers.tsx`, `SponsorsPage.tsx`, `Carousel.tsx`, `PreviousSponsors.tsx`, `DigitalRain.tsx`).
- Styling uses Tailwind CSS and a small custom `glitch.css` under `src/styles/`.
- 3D parts use `@react-three/fiber` and `@react-three/drei`.

Contributing
------------
- Fork, branch, and submit PRs. Keep changes small and include a short description of visual and behavior changes.
- Run `npm run build` and `npm run preview` to validate production behavior before opening PRs that change routing or build output.

License
-------
- No license file included. Add a `LICENSE` file if you want to set an explicit license.

Contact
-------
- Project owner (repo): sarthakroutray


Completion note
---------------
This README is intended to provide enough information to run, build, and deploy the site and to make the common edits you asked for (countdown date, intro persistence, navigation behavior). If you want, I can also add a short troubleshooting script or a small CLI helper that validates `vercel.json` and the build output.

# Marginal Energy: full site

React + Vite + React Router build of the Marginal Energy website, styled after seplatenergy.com.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in /dist
npm run preview   # serve the build locally
```

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | Who We Are |
| `/corporate-governance` | Corporate Governance |
| `/services` | Services |
| `/our-commitment` | Our Commitment |
| `/health-environment` | Health & Environment |
| `/our-team` | Our Employees |
| `/media-blog` | Publications |
| `/gallery` | Gallery (with lightbox) |
| `/careers` | Careers |
| `/contact` | Contact (form opens the visitor's email app) |
| `/privacy-policy` | Privacy & Cookies |

## Structure

```
index.html
public/             favicon, _redirects (Netlify SPA fallback)
vercel.json         SPA fallback for Vercel
src/
  main.jsx          mounts React + BrowserRouter
  App.jsx           routes, layout, page transition
  index.css         tokens, reset, base type
  App.css           nav, hero, shared sections, animation
  pages.css         page-specific styles
  assets/           logo.svg (replace with the real logo)
  components/       Navbar, Hero, PageHero, Footer, Reveal, Accordion, CtaBand ...
  pages/            one file per route
  data/content.js   ALL copy, nav, contact details
  hooks/useReveal.js
```

## Content status: read before launch

Everything is edited in `src/data/content.js`. Each block is tagged:

- **VERIFIED**: from marginal-energy.com/our-commitment or from published news coverage.
- **DRAFT**: placeholder wording for layout. Replace with approved company text. This covers
  governance, services, mission/vision/values, health & environment, and the people page.

## Before launch

- Swap `src/assets/logo.svg` and `public/favicon.svg` for the real logo.
- Download the commitment photo into `src/assets/` and add real photos to the gallery.
- Set exact brand colours in `:root` in `src/index.css`.
- Add roles to `careers.roles` when hiring.
- Connect the contact form to a form service or API (see the comment in `Contact.jsx`).
- Replace the privacy policy placeholder with the approved text.
- Point the social links at the real profiles.
- Deploy with an SPA fallback (included for Netlify and Vercel).

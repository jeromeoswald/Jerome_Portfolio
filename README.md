# Jerome Oswald Ebenezer J — Portfolio

Single-page portfolio built with **React + Vite + Tailwind CSS + Framer Motion**. It builds to static files and has no backend.

## Run locally

Requires [Node.js](https://nodejs.org) 18+ (LTS recommended).

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # serve the production build
```

## Edit your content

Everything lives in **`src/data/portfolio.js`**: name, roles, bio, contacts, socials, experience, education, skills, certifications and projects. Search it for `YOUR_` / `TODO` to find what still needs filling in:

- **Work experience**: replace the two placeholder entries.
- **URL Shortener** project: set your own repository URL.
- **Live demos**: add a `liveDemo` URL to any project to show the "Live Demo" button.
- **Project screenshots** (optional): put an image in `public/images/` and set `image: '/images/your-shot.webp'` on the project.

Other files:

| What | Where |
| --- | --- |
| Profile photo | `public/images/profile.webp` (640×640) and `profile-360.webp` (360×360), square crops |
| Social share image | `public/og-image.png` (1200×630) |
| Favicon | `public/favicon.svg`, `public/apple-touch-icon.png` |
| Page title / meta / OG URLs | `index.html` (replace `YOUR_SITE_URL` after deploying) |
| Colours | `src/index.css` (`:root` = light, `.dark` = dark), as RGB triplets |
| Fonts / type scale | `tailwind.config.js` + the Google Fonts link in `index.html` |

## Deploy

**Vercel**: push the project to GitHub, then go to vercel.com, choose *Add New → Project* and import the repo. Vercel detects Vite (build `npm run build`, output `dist`). Click Deploy.

**Netlify**: import the repo (settings come from `netlify.toml`), or run `npm run build` and drag the `dist` folder onto app.netlify.com/drop.

After deploying, replace `YOUR_SITE_URL` in `index.html` with your real URL so link previews work.

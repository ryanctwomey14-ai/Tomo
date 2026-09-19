# Tomo Tomo Acquisitions — Website

Marketing site for Tomo Tomo Acquisitions, a multifamily real estate investment firm.

- `site/` — the website (static HTML/CSS/JS). `index.html` is the homepage.
- `STRATEGY.md` — audience, site map, page structure, voice standards and pre-launch checklist.
- `.github/workflows/pages.yml` — deploys `site/` to GitHub Pages on every push to `main`.

## Run locally

```bash
python -m http.server 5173 --directory site
```

Then open http://localhost:5173/.

## Draft status

Text with a dashed underline is placeholder content and must be replaced with verified information
before launch. The page carries a `noindex` tag while in draft; remove it at launch.

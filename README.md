# Portfolio — static site

Personal site for **C Lokesh Kumar Reddy**, Solutions Engineer 2 (Backend) at Setu.
Served from **https://lokesh396.github.io/Portfolio/**.

## How it is built

Plain HTML, CSS and a little JavaScript. No framework, no bundler, no build step, no
npm dependencies. `index.html` is self-contained — styles inline in `<style>`, and the
only script is a scroll-spy for the rail navigation.

```
index.html              the whole site
favicon.ico             favicon
lokesh_fullstack.pdf    résumé (linked from the rail)
design/                 design explorations, not deployed
```

Type: Instrument Serif (display), Instrument Sans (body), JetBrains Mono (metadata),
loaded from Google Fonts.

## Editing

Edit `index.html` directly and push. That is the deploy.

Sections are `<section id="...">` with a matching `<a href="#..." data-sec="...">` in the
rail nav — add one, add the other, keep the numbers in order.

## Deploy

GitHub Pages, branch `main`, repo root:
**Settings → Pages → Source: Deploy from a branch → main / (root)**.

No workflow, no `dist/`, no `.nojekyll` — the repo *is* the site.

## Notes

- Internal work is described by shape, not by client: no screenshots, no names, and no
  figures belonging to a former employer.
- Muted metadata colour is AA-checked against the background.

## Credits

Layout follows the typographic résumé one-pager pattern. The earlier React + Vite version
of this site lives in the git history.

# Portfolio — Koa Shen

Static site. No build step, no dependencies, no framework.

## Run it
Open [index.html](index.html) in a browser, or in VS Code install the **Live Server**
extension and hit "Go Live" (nicer for auto-reload).

## Structure
```
index.html          Home page shell
project.html        Project detail page — reads ?id= from the URL
resume.html         Print-ready resume (Ctrl+P -> Save as PDF)
data/portfolio.js   >>> ALL CONTENT LIVES HERE <<<
js/utils.js         Shared render helpers (filler detection, image fallback)
js/main.js          Home page rendering
js/project.js       Detail page rendering
js/resume.js        Resume rendering
css/styles.css      Site theme
css/resume.css      Resume / print theme
assets/images/      Photos and renders
```

Edit [data/portfolio.js](data/portfolio.js) and both the site and the resume update.
You should almost never need to touch the HTML.

## Text flow and spacing
- Keep prose in paragraphs and let it wrap naturally; avoid manual `<br>` line breaks.
- Group paired metadata with flexible rows and gaps; let them wrap on desktop and stack on narrow screens.
- Adjust shared copy rhythm in `css/styles.css` using `--copy-leading`, `--paragraph-space`, `--section-space`, and `--heading-copy-space` before adding one-off margins.

## Placeholder content
Any string in the data file starting with `FILLER:` is a placeholder. It renders with a
yellow **NEEDS CONTENT** flag on the site and a **TODO** flag on the resume, so nothing
fake ships by accident. See [CONTENT-TODO.md](CONTENT-TODO.md) for the full checklist.

Missing image files fall back to a dashed placeholder tile showing the expected path —
add photos incrementally without breaking the page.

## Deploy
1. Push to a GitHub repo named `<username>.github.io` (or any repo).
2. Settings → Pages → Source: `main` branch, `/root`.
3. Live in a couple of minutes.

# LLM‑ification Paper Collection (GitHub Pages)

This repository hosts a simple static site (no build step) similar to the companion page of *Understanding the LLM‑ification of CHI*.

## How to use
1. Rename this folder as your repository name (e.g., `yourname.github.io` or `llm-ification`).
2. Commit and push to GitHub.
3. Enable **Settings → Pages → Source: Deploy from Branch** and select the `main` branch and `/root` (or `docs/` if you move files).
4. Update the preprint URL in `index.html` (variable `PREPRINT_URL`).
5. Replace placeholder figures in `assets/` with your own (`taxonomy.png`, `roles.png`) and update the `<img src>` paths.

## Add papers
Edit `data/papers.json` to add new entries as `{ "title": "...", "year": 2024, "url": "https://..." }`.

## Optional: Jekyll
If you prefer Jekyll, you can add a `_config.yml` and convert `index.html` to `index.md` with frontmatter. This template is plain HTML/CSS/JS so it works without any build.

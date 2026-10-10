# Shum Site

English · [Русский](README.ru.md)

Information and downloads website for Shum. Next.js with static export, Russian and English content, and light and dark themes.

## Run

```sh
npm ci
npm run dev
npm run build
```

Development: `http://localhost:3100`. Production output: `out/`, ready for static hosting. No application server required.

Published at [getshum.tech](https://getshum.tech) through GitHub Pages from the `gh-pages` branch. To publish the last commit, run `npm run deploy`: it builds the site locally and pushes `out/` to that branch.

## Structure

- `app/(ru)` and `app/en`: Russian at the root, English under `/en/`.
- `components/pages/`: overview, downloads, documentation, protocol and security.
- `lib/i18n.ts`: content for both languages.
- `components/` and `app/globals.css`: shared UI, pixel graphics and themes.

The design comes from the Figma page “Сайт · Shum”. Fonts are served locally through Fontsource under OFL. There are no analytics or third-party scripts. Theme selection, command copying and mobile navigation use client-side JavaScript.

## Downloads and documentation

[CLI 0.1.7](https://github.com/hiTechTeam/Shum-CLI/releases/tag/v0.1.7) and its installer script are published. Download commands should link to real packages; platforms still in development should be labeled accordingly.

The protocol specification is currently in Russian. English protocol pages should make that clear.

[CLI](https://github.com/hiTechTeam/Shum-CLI) · [iOS](https://github.com/hiTechTeam/Shum-iOS) · [Core](https://github.com/hiTechTeam/Shum-Core) · [Protocol](https://github.com/hiTechTeam/Shum-Protocol)

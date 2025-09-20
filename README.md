# Shanu Choudhary — Portfolio

Modern personal portfolio built with React (Vite), Tailwind CSS, Framer Motion, and React Router. Includes bilingual support (English/Hindi), theme toggling with persistence, and GitHub Pages deployment workflow.

## Getting Started

```bash
npm install
npm run dev
```

## Available Scripts

- `npm run dev` — start local development server
- `npm run build` — create production build in `dist/`
- `npm run preview` — preview the production build
- `npm run deploy` — build and publish the site via `gh-pages`

## Features

- Coffee-toned, responsive design with Tailwind CSS
- Dark/light theme toggle persisted in `localStorage`
- English ↔ Hindi language switcher for all UI copy
- Page-level animations powered by Framer Motion
- Modular sections: Hero, Projects, Case Studies, About, Contact
- GitHub Pages workflow (`.github/workflows/pages.yml`) for automated deploys

## Deployment

Update the `homepage` value in `package.json` and the `base` option in `vite.config.js` to match the GitHub repository name, then run:

```bash
npm run deploy
```

This builds the project and publishes `dist/` to the `gh-pages` branch.

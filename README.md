# ethan luc — portfolio

A personal portfolio website with a music-driven theme system. Each song changes the entire site's color palette, background visuals, and atmosphere.

## Tech Stack

- **Framework:** React 19, TypeScript 5.9, Vite 8
- **Styling:** Tailwind CSS 4, PostCSS (nesting, autoprefixer)
- **Routing:** React Router 7
- **Optimization:** React Compiler via Babel preset

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start dev server with HMR            |
| `npm run build`   | Type-check and build for production  |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |

## Project Structure

```
src/
├── pages/            # Home, About
├── components/       # Layout, Header, AudioPlayer, FloatingPlayer,
│                     # SongMenu, StarField, OceanBackdrop,
│                     # MountainBackdrop, PetalEffect, SongDecoration
├── context/          # ThemeContext (global theme + audio state)
├── data/             # Song definitions and theme palettes
├── assets/           # Static images
├── App.tsx           # Route definitions
├── main.tsx          # Entry point
└── index.css         # Global styles / Tailwind imports

public/
└── music/            # Audio files (mp3)
```

## Features

### Music-Driven Themes

Four curated songs, each with a unique color scheme (background, text, accent, borders, gradients). Selecting a song transitions the entire site's palette with smooth 700ms animations.

### Audio Player

Floating player with play/pause, seek, volume control, and mute toggle. Auto-advances to the next song on completion. Starts muted on page load and unmutes on first user interaction.

### Animated Backdrops

Song-specific visual effects — star fields, ocean waves, mountain silhouettes, and falling petals — rendered as background layers behind page content.
# portfolio-website-v2

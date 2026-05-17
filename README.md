# ethan luc — portfolio

A personal portfolio website with a music-driven theme system. The site's color palette, background visuals, and atmosphere are dependant on the lofi song playing. 

## Tech Stack

- **Framework:** React 19, TypeScript 5.9, Vite 8
- **Styling:** Tailwind CSS 4, PostCSS (nesting, autoprefixer)
- **Routing:** React Router 7
- **Optimization:** React Compiler via Babel preset

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

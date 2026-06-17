# ghedo

Personal portfolio — aerospace projects and technical notes about space engineering.

## Built with

* [Astro](https://astro.build/) — static site framework
* [Tailwind CSS](https://tailwindcss.com) — utility-first CSS framework
* [Giscus](https://giscus.app/) — comments powered by GitHub Discussions
* [Pages CMS](https://pagescms.org/) — Git-based content management

## Requirements

- Node.js >= 22.12.0
- [pnpm](https://pnpm.io) 10+

## Getting started

```bash
pnpm install
pnpm dev       # Start dev server
pnpm check     # Type-check the project
pnpm build     # Build for production
pnpm preview   # Preview production build
```

## Project structure

```text
src/
  assets/            — images, fonts
  components/        — reusable Astro components
  content/blog/      — blog posts (MDX)
  data/              — typed data (projects, etc.)
  layouts/           — page layouts
  pages/             — routes
  styles/            — global CSS
  utils/             — shared helpers
  consts.ts          — site config (title, nav, social links)
  content.config.ts  — content collection schemas
```

## Adding content

### Blog post

Add a new `.mdx` file inside `src/content/blog/`:

```mdx
---
title: "Your post title"
description: "A short description"
pubDate: "2026-06-17"
heroImage: "../../assets/your-image.jpg"
heroImageAlt: "Description of the image"
tags: ["aerospace", "engineering"]
draft: false
---

Your content here.
```

Set `draft: true` to hide it from production builds.

### Project

Edit `src/data/projects.ts` and add an entry to the array.

## Production domain

Set the `site` field in `astro.config.mjs` to your production URL. This enables absolute canonical URLs, sitemap, and RSS feed links.

Currently configured: `https://ghedo.me`

## Images and alt text

Always provide `heroImageAlt` for informative images. Use `heroImageAlt: ''` for purely decorative images.

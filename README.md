# ghedo

Personal portfolio — aerospace projects and technical notes about space engineering.

## Built with

* [Astro](https://astro.build/) — static site framework
* [Tailwind CSS](https://tailwindcss.com) — utility-first CSS framework
* [Giscus](https://giscus.app/) — comments powered by GitHub Discussions
* [Pages CMS](https://pagescms.org/) — Git-based content management
* [Pagefind](https://pagefind.app/) — static blog search and tag filtering

## Requirements

- Node.js >= 22.12.0
- [pnpm](https://pnpm.io) 10+

## Getting started

```bash
pnpm install
pnpm dev       # Start dev server
pnpm check     # Type-check the project
pnpm build     # Build the site and generate the blog search index
pnpm preview   # Preview the production build
```

Pagefind indexes only published blog posts after Astro builds. Search and tag filtering are available on the blog index and individual posts in production, or after running `pnpm build` followed by `pnpm preview`. The generated search interface is not available during `pnpm dev`.

## Project structure

```text
src/
  assets/            — images, fonts
  components/        — reusable Astro components
  content/blog/      — blog posts (MDX)
  content/projects/  — projects (MDX)
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

Add a new `.mdx` file inside `src/content/projects/` or use Pages CMS.

## Production domain

Set the `site` field in `astro.config.mjs` to your production URL. This enables absolute canonical URLs, sitemap, and RSS feed links.

Currently configured: `https://ghedo.me`

## Images and alt text

Always provide `heroImageAlt` for informative images. Use `heroImageAlt: ''` for purely decorative images.

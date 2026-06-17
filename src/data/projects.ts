export interface Project {
  title: string;
  description: string;
  href?: string;
  repository?: string;
  tags?: string[];
  featured?: boolean;
}

/**
 * Project data.
 *
 * To add a project, insert a new entry into this array.
 * `featured: true` projects appear first on the homepage.
 *
 * Fields:
 *   title       — project name
 *   description — one-paragraph summary
 *   href        — live URL (optional)
 *   repository  — source repo URL (optional)
 *   tags        — short labels (optional)
 *   featured    — show on homepage (optional)
 */
const projects: Project[] = [
  // {
  //   title: 'Example Project',
  //   description: 'A short description of what this project does.',
  //   href: 'https://example.com',
  //   repository: 'https://github.com/ghedo44/example',
  //   tags: ['aerospace', 'simulation'],
  //   featured: true,
  // },
];

export default projects;

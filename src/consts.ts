// Global site configuration.
// Import this from anywhere in your site.

export const SITE_TITLE = "ghedo";

export const SITE_DESCRIPTION =
  "Personal portfolio, aerospace projects and technical notes about space engineering.";

export const SITE_LANGUAGE = "en";
export const SITE_LOCALE = "en-US";

export const NAVIGATION = [
  { href: "/", label: "Home" },
  { href: "/blog/", label: "Blog" },
  { href: "/projects/", label: "Projects" },
] as const;

export const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/ghedo44",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/federico-ghedini",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/ghedo44",
  },
] as const;

export const AREAS_OF_INTEREST = [
  "Spacecraft design",
  "Software development",
  "Space technologies",
  "Orbital mechanics",
  "Space systems engineering",
] as const;

export const TOOLS_AND_TECHNOLOGIES = {
  engineering: {
    label: "Engineering software",
    tools: [
      "SolidWorks",
      "Solid Edge",
      "MATLAB",
      "Simulink",
    ],
  },
  programming: {
    label: "Programming languages",
    tools: [
      "C",
      "C++",
      "C#",
      "Python",
      "TypeScript",
    ],
  },
  web: {
    label: "Web technologies",
    tools: [
      "Astro",
      "Angular",
      "Next.js",
      "React",
      "Tailwind",
    ],
  },
} as const;
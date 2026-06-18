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
  { href: "/search/", label: "Search" },
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
  "Aerospace engineering",
  "Space engineering",
  "Spacecraft design",
  "Coding",
  "Space technologies",
  "Technical writing",
  "Teamwork and sport",
] as const;

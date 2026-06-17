import { getCollection, type CollectionEntry } from "astro:content";

/**
 * Get published projects.
 * In dev mode, drafts are included; in production, they are filtered out.
 */
export async function getPublishedProjects(): Promise<CollectionEntry<"projects">[]> {
  const projects = await getCollection("projects");
  const isDev = import.meta.env.DEV;
  return isDev ? projects : projects.filter((p) => !p.data.draft);
}

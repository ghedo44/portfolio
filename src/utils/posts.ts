import { getCollection, type CollectionEntry } from "astro:content";

/**
 * Get published blog posts, sorted by pubDate descending.
 * In dev mode, drafts are included; in production, they are filtered out.
 */
export async function getPublishedPosts(): Promise<CollectionEntry<"blog">[]> {
  const posts = await getCollection("blog");
  const isDev = import.meta.env.DEV;
  const filtered = isDev ? posts : posts.filter((post) => !post.data.draft);
  return filtered.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}

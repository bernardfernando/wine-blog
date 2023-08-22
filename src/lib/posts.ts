import { allPosts as POSTS } from "contentlayer/generated";

const CATEGORIES = [
  { name: "Australian", catslug: "australian" },
  { name: "English", catslug: "english" },
  { name: "European", catslug: "european" },
  { name: "United States", catslut: "united_states" },
];

// get ALL the posts (simulating an API or database)
export function getPosts() {
  return POSTS;
}

// get ONE of the posts (simulating an API or database)
export function getPostBySlug(slug: string) {
  return POSTS.find((post) => post.slug === slug);
}

export function getCategories() {
  return CATEGORIES;
}

export function getPostsByCategory(catslug: string) {
  return POSTS.filter((post) => post.category === catslug);
}

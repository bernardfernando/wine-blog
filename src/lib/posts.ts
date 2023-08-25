import { allPosts as POSTS } from "contentlayer/generated";

const CATEGORIES = [
  { name: "Wine Types", catslug: "wine-types" },
  { name: "Grape Varieties", catslug: "grapes-varieties" },
  { name: "Methods Used", catslug: "methods-used" },
  { name: "Quality Assurance", catslug: "quality-assurance" },
  { name: "Main Producers", catslug: "main-producers" },
  { name: "Featured Article", catslug: "featured-article" },
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

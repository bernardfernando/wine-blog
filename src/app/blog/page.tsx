import Link from "next/link";
import { getPosts } from "@/lib/posts";

interface Post {
  title: string;
  slut: string;
}

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="text-rose-800 text-2xl">
      <h2 className="mx-10 text-3xl">My Posts</h2>
      <ul className="grid grid-cols-5 gap-4 my-10">
        {posts.map((post) => {
          return (
            <li
              className="mx-10 h-30 w-30 border-rose-800 border-1 bg-rose-50 p-5"
              key={post.slug}
            >
              <Link href={`/blog/${post.slug}`}>
                {post.title} date: {post.date}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

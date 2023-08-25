import Link from "next/link";
import { getPosts } from "@/lib/posts";
import { Quicksand } from "next/font/google";
const quicksand = Quicksand({ subsets: ["latin"], weight: "400" });

interface Post {
  title: string;
  slug: string;
}

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div
      className="w-full h-screen bg-cover bg-center {quicksand.className}"
      style={{ backgroundImage: 'url("/images/rohit-tendon.jpg")' }}
    >
      <div className="bg-gradient-to-r from-yellow-100 via-rose-100 to-transparent h-full">
        <h2 className="text-rose-800 text-3xl mx-10 {quicksand.className} ">
          My Posts
        </h2>
        <ul className="grid grid-cols-4 grid-rows-3 gap-4 my-10 {quicksand.className}">
          {posts.map((post) => {
            return (
              <li
                className="mx-10 h-30 w-30 border-orange-200 border-4 rounded-lg ring-inset bg-rose-50 p-5 {quicksand.className} text-rose-800 text-2xl"
                key={post.slug}
              >
                <Link href={`/blog/${post.slug}`}>
                  {post.title} {"\n"}
                  {"\n"}date: {post.date}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

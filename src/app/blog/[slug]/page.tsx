import Comments from "@/components/Comments";
import { getPosts, getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";

type BlogPostParams = {
  params: {
    slug: string;
  };
};

// this builds all the params for ALL blog posts when the website is deployed
export function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => {
    return {
      slug: post.slug,
    };
  });
}

export default function BlogPost({ params }: BlogPostParams) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div
      className="w-full h-screen bg-cover bg-center {quicksand.className} "
      style={{ backgroundImage: 'url("/images/jaime-casap.jpg")' }}
    >
      <div className="bg-gradient-to-r from-yellow-100 via-rose-100 to-transparent h-100% ">
        <div className="grid grid-cols-10 grid-rows-3">
          <div className="col-start-1 col-span 4 mx-10 my-5 text-rose-800 text-3xl  {quicksand.className} ">
            <h1>{post.title}</h1>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: post.body.html }}
            className="prose dark:prose-invert col-start-1 col-span-6 row-2 mx-10 text-rose-800 text-2xl  {quicksand.className} "
          ></div>
          <div className="col-start-1 col-span-2 row-3 mx-10  my-10 text-rose-800 text-2xl  {quicksand.className} ">
            {/* @ts-ignore */}
            <Comments slug={params.slug} />
          </div>
        </div>
      </div>
    </div>
  );
}

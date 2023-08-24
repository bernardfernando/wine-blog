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
    <>
      <div
        className="w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/bg-vine.jpg")' }}
      >
        <div className="text-rose-800 text-2xl my-5 mx-10">
          <h1 className="my-5 text-rose-800 text-3xl">{post.title}</h1>
          <div
            className="prose dark:prose-invert blog-content my-5 text-3xl text-rose-800"
            dangerouslySetInnerHTML={{ __html: post.body.html }}
          ></div>
          {/* @ts-ignore */}
          <Comments slug={params.slug} />
        </div>
      </div>
    </>
  );
}

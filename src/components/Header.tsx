import Link from "next/link";
import "@/app/globals.css";

export default function Header() {
  return (
    <>
      <h1 className="h-24 bg-gradient-to-r from-yellow-100 via-red-200 to-pink-800 text-8xl text-red-800">
        my Wine blog
      </h1>
      <div className="grid gap-4 grid-cols-8">
        <div className="col-start-2 col-span-1 text-3xl my-2 mx-3">
          <Link href="/">Home</Link>
        </div>
        <div className="col-start-4 col-span-1 text-3xl my-2 mx-3">
          <Link href="/blog">Wine Blog</Link>
        </div>
      </div>
    </>
  );
}

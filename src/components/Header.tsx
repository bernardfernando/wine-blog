import Link from "next/link";
import "@/app/globals.css";
import "public/fonts/Comforter.woff2";
import "public/fonts/Comforter.woff";
export default function Header() {
  return (
    <>
      <h1 className="decoration-12 min-h-fit p-10 h-25 bg-gradient-to-r from-yellow-100 via-red-200 to-rose-950 text-9xl text-rose-900">
        <Link href="/">My Wine Blog</Link>
      </h1>
      <div className="grid gap-4 grid-cols-8 bg-gradient-to-r from-yellow-100 via-red-200 to-rose-950 text-rose-900">
        <div className="col-start-4 col-span-1 text-3xl  mx-3">
          <button className="rounded-b-lg rounded-t-lg mt-0 mb-3 p-1 bg-rose-150 hover:bg-rose-300 active:bg-rose-200 focus:outline-none focus:ring focus:ring-violet-300 ...">
            <Link href="/">Home</Link>
          </button>
        </div>
        <div className="col-start-5 col-span-1 text-3xl  mx-6">
          <button className="rounded-b-lg rounded-t-lg mt-0 mb-3 p-1 bg-rose-250 hover:bg-rose-300 active:bg-rose-400 focus:outline-none focus:ring focus:ring-violet-300 ...">
            <Link href="/blog">Wine Blog</Link>
          </button>
        </div>
      </div>
    </>
  );
}

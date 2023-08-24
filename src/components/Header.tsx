import Link from "next/link";
import { Comforter } from "next/font/google";
const comforter = Comforter({ subsets: ["latin"], weight: "400" });
import { Quicksand } from "next/font/google";
const quicksand = Quicksand({ subsets: ["latin"], weight: "400" });

export default function Header() {
  return (
    <header>
      <div className="grid grid-cols-2 bg-gradient-to-r from-yellow-100 via-red-200 to-rose-950">
        <div className="col-start-1 col-span-1">
          <h1 className="decoration-9 min-h-fit p-10 h-25 to-rose-950 text-7xl text-rose-900">
            <Link className={comforter.className} href="/">
              My Wine Blog
            </Link>
          </h1>
        </div>
      </div>

      <div className="grid gap-2 grid-cols-6 bg-gradient-to-r from-yellow-100 via-red-200 to-rose-950 text-rose-900">
        <div className="col-start-3 col-span-1 text-2xl  mx-3">
          <button className="mt-0 mb-2 p-0 bg-rose-250 rounded-b-lg border-rose-300 border-b-2 hover:border-rose-400 active:bg-rose-400 focus:outline-none focus:ring focus:ring-violet-300 ...">
            <Link className={quicksand.className} href="/">
              Home
            </Link>
          </button>
        </div>
        <div className="col-start-4 col-span-1 text-2xl  mx-6">
          <button className="mt-0 mb-2 p-0 bg-rose-250 rounded-b-lg border-rose-300 border-b-2 hover:border-rose-400 active:bg-rose-400 focus:outline-none focus:ring focus:ring-violet-300 ...">
            <Link className={quicksand.className} href="/blog">
              Blog
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
}

import Link from "next/link";

export default function Header() {
  return (
    <>
      <h1 className="h-24 bg-gradient-to-r from-yellow-100 via-red-200 to-pink-800 text-8xl text-red-800">
        Wine Blog
      </h1>
      <nav className="nav-1">
        <div className="nav-bar">
          <Link href="/">Home</Link>
        </div>
        <div className="nav-bar">
          <Link href="/blog">Wine Blog</Link>
        </div>
      </nav>
    </>
  );
}

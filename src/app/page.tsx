import styles from "./page.module.css";
import Image from "next/image";

{
  /*import BackgroundCarousel from "@/components/BackgroundCarousel";*/
}

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/message", {
    next: { revalidate: 2 },
  });
  const data = await res.json();

  return (
    <main className="text-5xl">
      <div
        className="w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/bg-vine.jpg")' }}
      >
        <h1>Welcome to my API</h1>
        <p>My message to you is:</p>

        <h2>{data}</h2>
        <form action="/api/message" method="POST">
          <input name="messagefield" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
}

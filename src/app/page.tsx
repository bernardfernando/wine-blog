import React from "react";
import BackgroundCarousel from "@/components/BackgroundCarousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
        <h1 className="mx-5 text-2xl">Welcome to my API</h1>
        <div className="flow-root"></div>
        <p className="mx-5">My message to you is:</p>
      </div>

      {/* <div>
        <h2>{data}</h2>
        <form action="/api/message" method="POST">
          <input name="messagefield" />
          <button type="submit">Submit</button>
        </form>
      </div> */}
    </main>
  );
}

import React from "react";

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
        <h2
          className="p-5
         mx-5 text-3xl text-rose-800"
        >
          Welcome to my blog
        </h2>
        <div>
          <p className="mx-5 p-5 text-rose-800 text-2xl">
            My message to you is:
          </p>
          <article>
            <p>Is wine merely a fermented solution of sugar? </p>
          </article>
        </div>
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

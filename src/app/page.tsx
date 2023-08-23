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
        <div className="p-10 text-2xl text-rose-800 bg-orange-100 grid grid-cols-2 md:bg-opacity-70">
          <article>
            <div>
              <img src="public/images/jagath-2022.jpg" />
            </div>

            <h2 className="p-10 text-rose-800">
              Is wine merely a fermented 'sugary' solution?
            </h2>

            <p>
              My first recollection of wine was 'the ilegal consumption' of
              'beet wine' or 'king coconut wine' my mother used to make for
              Christmas. If got caught it was a punishable offence, if it was
              before Christmas. Then an alcoholic beverage named Toddy, which is
              fermented sap of the coconut flower. I cannot remember the name of
              the first 'wine wine' I drank, it was I remember on board a BA
              flight from Colombo to Heathrow. I expected a sweet wine like
              port, but had a surprice that made me settle for larger or ale for
              a while. Bulgarian Cabernet Sauvignon was the first name of wine I
              that comes to mind and it was a luxury for a student like me. So
              it was Bulgarian Cab Sauv for a while.
            </p>
            <p>
              For 18 years I have come a long way, and still learning: doing a
              few courses, WSET etc and 5 days a week dealing with wine from
              tasting, dealing with supply chain, filling, storage, QA promted
              me to have a thurst to learn more. I would like to start with
              'Toddy', a 'wine' that some of you have never tasted - real
              organic, no added ingredients, everything is 'terroir' dependent.
            </p>
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

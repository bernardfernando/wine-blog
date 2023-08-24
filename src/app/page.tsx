import React from "react";
import styles from "./page.module.css";
import { Suspense } from "react";
import Shimmer from "@/components/Shimmer";
import Comment from "@/components/Comment";
import { Quicksand } from "next/font/google";
const quicksand = Quicksand({ subsets: ["latin"], weight: "400" });

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/message", {
    next: { revalidate: 2 },
  });
  const data = await res.json();

  return (
    <main className={styles.main} my-0>
      <div
        className="w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/bg-vine.jpg")' }}
      >
        <div className="{quicksand.className} p-0 text-2xl text-rose-800  grid grid-cols-10 grid-rows-1 bg-gradient-to-r from-yellow-100 via-orange-100 to-transparent">
          {
            <div>
              <img
                src="images/jagath-2022.jpg"
                className="object-cover my-0 h-30 mx-auto w-20 rounded-full col-start-8 col-span-1"
                alt="my photograph"
              />
            </div>
          }
          <div className="my-0 mx-5 col-start-1 col-span-7 grid-flow-row auto-rows-max {quicksand.className}">
            <h2 className="my-5 mx-5 text-3xl text-rose-800">
              Welcome to my blog
            </h2>
            <h2 className="mx-5 text-rose-800">
              Is wine merely a fermented 'sugary' solution?
            </h2>

            <p className="mx-5 text-2xl {quicksand.className}">
              My first recollection of wine was 'the ilegal consumption' of
              'beet wine' or 'king coconut wine' my mother used to make for
              Christmas. If got caught pre-Christmas, it was a punishable
              offence. Then an alcoholic beverage named Toddy - naturally
              fermented sap of the coconut flower. I cannot remember the name of
              the first 'wine wine' I drank, it was, I remember, on board a BA
              flight from Colombo to Heathrow. I expected a sweet wine like
              Port, but had a surprice that made me settle for larger and ale
              for a while. Bulgarian Cabernet Sauvignon was the first name of
              wine comes to mind and it was a luxury for a student like me. So
              it was Bulgarian Cab Sauv for a while.
            </p>

            <p className="my-5 mx-5 {quicksand.className}">
              Over 18 of the last 20 years I learned a lot, and still learning.
              I would like to introduce you to 'Toddy', a 'wine' that some of
              you may never have tasted - real organic, no added ingredients,
              everything is 'terroir' dependent. Be warned there are
              side-effects and even the 18+ should know about. [photo credit
              Jose Alfonso Unsplash]
            </p>
          </div>
        </div>
      </div>

      <Suspense fallback={<Shimmer />}>
        <Comment />
      </Suspense>
    </main>
  );
}

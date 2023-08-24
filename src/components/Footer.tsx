import React from "react";

export default function Footer() {
  return (
    <div className="mx-10 my-0 h-100 grid grid-cols-3 grid-flow-col gap-4 text-1xl {Quicksand.className} text-rose-800">
      <div className="col-start-1 col-span-1">
        <p>Address</p>
        <p>Tel</p>
      </div>
      <div className="col-start-2 col-span-1">
        <p>Social media</p>
      </div>
      <div className="col-start-3 col-span-1">
        <p>Socia media</p>
      </div>
    </div>
  );
}

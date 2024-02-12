"use client";
import React from "react";
import Lottie from "lottie-react-web";
import * as animation from "../../public/Animation.json";

export default function Home() {
  return (
    <main className="w-screen bg-black text-white h-screen flex items-center justify-center">
      <div className="w-[50vw] h-screen pl-24 pb-24 text-left flex items-start justify-center flex-col">
        <h1 className="text-5xl">Hi,</h1>
        <h1 className="text-[8vh] ">
          I'm <b className="font-extrabold">Suraj Kharkwal</b>
        </h1>
        <p className="font-extralight text-left text-3xl ">the web developer you have been searching for</p>


      </div>
      <div className="w-[50vw] h-screen flex items-center justify-center">
        <div className="shadow-2xl max-w-[50vw] p-10 bg-white shadow-neutral-200 rounded-full ">
          <div className="bg-white ">
            <Lottie
              direction={1}
              options={{ animationData: animation }}
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

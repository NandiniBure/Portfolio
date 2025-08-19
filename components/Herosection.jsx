"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

<TypeAnimation
  sequence={[
    // Same substring at the start will only be typed out once, initially
    "We produce food for Mice",
    1000, // wait 1s before replacing "Mice" with "Hamsters"
    "We produce food for Hamsters",
    1000,
    "We produce food for Guinea Pigs",
    1000,
    "We produce food for Chinchillas",
    1000,
  ]}
  wrapper="span"
  speed={50}
  style={{ fontSize: "2em", display: "inline-block" }}
  repeat={Infinity}
/>;




const Herosection = () => {
  return (
    <section>
      <div className=" grid grid-cols-1 lg:grid-cols-12">
        <div className=" col-span-7 place-self-center text-center sm:text-left">
          <h1
            className=" text-white mb-4 lg:text-6xl text-4xl 
         font-extrabold sm:text-5xl "
          >
            <span className=" text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  ">
              Hello,I'm {""}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Nandini",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className=" text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            In the realm of education, a class represents a dynamic space where
            knowledge is shared, minds are molded, and friendships are forged.
            Whether it's a bustling elementary school class filled with
          </p>
          <div className="">
            <button className=" px-6 py-3 w-full  rounded-full  sm:w-fit mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className=" px-1  py-1 rounded-full w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white  mt-3">
              <Link href="/NandiniBure_FullStack_Developer_Resume.pdf" download>
                {" "}
                <span className=" block bg-[#121212] hover:bg-slate-800 p-2 rounded-full">
                  Downlode CV
                </span>{" "}
              </Link>
            </button>
          </div>
        </div>
        <div className=" col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]  relative">
            <Image
              src="/hero-image.png"
              alt="hero image"
              className=" absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;

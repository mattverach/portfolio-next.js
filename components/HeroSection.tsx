"use client" // this is a client component
import { Link } from "react-scroll/modules"
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hello, I'm Matías Vera",
      "Welcome to my Portfolio",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section id="home">
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover "
        src="https://avatars.githubusercontent.com/u/85206468?v=4"
      ></img>
      <div className="z-20">
        <h2 className="text-sm uppercase text-[#868d80] pb-2 tracking-[8px]">
          JR Software Developer
        </h2>
        <h1 className="text-3xl lg:text-4xl font-semibold px-10">
          <span className="mr-3">{text}</span>

          <Cursor cursorColor="#b5d1a9" />
        </h1>
        <div className="pt-5">
          <Link key="About" to="about">
          <button className="heroButton">About</button>
          </Link>
          <Link key="Projects" to="projects">
          <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
    </section>
  );
}
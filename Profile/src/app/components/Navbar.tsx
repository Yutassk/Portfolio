"use client";
import React, { useContext, useState } from "react";
import { Hamburger } from "./Hamburger";
import { MainList } from "./Descdata";
import Link from "next/link";

export function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const Mains = useContext(MainList);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <>
      <div onClick={toggleHamburger} className="md:hidden fixed top-4 right-4 z-50">
        <Hamburger isOpen={hamburgerOpen} />
      </div>
      <div className="md:w-full h-1/2 z-40 fixed">
        <ul
          className={`${
            hamburgerOpen ? "bg-slate-600 h-2/5 w-screen fixed right-0 top-0 text-3xl m-auto flex flex-col justify-around items-center" : "hidden md:flex md:justify-around  md:my-5 md:px-6"
          }`}
        >
          {Mains.map((main) => (
            <li key={main.title} className="text-slate-200 uppercase">
              <Link href={`#${main.title}`}>{main.title}</Link>
            </li>
          ))}
          ここにぼたんつけたい
        </ul>
      </div>
    </>
  );
}

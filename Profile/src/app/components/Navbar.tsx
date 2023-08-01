"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Hamburger } from "./Hamburger";
import Image from "next/image";

export function Navbar(props: { transparent: any }) {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  type List = {
    title: string;
    link: string;
  };

  const NavList: List[] = [
    {
      title: "Profile",
      link: "/",
    },
    {
      title: "Skill",
      link: "/",
    },
    {
      title: "Hobby",
      link: "/",
    },
    {
      title: "Contact",
      link: "/",
    },
  ];

  return (
    <nav className=" z-50 w-full flex justify-between fixed mt-4">
      <div className="container px-4 m-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src={"/yuta.png"} alt="" width={40} height={40} className="rounded-full" />
          <h2 className={" text-sm font-bold whitespace-nowrap uppercase ml-2"}>Yuta's Portfolio</h2>
        </Link>
        <div onClick={toggleHamburger} className={"md:hidden inline z-20"}>
          <Hamburger isOpen={hamburgerOpen} />
        </div>
      </div>
      <div className={"md:w-full h-1/2"}>
        <ul
          className={`${
            hamburgerOpen ? "bg-green-700 h-2/5 w-screen fixed right-0 top-0 z-10 text-3xl m-auto flex flex-col justify-around items-center" : "hidden md:flex md:justify-around  md:my-5 md:px-6"
          }`}
        >
          {NavList.map((nav) => (
            <li key={nav.title} className="list-none hover:border-b">
              <Link className={"uppercase font-bold text-white"} href={nav.link}>
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

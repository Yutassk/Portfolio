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
    <nav className={(props.transparent ? "top-0 absolute z-50 w-full" : "relative shadow-lg bg-white shadow-lg") + " flex flex-wrap items-center justify-between px-2 py-3 "}>
      <div className="container px-4 m-auto flex flex-wrap items-center justify-between">
        <Link href="/" className="flex items-center fixed top-3">
          <Image src={"/yuta.png"} alt="" width={40} height={40} className="rounded-full" />
          <h2 className={(props.transparent ? "text-white" : "text-gray-800") + " text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase ml-2"}>Yuta's Portfolio</h2>
        </Link>
        <div onClick={toggleHamburger} className={"md:hidden inline pt-3 ml-3 z-20 fixed right-3 top-3"}>
          <Hamburger isOpen={hamburgerOpen} />
        </div>
        <div className={"md:w-full h-1/2"}>
          <ul
            className={`${
              hamburgerOpen
                ? "inline bg-green-500 h-2/5 w-screen fixed right-0 top-0 z-10 text-3xl m-auto flex flex-col justify-around items-center"
                : "hidden md:flex md:flex-wrap md:float-right md:my-5 md:px-6 md:overflow-hidden"
            }`}
          >
            {NavList.map((nav) => (
              <li key={nav.title} className="list-none pr-3">
                <Link className={"uppercase font-bold text-white"} href={nav.link}>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

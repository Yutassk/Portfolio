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
        <div onClick={toggleHamburger} className="hamburger">
          <Hamburger isOpen={hamburgerOpen} />
        </div>
        <div className="navigation">
          <ul>
            {NavList.map((nav) => (
              <li key={nav.title}>
                <Link className={"uppercase font-bold text-white"} href={nav.link}>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <style jsx>{`
        .navigation {
          width: 100%;
          height: 50px;
        }

        .navigation ul {
          display: flex;
          flex-wrap: wrap;
          float: right;
          margin: 20 0px;
          padding: 0 25px;
          overflow: hidden;
        }

        .navigation ul li {
          list-style-type: none;
          padding-right: 10px;
        }

        .hamburger {
          display: none;
          z-index: 6;
        }

        @media (max-width: 767px) {
          .hamburger {
            display: inline;
            padding-top: 10px;
            margin-left: 10px;
            z-index: 10;
            position: fixed;
            right: 10px;
            top: 10px;
          }

          .navigation {
            display: ${hamburgerOpen ? "inline" : "none"};
          }

          .navigation ul {
            display: inline;
            background-color: #3db680;
            height: 50vh;
            width: 100vw;
            position: fixed;
            right: 0;
            top: 0;
            z-index: 1;
            font-size: 2rem;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
          }
        }
      `}</style>
    </nav>
  );
}

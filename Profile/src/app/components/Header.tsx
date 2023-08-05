"use client";
import Link from "next/link";
import React, { useContext } from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { MainList } from "./Descdata";
import { IconContext } from "react-icons";
import { useInView } from "react-intersection-observer";

export const Header = () => {
  const Profile: { name: string; title: string; desc: string } = {
    name: "Yuta Sasaki",
    title: "Junior Engineer",
    desc: "ここにかるい自己紹介文かくよおーーー",
  };

  const [ref, inView] = useInView({
    rootMargin: "-100px 0px",
  });

  type IconList = {
    title: string;
    name: string;
    value: string;
    link: string;
  };
  const Icons: IconList[] = [
    { title: "Github", name: FaGithub, value: `size:"24"`, link: "github.com" },
    { title: "Twitter", name: FaTwitter, value: `size:"24"`, link: "twitter.com" },
  ];

  const Mains = useContext(MainList);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">{Profile.name}</h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">{Profile.title}</h2>
        <p className="mt-4 max-w-xs leading-normal text-gray-300">{Profile.desc}</p>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {Mains.map((main) => (
              <Link href={`#${main.title}`} key={main.title}>
                <li className="group flex items-center py-3">
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">{main.title}</span>
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        {Icons.map((icon) => (
          <li key={icon.link} className="mr-5 text-xs">
            <Link href={"/"} className="z-50  hover:text-slate-200" target="_blank" rel="noreferrer">
              <IconContext.Provider value={{ size: "24" }}>
                <span className="sr-only">{icon.title}</span>
                {React.createElement(icon.name)}
              </IconContext.Provider>
            </Link>
          </li>
        ))}
      </ul>
      <p ref={ref}>intersection observerのれんしゅう</p>
      <h2 className={inView ? "text-red-500" : "text-blue-600"}>こんなかきかたでもいけるの？</h2>
    </header>
  );
};

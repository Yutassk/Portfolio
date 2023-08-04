"use client";
import React, { useContext } from "react";
import { MainList } from "./Descdata";
import { Footer } from "./Footer";
import { FiArrowUpRight } from "react-icons/Fi";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { IconContext } from "react-icons";

export const Main = () => {
  const Mains = useContext(MainList);
  const Profile: { name: string; title: string; desc: string } = {
    name: "Yuta Sasaki",
    title: "Junior Engineer",
    desc: "2023.5~ 本格的にプログラミング勉強開始しました。主に書籍、公式ドキュメントを読み解きながら実装を進めています。",
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
    { title: "Github", name: FaGithub, value: `size:"24"`, link: "https://github.com/Yutassk" },
    { title: "Twitter", name: FaTwitter, value: `size:"24"`, link: "https://twitter.com/yuta_ss90" },
  ];

  return (
    <>
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
                    <span className="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">{main.title}</span>
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
        </div>
        <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
          {Icons.map((icon) => (
            <li key={icon.link} className="mr-5 text-xs">
              <Link href={"/"} className="block hover:text-slate-200" target="_blank" rel="noreferrer">
                <IconContext.Provider value={{ size: "24" }}>
                  <span className="sr-only">{icon.title}</span>
                  {React.createElement(icon.name)}
                </IconContext.Provider>
              </Link>
            </li>
          ))}
        </ul>
      </header>
      <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
        {Mains.map((main) => (
          <section key={main.title} id={main.title} className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:p-0 lg:opacity-0">
              <h2 ref={ref} className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                {main.title}
              </h2>
            </div>
            <div>
              <p className="mb-4">
                {main.desc}
                <a href=""></a>
              </p>
            </div>
          </section>
        ))}

        {/* 経歴カード */}
        {/* ここSwitch文使って書き換えられる？ */}
        <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:p-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">書き換えたいなぁ</h2>
          </div>
          <div>
            <ol className="group/list">
              <li className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">2014 - present</header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <div>
                        <a
                          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                          href="/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="absolute -inset-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>
                            Radiologist ·
                            <span className="inline-block">
                              sassa
                              <div
                                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-1"
                                aria-hidden="true"
                              >
                                <FiArrowUpRight />
                              </div>
                            </span>
                          </span>
                        </a>
                      </div>
                      <div>
                        <div className="text-slate-500" aria-hidden="true">
                          Junior Engineer
                        </div>
                      </div>
                      <div>
                        <div className="text-slate-500" aria-hidden="true">
                          Engineer
                        </div>
                      </div>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">佐々総合病院にて10年勤務</p>
                    <ul className="mt-2 flex flex-wrap">
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">React</div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">TypeScript</div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Tailwind CSS</div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Next.js</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">2014 - present</header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <div>
                        <a
                          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                          href="/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="absolute -inset-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>
                            Radiologist ·
                            <span className="inline-block">
                              sassa
                              <div
                                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-1"
                                aria-hidden="true"
                              >
                                <FiArrowUpRight />
                              </div>
                            </span>
                          </span>
                        </a>
                      </div>
                      <div>
                        <div className="text-slate-500" aria-hidden="true">
                          Junior Engineer
                        </div>
                      </div>
                      <div>
                        <div className="text-slate-500" aria-hidden="true">
                          Engineer
                        </div>
                      </div>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">佐々総合病院にて10年勤務</p>
                    <ul className="mt-2 flex flex-wrap">
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">React</div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">TypeScript</div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Tailwind CSS</div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Next.js</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">2014 - present</header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <div>
                        <a
                          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                          href="/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="absolute -inset-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>
                            Radiologist ·
                            <span className="inline-block">
                              sassa
                              <div
                                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-1"
                                aria-hidden="true"
                              >
                                <FiArrowUpRight />
                              </div>
                            </span>
                          </span>
                        </a>
                      </div>
                      <div>
                        <div className="text-slate-500" aria-hidden="true">
                          Junior Engineer
                        </div>
                      </div>
                      <div>
                        <div className="text-slate-500" aria-hidden="true">
                          Engineer
                        </div>
                      </div>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">佐々総合病院にて10年勤務</p>
                    <ul className="mt-2 flex flex-wrap">
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">React</div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">TypeScript</div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Tailwind CSS</div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Next.js</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

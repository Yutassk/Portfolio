"use client";
import React, { useContext } from "react";
import { MainList } from "./Descdata";
import { Footer } from "./Footer";
import { FiArrowUpRight } from "react-icons/Fi";

export const Main = () => {
  const Mains = useContext(MainList);

  return (
    <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
      {Mains.map((main) => (
        <section key={main.title} id={main.title} className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:p-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">{main.title}</h2>
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
  );
};

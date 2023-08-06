"use client";
import React, { useContext } from "react";
import { MainList } from "./Descdata";
import { Footer } from "./Footer";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

export const Main = () => {
  const Mains = useContext(MainList);

  return (
    <main className="pt-24 lg:w-1/2 lg:py-24">
      {/* about */}
      <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen  px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:p-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
        </div>
        <div>
          <p className="">
            小学生の頃に <span className="text-slate-200">Windows95</span> を触って以来、パソコンが大好きです。
          </p>
          <p>
            診療放射線技師として働いているため、業務内容はアナログ寄りです。 強いて挙げるとすれば、
            <span className="text-slate-200">統計出力用のマクロをVBAで組んだり英語のマニュアルを読み解く必要があった</span>ことについては少し共通点があったのかもしれません。
          </p>
          <p>
            個人的な趣味として<span className="text-slate-200">バイナリをいじってみたり、スクレイピングアプリを作成したり、ひたすらタイピングしてみたり</span>などしています。
          </p>
          <a href=""></a>
        </div>
      </section>

      {/* skill */}
      <section id="skill" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:p-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Skill</h2>
        </div>
        <div>
          <ol className="group/list">
            <li className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">2023.06 - 現在</header>
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
                          React
                          <div
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-1"
                            aria-hidden="true"
                          >
                            <FiArrowUpRight />
                          </div>
                        </span>
                      </a>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    コンポーネントですっきりとしたコーディングができるところに魅力を感じ、Reactの学習を開始。
                    ポートフォリオのような軽めのソフトを開発している現状ではuseMemoやuseCallbackの恩恵を受けられず、使い所に迷っている。
                  </p>
                </div>
              </div>
            </li>
            <li className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">2023.06 - 現在</header>
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
                          Next.js
                          <div
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-1"
                            aria-hidden="true"
                          >
                            <FiArrowUpRight />
                          </div>
                        </span>
                      </a>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    Linkを使用した高速なページ遷移ができたらユーザー体験の向上につながると感じ、学習を開始。
                    書籍で学習していたが、Next.jsのアップデートによりLink後にaタグが不要となっていることに気づかず少し詰まった。 書籍と並行して公式ドキュメントを読み解いている。
                  </p>
                </div>
              </div>
            </li>
            <li className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">2023.06 - 現在</header>
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
                          TailwindCSS
                          <div
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-1"
                            aria-hidden="true"
                          >
                            <FiArrowUpRight />
                          </div>
                        </span>
                      </a>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    Bootstrapのような使いやすさで、より自由にスタイリングができる点に魅力を感じ学習を開始。 直感的にスタイルを当てられるので、とても使いやすい。
                    三項演算子やifなどJSと組み合わせたスタイリングについてはもう少し学習が必要。
                  </p>
                </div>
              </div>
            </li>
          </ol>
          <h3 className="font-medium leading-snug text-slate-200">
            <div>
              <Link href={"/Experience"}>
                <div className="inline-flex items-baseline font-medium leading-tight text-slate-200  group/link text-base">
                  <span className="group-hover/link:border-b group-hover/link:border-teal-300">View Full Experience</span>
                  <div
                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-1"
                    aria-hidden="true"
                  >
                    <FiArrowRight />
                  </div>
                </div>
              </Link>
            </div>
          </h3>
        </div>
      </section>

      {/* 経歴カード */}
      {/* ここSwitch文使って書き換えられる？ */}
      <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:p-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">project</h2>
        </div>

        <div>
          <ul className="group/list">
            <li className="mb-12">
              <div className="group relative grid pb-1 gap-4 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                      href="/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        Calendar App sassa
                        <div
                          className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-1"
                          aria-hidden="true"
                        >
                          <FiArrowUpRight />
                        </div>
                      </span>
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    Vanilla
                    JSで作成したカレンダーです。シフト提出アプリを作成するにあたって本日以前は入力できないように制限をかけました。また、クリックされた日付はグレーアウトされ、同じ日付を２度入力することができないようになっています。
                  </p>
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
                <Image
                  src={"/calendar.png"}
                  alt=""
                  width={200}
                  height={48}
                  decoding="async"
                  loading="lazy"
                  className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                />
              </div>
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  );
};

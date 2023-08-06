import React from "react";
import MouseStalker from "../components/MouseStalker";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

const experience = () => {
  return (
    <>
      <MouseStalker />
      <div className="relative">
        <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 "></div>

        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 lg:px-24 lg:py-24">
          <h3 className="font-medium leading-snug text-slate-200">
            <div>
              <Link href={"/"}>
                <div className="inline-flex font-medium leading-tight text-slate-200  group/link text-base items-center mb-2">
                  <div className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:text-teal-300 group-hover/link:-translate-x-2 mr-1 " aria-hidden="true">
                    <FiArrowLeft />
                  </div>
                  <span className=" group-hover/link:text-teal-300">Top</span>
                </div>
              </Link>
            </div>
          </h3>
          <div className="mb-12  md:-mx-12 md:px-12 lg:mx-auto  lg:p-0">
            <h2 className="text-4xl sm:text-5xl font-bold uppercase tracking-tight text-slate-200 ">All Experience</h2>
          </div>

          <div>
            <ol>
              <li className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">2023.04 - 2023.06</header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <span className="absolute -inset-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      React
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
                  <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">2023.04 - 2023.06</header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <span className="absolute -inset-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      Next.js
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
                      <span className="absolute -inset-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      TailwindCSS
                    </h3>
                    <p className="mt-2 text-sm leading-normal">
                      Bootstrapのような使いやすさで、より自由にスタイリングができる点に魅力を感じ学習を開始。 直感的にスタイルを当てられるので、とても使いやすい。
                      三項演算子やifなどJSと組み合わせたスタイリングについてはもう少し学習が必要。
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
                      <span className="absolute -inset-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      Paiza（JavaScript）
                    </h3>
                    <p className="mt-2 text-sm leading-normal">
                      「課題を解決するために必要な考え方をみにつけたい」と思い、Paizaを始めた。Bランクまではスムーズにランクアップできたが、Aランクに上がるためのコーディング力がまだ不足している。Paizaを通して、ポートフォリオなどアプリを作成する際にmap関数やループ文を悩みすぎず使えるようになった。
                    </p>
                  </div>
                </div>
              </li>
              <li className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">2023.05 - 2023.06</header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <span className="absolute -inset-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      BootStrap
                    </h3>
                    <p className="mt-2 text-sm leading-normal">
                      CSSをベタ書きしていたが、もっと楽をしたいと考えBootStrapを使用した。用意されているパーツを使用する文にはとても快適だったが、アレンジしようとすると少し面倒だったためTailwindCSSに以降した。
                    </p>
                  </div>
                </div>
              </li>
              <li className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">2023.04 - 2023.06</header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <span className="absolute -inset-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      JavaScript
                    </h3>
                    <p className="mt-2 text-sm leading-normal">
                      静的サイトの実装について学習したので、サイトに動きをつける＆Webアプリ開発に向けてJSの学習を開始した。
                      Todoアプリやじゃんけんゲームなどのハンズオンで学んだ後、カレンダーアプリを作成した。 実際に0から考えて作成することで、if、for、forEachなどループ文の使い方が身についた。
                    </p>
                  </div>
                </div>
              </li>
              <li className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">2023.04 - 2023.05</header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <span className="absolute -inset-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      HTML & CSS
                    </h3>
                    <p className="mt-2 text-sm leading-normal">
                      フロントエンドに携わるためにまずはHTML、CSSの基礎知識を習得した。 1ヶ月で模写コーディングを5サイト、実際のページを見ながらコーディングを5サイト作成した。
                      基本的な構造であれば実装できるようになったと自負している。
                    </p>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default experience;

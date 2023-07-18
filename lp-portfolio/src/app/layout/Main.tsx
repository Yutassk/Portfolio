"use client";
import Image from "next/image";
import React from "react";
import { Unsplash } from "../components/Unsplash";

export const Main = () => {
  return (
    <div>
      <main>
        <div className="h-96 relative /">
          {/* <Image src="/green.jpg" alt="" fill style={{ objectFit: "cover" }} /> */}
          <Unsplash />
        </div>
        <section className="">
          <h2 className="text-center text-3xl text-white bg-gray-500 py-2">Work</h2>

          <div className="px-5 m-auto">
            <div className="mb-5">
              <h3 className="border-b-2 text-center text-lg">生産性向上</h3>
              <p>システムの見直しや業務内容の見直しを定期的に行うことで無駄な作業を減らすことが好き。</p>
            </div>
            <div className="">
              <h3>チームプレー</h3>
              <p>他職種と交流を深めることで知見を深めたり、提供できる価値を高めることが可能となる。</p>
            </div>
            <div className="">
              <h3>怒らない</h3>
              <p>
                部下への指導時に怒ってしまうと、恐縮してしまい部下自身の自走できるチャンスを奪うことになりかねない。あくまでも部下自身に考えさせることで自走できる力を伸ばすことに重きを置いた指導を心がけている。
              </p>
            </div>
          </div>
        </section>
        <section className="">
          <div>
            <h2>スキル</h2>
            <ul>
              <li>
                <Image width={100} height={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="" />
                HTML,CSS
              </li>
              <Image width={100} height={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="" />
              <li>Javascript</li>
              <li>
                <Image width={100} height={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" />
                React
              </li>
              <li>
                <Image width={100} height={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="" />
                TailwindCSS
              </li>
              <li>
                <Image width={100} height={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="" />
                Typescript
              </li>
              <li>
                <Image width={100} height={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="" />
                Next.js
              </li>
            </ul>
          </div>
        </section>

        <section className=" display_size">
          <div>
            <h2>趣味</h2>
            <ul>
              <li>
                <p>読書</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui inventore optio molestias ex tempora amet minus blanditiis quis perferendis? Eos facere neque temporibus vel
                  modi fugit mollitia, eaque dolores?
                </p>
              </li>
              <li>
                <p>筋トレ</p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iste quam magnam quidem saepe harum fuga nulla voluptatibus cumque incidunt minima rem, explicabo nam dolor. Et, eaque
                  quam! Sequi, totam?
                </p>
              </li>
              <li>
                <p>ゲーム</p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iste quam magnam quidem saepe harum fuga nulla voluptatibus cumque incidunt minima rem, explicabo nam dolor. Et, eaque
                  quam! Sequi, totam?
                </p>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Unsplash } from "../../components/Unsplash";
import { Skills } from "../../components/Skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpenReader, faDumbbell, faGamepad } from "@fortawesome/free-solid-svg-icons";

export const Main = () => {
  return (
    <div className="max-w-5xl m-auto">
      <main>
        {/* <Image src="/green.jpg" alt="" fill style={{ objectFit: "cover" }} /> */}
        <Unsplash />
        <section className="">
          <div className="px-5 m-auto">
            <div></div>
            <h2 className="text-center text-3xl text-white  py-2">Profile</h2>
            <div className="mb-5 flex justify-around">
              <div className="w-1/3 relative">
                <Image src={"/研究する人.png"} alt="" fill style={{ objectFit: "contain" }} />
              </div>

              <p className="w-1/2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio expedita placeat delectus reprehenderit voluptates error adipisci autem. Labore, cupiditate aperiam quas corporis saepe
                veritatis illum, error ducimus vel aliquam accusamus dolore mollitia dolor quae sapiente! Odit eos vitae nisi tenetur maxime ab deleniti voluptatibus dolorem odio possimus beatae
                temporibus, et numquam molestias. Odio aliquid similique repellat id autem eligendi iusto minima culpa dolore quod asperiores deserunt natus qui provident sed totam placeat maxime,
                ratione suscipit hic nihil deleniti! Nulla vel explicabo aliquam voluptatum ex nostrum consequatur, voluptatibus tenetur eos nemo facilis fuga, inventore ratione minus corrupti iure,
                impedit porro! Id.
              </p>
            </div>
          </div>
        </section>
        <Skills />
        <section>
          <div>
            <h2 className="text-3xl text-center mb-4">趣味</h2>
            <ul>
              <li className="card">
                <div className="card_header">
                  <h3 className="card_title">読書</h3>
                  <FontAwesomeIcon icon={faBookOpenReader} className="text-5xl" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui inventore optio molestias ex tempora amet minus blanditiis quis perferendis? Eos facere neque temporibus vel
                  modi fugit mollitia, eaque dolores?
                </p>
              </li>
              <li className="card">
                <div className="card_header">
                  <h3 className="card_title">筋トレ</h3>
                  <FontAwesomeIcon icon={faDumbbell} className="text-5xl" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui inventore optio molestias ex tempora amet minus blanditiis quis perferendis? Eos facere neque temporibus vel
                  modi fugit mollitia, eaque dolores?
                </p>
              </li>
              <li className="card">
                <div className="card_header">
                  <h3 className="card_title">ゲーム</h3>
                  <FontAwesomeIcon icon={faGamepad} className="text-5xl" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui inventore optio molestias ex tempora amet minus blanditiis quis perferendis? Eos facere neque temporibus vel
                  modi fugit mollitia, eaque dolores?
                </p>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

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
                はじめまして。平成2年生まれのゆうた(`<a href="/">@yutassk</a>`)と申します。社会人歴10年目です。
                <br />
                職歴としては大学を卒業してから放射線技師として総合病院に勤務しています。全検査（MRI、CT、カテーテル検査、バリウム検査などの撮影業務）を担当していたのでエンジニアで言うところの「フルスタック」のような勤務状況でした。
                <br />
                小学4年生の頃にパソコンにハマり、ホームページ作成やプログラミング（C+、Javaなど）、ゲームのバイナリデータをいじったりしていました。
                <br />
                アフィリエイトを行う中でスクレイピングする必要に迫られコーディングをしたり、業務で使用するマクロを組んだりなど。
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

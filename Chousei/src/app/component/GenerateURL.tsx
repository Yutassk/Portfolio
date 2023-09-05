"use client";
import { doc, setDoc } from "firebase/firestore";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useState } from "react";
import Select from "react-select";
import { db } from "./Firebase";

export const GeneratedURL = () => {
  const months = [
    { label: "1月" },
    { label: "2月" },
    { label: "3月" },
    { label: "4月" },
    { label: "5月" },
    { label: "6月" },
    { label: "7月" },
    { label: "8月" },
    { label: "9月" },
    { label: "10月" },
    { label: "11月" },
    { label: "12月" },
  ];

  const [month, setMonth] = useState<string | null>("");
  const [storageValue, setStorageValue] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams()!;

  type Props = {
    initialKey: string;
    initialValue: string;
  };

  // シフト作成月の選択
  const chooseMonth = (selectedMonth) => {
    console.log(selectedMonth.label);
    setMonth(selectedMonth);
  };

  // URL用の文字列ランダム生成
  const generateRandomString = (length: number) => {
    const characters = "ABCDDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomString = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }
    return randomString;
  };

  // URLにname,queryを設定する関数
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  // URL生成、生成後のURLに遷移、URLをFirebase、Localstorageに保存
  const handleUrlGenerate = async () => {
    // URLの長さを決める関数
    const urlLengthMin = 30;
    const urlLengthMax = 50;

    let len = Math.floor(Math.random() * (urlLengthMax - urlLengthMin + 1)) + urlLengthMin;
    const generatedUrl = generateRandomString(len);

    //生成されたURLをFirebaseに保存、遷移
    const docRef = await setDoc(doc(db, "shifts", generatedUrl), { シフト月: month });
    console.log("Document written with ID: ", docRef);

    router.push("s" + "?" + createQueryString("h", generatedUrl));

    // localstorageにURL保存
    const existingUrlsJSON = localStorage.getItem("deviceEventHistory");
    const existingUrls: string[] = existingUrlsJSON ? JSON.parse(existingUrlsJSON) : [];

    existingUrls.push(generatedUrl);

    localStorage.setItem("deviceEventHistory", JSON.stringify(existingUrls));
    localStorage.setItem("creatorUserId", JSON.stringify("creator"));
  };

  return (
    <div className="flex flex-col items-center space-y-4 mb-4">
      <div className="flex items-center justify-center">
        <Select className="text-sm " placeholder="シフト月" options={months} onChange={(selectedMonth) => chooseMonth(selectedMonth)} />
        <h3>月の</h3>
      </div>
      <button className={`bg-emerald-500 text-white py-2 px-4 rounded-md  ${month ? "hover:bg-emerald-600" : "pointer-events-none opacity-40"}`} onClick={handleUrlGenerate}>
        シフトを作成する
      </button>
    </div>
  );
};

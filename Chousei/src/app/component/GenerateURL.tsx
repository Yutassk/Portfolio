"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Select from "react-select";

export const GeneratedURL = () => {
  const months = [
    { label: "1" },
    { label: "2" },
    { label: "3" },
    { label: "4" },
    { label: "5" },
    { label: "6" },
    { label: "7" },
    { label: "8" },
    { label: "9" },
    { label: "10" },
    { label: "11" },
    { label: "12" },
  ];
  const [month, setMonth] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const router = useRouter();

  const chooseMonth = (selectedMonth) => {
    setMonth(selectedMonth);
  };

  const generateRandomString = (length: number) => {
    const characters = "ABCDDEFGHIJKLMNWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomString = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }
    return randomString;
  };

  const handleUrlGenerate = () => {
    const min = 30;
    const max = 50;

    let len = Math.floor(Math.random() * (max - min + 1)) + min;
    const generatedUrl = generateRandomString(len);
    setUrl(generatedUrl);
  };

  useEffect(() => {
    router.push(`/${url}`);
  }, [url]);

  return (
    <div>
      <div className="flex items-center justify-center">
        <Select id={month} className="text-sm " placeholder="シフト月" options={months} onChange={(selectedMonth) => chooseMonth(selectedMonth)} />
        <h3>月の</h3>
      </div>

      <button onClick={handleUrlGenerate}>シフトを作成する</button>
    </div>
  );
};

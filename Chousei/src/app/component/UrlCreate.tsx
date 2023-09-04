"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export const UrlCreate = () => {
  const [url, setUrl] = useState("");
  const router = useRouter();

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
      <button onClick={handleUrlGenerate}>URLクリエイト</button>
    </div>
  );
};

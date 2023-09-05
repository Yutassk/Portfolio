"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { ShiftList } from "../component/ShiftList";
import Header from "../Layout/Header";

export default function Page({ params }: { params: { slug: string } }) {
  const pathname = usePathname();
  console.log(params);

  const userAuth = localStorage.getItem("creatorUserId");
  console.log(userAuth);

  return (
    <div>
      {}
      <Header />
      <div>My Post: {params.slug}</div>
      <ShiftList />
    </div>
  );
}

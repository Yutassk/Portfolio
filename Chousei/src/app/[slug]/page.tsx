"use client";
import React from "react";
import { useParams, usePathname } from "next/navigation";

export default function Page({ params }: { params: { slug: string } }) {
  const pathname = usePathname();
  const param = useParams();
  console.log(param);
  console.log(pathname);
  console.log(params);

  return <div>My Post: {params.slug}</div>;
}

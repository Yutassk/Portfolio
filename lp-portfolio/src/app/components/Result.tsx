import Image from "next/image";
import React from "react";

export const Result = ({ photo }: any) => {
  const { urls, alt_description } = photo;

  return (
    <div>
      <Image src={urls.regular} alt={alt_description} fill style={{ objectFit: "cover" }} />
    </div>
  );
};

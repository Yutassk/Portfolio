import Image from "next/image";
import React from "react";

export const Result = ({ photo }: any) => {
  const { urls, alt_description } = photo;
  console.log(photo);
  return (
    <div className="h-96 relative">
      <Image src={urls.regular} alt={alt_description} fill priority style={{ objectFit: "cover" }} />
    </div>
  );
};

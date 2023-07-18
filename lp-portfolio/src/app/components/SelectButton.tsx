import Image from "next/image";
import React from "react";

export const SelectButton = ({ getPhotoData }: any) => {
  return (
    <div className="absolute right-2 bottom-2 opacity-40">
      <button onClick={getPhotoData} className="text-xs">
        <Image src="/reload.png" alt="" width={30} height={30} />
      </button>
    </div>
  );
};

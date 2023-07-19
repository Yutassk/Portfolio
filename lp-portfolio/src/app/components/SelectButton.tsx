import Image from "next/image";
import React from "react";

export const SelectButton = ({ getPhotoData }: any) => {
  return (
    <div className="float-left opacity-80">
      <button onClick={getPhotoData} className="">
        <Image src="/reload.png" alt="" width={30} height={30} />
      </button>
    </div>
  );
};

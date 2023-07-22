import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { SelectButton } from "./SelectButton";
import { Result } from "./Result";

export const Unsplash = () => {
  const [photo, setPhoto] = useState();

  useEffect(() => {
    const fetchPhoto = () => {
      axios.get(`https://api.unsplash.com/photos/random?query=technology&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_API_KEY}`).then((res) => setPhoto(res.data));
    };
    fetchPhoto();
  }, []);

  const getPhotoData = useCallback(() => {
    axios.get(`https://api.unsplash.com/photos/random?query=technology&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_API_KEY}`).then((res) => setPhoto(res.data));
  }, []);

  return (
    <div className=" fixed top-0 left-0 w-full h-screen -z-10 opacity-30">
      {photo && <Result photo={photo} />}
      <SelectButton getPhotoData={getPhotoData} />
    </div>
  );
};

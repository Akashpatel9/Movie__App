import React from "react";
import profileBlankImage from "../../../public/image-not-found.jpg";

const Cards = ({ item }) => {
  return (
    <div className="relative w-36 h-48 bg-zinc-800 rounded-sm flex flex-col gap-2 p-1 justify-between">
      <div className=" w-full h-full">
        <img
          className="w-full h-full object-cover"
          src={item?.Poster=="N/A"?profileBlankImage : item?.Poster}
          />
      </div>
    </div>
  );
};

export default Cards;

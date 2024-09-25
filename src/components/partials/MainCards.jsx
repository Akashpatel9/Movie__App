import React from "react";
import profileBlankImage from "../../../public/image-not-found.jpg";

const MainCards = ({ data }) => {
  return (
    <div className="w-64 rounded h-[60vh] max-lg:w-52  max-lg:h-[50vh] max-md:w-44 max-sm:w-[40vw] max-sm:h-[32vh] max-md:h-[45vh] max-md:px-0  max-md:py-0 py-2 px-3 overflow-hidden border-[1px] border-zinc-700">
      <div className="w-full h-[80%] relative">
        <img
          className="w-full h-full rounded"
          src={data?.Poster == "N/A" ? profileBlankImage : data?.Poster}
          alt=""
        />
      </div>
      <h1 className=" capitalize font-bold text-2xl text-zinc-500 px-2 py-4 max-lg:text-xl max-md:text-sm max-sm:text-xs">
        {(data?.Title).substring(
          0,
          24
        )}
      </h1>
    </div>
  );
};

export default MainCards;

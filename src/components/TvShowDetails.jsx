import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadTv, removeTv } from "../stores/actions/TvActions";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { ClimbingBoxLoader, PacmanLoader } from "react-spinners";
import Cards from "./partials/Cards";
import ReactPlayer from "react-player";

const TvShowDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { info } = useSelector((item) => item.tv);
  const nevigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    dispatch(asyncLoadTv(id));
    return () => {
      dispatch(removeTv());
    };
  }, [id]);

  console.log(info);
  
  return info ? (
    <div className=" relative w-full bg-[#18181B]">
      <div className="h-[70vh] w-full relative">
        <nav className="absolute z-20 flex gap-10 text-zinc-100 capitalize items-center font-semibold justify-center px-6  mt-3">
          <Link
            onClick={() => nevigate(-1)}
            className=" text-xl ri-arrow-left-s-line hover:text-purple-400"
          ></Link>
          <div className="flex justify-center gap-6 items-center">
            <Link
              target="_blank"
              to={`https://www.imdb.com/title/${info?.detail?.imdb_id}`}
              className="hover:text-purple-400"
            >
              imdb
            </Link>
          </div>
        </nav>
        <img
          className="w-full h-full object-contain object-top "
          src={info?.detail?.Poster}
          alt=""
        />
        <div className=" absolute z-10 text-white bottom-20 left-20 flex flex-col gap-5 max-md:left-10 max-sm:left-5">
          <h1 className="font-extrabold w-2/3 text-6xl max-sm:text-4xl">
            {info?.detail?.Title}
          </h1>
          <div className="flex item-center item-center gap-3 max-sm:text-xs max-sm:flex-wrap">
            <h5>{info?.detail?.Genre}</h5>
            <h5 className="flex items-center justify-center gap-1">
              <div className="h-1 w-1 rounded-full bg-white"></div>
              {info?.detail?.Released}
            </h5>
            <h5 className=" flex items-center justify-center gap-1">
              <div className=" uppercase h-1 w-1 rounded-full bg-white"></div>
              <div>{info?.detail?.Language}</div>
            </h5>
            
          </div>

          <div className="flex items-center justify-center w-fit gap-2 font-bold text-xl capitalize">
            <div className="w-12 h-12 p-5 bg-purple-500 rounded-full  flex items-center justify-center max-sm:w-10 max-sm:h-10">
              <h1 className="text-white font-bold max-sm:text-sm">
                {(info?.detail?.imdbRating * 10).toFixed()}
                <sup>%</sup>
              </h1>
            </div>
            <h1 className="max-sm:text-sm capitalize font-semibold">
              IMDB Rating
            </h1>
          </div>

          {/* <Link
            to={`${pathname}/trailer`}
            className="px-8 py-3 flex items-center justify-center gap-1 capitalize font-bold w-fit bg-purple-500 rounded-md max-sm:px-3 max-sm:py-2"
          >
            <i className="ri-play-circle-fill"></i>{" "}
            <h1 className="max-sm:text-sm">watch Trailer</h1>
          </Link> */}
        </div>
        <div className=" absolute top-0 w-full h-full bg-gradient-to-b from-[#000000c1] to-zinc-900 opacity-100" />
      </div>

      <div className="text-white mt-5 flex flex-col gap-3 px-20 max-md:px-10 max-sm:px-5">
        <h4 className=" capitalize font-semibold text-2xl text-zinc-400">
          story line
        </h4>
        <p className="text-xd text-zinc-500">{info.detail.Plot}</p>
        
      </div>
      <Outlet />
    </div>
  ) : (
    <div className="w-full h-screen flex items-center justify-center">
      <ClimbingBoxLoader
        color="rgb(168 85 247)"
        margin={5}
        size={30}
        speedMultiplier={1}
      />
    </div>
  );
};

export default TvShowDetails;

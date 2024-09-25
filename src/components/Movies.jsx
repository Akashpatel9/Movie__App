import { useEffect, useState } from "react";
import TopNev from "./partials/TopNev";
import DropDown from "./partials/DropDown";
import MainCards from "./partials/MainCards";
import axios from "../assets/axios";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { ClimbingBoxLoader, PacmanLoader, PulseLoader } from "react-spinners";

const Movies = () => {
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);

  function getMovies() {
    const apiKey = "5f0c93bd"; // Replace with your OMDB API key
 
    axios
      .get(`?s=Movie&page=${page}&apikey=${apiKey}`)
      .then((data) => {
        if (data.data.Search && data.data.Search.length > 0) {
          if (trending.length > 0) {
            setTrending((pre) => [...pre, ...data.data.Search]); // OMDB returns movies under "Search"
          } else {
            setTrending(data.data.Search);
          }
          setPage(page + 1);
        } else {
          console.log("No results found.");
        }
      })
      .catch((err) => console.log(err));
  }
  

  useEffect(() => {
    setTrending([]);
    setPage(1);
    getMovies();
  }, []);

  return trending?.length > 0 ? (
    <div className="w-full px-12 max-lg:px-5 h-fit py-2 bg-[#18181B]">
      <div className="flex items-center justify-between w-full h-[10%]">
        <Link
          to={"/"}
          className=" flex items-center justify-center gap-2 cursor-pointer text-zinc-500 font-extrabold text-2xl"
        >
          <i className="ri-arrow-left-line"></i>{" "}
          <h1 className="max-sm:hidden">Movies</h1>
        </Link>
        <TopNev />
      </div>

      <InfiniteScroll
        dataLength={trending.length} // This tells how many items have been loaded
        next={getMovies} // Fetch next page data
        hasMore={true} // Has more data to fetch
        loader={
          <div className="w-full h-screen flex items-center justify-center">
            <PulseLoader
              color="rgb(168 85 247)"
              margin={5}
              size={15}
              speedMultiplier={0.8}
            />
          </div>
        }
      >
        <div className="w-full flex gap-8 max-sm:gap-5 h-fit flex-wrap overflow-auto justify-center items-center">
          {trending.map((e) => (
            <Link key={e?.imdbID} to={`/movie/details/${e.imdbID}`}>
              <MainCards data={e} />
            </Link>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  ) : (
    <div className="w-screen h-screen flex items-center justify-center">
      <ClimbingBoxLoader
        color="rgb(168 85 247)"
        margin={5}
        size={80}
        speedMultiplier={1}
      />
    </div>
  );
};

export default Movies;

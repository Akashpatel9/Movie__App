import { useEffect, useState } from "react";
import TopNev from "./partials/TopNev";
import DropDown from "./partials/DropDown";
import MainCards from "./partials/MainCards";
import axios from "../assets/axios";
import { Link } from "react-router-dom";
import { ClimbingBoxLoader, PulseLoader } from "react-spinners";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);


  const apiKey = "5f0c93bd";

  const getTrending = () => {
    axios
      .get(`?s=trending&apikey=${apiKey}&page=${page}`)
      .then((response) => {
        const results = response.data.Search;
        const total = parseInt(response.data.totalResults, 10); // Get total results

        if (results?.length > 0) {
          setTrending((prev) => [...prev, ...results]);
          setPage((prevPage) => prevPage + 1); // Increment page correctly
          setTotalResults(total); // Set total results

          // Check if we have fetched all the results
          if (trending.length + results.length >= total) {
            setHasMore(false); // No more data to fetch
          }
        } else {
          setHasMore(false); // Stop infinite scroll if no more results
        }
      })
      .catch((err) => {
        console.log(err);
        setHasMore(false); // Handle errors and stop further requests
      });
  };

  // Reset trending and page when category or duration changes
  useEffect(() => {
    setTrending([]);
    setPage(1);
    setHasMore(true); // Reset hasMore when category or duration changes
    getTrending();
  }, []);

  return trending?.length > 0 ? (
    <div className="w-full px-12 max-lg:px-5 h-fit py-2 bg-[#18181B]">
      <div className="flex items-center justify-between w-full h-[10%]">
        <Link
          to={"/"}
          className=" flex items-center justify-center gap-2 cursor-pointer text-zinc-500 font-extrabold text-2xl"
        >
          <i className="ri-arrow-left-line"></i>{" "}
          <h1 className="max-sm:hidden">Trending</h1>
        </Link>
        <TopNev />
      </div>

      <InfiniteScroll
        dataLength={trending.length} // This tells how many items have been loaded
        next={getTrending} // Fetch next page data
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
            <Link key={e?.imdbID} to={`/${e?.Type}/details/${e.imdbID}`}>
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
      size={30}
      speedMultiplier={1}
    />
  </div>
  );
};

export default Trending;

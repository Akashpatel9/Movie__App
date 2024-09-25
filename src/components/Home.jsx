import { useEffect, useState } from "react";
import { SideNev } from "./partials/SideNev";
import TopNev from "./partials/TopNev";
import Header from "./partials/Header";
import axios from "../assets/axios";
import HorizontalCards from "./partials/HorizontalCards";
import DropDown from "./partials/DropDown";
import { ClimbingBoxLoader } from "react-spinners";
import FloatingNev from "./partials/FloatingNev";

const Home = () => {
  const [trending, setTrending] = useState(null);
  const [trendingAll, setTrendingAll] = useState([]);
  const [category, setCategory] = useState("all");
  const [floatingNev, setFloatingNev] = useState(false);

  const apiKey = "5f0c93bd";

  function trendingRandom() {
    const randomSearches = ["Batman", "Avengers", "Star Wars", "Harry Potter", "Matrix"];
    const randomQuery = randomSearches[Math.floor(Math.random() * randomSearches.length)];

    axios
      .get(`?s=${randomQuery}&apikey=${apiKey}`)
      .then((response) => {
        const results = response?.data?.Search;
        if (results && results.length > 0) {
          const randomResult = results[Math.floor(Math.random() * results.length)];
          setTrending(randomResult);
        } else {
          console.log("No results found.");
        }
      })
      .catch((err) => console.log(err));
  }

  function trendingAllFn(category = "all") {
    const trendingQueries = ["Batman", "Avengers", "Breaking Bad", "Friends", "Harry Potter"];
    const randomQuery = trendingQueries[Math.floor(Math.random() * trendingQueries.length)];
    
    let url = `https://www.omdbapi.com/?s=${randomQuery}&apikey=${apiKey}`;
    
    if (category === "movie") {
      url += `&type=movie`;
    } else if (category === "tv") {
      url += `&type=series`;
    }

    axios
      .get(url)
      .then((data) => {
        if (data.data.Search) {
          setTrendingAll(data.data.Search);
        } else {
          console.log("No results found.");
        }
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (!trending) {
      trendingRandom();
    }
    trendingAllFn(category);
  }, [category]);

  return trending !== null ? (
    <div className="flex w-full bg-[#18181B]">
      <div className=" hidden max-md:inline">
        {floatingNev && <FloatingNev setFloatingNev={setFloatingNev} />}
      </div>
      <div className="w-[20%] h-screen max-sm:hidden">
        <SideNev />
      </div>
      <div className="w-[80%] h-full leading-none max-sm:w-full">
        <div className="flex items-center justify-center">
          <i
            onClick={() => setFloatingNev(!floatingNev)}
            className="max-sm:block hidden ri-list-indefinite text-2xl text-zinc-500 hover:text-purple-600 pl-4"
          ></i>
          <TopNev />
        </div>
        <Header data={trending} />
        <div className="flex items-center justify-between px-4 py-5">
          <h1 className="capitalize font-bold font-sans max-md:text-2xl text-zinc-500 text-3xl">
            Trending
          </h1>
          <div className="max-sm:hidden">
            <DropDown
              options={["all", "movie", "tv"]}
              fn={(e) => setCategory(e.target.value)}
              title={category}
            />
          </div>
        </div>
        <HorizontalCards trendingAll={trendingAll} />
      </div>
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

export default Home;

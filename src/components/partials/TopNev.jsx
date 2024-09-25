import { useEffect, useState } from "react";
import axios from "../../assets/axios";
import profileBlankImage from "../../../public/image-not-found.jpg";
import { Link } from "react-router-dom";

const TopNev = () => {
  const [search, setSearch] = useState("");

  const [searchData, setSearchData] = useState([]);

  const apiKey = "5f0c93bd";

  function searchProduct() {
    axios
    .get(`?s=${search}&apikey=${apiKey}`)
    .then((data) => {
      if (data.data.Search) {
        setSearchData(data.data.Search); // OMDB results are in the 'Search' field
      } else {
        console.log("No results found.");
      }
    })
    .catch((err) => console.log(err));
}

  useEffect(() => {
    searchProduct();
  }, [search]);

  return (
    <div className="px-2 py-4 w-full">
      <div className="w-[80%] relative mx-auto">
        <div className="flex items-center justify-center text-zinc-600 font-bold bg-zinc-800 rounded-xl px-4 py-2 gap-2">
          <i className="ri-search-2-line"></i>
          <input
            // onClick={() => setIsOpened(true)}
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            className="w-full outline-none bg-transparent text-zinc-400"
            placeholder="Search here"
            type="text"
          />
          {search && (
            <i
              onClick={() => setSearch("")}
              className="ri-delete-bin-2-fill"
            ></i>
          )}
        </div>

        <div className="absolute w-full left-[50%] z-10 -translate-x-[50%] bg-zinc-800 rounded-xl px-6 max-h-[70vh] overflow-auto mt-1">
          {searchData.map((item, idx) => {
            return (
              <Link key={item.imdbID} to={`/${item.Type}/details/${item.id}`}>
                {idx !== 0 && <div className="w-full h-[1px] bg-white"></div>}
                <div className=" hover:text-white flex text-zinc-400 items-center h-24 gap-5 border-b-zinc-900 cursor-pointer">
                  <div className="w-16 h-20 rounded overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={
                        item?.Poster == "N/A" ? profileBlankImage : item?.Poster
                      }
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="font-mono">
                      {item?.Title}
                    </h1>
                    <h1 className="font-mono">
                      {item.Year}
                    </h1>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopNev;

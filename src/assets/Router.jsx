import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Trending from "../components/Trending";
import TvShows from "../components/TvShows";
import Movies from "../components/Movies";
import MovieDetails from "../components/MovieDetails";
import TvShowDetails from "../components/TvShowDetails";
import Error from "../components/partials/Error";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/trending" element={<Trending />} />
      <Route path="/movie" element={<Movies />} />
      <Route path="/movie/details/:id" element={<MovieDetails />}>
      </Route>
      <Route path="/series" element={<TvShows />} />
      <Route path="/series/details/:id" element={<TvShowDetails />}>
      </Route>
      <Route path="*" element={<Error/>} />
    </Routes>
  );
};

export default Router;

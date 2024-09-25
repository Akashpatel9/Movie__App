import { Link } from "react-router-dom";

export const SideNev = () => {
  return (
    <div className="w-full h-full border-r-2 border-zinc-700 px-10 max-lg:px-5 max-md:px-2 py-8 text-white flex flex-col gap-12 max-md:gap-8">
      <h1 className="flex items-center gap-2 font-extrabold text-2xl max-lg:text-xl max-md:text-sm">
        <i className="text-purple-500 ri-tv-fill"></i> MYAPP
      </h1>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-6">
          <h1 className=" font-bold text-xl max-lg:text-md max-md:text-sm">New Feed</h1>
          <nav className="flex flex-col gap-4">
            <Link
              to="/trending"
              className=" transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 capitalize hover:cursor-pointer hover:bg-purple-600 h-10 rounded flex px-5 max-lg:px-2 max-md:text-xs items-center"
            >
              <i className="ri-fire-fill mr-1"></i> trending
            </Link>
            <Link
              to="/movie"
              className=" transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 capitalize hover:cursor-pointer hover:bg-purple-600 h-10 rounded flex px-5 max-lg:px-2 max-md:text-xs  items-center"
            >
              <i className="ri-movie-2-fill mr-1"></i> movies
            </Link>
            <Link
              to="/series"
              className=" transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 capitalize hover:cursor-pointer hover:bg-purple-600 h-10 rounded flex px-5 max-lg:px-2 max-md:text-xs  items-center"
            >
              <i className="ri-tv-2-fill mr-1"></i> series
            </Link>
          </nav>
        </div>      
      </div>
    </div>
  );
};

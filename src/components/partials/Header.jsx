import { Link} from "react-router-dom";

const Header = ({ data }) => {
  console.log(data);
  
  return (
    <>
      <div className="relative w-full h-[50vh] overflow-hidden px-2">
        <div className="flex h-full justify-center items-fit w-full">
        <img
          className="h-full rounded-sm object-contain object-top"
          src={data?.Poster}
        />
        </div>
        <div className="w-full h-full bg-[rgba(0,0,0,0.84)] absolute top-0"></div>
        <div className="absolute top-0 text-white w-full h-full flex flex-col item-center justify-center gap-3 pt-10 px-28 max-md:px-10 max-lg:px-10 max-sm:px-4">
          <h1 className="font-extrabold text-5xl max-sm:text-xl uppercase max-md:text-3xl max-md:w-2/3">
            {data?.Title}
          </h1>
          <div className="flex gap-5 font-semibold">
            <h5 className="flex items-center justify-center gap-1 max-md:text-sm">
              <i className="text-yellow-400 ri-megaphone-fill"></i>
              {data?.Year}
            </h5>
            <h5 className="flex items-center justify-center max-md:text-sm gap-1 uppercase">
              <i className="text-yellow-400 ri-album-fill"></i>
              {data?.Type}
            </h5>
          </div>
          <Link
            to={`${data?.Type}/details/${data?.imdbID}`}
            className="px-8 py-3 max-md:py-2 max-md:text-sm capitalize font-bold w-fit bg-purple-500 rounded-md"
          > details
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;

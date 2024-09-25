import { Link } from "react-router-dom";
import Cards from "./Cards";

const HorizontalCards = ({ trendingAll }) => {
  console.log(trendingAll);
  return (
    <div className="px-2 overflow-hidden">
      <div className="overflow-auto w-full h-fit">
        <div className="flex w-fit gap-4 h-full">
          {trendingAll.map((item) => {
            return (
            <Link to={`/${item?.Type}/details/${item?.imdbID}`} key={item?.imdbID}><Cards item={item} /></Link>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default HorizontalCards;

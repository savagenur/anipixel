import { FilterIcon, LucideArrowDown, Search, X } from "lucide-react";
import Button from "../components/Button";
import FilterTile from "../components/FilterTile";
import MainTitle from "../components/MainTitle";
import AnimeCard from "../components/AnimeCard";
import SearchFilter from "../components/SearchFilter";
import { twx } from "../utils/utils";
import Navbar from "../components/Navbar";

const AnimePage = () => {
  
  return (
    <div className="w-full main-padding">
     
      {/* Search filter */}
      <SearchFilter />

      {/* Trending anime */}
      {animeSection()}

      {animeSection()}
      {animeSection()}
      {animeSection()}
      {animeSection()}
    </div>
  );
};
const animeSection = () => (
  <>
    <div className="pt-10 ">
      <MainTitle title="TRENDING NOW" />
    </div>
    <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-8 mt-5">
      {Array(5)
        .fill(0)
        .map((item, index) => {
          return <AnimeCard key={index} />;
        })}
    </div>
  </>
);
export default AnimePage;

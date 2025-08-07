import { ChevronDown, FilterIcon, Search } from "lucide-react";
import { useState, type ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchFilterEnum } from "../core/enums/SearchFilterEnum";
import Button from "./Button";
import SearchFilterTile from "./SearchFilterTile";
import { useMediaQuery } from "../hooks/utils/useMediaQuery";
import { twx } from "../utils/utils";

const SearchBar = () => {
  const isLgScreen = useMediaQuery("(width >= 1024px)");
  const [showFilter, setShowFilter] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchParams({
      search: value,
    });
  };

  return (
    <div className="text-foreground pt-10  lg:flex pb-6 justify-between items-end w-full">
      <div className="flex lg:gap-6 gap-4 flex-col lg:flex-row">
        <div className="flex lg:items-start items-end w-full lg:w-fit gap-3">
          <div className="flex-grow">
            <SearchFilterTile
              searchFilterEnum={SearchFilterEnum.SEARCH}
              title={"Search"}
              showTitle={isLgScreen}
              Prefix={Search}
              placeholder={isLgScreen ? "" : "Search"}
              type="input"
              className="w-full lg:w-[175px]"
            />
          </div>
          <Button
            className="bg-background h-[45px] px-3 lg:hidden"
            children={<FilterIcon className="w-5 h-5 text-textColor2" />}
            onClick={() => setShowFilter(!showFilter)}
          />
        </div>

        <div
          className={twx("relative", [
            showFilter || isLgScreen ? "block" : "hidden",
          ])}
        >
          <div className="flex gap-6  scrollbar-hide pb-2 pr-2 flex-wrap lg:flex-nowrap">
            <SearchFilterTile
              searchFilterEnum={SearchFilterEnum.GENRES}
              title={"Genres"}
              placeholder={"Any"}
              Suffix={ChevronDown}
            />
            <SearchFilterTile
              searchFilterEnum={SearchFilterEnum.YEAR}
              title={"Year"}
              placeholder={"Any"}
              Suffix={ChevronDown}
            />
            <SearchFilterTile
              searchFilterEnum={SearchFilterEnum.STATUS}
              title={"Status"}
              placeholder={"Any"}
              Suffix={ChevronDown}
              type="dropdown"
            />
            <SearchFilterTile
              searchFilterEnum={SearchFilterEnum.TYPE}
              title={"Format"}
              placeholder={"Any"}
              Suffix={ChevronDown}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

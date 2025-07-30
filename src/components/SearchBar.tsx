import { ChevronDown, FilterIcon, Search, X } from "lucide-react";
import Button from "./Button";
import SearchFilterTile from "./SearchFilterTile";
import { useSearchParams } from "react-router-dom";
import type { ChangeEvent } from "react";
import { SearchFilterEnum } from "../core/enums/SearchFilterEnum";
import { useGenres } from "../hooks/useGenres";

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchParams({
      search: value,
    });
  };

  return (
    <div className="text-foreground pt-10 hidden lg:flex pb-6 justify-between items-end w-full">
      <div className="flex gap-8 ">
        <SearchFilterTile
          searchFilterEnum={SearchFilterEnum.SEARCH}
          title={"Search"}
          Prefix={Search}
          type="input"

        />
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
          // fetchOptions={useGenres}
          
        />
        <SearchFilterTile
          searchFilterEnum={SearchFilterEnum.TYPE}
          title={"Format"}
          placeholder={"Any"}
          Suffix={ChevronDown}
        />
      </div>
      <Button
        className="bg-background h-[45px] px-3"
        children={<FilterIcon className="w-5 h-5 text-textColor2" />}
      />
    </div>
  );
};

export default SearchBar;

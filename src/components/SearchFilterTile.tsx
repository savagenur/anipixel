import { type LucideIcon } from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchFilterEnum } from "../core/enums/SearchFilterEnum";
import { debounce } from "lodash";
import { useSearchAnime } from "../hooks/useSearchAnime";

export type FilterTileProps = {
  title: string;
  searchFilterEnum: SearchFilterEnum;
  placeholder?: string | null;
  Prefix?: LucideIcon | null;
  Suffix?: LucideIcon | null;
};

const SearchFilterTile = ({
  title,
  Prefix,
  Suffix,
  placeholder,
  searchFilterEnum,
}: FilterTileProps) => {
  const queryKey = searchFilterEnum;
  const [searchParams, setSearchParams] = useSearchParams();

  // Keep internal state for input typing
  const [inputValue, setInputValue] = useState(
    searchParams.get(queryKey) || ""
  );

  // Debounced URL update
  const debouncedSetParams = useMemo(
    () =>
      debounce((value: string) => {
        const newParams = new URLSearchParams(searchParams);
        if (value === "") {
          newParams.delete(queryKey);
        } else {
          newParams.set(queryKey, value);
          
        }
        setSearchParams(newParams);
        
      }, 1000),
    [searchParams, queryKey]
  );

  // Cancel on unmount
  useEffect(() => {
    return () => {
      debouncedSetParams.cancel();
    };
  }, [debouncedSetParams]);

  // When input changes, update local state + trigger debounced URL update
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value); // immediate UI feedback
    debouncedSetParams(value.trim()); // delay search param update
  };

  return (
    <div className="flex flex-col gap-2">
      <p>{title}</p>
      <div className="p-2 bg-background h-[45px] w-[170px] rounded-lg items-center flex">
        <div className="flex items-center gap-2 text-textColor3 text-sm">
          {Prefix && <Prefix className="shrink-0 w-5 h-5" />}
          <input
            type="text"
            placeholder={placeholder ?? ""}
            value={inputValue}
            className="flex-1 bg-transparent outline-none text-sm w-full min-w-0"
            onChange={handleChange}
          />
          {Suffix && <Suffix className="shrink-0 w-5 h-5 cursor-pointer" />}
        </div>
      </div>
    </div>
  );
};

export default SearchFilterTile;

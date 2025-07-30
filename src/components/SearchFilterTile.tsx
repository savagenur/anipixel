import { BadgeCheckIcon, Check, CheckCircle, CheckCircle2Icon, X, type LucideIcon } from "lucide-react";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchFilterEnum } from "../core/enums/SearchFilterEnum";
import { debounce } from "lodash";
import { useSearchAnime } from "../hooks/useSearchAnime";
import { statusOptions, typeOptions, yearOptions } from "../utils/constants";
import type { Option } from "../models/Option";
import { useGenres } from "../hooks/useGenres";
import { twx } from "../utils/utils";

export type FilterTileProps = {
  title: string;
  searchFilterEnum: SearchFilterEnum;
  placeholder?: string | null;
  Prefix?: LucideIcon | null;
  Suffix?: LucideIcon | null;
  type?: "input" | "dropdown";
};

const SearchFilterTile = ({
  title,
  Prefix,
  Suffix,
  placeholder,
  searchFilterEnum,
  type = "dropdown",
}: FilterTileProps) => {
  const queryKey = searchFilterEnum;
  const [searchParams, setSearchParams] = useSearchParams();
  const [showDropdown, setShowDropdown] = useState(false);
  const [options, setOptions] = useState<Option[]>([]);
  const { data: genresOptions } = useGenres();

  const [inputValue, setInputValue] = useState(() => {
    const paramValue = searchParams.get(queryKey) || "";
    return options?.find((g) => g.mal_id.toString() === paramValue)?.name || "";
  });
  useEffect(() => {
    const paramValue = searchParams.get(queryKey) || "";
    if (!paramValue) return;

    if (type === "dropdown") {
      // Fetch options if not loaded
      if (options.length === 0) {
        let newOptions: Option[] | undefined;
        switch (queryKey) {
          case SearchFilterEnum.GENRES:
            newOptions = genresOptions;
            break;
          case SearchFilterEnum.YEAR:
            newOptions = yearOptions;
            break;
          case SearchFilterEnum.STATUS:
            newOptions = statusOptions;
            break;
          case SearchFilterEnum.TYPE:
            newOptions = typeOptions;
            break;
        }
        if (newOptions) {
          setOptions(newOptions);
          const matched = newOptions.find(
            (g) => g.mal_id.toString() === paramValue
          );
          setInputValue(matched ? matched.name : "");
        }
      } else {
        const matched = options.find((g) => g.mal_id.toString() === paramValue);
        setInputValue(matched ? matched.name : "");
      }
    } else {
      setInputValue(paramValue);
    }
  }, [searchParams, queryKey, type, genresOptions, options]);
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
    [searchParams, setSearchParams, queryKey]
  );

  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
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

  const handleClick = async () => {
    if (type === "dropdown") {
      if (options.length === 0) {
        let newOptions: Option[] | undefined;
        switch (queryKey) {
          case SearchFilterEnum.GENRES:
            newOptions = genresOptions;
            break;
          case SearchFilterEnum.YEAR:
            newOptions = yearOptions;
            break;
          case SearchFilterEnum.STATUS:
            newOptions = statusOptions;
            break;
          case SearchFilterEnum.TYPE:
            newOptions = typeOptions;
            break;
        }
        setOptions(newOptions ?? []);
        console.log(options);
      }
      setShowDropdown((prev) => !prev);
    }
  };
  const handleSelect = (mal_id: string, name: string) => {
    setInputValue(name);
    setShowDropdown(false);
    debouncedSetParams(mal_id);
  };
  return (
    <div className="flex flex-col gap-2 relative ">
      <p>{title}</p>
      <div
        className="p-2 bg-background h-[45px] w-[170px] rounded-lg items-center flex"
        ref={containerRef}
      >
        <div className="flex items-center gap-2 text-textColor3 text-sm overflow-hidden">
          {Prefix && <Prefix className="shrink-0 w-5 h-5" />}
          <input
            type="text"
            placeholder={placeholder ?? ""}
            value={inputValue}
            className="flex-1 bg-transparent outline-none text-sm min-w-0 cursor-pointer text-primary font-semibold placeholder:text-gray-600 placeholder:font-normal "
            onChange={handleChange}
            onClick={handleClick}
            readOnly={type === "dropdown"}
          />
          {inputValue.length === 0 ? (
            Suffix && (
              <Suffix
                className="right-0 shrink-0 w-5 h-5 cursor-pointer"
                onClick={handleClick}
              />
            )
          ) : (
            <X
              className="right-0 shrink-0 w-5 h-5 cursor-pointer"
              onClick={() => handleSelect("", "")}
            />
          )}

          {type === "dropdown" && showDropdown && (
            <div className="absolute top-full mt-3 left-0 right-0 bg-background  rounded shadow-md z-10 max-h-75 overflow-y-auto items-center">
              {options.map((opt) => (
                <div
                  key={opt.mal_id}
                  onClick={() => handleSelect(opt.mal_id, opt.name)}
                  className={twx(
                    "p-2 hover:bg-gray-800 hover:text-white cursor-pointer text-sm flex justify-between items-center",opt.name===inputValue&&'text-primary font-semibold'
                  )}
                >
                  {opt.name}
                  {opt.name===inputValue&&<BadgeCheckIcon />}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchFilterTile;

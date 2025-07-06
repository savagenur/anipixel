import { Search, X, type LucideIcon } from "lucide-react";
import React from "react";

export type FilterTileProps = {
  title: string;
  placeholder?: string |null;
  Prefix?: LucideIcon | null;
  Suffix?: LucideIcon | null;
};

const FilterTile = ({ title, Prefix, Suffix,placeholder }: FilterTileProps) => {
  return (
    <div className="flex flex-col gap-2">
      <p>{title}</p>
      <div className="p-2 bg-background h-[45px] w-[170px] rounded-lg items-center flex">
        <div className="flex items-center gap-2 text-textColor3 text-sm">
          {Prefix && <Prefix className="shrink-0 w-5 h-5" />}
          <input
            type="text"
            placeholder={placeholder??""}
            className="flex-1 bg-transparent outline-none text-sm w-full min-w-0"
          />
          {Suffix && <Suffix className="shrink-0 w-5 h-5 cursor-pointer" />}
        </div>
      </div>
    </div>
  );
};

export default FilterTile;

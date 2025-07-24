import React from 'react'
import FilterTile from './FilterTile'
import { FilterIcon, ChevronDown , Search, X } from 'lucide-react'
import Button from './Button'

const SearchFilter = () => {
  return (
    <div className="text-foreground pt-10 hidden xl:flex pb-6 justify-between items-end w-full">
        <div className="flex gap-8 ">
          <FilterTile title={"Search"} Prefix={Search} Suffix={X} />
          <FilterTile
            title={"Genres"}
            placeholder={"Any"}
            Suffix={ChevronDown }
          />
          <FilterTile
            title={"Year"}
            placeholder={"Any"}
            Suffix={ChevronDown }
          />
          <FilterTile
            title={"Season"}
            placeholder={"Any"}
            Suffix={ChevronDown }
          />
          <FilterTile
            title={"Format"}
            placeholder={"Any"}
            Suffix={ChevronDown }
          />
        </div>
        <Button
          className="bg-background h-[45px] px-3"
          children={<FilterIcon className="w-5 h-5 text-textColor2" />}
        />
      </div>
  )
}

export default SearchFilter
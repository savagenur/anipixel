import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar";
import { useNavigate, useParams } from "react-router-dom";
import { useTopAnime } from "../../hooks/useTopAnime";
import type { TopAnimeFilter } from "../../core/enums/TopAnimeFilter";
import AnimeCard from "../../components/AnimeCard";
import MainTitle from "../../components/MainTitle";
import SkeletonCard from "../../components/SkeletonCard";
import { twx } from "../../utils/utils";

// ------------------ Pagination Button ------------------
const PageButton = ({
  label,
  active,
  disabled,
  onClick,
}: {
  label: string | number;
  active?: boolean;
  disabled?: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={twx(
      "border p-3 border-textColor4 text-textTitle h-[50px] aspect-[.9] text-center hover:text-white hover:bg-primary disabled:opacity-50",
      [active ? "border-primary text-primary" : ""]
    )}
  >
    {label}
  </button>
);

// ------------------ Pagination Component ------------------
const Pagination = ({
  currentPage,
  lastPage,
  onPageChange,
}: {
  currentPage: number;
  lastPage: number;
  onPageChange: (page: number) => void;
}) => {
  const createRange = (start: number, end: number) =>
    Array.from({ length: end - start + 1 }, (_, i) => start + i);

  let pages: (number | null)[] = [];

  if (lastPage <= 10) {
    pages = createRange(1, lastPage);
  } else if (currentPage <= 6) {
    pages = [...createRange(1, 10), null, lastPage];
  } else if (lastPage - currentPage < 6) {
    pages = [1, null, ...createRange(lastPage - 9, lastPage)];
  } else {
    pages = [1, null, ...createRange(currentPage - 4, currentPage + 4), null, lastPage];
  }

  return (
    <div className="flex justify-center gap-4 mt-6 items-center">
      <PageButton
        label="Prev"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      />

      <div className="flex gap-2">
        {pages.map((p, idx) =>
          p === null ? (
            <PageButton key={`dots-${idx}`} label="..." disabled onClick={() => {}} />
          ) : (
            <PageButton
              key={p}
              label={p}
              active={p === currentPage}
              onClick={() => onPageChange(p)}
            />
          )
        )}
      </div>

      <PageButton
        label="Next"
        disabled={currentPage === lastPage}
        onClick={() => onPageChange(currentPage + 1)}
      />
    </div>
  );
};

// ------------------ Main Page ------------------
const TopAnimePage = () => {
  const { filter, page } = useParams();
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState<number>();

  const { data, isLoading } = useTopAnime(
    filter as TopAnimeFilter,
    null,
    page ? Number(page) : null
  );

  const animeList = data?.data;

  useEffect(() => {
    setLastPage(data?.pagination.last_visible_page);
  }, [data]);

  useEffect(() => {
    const pageNumber = Number(page);
    setCurrentPage(!isNaN(pageNumber) && pageNumber > 0 ? pageNumber : 1);

    // scroll to top when page changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const handlePageChange = (newPage: number) => {
    if (filter) navigate(`/top-anime/${filter}/page/${newPage}`);
  };

  return (
    <div className="main-padding">
      <SearchBar />
      {filter && <MainTitle title={filter.toUpperCase()} />}

      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 mt-5 pb-10">
        {isLoading ? (
          <SkeletonCard count={24} />
        ) : (
          animeList?.map((anime) => <AnimeCard key={anime.mal_id} anime={anime} />)
        )}
      </div>

      {lastPage && (
        <Pagination
          currentPage={currentPage}
          lastPage={lastPage}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default TopAnimePage;
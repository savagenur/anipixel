import { useSearchParams } from "react-router-dom";
import AnimeCard from "../components/AnimeCard";
import MainTitle from "../components/MainTitle";
import SearchBar from "../components/SearchBar";
import SkeletonCard from "../components/SkeletonCard";
import { TopAnimeFilter } from "../core/enums/TopAnimeFilter";
import { useSearchAnime } from "../hooks/useSearchAnime";
import { useTopAnime } from "../hooks/useTopAnime";
const SearchAnimePage = () => {
  const airingQuery = useTopAnime(TopAnimeFilter.AIRING, 6, null);
  const upcomingQuery = useTopAnime(TopAnimeFilter.UPCOMING, 6, null);
  const popularQuery = useTopAnime(TopAnimeFilter.BY_POPULARITY, 6, null);
  const favoriteQuery = useTopAnime(TopAnimeFilter.FAVORITE, 6, null);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const searchAnime = useSearchAnime();

  const showSearchOnly =
    query.length > 2 || Array.from(searchParams).length > 0;

  return (
    <div className="w-full main-padding">
      <SearchBar />
      {showSearchOnly ? (
        animeSection("Search Results", null, searchAnime)
      ) : (
        <>
          {animeSection("UPCOMING NOW", TopAnimeFilter.UPCOMING, upcomingQuery)}
          {animeSection("AIRING", TopAnimeFilter.AIRING, airingQuery)}
          {animeSection("POPULAR", TopAnimeFilter.BY_POPULARITY, popularQuery)}
          {animeSection("FAVORITE", TopAnimeFilter.FAVORITE, favoriteQuery)}
        </>
      )}
    </div>
  );
};

const animeSection = (
  title: string,
  filter: TopAnimeFilter | null,
  {
    data: paginatedAnimeResponse,
    isLoading,
    error,
  }: ReturnType<typeof useSearchAnime>
) => (
  <>
    <div className="">
      <MainTitle title={title} filter={filter} />
    </div>
    {
      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 mt-5 pb-10">
        {isLoading ? (
          <SkeletonCard count={6} />
        ) : (
          paginatedAnimeResponse?.data?.map((anime, index) => (
            <AnimeCard key={`${anime.mal_id}${index}`} anime={anime} />
          ))
        )}
      </div>
    }
    {!isLoading && paginatedAnimeResponse?.data?.length === 0 && (
      <div className="text-5xl text-textTitle font-bold pt-5 pb-[60vh] text-center">
        No Results
      </div>
    )}
  </>
);

export default SearchAnimePage;

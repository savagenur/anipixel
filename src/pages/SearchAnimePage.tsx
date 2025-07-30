import { useSearchParams } from "react-router-dom";
import AnimeCard from "../components/AnimeCard";
import MainTitle from "../components/MainTitle";
import SearchBar from "../components/SearchBar";
import SkeletonCard from "../components/SkeletonCard";
import { TopAnimeFilter } from "../core/enums/TopAnimeFilter";
import { useTopAnime } from "../hooks/useTopAnime";
import { useSearchAnime } from "../hooks/useSearchAnime";

const SearchAnimePage = () => {
  const airingQuery = useTopAnime(TopAnimeFilter.AIRING);
  const upcomingQuery = useTopAnime(TopAnimeFilter.UPCOMING);
  const popularQuery = useTopAnime(TopAnimeFilter.BY_POPULARITY);
  const favoriteQuery = useTopAnime(TopAnimeFilter.FAVORITE);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const searchAnime = useSearchAnime();

  const showSearchOnly =
    query.length > 2 || Array.from(searchParams).length > 0;

  return (
    <div className="w-full main-padding">
      <SearchBar />
      {showSearchOnly ? (
        animeSection("Search Results", searchAnime)
      ) : (
        <>
          {animeSection("UPCOMING NOW", upcomingQuery)}
          {animeSection("AIRING", airingQuery)}
          {animeSection("POPULAR", popularQuery)}
          {animeSection("FAVORITE", favoriteQuery)}
        </>
      )}
    </div>
  );
};

const animeSection = (
  title: string,
  { data: animeList, isLoading, error }: ReturnType<typeof useTopAnime>
) => (
  <>
    <div className="pt-10">
      <MainTitle title={title} />
    </div>
    {
      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 mt-5">
        {isLoading ? (
          <SkeletonCard count={6} />
        ) : (
          animeList?.map((anime, index) => (
            <AnimeCard key={`${anime.mal_id}${index}`} anime={anime} />
          ))
        )}
      </div>
    }
  </>
);

export default SearchAnimePage;

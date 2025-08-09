import axios from "axios";
import { TopAnimeFilter } from "../core/enums/TopAnimeFilter";
import type { AnimeModel, PaginatedAnimeResponse } from "../models/AnimeModel";
import { useQuery } from "@tanstack/react-query";

const fetchTopAnime = async (
  filter: TopAnimeFilter,
  limit: number|null,
  page: number | null
): Promise<PaginatedAnimeResponse> => {
  const res = await axios.get(
    `https://api.jikan.moe/v4/top/anime?filter=${filter}`,
    {
      params: {
        limit,
        page,
      },
    }
  );
  return res.data;
};
export const useTopAnime = (
  filter: TopAnimeFilter,
  limit: number|null,
  page: number | null
) => {
  return useQuery({
    queryKey: ["top-anime", filter, page],
    queryFn: () => fetchTopAnime(filter, limit, page),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};

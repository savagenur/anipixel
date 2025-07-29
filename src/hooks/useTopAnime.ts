import axios from "axios";
import { TopAnimeFilter } from "../core/enums/TopAnimeFilter";
import type { AnimeModel } from "../models/AnimeModel";
import { useQuery } from "@tanstack/react-query";

const fetchTopAnime = async (filter: TopAnimeFilter): Promise<AnimeModel[]> => {
  const res = await axios.get(
    `https://api.jikan.moe/v4/top/anime?filter=${filter}&limit=6`
  );
  return res.data.data;
};
export const useTopAnime = (filter: TopAnimeFilter) => {
  return useQuery({
    queryKey: ["top-anime", filter],
    queryFn: () => fetchTopAnime(filter),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};

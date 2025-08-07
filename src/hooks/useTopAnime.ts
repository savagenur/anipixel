import axios from "axios";
import { TopAnimeFilter } from "../core/enums/TopAnimeFilter";
import type { AnimeModel } from "../models/AnimeModel";
import { useQuery } from "@tanstack/react-query";

const fetchTopAnime = async (filter: TopAnimeFilter,limit:number): Promise<AnimeModel[]> => {
  const res = await axios.get(
    `https://api.jikan.moe/v4/top/anime?filter=${filter}`,
    {
      params:{
limit
      }
      
    }
  );
  return res.data.data;
};
export const useTopAnime = (filter: TopAnimeFilter,limit:number) => {
  return useQuery({
    queryKey: ["top-anime", filter],
    queryFn: () => fetchTopAnime(filter,limit),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};

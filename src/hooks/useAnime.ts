import axios from "axios";
import { TopAnimeFilter } from "../core/enums/TopAnimeFilter";
import type { AnimeModel } from "../models/AnimeModel";
import { useQuery } from "@tanstack/react-query";

const fetchAnime = async (id: string): Promise<AnimeModel> => {
  const res = await axios.get(
    `https://api.jikan.moe/v4/anime/${id}`
  );
  return res.data.data;
};
export const useAnime = (id:string) => {
  return useQuery({
    queryKey: ["anime", id],
    queryFn: () => fetchAnime(id),
    staleTime: 1000 * 60 * 5,
    retry: 1,
    enabled:!!id,
  });
};

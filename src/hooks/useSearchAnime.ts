import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import type { AnimeModel, PaginatedAnimeResponse } from "../models/AnimeModel";

const fetchSearchAnime = async (
  params: URLSearchParams,

): Promise<PaginatedAnimeResponse> => {
  const queryObject: Record<string, string> = {};
  params.forEach((value, key) => {
    if (value.trim()) {
      queryObject[key] = value;
    }
  });
  const res = await axios.get(`https://api.jikan.moe/v4/anime`, {
    params: {
      ...queryObject,
      limit: null,

    },
  });
  return res.data;
};

export const useSearchAnime = () => {
  const [searchParams] = useSearchParams();

  return useQuery({
    queryKey: ["search-anime", Object.fromEntries(searchParams.entries())],
    queryFn: async () => fetchSearchAnime(searchParams),
    // enabled: true,
  });
};

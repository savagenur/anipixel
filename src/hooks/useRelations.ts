import axios from "axios";
import { TopAnimeFilter } from "../core/enums/TopAnimeFilter";
import type { AnimeModel, Relation } from "../models/AnimeModel";
import { useQuery } from "@tanstack/react-query";

const fetchRelations = async (id: string): Promise<Relation[]> => {
  const res = await axios.get(
    `https://api.jikan.moe/v4/anime/${id}/relations`
  );
  return res.data.data;
};
export const useRelations = (id:string) => {
  return useQuery({
    queryKey: ["anime-relations", id],
    queryFn: () => fetchRelations(id),
    staleTime: 1000 * 60 * 5,
    retry: 1,
    enabled:!!id,
  });
};

import axios from "axios";
import { TopAnimeFilter } from "../core/enums/TopAnimeFilter";
import type { AnimeModel } from "../models/AnimeModel";
import { useQuery } from "@tanstack/react-query";
import type { CharacterModel } from "../models/CharacterModel";

const fetchCharacters = async (id: string): Promise<CharacterModel[]> => {
  const res = await axios.get(
    `https://api.jikan.moe/v4/anime/${id}/characters`
  );
  return res.data.data;
};
export const useCharacters = (id:string) => {
  return useQuery({
    queryKey: ["anime-characters", id],
    queryFn: () => fetchCharacters(id),
    staleTime: 1000 * 60 * 5,
    retry: 1,
    enabled:!!id,
  });
};

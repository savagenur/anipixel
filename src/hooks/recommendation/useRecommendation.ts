import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { ScheduleAnimeModel } from "../../models/ScheduleAnimeModel";
import type { RecommendationModel } from "../../models/RecommendationModel";

const fetchRecommendations = async (page:number): Promise<RecommendationModel[]> => {
  const res = await axios.get(
    `https://api.jikan.moe/v4/recommendations/anime`,
    {
      params:{
        page,
      }
    }
  );
  return res.data.data;
};
export const useRecommendations = (page:number) => {
  return useQuery({
    queryKey: ["recommendations",page],
    queryFn: () => fetchRecommendations(page),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};

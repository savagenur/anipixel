import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { ScheduleAnimeModel } from "../../models/ScheduleAnimeModel";

const fetchSchedules = async (page:number): Promise<ScheduleAnimeModel[]> => {
  const res = await axios.get(
    `https://api.jikan.moe/v4/schedules`,
    {
      params:{
        page,
        kids:false
      }
    }
  );
  return res.data.data;
};
export const useSchedules = (page:number) => {
  return useQuery({
    queryKey: ["schedules",page],
    queryFn: () => fetchSchedules(page),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};

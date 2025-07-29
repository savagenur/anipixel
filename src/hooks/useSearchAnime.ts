import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useSearchAnime = (query: string) => {
  return useQuery({
    queryKey: ["search-anime", query],
    queryFn: async () => {
      const res = await axios.get("https://api.jikan.moe/v4/anime", {
        params: {
          q: query,
          limit: 10,
        },
      });
      return res.data.data;

    },
    enabled:!!query
  });
};

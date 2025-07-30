import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { Option } from "../models/Option";

export const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: async ():Promise<Option[]> => {
      const res = await axios.get("https://api.jikan.moe/v4/genres/anime");
      return res.data.data;
    },
  });
};

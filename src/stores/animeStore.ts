import { create } from "zustand";
import axios from "axios";
import type { AnimeModel } from "../models/AnimeModel";
import { TopAnimeFilter } from "../core/enums/TopAnimeFilter";
import { debounce } from "lodash";

type AnimeStore = {
  anime: AnimeModel | null;
  setAnime: (anime: AnimeModel) => void;
};

export const useAnimeStore = create<AnimeStore>((set, get) => ({
  anime: null,
  setAnime: (anime) => {
    if (get().anime?.mal_id === anime.mal_id) return; 
    set({ anime });
  },
}));

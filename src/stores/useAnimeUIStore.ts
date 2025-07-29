// stores/useAnimeUIStore.ts
import { create } from "zustand";

type AnimeUIStore = {
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void;
};

export const useAnimeUIStore = create<AnimeUIStore>((set) => ({
  selectedFilter: "airing",
  setSelectedFilter: (filter) => set({ selectedFilter: filter }),
}));

import { create } from "zustand";
import type { AnimeModel } from "../models/AnimeModel";

type SearchAnimeStore = {
  results: AnimeModel[];
  loading: boolean;
  error: string | null;
  setResults: (results: AnimeModel[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  reset: () => void;
};

export const useSearchAnimeStore = create<SearchAnimeStore>((set) => ({
  results: [],
  loading: false,
  error: null,
  setResults: (results) => set({ results }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  reset: () => set({ results: [], loading: false, error: null }),
}));

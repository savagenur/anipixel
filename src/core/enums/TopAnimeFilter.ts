export const TopAnimeFilter = {
  AIRING: "airing",
  UPCOMING: "upcoming",
  BY_POPULARITY: "bypopularity",
  FAVORITE: "favorite",
} as const;

export type TopAnimeFilter = (typeof TopAnimeFilter)[keyof typeof TopAnimeFilter];

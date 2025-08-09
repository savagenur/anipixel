export interface PaginatedAnimeResponse {
  pagination: Pagination;
  data: AnimeModel[];
}

export interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: PaginationItems;
}

export interface PaginationItems {
  count: number;
  total: number;
  per_page: number;
}

export interface AnimeModel {
  mal_id: number;
  url: string;
  images: ImageFormats;
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: Broadcast;
  producers: Studio[];
  licensors: Studio[];
  studios: Studio[];
  genres: Genre[];
  explicit_genres: Genre[];
  themes: Genre[];
  demographics: Genre[];
}

export interface ImageFormats {
  jpg: ImageUrls;
  webp: ImageUrls;
}

export interface ImageUrls {
  image_url: string;
  small_image_url?: string;
  large_image_url?: string;
}

export interface Trailer {
  youtube_id: string;
  url: string;
  embed_url: string;
  images: {
    image_url: string;
    small_image_url: string;
    medium_image_url: string;
    large_image_url: string;
    maximum_image_url: string;
  };
}

export interface Title {
  type: string;
  title: string;
}

export interface Aired {
  from: string;
  to: string;
  prop: {
    from: DateParts;
    to: DateParts;
  };
  string: string;
}

export interface DateParts {
  day: number;
  month: number;
  year: number;
}

export interface Broadcast {
  day: string;
  time: string;
  timezone: string;
  string: string;
}

export interface Studio {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface Genre {
  mal_id: number;
  type: string;
  name: number;
  url: string;
}

export interface RelationEntry {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface Relation {
  relation: string;
  entry: RelationEntry[];
}

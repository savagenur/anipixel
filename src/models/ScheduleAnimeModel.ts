export interface ScheduleAnimeModel {
  mal_id: number;
  url: string;
  images: {
    jpg: ImageFormat;
    webp: ImageFormat;
  };
  trailer: {
    youtube_id: string;
    url: string;
    embed_url: string;
    images: TrailerImages;
  };
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number | null;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score: number | null;
  scored_by: number | null;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: Broadcast;
  producers: Entity[];
  licensors: Entity[];
  studios: Entity[];
  genres: Entity[];
  explicit_genres: Entity[];
  themes: Entity[];
  demographics: Entity[];
}

interface ImageFormat {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

interface TrailerImages {
  image_url: string;
  small_image_url: string;
  medium_image_url: string;
  large_image_url: string;
  maximum_image_url: string;
}

interface Title {
  type: string;
  title: string;
}

interface Aired {
  from: string | null;
  to: string | null;
  prop: {
    from: PartialDate;
    to: PartialDate;
  };
  string: string;
}

interface PartialDate {
  day: number | null;
  month: number | null;
  year: number | null;
}

interface Broadcast {
  day: string;
  time: string;
  timezone: string;
  string: string;
}

interface Entity {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}
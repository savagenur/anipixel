export interface RecommendationModel {
  mal_id: string;
  entry: AnimeEntry[];
  content: string;
  date: string; // ISO date string
  user: UserInfo;
}

export interface AnimeEntry {
  mal_id: number;
  url: string;
  title: string;
  images: {
    jpg: AnimeImageSet;
    webp: AnimeImageSet;
  };
}

export interface AnimeImageSet {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface UserInfo {
  username: string;
  url: string;
}
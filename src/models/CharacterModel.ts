export interface CharacterModel {
  character: {
    mal_id: number;
    url: string;
    name: string;
    images: {
      jpg: {
        image_url: string;
      };
      webp: {
        image_url: string;
        small_image_url: string;
      };
    };
  };
  role: string;
  favorites: number;
  voice_actors: VoiceActor[];
}

export interface VoiceActor {
  language: string;
  person: {
    mal_id: number;
    url: string;
    name: string;
    images: {
      jpg: {
        image_url: string;
      };
    };
  };
}

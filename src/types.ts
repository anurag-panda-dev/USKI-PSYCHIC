export interface Killer {
  id: string;
  name: string;
  image_url: string;
  murder_count_actual: number;
  psycho_killer_score: number;
  country: string;
  method: string;
  sentence_details: string;
  motive: string;
  additional_info: string;
  birth_year: number | null;
  birth_location: string;
  years_active_from: number | null;
  years_active_to: number | null;
  active_in_provinces: string[];
  known_as: string | string[] | null;
  caught_by: string;
}

export interface ScoreResponse {
  killer_id: string;
  psycho_killer_score: number;
  breakdown?: {
    brutality: number;
    evasion: number;
    notoriety: number;
    psychopathy: number;
  };
}

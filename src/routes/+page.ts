// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
export type Tag = { label: string; value: string };
export type Tags = Tag[];
export type Game = {
  releaseDate: Date;
  name: string;
  thumbnail: string;
  userScore: number;
  metaScore: number;
  platforms: string[];
  genres: string[];
  description: string;
  videos: string[];
  developer: string;
  publisher: string;
  rating: string;
}

import { Genre } from "./genre.enum";

export interface Movie{
    Id: Number;
    Name: String;
    Description: String;
    Rating?: Number;
    Language?: String;
    Genre?:Genre;
    PosterURL?: string;
    ContentURL?: String;
    Reviews?: string[];
}
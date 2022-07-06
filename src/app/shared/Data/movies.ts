import { Genre } from "../Models/genre.enum";
import { Movie } from "../Models/movie.interface";

export class Movies
{
    movies: Movie[] = [];
    
    constructor() {
        this.movies = [
            {"Id":1, "Name":"Movie_1", "Description":"Movie_Description_1", "Rating":3, "Language": "English", "Genre": Genre.action, "Reviews":[]},
            {"Id":2, "Name":"Movie_2", "Description":"Movie_Description_2", "Rating":4, "Language": "English", "Genre": Genre.comedy, "Reviews":[]},
            {"Id":3, "Name":"Movie_3", "Description":"Movie_Description_3", "Rating":5, "Language": "English", "Genre": Genre.scifi, "Reviews":[]},
            {"Id":4, "Name":"Movie_4", "Description":"Movie_Description_4", "Rating":2, "Language": "English", "Genre": Genre.romance, "Reviews":[]},
            {"Id":5, "Name":"Movie_5", "Description":"Movie_Description_5", "Rating":3, "Language": "English", "Genre": Genre.horror, "Reviews":[]},
            {"Id":6, "Name":"Movie_6", "Description":"Movie_Description_6", "Rating":4, "Language": "English", "Genre": Genre.action, "Reviews":[]},
            {"Id":7, "Name":"Movie_7", "Description":"Movie_Description_7", "Rating":5, "Language": "English", "Genre": Genre.comedy, "Reviews":[]},
            {"Id":8, "Name":"Movie_8", "Description":"Movie_Description_8", "Rating":4, "Language": "English", "Genre": Genre.action, "Reviews":[]},
            {"Id":9, "Name":"Movie_9", "Description":"Movie_Description_9", "Rating":3, "Language": "English", "Genre": Genre.romance, "Reviews":[]},
            {"Id":10, "Name":"Movie_10", "Description":"Movie_Description_10", "Rating":4, "Language": "English", "Genre": Genre.horror, "Reviews":[]},
        ];
    }
}
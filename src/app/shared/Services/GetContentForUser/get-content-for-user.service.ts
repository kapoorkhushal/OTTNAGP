import { Injectable } from '@angular/core';
import { Movies } from '../../Data/movies';
import { Users } from '../../Data/users';
import { Movie } from '../../Models/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class GetContentForUserService {

  constructor(private usersList: Users, private moviessList: Movies) { }

  getFavourites(userId: Number){
    var movies = this.usersList.users.filter(x => x.Id==userId)[0].Favourites;

    let favouriteMovies: Movie[] = [];
    movies?.forEach(movie => {
      var favMovie = this.moviessList.movies.find(x => x.Id == movie);

      if(favMovie !== undefined){
      favouriteMovies.push(favMovie);
      }
    });
    return favouriteMovies;
  }

  getWatchLater(userId: Number){
    var movies = this.usersList.users.filter(x => x.Id==userId)[0].WatchLater;

    let watchLaterMovies: Movie[] = [];
    movies?.forEach(movie => {
      var laterMovie = this.moviessList.movies.find(x => x.Id == movie);

      if(laterMovie !== undefined){
      watchLaterMovies.push(laterMovie);
      }
    });
    return watchLaterMovies;
  }

  getWatched(userId: Number){
    var movies = this.usersList.users.filter(x => x.Id==userId)[0].Watched;
    let watchedMovies: Movie[] = [];
    movies?.forEach(movie => {
      var watched = this.moviessList.movies.find(x => x.Id == movie);

      if(watched !== undefined){
      watchedMovies.push(watched);
      }
    });
    return watchedMovies;
  }
}

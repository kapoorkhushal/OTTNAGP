import { Injectable } from '@angular/core';
import { Observable, of, catchError, throwError } from 'rxjs';
import { Movies } from '../../Data/movies';
import { Genre } from '../../Models/genre.enum';
import { Movie } from '../../Models/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class GetGenreContentService {

  constructor(private moviesList: Movies) { }

  getGenreSpecificContent(genre: Genre): Observable<Movie[]>{
    return of(this.moviesList.movies.filter(x => x.Genre === genre))
    .pipe(catchError(err => {return throwError(err);}));
  }
}

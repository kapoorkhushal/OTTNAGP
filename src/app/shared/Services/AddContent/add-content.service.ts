import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { Movies } from '../../Data/movies';
import { Movie } from '../../Models/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class AddContentService {

  constructor(private moviesList: Movies) { }

  addContent(input:Movie): Observable<any>{
    var count = this.moviesList.movies.length;
    input.Id = count+1;
    input.Reviews=[];
    this.moviesList.movies.push(input);
    return of(input.Id)
    .pipe(catchError(err => {return throwError(err);}));
  }
}

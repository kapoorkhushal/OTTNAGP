import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { Movies } from '../../Data/movies';

@Injectable({
  providedIn: 'root'
})
export class GetAllContentService {

  constructor(private moviesList: Movies) { }

  getAllContent(): Observable<any>{
    return of(this.moviesList.movies)
    .pipe(catchError(err => {return throwError(err);}));
  }
}

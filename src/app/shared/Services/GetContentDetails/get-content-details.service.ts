import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movies } from '../../Data/movies';
import { Movie } from '../../Models/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class GetContentDetailsService {

  constructor(private moviesList: Movies) { }

  getContentDetails(id: Number): Observable<any>{
    return of(this.moviesList.movies.find(x => x.Id === id));
  }
}

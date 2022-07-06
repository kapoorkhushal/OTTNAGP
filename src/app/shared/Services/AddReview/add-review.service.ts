import { Injectable } from '@angular/core';
import { Movies } from '../../Data/movies';

@Injectable({
  providedIn: 'root'
})
export class AddReviewService {

  constructor(private moviesList: Movies) { }

  addReview(movieId: Number, review: string){
    this.moviesList.movies.find(x => x.Id === movieId)?.Reviews?.push(review);
  }
}

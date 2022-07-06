import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Users } from '../../Data/users';

@Injectable({
  providedIn: 'root'
})
export class AddMoviesToUserService {

  constructor(private usersList: Users) { }

  addFavourites(userId: Number, movieId: Number){
    var user = this.usersList.users.find(x => x.Id==userId);
    var ifAlredayExist = user?.Favourites?.find(x => x==movieId);
    if(ifAlredayExist !== undefined){
      return of(-1);
    }
    this.usersList.users.filter(x => x.Id==userId)[0].Favourites?.push(movieId);
    return of(movieId);
  }

  addWatchLater(userId: Number, movieId: Number){
    var user = this.usersList.users.find(x => x.Id==userId);
    var ifAlredayExist = user?.WatchLater?.find(x => x==movieId);
    if(ifAlredayExist !== undefined){
      return of(-1);
    }
    this.usersList.users.filter(x => x.Id==userId)[0].WatchLater?.push(movieId);
    return of(movieId);
  }

  addWatched(userId: Number, movieId: Number){
    this.usersList.users.filter(x => x.Id==userId)[0].Watched?.push(movieId);
  }
}

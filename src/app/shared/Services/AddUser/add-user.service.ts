import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { Users } from '../../Data/users';
import { User } from '../../Models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AddUserService {

  constructor(private usersList: Users) { }

  addUser(input:User): Observable<Number>|any{
    if(this.usersList.users.find(x=> x.Email === input.Email) === undefined){
      var count = this.usersList.users.length;
      input.Id = count+1;
      input.Favourites=[];
      input.Watched=[];
      input.WatchLater=[];
      this.usersList.users.push(input);
      return of(input.Id)
      .pipe(catchError(err => {return throwError(err);}));
    }
    else{
      throwError(()=> {
        return "User already exits";
      });
    }
  }
}

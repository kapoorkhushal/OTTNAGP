import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Users } from '../../Data/users';
import { User } from '../../Models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private usersList: Users) { }

  login(email:string, password:string): Observable<User|undefined>{
    return of(this.usersList.users.find(x => x.Email==email && x.Password==password));
  }
}

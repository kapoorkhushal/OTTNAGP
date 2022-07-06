import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private static userName = new BehaviorSubject<string>('');
  private static userId = new BehaviorSubject<Number>(-1);
  private static currentContentId = new BehaviorSubject<Number>(-1);
  private static isUserAdmin = new BehaviorSubject<boolean>(false);


  constructor() { }

  setUserName(data: string){
    CommonService.userName.next(data);
  }

  getUserName(): Observable<string>{
    return CommonService.userName.asObservable();
  }

  setUserId(data: Number){
    CommonService.userId.next(data);
  }

  getUserId(): Observable<Number>{
    return CommonService.userId.asObservable();
  }

  setCurrentContentId(data: Number){
    CommonService.currentContentId.next(data);
  }

  getCurrentContentId(): Observable<Number>{
    return CommonService.currentContentId.asObservable();
  }

  setUserAdmin(data: boolean){
    CommonService.isUserAdmin.next(data);
  }

  getIsUserAdmin(): Observable<boolean>{
    return CommonService.isUserAdmin.asObservable();
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../shared/models/user';
import { IUserLogin } from '../shared/models/Interfaces/IUserlogin';
import { HttpClient } from '@angular/common/http';
import { USER_LOGIN_URL } from '../shared/models/constants/urls';
const USER_KEY = 'User';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable: Observable<User>;
  constructor(private http: HttpClient) {
    this.userObservable = this.userSubject.asObservable();
  }

  login(userLogin: IUserLogin): Observable<User> {
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user: User) => {
          this.setUserToLocalStorage(user);
          console.log(user);
          this.userSubject.next(user);
        },
        error: (err) => {
          alert(err);
        }
      })
    );
  }

  logOut(){
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    window.location.reload();
  }

  private setUserToLocalStorage(user: User) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getUserFromLocalStorage(): User {
    if (typeof localStorage !== 'undefined') {
      // Use localStorage safely
      const userJSON = localStorage.getItem(USER_KEY);
      if (userJSON) return JSON.parse(userJSON) as User;
      return new User();
    } else {
      // Handle the case where localStorage is not available (e.g., use alternative storage)
      console.warn('localStorage is not available. Use alternative storage mechanism.');
      return new User();
    }

  }
}

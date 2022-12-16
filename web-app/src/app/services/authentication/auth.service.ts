import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  pipe,
  of,
  Subject,
  windowTime,
  map,
} from 'rxjs';
import { RestDataSource } from '../rest.datasource';

@Injectable()
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private datasource: RestDataSource) {
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem('currentUser') || '{}')
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  authenticate(username: string, password: string): Observable<boolean> {
    return this.datasource.authenticate(username, password).pipe(
      map((user) => {
        // store user details in local storage
        localStorage.setItem('currentUser', JSON.stringify(user || '{}'));
        this.currentUserSubject.next(true);
        return true;
      })
    );

    return this.datasource.authenticate(username, password);
  }
  get authenticated(): boolean {
    return localStorage.getItem('currentUser') != null;
  }
  /*
  get Changes(): Observable<boolean> {
    return this.logInOutEvents;
  }
*/
  logout() {
    //  this.logInOutEvents.next(false);
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(false);
  }
}

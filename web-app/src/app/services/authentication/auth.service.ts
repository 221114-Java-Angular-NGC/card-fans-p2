import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  pipe,
  of,
  Subject,
  windowTime,
  map,
  catchError,
} from 'rxjs';
import { User } from 'src/app/models/user.model';
import { RestDataSource } from '../rest.datasource';

@Injectable()
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  //Inject Rest Data source to issue HTTP authentication requests
  constructor(private datasource: RestDataSource) {
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem('currentUser') || '{}')
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  //Returns true if credentials are valid else false
  //If true, currentUser is stored in localStorage
  authenticate(username: string, password: string): Observable<boolean> {
    return this.datasource.authenticate({ username, password }).pipe(
      map((user: User) => {
        //if user.props undefined throw err
        if (undefined === user.email) {
          throw 'err';
        }
        // store user details in local storage
        localStorage.setItem('currentUser', JSON.stringify(user || '{}'));
        this.currentUserSubject.next(true);
        return true;
      }),
      catchError((err) => {
        console.log(err);
        //invalid user credentials
        //console.log(err);
        return of(false);
      })
    );
  }

  //Check if user is authenticated
  get authenticated(): boolean {
    return localStorage.getItem('currentUser') != null;
  }

  //Log out user by deleting user data in localStorage
  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(false);
  }
}

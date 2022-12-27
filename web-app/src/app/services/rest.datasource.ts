import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, of, throwError } from 'rxjs';
import { Product } from '../models/product.model';
import { User } from '../models/user.model';
import { LoginRequest } from '../models/login-request.model';
//import { HttpHeaders } from '@angular/common/http';

const PROTOCOL = 'http';
const PORT = 8080;

@Injectable()
export class RestDataSource {
  baseUrl: string; //location of our Rest API
  auth_token?: string; //Maybe store jwt here for later

  //HttpClient used for http requests similar to postman
  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/api/v1/`;
  }

  //Check if valid username password combo
  //If succesful, returns user object
  //else throws error
  authenticate(login: {
    username: string;
    password: string;
  }): Observable<User> {
    return this.http
      .post<User>(this.baseUrl + 'auth/signin', login, {})
      .pipe(catchError((err) => this.handleError(err)));
  }

  //Update userinfo to database
  update(user: User): Observable<User> {
    return this.http
      .put<User>(this.baseUrl + 'users', user, {})
      .pipe(catchError((err) => this.handleError(err)));
  }

  //Register userinfo to database
  register(user: User): Observable<User> {
    return this.http
      .post<User>(this.baseUrl + 'auth/signup', user, {})
      .pipe(catchError((err) => this.handleError(err)));
  }
  //Throw error for any http request failures
  private handleError(res: HttpErrorResponse | any) {
    return throwError(() => new Error('Error is data service'));
  }

  /*
  getProducts(): Observable<Poductr[]> {
    return this.http.get<Product[]>(this.baseUrl + 'products');
  }

    */
}

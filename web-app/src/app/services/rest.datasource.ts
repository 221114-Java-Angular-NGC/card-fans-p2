import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';
//import { HttpHeaders } from '@angular/common/http';

const PROTOCOL = 'http';
const PORT = 8080;

@Injectable()
export class RestDataSource {
  baseUrl: string;
  auth_token?: string;

  constructor() {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/api/v1/`;
  }
  /**  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/api/v1/`;
  } */
  authenticate(user: string, pass: string): Observable<boolean> {
    localStorage.setItem('username', user);
    return of(true);
  }
  /*
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + 'products');
  }



  
    */
}

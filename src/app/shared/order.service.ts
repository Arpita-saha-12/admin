import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  readonly baseURL = 'http://localhost:3000/order';
  getorders() {
    return this.http.get(this.baseURL) ;
  }
}

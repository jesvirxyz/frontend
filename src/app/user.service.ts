import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http'; //3

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _http: HttpClient) {} //4

  //5
  register(body: any) {
    return this._http.post('http://localhost:3000/register', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
    });
  }

  login(body: any) {
    return this._http.post('http://localhost:3000/login', body, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
    });
  }
}

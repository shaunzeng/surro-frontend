import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment as env } from '@env';
import { catchError, take, tap } from 'rxjs/operators';


export interface ISignInCredentials {
  email: string;
  password: string;
}

export interface ICreateCredentials {
  email: string;
  password: string;
  displayName: string;
}

export interface IPasswordReset {
  code: string;
  newPassword: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService extends ApiService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true, 
  }; 

  constructor(private http: HttpClient) {
    super()
  }

  signIn(credentials: ISignInCredentials) {
    return this.http
    .post(`${env.apiUrl}/login`, credentials, this.httpOptions)
    .pipe(
      take(1)
    )
    .toPromise();
  }

  signOut(){
    return this.http
    .get(`${env.apiUrl}/logout`)
    .pipe(
      take(1),
    )
    .toPromise()
  };


  register(data:any) {
    return this.http
    .post(`${env.apiUrl}/register`, data, this.httpOptions)
    .pipe(
      take(1),
    )
    .toPromise();
  }


  sendPasswordEmail(email) {

  }


  resetPassword(credentials: IPasswordReset) {

  }


  getUser() {
    return this.http
            .get(`${env.apiUrl}/user`)
            .pipe(take(1))
            .toPromise();
  }



}

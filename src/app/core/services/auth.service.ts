import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment as env } from '@env';
import { tap } from 'rxjs/operators';


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
  isLoggedIn = false;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true, 
    observe: 'response'
  }; 

  constructor(private http: HttpClient) {
    super()
  }

  signIn(credentials: ISignInCredentials) {
    return this.http
    .post(`${env.apiUrl}/login`, credentials, {
      withCredentials:true
    })
    .toPromise();
  }

  signOut(){
    return this.http
    .get(`${env.apiUrl}/logout`)
    .toPromise()
  };


  register(data:any) {
    return this.http
    .post(`${env.apiUrl}/register`, data)
    .toPromise();
  }


  sendPasswordEmail(email) {

  }


  resetPassword(credentials: IPasswordReset) {

  }


  async getUser() {
 
  }



}

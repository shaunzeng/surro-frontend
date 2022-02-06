import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment as env } from '@env';
import { take} from 'rxjs/operators';


export interface ISignInCredentials {
  email: string;
  password: string;
}

export interface IRegisterInfo {
  email: string;
  password: string;
  firstName: string;
  lastName:string;
  zipcode:string;
}

export interface IPasswordReset {
  code: string;
  newPassword: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService extends ApiService {

  constructor(public http: HttpClient) {
    super(http)
  }

  signIn(credentials: ISignInCredentials) {
    return this.http
    .post(`${env.apiUrl}/login`, credentials, this.httpOptions)
    .pipe(take(1))
    .toPromise();
  }

  signOut(){
    return this.http
    .get(`${env.apiUrl}/logout`)
    .pipe(take(1))
    .toPromise()
  };


  register(data:IRegisterInfo) {
    return this.http
    .post(`${env.apiUrl}/register`, data, this.httpOptions)
    .pipe(take(1))
    .toPromise();
  }


  getPasswordCode(email:string) {
    return this.http
    .post(`${env.apiUrl}/code-request`, {email}, this.httpOptions)
    .pipe(take(1))
    .toPromise();
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

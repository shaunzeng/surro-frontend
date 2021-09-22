import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
export class AuthService {
  isLoggedIn = false;

  constructor(private http: HttpClient) {}

  // tslint:disable-next-line:typedef
  async signIn(credentials: ISignInCredentials) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res({
          username:'xxx',
          accessToken:'uasihdsuaixsam321dsadsa'
        })
      }, 5000);
    })
  }

  signOut(){

  };

  // tslint:disable-next-line:typedef
  register(data:any) {

  }

  // tslint:disable-next-line:typedef
  sendPasswordEmail(email) {

  }

  // tslint:disable-next-line:typedef
  resetPassword(credentials: IPasswordReset) {

  }

  // tslint:disable-next-line:typedef
  async getUser() {
 
  }
}

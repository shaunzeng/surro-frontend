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
  constructor(private http: HttpClient) {}

  // tslint:disable-next-line:typedef
  signIn(credentials: ISignInCredentials) {

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

import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotificationsService, NotificationType } from 'angular2-notifications';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { environment } from '@env';
import { Store } from '@ngrx/store';
import { setupUser } from '../../actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  @ViewChild('loginForm') loginForm: NgForm;
  emailModel = '';
  passwordModel = '';

  buttonDisabled = false;
  buttonState = '';

  constructor(
    private notifications: NotificationsService, 
    private authService: AuthService,
    private router: Router,
    private store: Store) { }


  onSubmit(): void {
    if (this.loginForm.valid) {
      if (!this.buttonDisabled) {

        this.buttonDisabled = true;
        this.buttonState = 'show-spinner';

        this.authService
        .signIn(this.loginForm.value)
        .then((data) => {
          
          this.setupUser(data);

          this.buttonDisabled = true;
          this.buttonState = '';

          this.notifications.create(
            'Success', 
            "Welcome back", 
            NotificationType.Success, 
            {
              theClass: 'outline primary',
              timeOut: 2000,
              showProgressBar: false
            });

          setTimeout(() => {
            this.authService.isLoggedIn = true;
            this.router.navigate([environment.adminRoot]);
          },2000);
          
        }).catch(({error}) => {

          this.buttonDisabled = false;
          this.buttonState = '';
          this.notifications.create(
            'Error', 
            error.message, 
            NotificationType.Bare, {
            theClass: 'outline primary',
            timeOut: 6000,
            showProgressBar: false
          });
        });
      }
    }
  }

  private setupUser(user) {
    this.store.dispatch(setupUser(user));
  }

}

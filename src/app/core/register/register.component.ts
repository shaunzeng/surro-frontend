import { Component, ViewChild } from '@angular/core';
import { NotificationsService, NotificationType } from 'angular2-notifications';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  @ViewChild('registerForm') registerForm: NgForm;
  buttonDisabled = false;
  buttonState = '';

  constructor(private notifications: NotificationsService,
              private router: Router) { }

  onSubmit(): void {
  }
}

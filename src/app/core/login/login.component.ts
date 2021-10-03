import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotificationsService, NotificationType } from 'angular2-notifications';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { environment } from '@env';
import { Store } from '@ngrx/store';
import { setupUser } from '../../actions';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  @ViewChild('loginForm') 
  loginForm: NgForm;

  emailModel = '';
  passwordModel = '';

  buttonDisabled = false;
  buttonState = '';

  modalRef: BsModalRef;
  loginMsg = '';

  @ViewChild('loginTemp')
  private loginTemp: TemplateRef<any>;

  constructor(
    private authService: AuthService,
    private modalService: BsModalService,
    private router: Router,
    private store: Store) { }


  onSubmit(): void {
    if (this.loginForm.valid) {
      if (!this.buttonDisabled) {

        this.buttonDisabled = true;
        this.buttonState = 'show-spinner';

        this.authService
        .signIn(this.loginForm.value)
        .then(this.successHandler.bind(this))
        .catch(this.errorHanlder.bind(this));
      }
    }
  }

  private successHandler(data:any){         
      this.store.dispatch(setupUser(data));

      this.buttonDisabled = true;
      this.buttonState = '';

      this.loginMsg = `Welcome Back, ${data.firstName} ${data.lastName}`;
      this.modalRef = this.modalService.show(this.loginTemp, {
        backdrop:false,
        class: 'info modal-lg'
      });

      setTimeout(() => {
        this.modalRef.hide();
        this.loginMsg = '';
        this.router.navigate([environment.adminRoot]);
      },2000);
  }

  private errorHanlder(err) {
    let errMsg = err;

    if (err instanceof HttpErrorResponse) {
      errMsg = err.error.message;
    }

    this.buttonDisabled = false;
    this.buttonState = '';

    this.loginMsg = errMsg;
    this.modalRef = this.modalService.show(this.loginTemp, {
      backdrop:false,
      class: 'alert modal-lg'
    });

    setTimeout(()=>{
      this.modalRef.hide();
      this.loginMsg = '';
    },3000)
  }

}

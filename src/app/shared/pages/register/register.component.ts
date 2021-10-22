import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AuthService } from '@core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  @ViewChild('registerForm') registerForm: NgForm;
  buttonDisabled = false;
  buttonState = '';

  msg = '';
  modalRef: BsModalRef;

  @ViewChild('msgTmp') msgTmp : TemplateRef<any>;

  constructor(private modalService: BsModalService,
              private authService: AuthService,
              private router: Router) { }

  onSubmit(): void {
    if (this.registerForm.valid) {
      if (!this.buttonDisabled) {
        this.buttonDisabled = true;
        this.buttonState = 'show-spinner';

        this.authService
        .register({
          email:this.registerForm.value.email,
          firstName:this.registerForm.value.firstName,
          lastName:this.registerForm.value.lastName,
          password:this.registerForm.value.password,
          zipcode:this.registerForm.value.zipcode
        })
        .then(this.successHandler.bind(this))
        .catch(this.errorHandler.bind(this))
      }
    }
  }

  private successHandler(data: any) {
    if (data['status'] === 'Success') {
      this.showMsg('Registered successfully');
      this.buttonState='';

      setTimeout(()=> {
        this.router.navigate(['/login']);
      }, 2000);
    }
  }

  private errorHandler(err) {
    this.buttonState='';
    this.buttonDisabled = false;

    this.registerForm.resetForm();

    this.showMsg(err instanceof HttpErrorResponse ? err.error.message : err);
  }

  private showMsg(msg:string) {
    this.msg = msg;
    this.modalRef = this.modalService.show(this.msgTmp, {
      backdrop:false
    });

    setTimeout(()=>{
      this.modalRef.hide();
      this.msg = '';
    }, 2000);
  }
}

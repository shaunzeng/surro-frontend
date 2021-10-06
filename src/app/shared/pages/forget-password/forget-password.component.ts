import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core';
import { Store } from '@ngrx/store';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html'
})
export class ForgetPasswordComponent {
    @ViewChild('forgetForm') 
    forgetForm: NgForm;

    buttonState = '';
    buttonDisabled = false;

    emailModel = '';
    modalRef: BsModalRef;
    msg = '';

    @ViewChild('msgTmp')
    private msgTmp: TemplateRef<any>;

    step = 1;

    constructor(
        private authService: AuthService,
        private modalService: BsModalService,
        private router: Router,
        private store: Store) { }


    onSubmitEmail(): void {
        if (this.forgetForm.valid){
            if (!this.buttonDisabled) {
                this.buttonDisabled = true;
                this.buttonState = 'show-spinner';

                this.authService.getPasswordCode(this.forgetForm.value.email)
                .then(this.submitEmailSuccess.bind(this))
                .catch(this.submitEmailError.bind(this));
            }
        }
    }

    private submitEmailSuccess(data:string){      
        if (data['status'] === ' Success') {
            this.buttonState = '';
            this.buttonDisabled = false;
            this.step = 2;
        }   

    }

    private submitEmailError(err) {
        this.showMsg('error');
    }


    private showMsg(msg:string) {
        this.msg = msg;
        this.modalRef = this.modalService.show(this.msgTmp,{
            backdrop:false
        });

        setTimeout(()=> {
            this.msg = '';
            this.modalRef.hide();
        }, 2000)
    }
}
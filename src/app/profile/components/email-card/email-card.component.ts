import {
    Component, 
    ViewChild,
    Output,
    EventEmitter
  } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile-email',
  templateUrl: './email-card.component.html',
  styleUrls:['./email-card.component.scss']
})
export class EmailCardComponent {

    @ViewChild('emailForm') emailForm: NgForm;
    @Output() onSendEmail: EventEmitter<{name: string, email: string, concern: string, message: string}> = new EventEmitter();

    isSubmitted = false;

    concerns = ['General Question', 'IVF', 'Wait time', 'Finance', 'Appointment', 'Consultation']
    
    constructor( ) {}

    onSubmit(){
        if (this.emailForm.valid){
            this.onSendEmail.emit(this.emailForm.value);
            this.isSubmitted = true;
            this.emailForm.resetForm();
        }
    }
}
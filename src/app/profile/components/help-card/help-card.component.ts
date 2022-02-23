import {
    Component, 
    ViewChild,
    Output,
    EventEmitter
  } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile-help',
  templateUrl: './help-card.component.html',
  styleUrls:['./help-card.component.scss']
})
export class HelpCardComponent {

    @ViewChild('helpForm') helpForm: NgForm;
    @Output() onSendHelp: EventEmitter<{name: string, email: string, concern: string, message: string}> = new EventEmitter();

    isSubmitted = false;

    concerns = ['General Question', 'IVF', 'Wait time', 'Finance', 'Appointment', 'Consultation']
    
    constructor( ) {}

    onSubmit(){
        if (this.helpForm.valid){
            this.onSendHelp.emit(this.helpForm.value);
            this.isSubmitted = true;
            this.helpForm.resetForm();
        }
    }
}
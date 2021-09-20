import { Component,  ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-basic',
  templateUrl: './template-basic.component.html'
})
export class TemplateBasicComponent {
  @ViewChild('form') form: NgForm;

  constructor() { }



  onSubmit(): void {
    console.log(this.form);
  }

}



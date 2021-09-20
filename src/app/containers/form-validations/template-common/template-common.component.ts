import { Component,  ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-common',
  templateUrl: './template-common.component.html'
})
export class TemplateCommonComponent  {
  @ViewChild('form') form: NgForm;

  constructor() { }



  onSubmit(): void{
    console.log(this.form);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {timeRequired} from './../custom.validators';

@Component({
  selector: 'app-reactive-external',
  templateUrl: './reactive-external.component.html'
})
export class ReactiveExternalComponent implements OnInit {
  formExternalComponents: FormGroup;

  ngOnInit(): void {
    this.formExternalComponents = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.pattern('^[A-Za-z]+$')]),
      ngSelect: new FormControl(null, [Validators.required]),
      basicDate: new FormControl(null, [Validators.required]),
      basicTime: new FormControl(null, [timeRequired()]),
      switch: new FormControl(null, [Validators.requiredTrue])
    });
  }

  onSubmit(): void{
    console.log(this.formExternalComponents);
  }

}

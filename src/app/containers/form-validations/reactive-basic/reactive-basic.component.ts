import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {multiCheckboxValidator} from './../custom.validators';

@Component({
  selector: 'app-reactive-basic',
  templateUrl: './reactive-basic.component.html'
})
export class ReactiveBasicComponent implements OnInit {
  basicForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.basicForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      rank: new FormControl(null, [Validators.required]),
      state: new FormControl(null, [Validators.required]),
      details: new FormControl(null, [Validators.required]),
      radio: new FormControl(null, [Validators.required]),
      checks: new FormGroup({
        check0: new FormControl(false),
        check1: new FormControl(false)
      }, multiCheckboxValidator())
    });
  }

  onSubmit(): void {
    console.log(this.basicForm);
  }

}

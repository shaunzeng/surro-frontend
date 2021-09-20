import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {emailsMatch} from './../custom.validators';

@Component({
  selector: 'app-reactive-common',
  templateUrl: './reactive-common.component.html'
})
export class ReactiveCommonComponent implements OnInit {
  commonForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.commonForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.pattern('^[A-Za-z]+$')]),
      age: new FormControl(null, [Validators.required, Validators.pattern('^(?:1[01][0-9]|120|1[7-9]|[2-9][0-9])$')]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      emailConfirm: new FormControl(null, [Validators.required, Validators.email, emailsMatch('email')]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.pattern('([A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]*')])
    });
  }

  onSubmit(): void{
    console.log(this.commonForm);
  }
}


import { Component } from '@angular/core';

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html'
})
export class TimepickerComponent  {

  basicTime = new Date();
  secondsTime = new Date();
  stepsTime = new Date();
  mouseTime = new Date();
  constructor() { }



}

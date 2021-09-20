import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html'
})
export class SliderComponent implements OnInit {
  sliderValue = 10;
  sliderRangeFormGroup: FormGroup;

  ngOnInit(): void {
    this.sliderRangeFormGroup = new FormGroup({
      range: new FormControl([800, 1200]),
    });
    console.log(this.sliderRangeFormGroup.controls.range);
  }

}

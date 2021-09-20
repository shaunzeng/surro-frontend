import { Component} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent {

  rate = 0;
  rateReadonly = 5;
  constructor() { }



}

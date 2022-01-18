import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gradient-with-radial-progress-card',
  templateUrl: './gradient-with-radial-progress-card.component.html'
})
export class GradientWithRadialProgressCardComponent {
  @Input() icon = 'icon';
  @Input() title = 'title';
  @Input() detail = 'detail';
  @Input() progressText = '25%';
  @Input() percent = 25;

  constructor() { }


}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-radial-process-card',
  templateUrl: './radial-process-card.component.html',
})
export class RadialProcessCardComponent{

  @Input() title = 'title';
  @Input() percent = 50;
  @Input() isSortable = false;
  @Input() class = '';


  constructor() { }



}

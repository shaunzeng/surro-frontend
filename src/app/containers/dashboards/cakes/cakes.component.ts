import { Component } from '@angular/core';
import cakes, { ICake } from 'src/app/data/cakes';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html'
})
export class CakesComponent {

  data: ICake[] = cakes;
  constructor() { }



}

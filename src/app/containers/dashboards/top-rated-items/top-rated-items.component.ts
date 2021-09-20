import { Component } from '@angular/core';
import topRatedItems, { ITopRatedItem } from 'src/app/data/top-rated-items';

@Component({
  selector: 'app-top-rated-items',
  templateUrl: './top-rated-items.component.html'
})
export class TopRatedItemsComponent  {

  data: ITopRatedItem[] = topRatedItems;
  rate = 5;
  constructor() { }



}

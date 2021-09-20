import { Component } from '@angular/core';
import products from 'src/app/data/products';
import { IProduct } from 'src/app/data/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  data: IProduct[] = products;
  constructor() { }



}

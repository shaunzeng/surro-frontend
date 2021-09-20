import { Component, Input } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import productItems from 'src/app/data/products';
// import { IProduct } from 'src/app/data/api.service';


@Component({
  selector: 'app-best-sellers',
  templateUrl: './best-sellers.component.html'
})
export class BestSellersComponent  {
  @Input() title = 'dashboards.best-sellers';

  rows = productItems.slice(0, 8);
  columns = [
    { prop: 'title' },
    { name: 'Sales' },
    { name: 'Stock' },
    { name: 'Category' }
  ];

  columnMode = ColumnMode;
  constructor() { }


}

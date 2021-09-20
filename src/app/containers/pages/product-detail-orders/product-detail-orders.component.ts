import { Component, OnInit } from '@angular/core';
import orderData, { IOrder } from 'src/app/data/orders';

@Component({
  selector: 'app-product-detail-orders',
  templateUrl: './product-detail-orders.component.html'
})
export class ProductDetailOrdersComponent implements OnInit {
  orders: IOrder[] = orderData;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html'
})
export class AdvancedSearchComponent  {
  selectToppings = [
    { label: 'Chocolate', value: 'chocolate' },
    { label: 'Vanilla', value: 'vanilla' },
    { label: 'Strawberry', value: 'strawberry' },
    { label: 'Caramel', value: 'caramel' },
    { label: 'Cookies and Cream', value: 'cookiescream' },
    { label: 'Peppermint', value: 'peppermint' }
  ];

  selectTypes = [
    { label: 'Cake', value: 'cake' },
    { label: 'Cupcake', value: 'cupcake' },
    { label: 'Dessert', value: 'dessert' }
  ];

  constructor() { }


}

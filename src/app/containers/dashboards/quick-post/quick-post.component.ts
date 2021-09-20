import { Component} from '@angular/core';

@Component({
  selector: 'app-quick-post',
  templateUrl: './quick-post.component.html'
})
export class QuickPostComponent  {
  categories = [
    { label: 'Cakes', value: 'chocolate' },
    { label: 'Cupcakes', value: 'vanilla' },
    { label: 'Desserts', value: 'strawberry' }
  ];

  constructor() { }



}

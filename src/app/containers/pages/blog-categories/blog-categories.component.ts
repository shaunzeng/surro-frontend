import { Component } from '@angular/core';
import { blogCategories } from '../../../data/blog';
@Component({
  selector: 'app-blog-categories',
  templateUrl: './blog-categories.component.html'
})
export class BlogCategoriesComponent {
  data = blogCategories.slice();
  constructor() { }



}

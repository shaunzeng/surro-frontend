import { Component } from '@angular/core';
import { blogData } from '../../../../../data/blog';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html'
})
export class BlogListComponent {
  data = blogData.slice();
  adminRoot = environment.adminRoot;

  constructor() { }



}

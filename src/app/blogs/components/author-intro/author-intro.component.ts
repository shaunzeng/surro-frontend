import {
    Component,
    OnInit,
    Input
  } from '@angular/core';
  import { Store } from '@ngrx/store';

  @Component({
    selector: 'app-blog-author',
    templateUrl: './author-intro.component.html',
    styleUrls:['./author-intro.component.scss']
  })
  export class AuthorIntroComponent {

    @Input() author: any;

    constructor(
        private store: Store
    ) {}
  
  }
import {
    Component,
    OnInit,
    HostListener,
    Input
  } from '@angular/core';
  import { Store } from '@ngrx/store';
import { BlogDetailsResponse } from '../../data/models';

  @Component({
    selector: 'app-blog-article',
    templateUrl: './article.component.html',
    styleUrls:['./article.component.scss']
  })
  export class ArticleComponent implements OnInit {

    @Input() data: BlogDetailsResponse;

    constructor(
        private store: Store
    ) {}
  
    ngOnInit(): void {
      
    }

    onPageChanged(e: number){

    }
  
    @HostListener('window:resize', ['$event'])
    onResize(event): void {
  
    }
  
    @HostListener('window:click', ['$event'])
    onClick(event): void {
  
    }
  
    @HostListener('window:scroll', ['$event'])
    onScroll(event): void {
  
    }
  }
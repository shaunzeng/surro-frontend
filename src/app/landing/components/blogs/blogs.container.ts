import {
    Component,
    OnInit,
    OnDestroy,
    HostListener,
  } from '@angular/core';
  import { SearchService } from '@core';
  import { Store } from '@ngrx/store';

  
  @Component({
    selector: 'app-home-blogs',
    templateUrl: './blogs.container.html',
    styleUrls:['./blogs.container.scss']
  })
  export class BlogsContainer implements OnInit, OnDestroy {

    constructor(
        public searchService:SearchService,
        private store: Store
    ) {}
  
    ngOnInit(): void {
      
    }
  
    ngOnDestroy(): void {
  
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
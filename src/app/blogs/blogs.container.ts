import {
    Component,
    OnInit,
    HostListener
  } from '@angular/core';
  import { Store } from '@ngrx/store';
  
  @Component({
    selector: 'app-blogs',
    templateUrl: './blogs.container.html',
    styleUrls:['./blogs.container.scss']
  })
  export class BlogsContainer implements OnInit {
  
    constructor(
        private store: Store
    ) {}
  
    ngOnInit(): void {
      
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
import {
    Component,
    OnInit,
    HostListener,
    Input
  } from '@angular/core';
  import { Store } from '@ngrx/store';


  @Component({
    selector: 'app-blogs-comments',
    templateUrl: './comments.component.html',
    styleUrls:['./comments.component.scss']
  })
  export class CommentsComponent implements OnInit {

    @Input() data: any;

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
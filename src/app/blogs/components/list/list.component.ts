import {
    Component,
    OnInit,
    HostListener,
    Input
  } from '@angular/core';
  import { Store } from '@ngrx/store';

  @Component({
    selector: 'app-blogs-list',
    templateUrl: './list.component.html',
    styleUrls:['./list.component.scss']
  })
  export class ListComponent implements OnInit {

    currentPage = 1;

    @Input() data: any;
    @Input() totalCount: number;

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
import {
    Component,
    OnInit,
    HostListener,
    Input,
    Output,
    EventEmitter
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

    @Output() onPageChange: EventEmitter<number> = new EventEmitter();

    constructor(
        private store: Store
    ) {}
  
    ngOnInit(): void {
      
    }

    onPageChanged(e: number){
      this.onPageChange.emit(e);
    }

    onSubmit(){
      
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
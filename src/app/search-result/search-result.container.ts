import {
    Component,
    OnInit,
    OnDestroy,
    HostListener,
  } from '@angular/core';
  import { SearchService } from '@core';
  import { Store } from '@ngrx/store';
  import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';

  
  @Component({
    selector: 'app-search-results',
    templateUrl: './search-result.container.html',
  })
  export class SearcherResultsContainer implements OnInit, OnDestroy {

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
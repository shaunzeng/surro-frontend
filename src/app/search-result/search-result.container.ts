import {
    Component,
    OnInit,
    OnDestroy,
    HostListener,
    ViewChild,
  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '@core';
import { Store } from '@ngrx/store';
import { from, Observable, of, Subject, Subscriber } from 'rxjs';
import { debounceTime, map, switchMap, takeUntil } from 'rxjs/operators';
import { PRESET_KEYWORDS } from './data/constants';
import { FecthSearchResults } from './data/actions';
import { selectSearchResults, isBusySelector } from './data/selectors';
import { FetchRequest } from './data/models';
  
  @Component({
    selector: 'app-search-results',
    templateUrl: './search-result.container.html',
    styleUrls:['./search-result.container.scss']
  })
  export class SearcherResultsContainer implements OnInit, OnDestroy {
    
    keyword: string;
    zipcode: string;
    filter: string;
    currentPage = 0;
    perPage = 10;

    suggestedZips$?: Observable<string>;
    unsubscribe$: Subject<boolean> = new Subject();
    
    filters = PRESET_KEYWORDS;
    data$: Observable<string[]>;
    isBusy$: Observable<boolean>;
    

    @ViewChild('searchForm') searchForm: NgForm;

    constructor(
        private activatedRoute: ActivatedRoute,
        public searchService:SearchService,
        private store: Store
    ) {}
  
    ngOnInit(): void {
        const snapshot = this.activatedRoute.snapshot;
        this.keyword = snapshot.queryParams.keyword;
        this.zipcode = snapshot.queryParams.zipcode;
        this.filter = snapshot.queryParams.bizType;

        this.data$ = this.store.select(selectSearchResults);
        this.data$.subscribe(console.log);
        this.isBusy$ = this.store.select(isBusySelector);

        this.initZipcodeSearch();
        this.loadSearchResults({
          keyword: this.keyword,
          bizType: this.filter,
          zipcode: this.zipcode,
          start: this.currentPage.toString(),
          perPage: this.perPage.toString()
        });
    }
  
    ngOnDestroy(): void {
  
    }

    onSubmit(){
      if ( this.zipcode ){ 
        this.loadSearchResults({
          keyword: this.keyword,
          bizType: this.filter,
          zipcode: this.zipcode,
          start: this.perPage.toString(),
          perPage: this.perPage.toString()
        });
      }
    }

    onFilterBy(ctg: string) {
      this.filter = ctg;
      this.onSubmit();
    }

    onSortChange(order: string){
      
    }

    onPerPageChange(num: number) {
      this.perPage = num;
      this.loadSearchResults({
        keyword: this.keyword,
        zipcode: this.zipcode,
        perPage: this.perPage.toString(),
        bizType: this.filter,
        start: this.currentPage.toString()
      })
    }

    private initZipcodeSearch(){
      this.suggestedZips$ = new Observable<string>((subscriber: Subscriber<string | undefined>) => {
        subscriber.next(this.zipcode);
      }).pipe(
        takeUntil(this.unsubscribe$),
        debounceTime(100),
        switchMap(this.handlerZipResult.bind(this))
      )
    }

    private handlerZipResult(query:string) {
      return (!!query && query.length > 1 && query.length < 6) ? 
              from(this.searchService.searchZip(query))
              .pipe(
                map(data => data['zips'] || null)) 
              : of([]);
    }

    private loadSearchResults(request: FetchRequest){
      if (!!request.zipcode) {
        this.store.dispatch(FecthSearchResults(request));
      }
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
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
import { selectSearchResults, selectBusy } from './data/selectors';
  
  @Component({
    selector: 'app-search-results',
    templateUrl: './search-result.container.html',
    styleUrls:['./search-result.container.scss']
  })
  export class SearcherResultsContainer implements OnInit, OnDestroy {
    
    keyword: string;
    zipcode: string;
    suggestedZips$?: Observable<string>;
    unsubscribe$: Subject<boolean> = new Subject();
    filter = 'ALL';
    filters = PRESET_KEYWORDS;
    sortedBy = 'Distance';
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
        this.keyword = snapshot.queryParams.search;
        this.zipcode = snapshot.queryParams.zipcode;
        this.data$ = this.store.select(selectSearchResults);
        this.isBusy$ = this.store.select(selectBusy);

        this.initZipcodeSearch();
        this.loadSearchResults(this.keyword, this.zipcode);
    }
  
    ngOnDestroy(): void {
  
    }

    onSubmit(){
      if (this.searchForm.valid){
        this.loadSearchResults(this.keyword, this.zipcode);
      }
    }

    onFilterBy(ctg: string) {
      this.filter = ctg;
    }

    onSortChange(order: string){
      this.sortedBy = order;
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

    private loadSearchResults(keyword: string, zipcode: string){
      if (!!keyword && !!zipcode) {
        this.store.dispatch(FecthSearchResults({keyword, zipcode}));
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
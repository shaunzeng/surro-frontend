import {
  Component,
  OnInit,
  OnDestroy,
  HostListener,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchService, RootState } from '@core';
import { Store } from '@ngrx/store';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';
import { from, Observable, of, Subject, Subscriber } from 'rxjs';
import { catchError, debounceTime, filter, map, switchMap, take, takeUntil, tap } from 'rxjs/operators';
import { BlogListResponse } from '../blogs/data/models';
import { FetchRcentComments, SetupZipcode, SubmitSearch, FetchTrendingBlogs } from './data/actions';
import { selectRecentComments, selectTrendingBlogs } from './data/selectors';

@Component({
  selector: 'app-home',
  templateUrl: './landing.container.html',
  styleUrls:['./landing.container.scss']
})
export class LandingContainer implements OnInit, OnDestroy {

  @ViewChild('searchForm') searchForm: NgForm;

  topic = "IVF CLINICS";
  zipcode = '10281';
  keyword = '';
  suggestedZips$?: Observable<string>;
  suggestedPreview$?: Observable<any>;
  unsubscribe$: Subject<boolean> = new Subject();
  errorMsg?: string;

  trendingBlogs$: Observable<BlogListResponse>;
  recentComments$: Observable<any>
  
  constructor(
      public searchService:SearchService,
      private store: Store
  ) {}

  ngOnInit(): void {

    this.suggestedZips$ = new Observable<string>((subscriber: Subscriber<string | undefined>) => {
        subscriber.next(this.zipcode);
      }).pipe(
        filter(query => !!query && query.length > 1 && query.length < 6),
        takeUntil(this.unsubscribe$),
        debounceTime(300),
        switchMap(this.handlerZipResult.bind(this))
      );
    
    this.suggestedPreview$ = new Observable<any>((subscriber: Subscriber<any>) => {
      subscriber.next(this.keyword);
    }).pipe(
      takeUntil(this.unsubscribe$),
      debounceTime(300),
      switchMap(this.handlerPreviewResults.bind(this))
    )

    this.trendingBlogs$ = this.store.select(selectTrendingBlogs);
    this.recentComments$ = this.store.select(selectRecentComments);
    this.recentComments$.subscribe(console.log);

    this.store
      .select((state:RootState) => state.user.zipcode)
      .pipe(
        take(1)
      ).subscribe(zipcode => {
        this.zipcode = zipcode;
          this.store.dispatch(SetupZipcode({ zipcode }));
          this.store.dispatch(FetchTrendingBlogs());
          this.store.dispatch(FetchRcentComments())
      });
  }


  private handlerZipResult(query:string) {
    return from(this.searchService.searchZip(query))
            .pipe(
              map(data => data['zips'] || null),
              catchError(e => of([]))
            );
  }

  private handlerPreviewResults(query: string) {
    return (!!query && query.length > 1) ? 
      from(this.searchService.searchPreview({
        query,
        zipcode: this.zipcode
      }))
      .pipe(map(data => data['data'])) : of([]);
  }

  ngOnDestroy(): void {
    this.keyword = '';
    this.zipcode = '10281';
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onSubmit(){
    if (this.searchForm.valid) {
      this.store.dispatch(
        SubmitSearch(
          { 
            keyword: this.keyword, 
            zipcode: this.zipcode
          }
        )
      );
    }
  }

  onSelectZip(e: TypeaheadMatch){
    this.zipcode = e.value;
    this.store.dispatch(SetupZipcode({zipcode:e.value}));
  }

  onSelectPreview(e: TypeaheadMatch){
    this.onSubmit();
  }

  onBlur(e: TypeaheadMatch){
    
  }

  onSwitcherClick(e: string) {
    if (!this.zipcode) return;
    this.store.dispatch(
      SubmitSearch(
        { 
          bizType: e,
          zipcode: this.zipcode
        }
      )
    );
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
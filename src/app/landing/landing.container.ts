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
import { debounceTime, map, switchMap, take, takeUntil, tap } from 'rxjs/operators';
import { SetupZipcode, SubmitSearch } from './data/actions';

@Component({
  selector: 'app-home',
  templateUrl: './landing.container.html',
  styleUrls:['./landing.component.scss']
})
export class LandingContainer implements OnInit, OnDestroy {

  @ViewChild('searchForm') searchForm: NgForm;

  topic:string = "IVF CLINICS";
  zipcode = '10281';
  keyword = '';
  suggestedZips$?: Observable<string>;
  unsubscribe$: Subject<boolean> = new Subject();
  errorMsg?: string;
  
  constructor(
      public searchService:SearchService,
      private store: Store
  ) {}

  ngOnInit(): void {
    
    this.store
      .select((state:RootState) => state.user.zipcode)
      .pipe(
        take(1),
      ).subscribe(zip => {
        this.zipcode = zip;
        this.store.dispatch(SetupZipcode({zipcode:zip}))
      });

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

  ngOnDestroy(): void {
    this.keyword = '';
  }

  onSubmit(){
    if (this.searchForm.valid) {
      this.store.dispatch(
        SubmitSearch(
          { 
            keyword: this.searchForm.value.keyword, 
            zipcode: this.searchForm.value.zipcode
          }
        )
      );
    }
  }

  onSelectZip(e:TypeaheadMatch){
    this.zipcode = e.value;
    this.store.dispatch(SetupZipcode({zipcode:e.value}));
  }

  onBlur(e: TypeaheadMatch){
    console.log(e);
  }

  onSwitcherClick(e: string) {
    console.log(e);
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
import {
  Component,
  OnInit,
  Renderer2,
  OnDestroy,
  HostListener,
  ElementRef,
} from '@angular/core';
import { SearchService } from '@core';
import { Store } from '@ngrx/store';
import { RootState } from '@core';
import { from, Observable, Observer, of, Subject, Subscriber } from 'rxjs';
import { debounceTime, filter, map, switchMap, take, takeUntil, tap } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './landing.container.html',
  styleUrls:['./landing.component.scss']
})
export class LandingContainer implements OnInit, OnDestroy {
  topic:string = "IVF CLINICS";
  defaultZip = '10281';
  zip?:string;
  suggestions$?: Observable<string>;
  errorMsg?:string;
  unsubscribe$:Subject<boolean> = new Subject();

  constructor(
      private searchService:SearchService,
      private elRef: ElementRef, 
      private store: Store
  ) {}

  ngOnInit(): void {
    this.store
    .select((state:RootState) => state.user.zipcode)
    .pipe(take(1)).subscribe(this.assignZip.bind(this));

    this.initTypeahead();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  private assignZip(val:string) {
    this.zip = val ? val : this.defaultZip;
  }

  private initTypeahead(){
    this.suggestions$ = 
    new Observable<string>((subscriber: Subscriber<string | undefined>) => {
      subscriber.next(this.zip);
    }).pipe(
      takeUntil(this.unsubscribe$),
      debounceTime(100),
      switchMap((query:string) => {
        return (!!query && query.length > 2 && query.length < 6) ? from(this.searchService.searchZip(query))
          .pipe(map(data => data['zips'] || null),tap({next:console.log})) : of([]);
      })
    )
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
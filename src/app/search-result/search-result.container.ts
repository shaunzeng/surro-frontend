import {
    Component,
    OnInit,
    OnDestroy,
    ViewChild,
    TemplateRef,
  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '@core';
import { Store } from '@ngrx/store';
import { from, Observable, of, Subject, Subscriber } from 'rxjs';
import { debounceTime, map, switchMap, takeUntil } from 'rxjs/operators';

import { FecthSearchResults } from './data/actions';
import { selectSearchResults, isBusySelector, selectTotalCount } from './data/selectors';
import { FetchRequest } from './data/models';
import { defaultFilter} from './data/constants';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

interface PageChangeEvent {
  itemsPerPage: number,
  page: number
}
  
@Component({
  selector: 'app-search-results',
  templateUrl: './search-result.container.html',
  styleUrls:['./search-result.container.scss']
})
export class SearcherResultsContainer implements OnInit, OnDestroy {
  
  filter = JSON.parse(JSON.stringify(defaultFilter));
  displayMode = 'thumb';
  zipcode: string;

  suggestedZips$?: Observable<string>;
  unsubscribe$: Subject<boolean> = new Subject();

  profiles$: Observable<any[]>;
  totalCount$: Observable<number>;

  isBusy$: Observable<boolean>;

  rate = 3;
  modalRef?:BsModalRef;
  @ViewChild('searchForm') searchForm: NgForm;

  constructor(
      private activatedRoute: ActivatedRoute,
      private searchService:SearchService,
      private store: Store,
      private modalService: BsModalService
  ) {}

  ngOnInit(): void {
      const snapshot = this.activatedRoute.snapshot;
      this.filter.keyword = snapshot.queryParams.keyword;
      this.filter.zipcode = this.zipcode = snapshot.queryParams.zipcode || '10281';
      this.filter.category = snapshot.queryParams.bizType;
      
      this.profiles$ = this.store.select(selectSearchResults);
      this.totalCount$ = this.store.select(selectTotalCount);
      this.isBusy$ = this.store.select(isBusySelector);

      this.initZipcodeSearch();
      this.onSubmit();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onSubmit(){
    if (this.filter.zipcode){ 
      const request = this.getRequest(this.filter);
      this.store.dispatch(FecthSearchResults({ request }));
    }
  }

  onSortChange(order: string){
    this.filter.sort = order;
    this.onSubmit();
  }

  onPerPageChanged(e: number) {
    this.filter.perPage = e;
    this.onSubmit();
  }

  onPageChanged(e: PageChangeEvent){
    this.filter.page = e.page;
    this.onSubmit();
  }

  onChangeDisplayMode(mode: string){
    this.displayMode = mode;
  }

  onResetFilter(){
    this.filter = JSON.parse(JSON.stringify(defaultFilter));
    this.filter.zipcode = this.zipcode;
    this.onSubmit();
  }

  onFilterchange(){
    this.onSubmit();
  }

  openConfigFilter(temp: TemplateRef<any>){
    this.modalRef = this.modalService.show(temp);
  }

  private initZipcodeSearch(){
    this.suggestedZips$ = new Observable<string>((subscriber: Subscriber<string | undefined>) => {
      subscriber.next(this.filter.zipcode);
    }).pipe(
      takeUntil(this.unsubscribe$),
      debounceTime(100),
      switchMap(this.handlerZipResult.bind(this))
    )
  }

  private handlerZipResult(query:string) {
    return (!!query && query.length > 1 && query.length < 6) ? 
            from(this.searchService.searchZip(query))
            .pipe(map(data => data['zips'] || null)) 
            : of([]);
  }

  private getRequest(filter: any): FetchRequest{
    return {
      zipcode: filter.zipcode,
      keyword: filter.keyword,
      page: filter.page,
      perPage: filter.perPage,
      category: filter.category,
      languages: Object.keys(filter.languages).filter(lan => filter.languages[lan]),
      reviews: Object.keys(filter.reviews).filter(re => filter.reviews[re]),
      cost: Object.keys(filter.cost).filter(c => filter.cost[c]),
      locations: Object.keys(filter.locations).filter(l => filter.locations[l])
    } as FetchRequest;
  }

}
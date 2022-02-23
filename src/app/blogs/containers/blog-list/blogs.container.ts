import {
    Component,
    OnInit,
    HostListener
  } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { blogData } from '../../../data/blog';
import { fetchBlogList } from '../../data/actions';
import * as Selectors from '../../data/selectors';
  
  @Component({
    selector: 'app-blogs',
    templateUrl: './blogs.container.html',
    styleUrls:['./blogs.container.scss']
  })
  export class BlogsContainer implements OnInit {
    
    currentPage = 1;
    data = blogData.slice();
    filter: string = null;

    filters = [{
      label: 'All',
      value: null
    },{
      label: 'Surrogacy',
      value: 'SURROGACY'
    }, {
      label: 'IVF',
      value: 'IVF'
    },{
      label: 'Finance',
      value: 'FINANCE'
    },{
      label: 'Nutrition',
      value: 'NUTRITION'
    }];

    data$: Observable<any>;
    isBusy$: Observable<boolean>;
    totalCount$: Observable<number>;
  
    constructor(
        private store: Store
    ) {}
  
    ngOnInit(): void {
      this.store.dispatch(fetchBlogList({}));
      this.data$ = this.store.select(Selectors.blogListSelector);
      this.totalCount$ = this.store.select(Selectors.blogListTotalCountSelector);
      this.isBusy$ = this.store.select(Selectors.isBusySelector);
    }

    onPageChange(e: any){
      this.currentPage = e.page;
      this.store.dispatch(fetchBlogList({filter: this.filter, page: this.currentPage}));
    }
  
    onFilterChanged(filter: string){
      this.filter = filter;
      this.store.dispatch(fetchBlogList({filter: this.filter, page: this.currentPage}));
    }
  
  }
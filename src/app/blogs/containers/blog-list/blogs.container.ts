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
  
    constructor(
        private store: Store
    ) {}
  
    ngOnInit(): void {
      this.store.dispatch(fetchBlogList());
      this.data$ = this.store.select(Selectors.blogListSelector);
      this.data$.subscribe(console.log);
    }

    onPageChanged(e: any){

    }
  
    onFilterChanged(filter: string){
      this.filter = filter;
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
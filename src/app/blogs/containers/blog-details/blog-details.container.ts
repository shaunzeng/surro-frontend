import {
    Component,
    OnInit,
    HostListener
  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
  import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { blogData } from '../../../data/blog';
import { fetchBlogDetails, fetchCommentsByPostId } from '../../data/actions';
import { BlogDetailsResponse } from '../../data/models';
import { blogCommentsSelector, blogDetailsSelector, isBusySelector } from '../../data/selectors';
  
  @Component({
    selector: 'app-blogs-details',
    templateUrl: './blog-details.container.html',
    styleUrls:['./blog-details.container.scss']
  })
  export class BlogDetailsContainer implements OnInit {
    
    currentPage = 1;
    data = blogData.slice();
    filter: string;
    blog$: Observable<BlogDetailsResponse>;
    comments$: Observable<any>;
    isBusy$: Observable<boolean>;


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
  
    constructor(
        private store: Store,
        private route: ActivatedRoute,
    ) {}
  
    ngOnInit(): void {
      this.route.params.pipe(take(1)).subscribe(({ id }) => {
        this.store.dispatch(fetchBlogDetails({ id }));
        this.store.dispatch(fetchCommentsByPostId({id}));
      });

      this.blog$ = this.store.select(blogDetailsSelector);
      this.isBusy$ = this.store.select(isBusySelector);
      this.comments$ = this.store.select(blogCommentsSelector);
      this.blog$.subscribe(console.log)
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
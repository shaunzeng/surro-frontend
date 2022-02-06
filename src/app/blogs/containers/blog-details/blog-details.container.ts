import {
    Component,
    OnInit,
    ViewChild,
  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
  import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { selectIsLoggedIn, selectUserId } from '@core';
import { fetchBlogDetails, fetchCommentsByPostId, postComment, deleteCommentById, likeComment, unlikeComment } from '../../data/actions';
import { BlogDetailsResponse } from '../../data/models';
import { blogCommentsSelector, blogDetailsSelector, isBusySelector } from '../../data/selectors';
import { NgForm } from '@angular/forms';
  
  @Component({
    selector: 'app-blogs-details',
    templateUrl: './blog-details.container.html',
    styleUrls:['./blog-details.container.scss']
  })
  export class BlogDetailsContainer implements OnInit {

    blog$: Observable<BlogDetailsResponse>;
    comments$: Observable<any>;
    isBusy$: Observable<boolean>;
    isLoggedIn$: Observable<boolean>;
    currentUserId$: Observable<string>;

    postId: string;
    currentCommentPage = 1;

    @ViewChild('commentForm') commentForm: NgForm;

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
        this.postId = id;
        this.store.dispatch(fetchBlogDetails({ id }));
        this.store.dispatch(fetchCommentsByPostId({ id }));
      });

      this.blog$ = this.store.select(blogDetailsSelector);
      this.isBusy$ = this.store.select(isBusySelector);
      this.comments$ = this.store.select(blogCommentsSelector);
      this.isLoggedIn$ = this.store.select(selectIsLoggedIn);
      this.currentUserId$ = this.store.select(selectUserId);
    }

    onCommentPageChange(e: { page: number, itemsPerPage: number}){
      this.currentCommentPage = e.page;
      this.store.dispatch(fetchCommentsByPostId({
        id: this.postId,
        page: e.page
      }))
    }

    onRemoveComment(id: string){
      if (!id) return ;
      this.store.dispatch(deleteCommentById({
        id
      }))
    }

    onSubmit(){
      if (this.commentForm.valid) {
          this.store.dispatch(postComment({ 
            comment: this.commentForm.value.comment, 
            postId: this.postId 
          }));
          this.commentForm.resetForm();
      }
    }

    onLikeComment(id: string) {
      if (!id) return;

      this.store.dispatch(likeComment({
        id
      }));
    }

    onUnlikeComment(id: string) {
      if(!id) return;

      this.store.dispatch(unlikeComment({
        id
      }))
    }
  }
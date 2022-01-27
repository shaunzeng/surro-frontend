import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetchBlogList, fetchBlogListSuccess, fetchBlogDetails, fetchBlogDetailsSuccess, fetchCommentsByPostId, fetchCommentsByPostIdSuccess } from './actions';
import { BlogsService } from '../../core/services/blogs.service';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { BlogListResponse, BlogDetailsResponse } from './models';

@Injectable()
export class BlogEffects {

    constructor(
        private actions$: Actions,
        private blogService: BlogsService
      ) {}

    setupBlogList$ = createEffect(
        () => this.actions$.pipe(
        ofType(fetchBlogList),
        switchMap(() => {
            return this.blogService.getBlogsPreview()
            .pipe(
                switchMap(data => of(fetchBlogListSuccess(data as BlogListResponse)))
            )
        })
    ), { dispatch: true })

    getBlogDetails$ = createEffect(
        () => this.actions$.pipe(
        ofType(fetchBlogDetails),
        switchMap(action => 
            this.blogService.getBlogDetails(action.id)
            .pipe(
                switchMap(data => of(fetchBlogDetailsSuccess(data as BlogDetailsResponse)))
            )
        )
    ), { dispatch: true })

    getComments$ = createEffect(
        () => this.actions$.pipe(
        ofType(fetchCommentsByPostId),
        switchMap(action => 
            this.blogService.getComments(action.id)
            .pipe(
                switchMap(data => of(fetchCommentsByPostIdSuccess(data)))
            )
        )
    ), { dispatch: true })
}
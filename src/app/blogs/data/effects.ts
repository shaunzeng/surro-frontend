import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetchBlogList, fetchBlogListSuccess, fetchBlogDetails, fetchBlogDetailsSuccess, fetchCommentsByPostId, fetchCommentsByPostIdSuccess, postComment, postCommentSuccess, deleteCommentById, deleteCommentByIdSuccess, likeComment, likeCommentSuccess, unlikeComment, unlikeCommentSuccess } from './actions';
import { BlogsService } from '../../core/services/blogs.service';
import { catchError, switchMap } from 'rxjs/operators';
import { of, from } from 'rxjs';
import { BlogListResponse, BlogDetailsResponse } from './models';
import { Store } from '@ngrx/store';

@Injectable()
export class BlogEffects {

    constructor(
        private actions$: Actions,
        private blogService: BlogsService,
      ) {}

    setupBlogList$ = createEffect(
        () => this.actions$.pipe(
        ofType(fetchBlogList),
        switchMap(action => {
            const { filter, page, perPage } = action;
            return this.blogService.getBlogsPreview({
                filter,
                page,
                perPage
            })
            .pipe(
                switchMap(data => of(fetchBlogListSuccess(data as BlogListResponse))),
                catchError(e => from([]))
            )
        })
    ), { dispatch: true })

    getBlogDetails$ = createEffect(
        () => this.actions$.pipe(
        ofType(fetchBlogDetails),
        switchMap(action => 
            this.blogService.getBlogDetails(action.id)
            .pipe(
                switchMap(data => of(fetchBlogDetailsSuccess(data as BlogDetailsResponse))),
                catchError(e => from([]))
            )
        )
    ), { dispatch: true })

    getComments$ = createEffect(
        () => this.actions$.pipe(
        ofType(fetchCommentsByPostId),
        switchMap(action => 
            this.blogService.getComments({
                postId: action.id,
                page: action.page
            })
            .pipe(
                switchMap(data => of(fetchCommentsByPostIdSuccess(data))),
                catchError(e => from([]))
            )
        )
    ), { dispatch: true })

    postComment$ = createEffect(
        () => this.actions$.pipe(
        ofType(postComment),
        switchMap(action => 
            this.blogService.postComment({
                comment: action.comment,
                postId: action.postId,
                parentId: action.parentId
            })
            .pipe(
                switchMap(data => of(postCommentSuccess(data))),
                catchError(e => from([]))
            )
        )
    ), { dispatch: true })


    deleteCommentById$ = createEffect(
        () => this.actions$.pipe(
        ofType(deleteCommentById),
        switchMap(action => 
            this.blogService.deletCommentById({
                id: action.id
            })
            .pipe(
                switchMap(() => of(deleteCommentByIdSuccess({id: action.id}))),
                catchError(e => from([]))
            )
        )
    ), { dispatch: true })

    likeComment$ = createEffect(
        () => this.actions$.pipe(
        ofType(likeComment),
        switchMap(action => 
            this.blogService.likeComment({
                commentId: action.id
            })
            .pipe(
                switchMap(data => of(likeCommentSuccess({
                    id: action.id
                }))),
                catchError(e => from([]))
            )
        )
    ), { dispatch: true })

    unlikeComment$ = createEffect(
        () => this.actions$.pipe(
        ofType(unlikeComment),
        switchMap(action => 
            this.blogService.unlikeComment({
                commentId: action.id
            })
            .pipe(
                switchMap(data => of(unlikeCommentSuccess({
                    id: action.id
                }))),
                catchError(e => from([]))
            )
        )
    ), { dispatch: true })
}

/*
*/
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NavigationService, BlogsService } from '@core';
import { 
  FetchRcentComments,
  FetchRcentCommentsSuccess,
  FetchTrendingBlogs, 
  FetchTrendingBlogsSuccess, 
  SubmitSearch 
} from './actions';
import { switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class LandingEffects {

    constructor(
        private actions$: Actions,
        private navService: NavigationService,
        private blogService: BlogsService,
      ) {}

    navigateToSearch$ = createEffect(
      () => this.actions$.pipe(
        ofType(SubmitSearch),
        tap(action => this.navService.toSearchResults({
          keyword: action.keyword,
          zipcode: action.zipcode,
          bizType: action.bizType
        })
      )
    ), {dispatch:false})

    getTrandingBlogs$ = createEffect(
      () => this.actions$.pipe(
      ofType(FetchTrendingBlogs),
      switchMap(() => {
        return this.blogService
        .getBlogsPreview()
        .pipe(
          switchMap(data => of(FetchTrendingBlogsSuccess(data))),
        )
      }),
  ), { dispatch: true })

  getLastestComments$ = createEffect(
    () => this.actions$.pipe(
    ofType(FetchRcentComments),
    switchMap(() => {
      return this.blogService
      .getLatestComments()
      .pipe(
        switchMap(data => of(FetchRcentCommentsSuccess({payload: data}))),
      )
    }),
), { dispatch: true })


}
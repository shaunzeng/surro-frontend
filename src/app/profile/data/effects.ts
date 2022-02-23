import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetchProfile, fetchProfileSuccess, submitReview, submitReviewSuccess } from './actions';
import { ProfileService } from '@core';
import { catchError, switchMap } from 'rxjs/operators';
import { from, of } from 'rxjs';

@Injectable()
export class Profileffects {

    constructor(
        private actions$: Actions,
        private profileService: ProfileService
      ) {}

    submitReview$ = createEffect(() => 
      this.actions$.pipe(
        ofType(submitReview),
        switchMap(action => 
            this.profileService.submitReview({
                rating: action.rating,
                review: action.review
            })
            .pipe(
                switchMap(data => of(submitReviewSuccess(data))),
                catchError(e => from([]))
            )
        )
    ), { dispatch: true })

    fetchProfile$ = createEffect(() => 
      this.actions$.pipe(
        ofType(fetchProfile),
        switchMap(action => 
            this.profileService.fetchProfile({
                id: action.id,
            })
            .pipe(
                switchMap(data => of(fetchProfileSuccess(data))),
                catchError(e => from([]))
            )
        )
    ), { dispatch: true })
}
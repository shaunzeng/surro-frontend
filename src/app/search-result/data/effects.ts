import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FecthSearchResults, FecthSearchResultsSuccess } from './actions';
import { SearchService } from '@core';
import { from, of } from 'rxjs';
import { catchError, map, take, switchMap, mergeMap, exhaustMap, delay } from 'rxjs/operators';
import { FetchResponse } from './models';
import { Store } from '@ngrx/store';

@Injectable()
export class SearchEffects {

    constructor(
        private actions$: Actions,
        private searchService: SearchService,
        private store: Store
      ) {}

    navigateToSearch$ = createEffect(
      () => this.actions$.pipe(
        ofType(FecthSearchResults),
        exhaustMap(action => 
            from(this.searchService.searchContent(action.keyword, action.zipcode))
            .pipe(
                take(1),
                delay(5000),
                map((response: FetchResponse) => { 
                    console.log('here ', response); 
                    this.store.dispatch(FecthSearchResultsSuccess(response));
                    // todo : returning action is not working, need analysis
                    return FecthSearchResultsSuccess(response)
                }),
                catchError(e => of(e))
            )
        )
    ), {dispatch:false})
}
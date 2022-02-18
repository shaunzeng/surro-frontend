import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FecthSearchResults, FecthSearchResultsSuccess } from './actions';
import { SearchService } from '@core';
import { from, of } from 'rxjs';
import { catchError, map, take, switchMap } from 'rxjs/operators';
import { FetchResponse } from './models';

@Injectable()
export class SearchEffects {

    constructor(
        private actions$: Actions,
        private searchService: SearchService,
      ) {}

    fetchSearchResults$ = createEffect(
      () => this.actions$.pipe(
        ofType(FecthSearchResults),
        switchMap(action => 
            this.searchService.searchContent(action.request)
            .pipe(
                map((response: FetchResponse) => FecthSearchResultsSuccess({ payload: response })),
                catchError(e => of(e))
            )
        )
    ), { dispatch:true })
}
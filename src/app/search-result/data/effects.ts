import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FecthSearchResults, FecthSearchResultsSuccess } from './actions';
import { SearchService } from '@core';
import { from, of } from 'rxjs';
import { catchError, map, take, switchMap } from 'rxjs/operators';
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
        switchMap(action => 
            from(this.searchService.searchContent({
                query: action.keyword, 
                zipcode: action.zipcode, 
                page: action.page,
                type: action.bizType,
                perPage: action.perPage
            }))
            .pipe(
                take(1),
                map((response: FetchResponse) => FecthSearchResultsSuccess({ payload: response })),
                catchError(e => of(e))
            )
        )
    ), { dispatch:true })
}
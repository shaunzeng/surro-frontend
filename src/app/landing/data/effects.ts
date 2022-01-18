import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NavigationService } from '@core';
import { SubmitSearch } from './actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class LandingEffects {

    constructor(
        private actions$: Actions,
        private navService: NavigationService
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
}
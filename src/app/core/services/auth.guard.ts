import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { take, tap } from 'rxjs/operators';
import { RootState } from '../../store';
import { Observable } from 'rxjs';
import * as selectors from '../selectors';

@Injectable({ providedIn: 'root' })
export class isAuthenticated implements CanActivate {

  constructor( private router: Router, private store: Store<RootState>) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store
      .select(selectors.selectIsLoggedIn)
      .pipe(
        take(1),
        tap({
          next: this.handler.bind(this)
        })
      );
  }

  private handler(val:boolean) {
    if (!val) {
      this.router.navigate(['/'])
    }
  }
}

import { createSelector } from '@ngrx/store';
import { RootState, User } from '../store';
 
export const selectFeature = (state: RootState) => state.user;
 
export const selectIsLoggedIn = createSelector(
  selectFeature,
  (state: User) => state.isLoggedIn
);

export const selectName = createSelector(
    selectFeature,
    (state: User) => state.firstName +' ' + state.lastName
)
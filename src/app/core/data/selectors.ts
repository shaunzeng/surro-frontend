import { createSelector } from '@ngrx/store';
import { RootState, User } from './models';
 
export const selectFeature = (state: RootState) => state.user;
 
export const selectIsLoggedIn = createSelector(
  selectFeature,
  (state: User) => state.isLoggedIn
);

export const selectName = createSelector(
    selectFeature,
    (state: User) => state.firstName +' ' + state.lastName
)

export const selectUserId = createSelector(
  selectFeature,
  (state: User) => state.id
)
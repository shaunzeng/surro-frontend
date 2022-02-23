import { createSelector } from '@ngrx/store';
import { RootState, ProfileState } from '@core';
 
export const selectFeature = (state: RootState) => state.profile;
 
export const selectIsBusy = createSelector(
  selectFeature,
  (state: ProfileState) =>  state.reviews.isLoading || state.stats.isLoading
);

export const selectProfileEntity = createSelector(
    selectFeature,
    (state: ProfileState) => state.profile.entity
);

export const selectProfile = createSelector(
    selectProfileEntity,
    (entity: any) => entity?.data
)
import { createSelector } from '@ngrx/store';
import { RootState, LandingState } from '@core';
 
export const selectFeature = (state: RootState) => state.landing;
 
export const selectTrendingBlogs = createSelector(
  selectFeature,
  (state: LandingState) => state.trendingBlogs.entity
);

export const isBusy = createSelector(
    selectFeature,
    (state: LandingState) => state.trendingBlogs.isLoading || state.recentComments.isLoading
)

export const selectRecentComments = createSelector(
    selectFeature,
    (state: LandingState) => state.recentComments.entity
  );
  
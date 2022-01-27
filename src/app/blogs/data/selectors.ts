import { createSelector } from '@ngrx/store';
import { RootState, BlogState } from '@core';
 
export const selectFeature = (state: RootState) => state.blogs;
 
export const blogListSelector = createSelector(
  selectFeature,
  (state: BlogState) => state.blogs.entity
);

export const blogDetailsSelector = createSelector(
  selectFeature,
  (state: BlogState) => state.details.entity
)

export const isBusySelector = createSelector(
  selectFeature,
  (state: BlogState) => !!state.blogs.isLoading || !!state.details.isLoading 
)

export const blogCommentsSelector = createSelector(
  selectFeature,
  (state: BlogState) => state.comments.entity
)
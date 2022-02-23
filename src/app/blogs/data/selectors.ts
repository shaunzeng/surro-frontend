import { createSelector } from '@ngrx/store';
import { RootState, BlogState } from '@core';
import { BlogListResponse } from './models';
 
export const selectFeature = (state: RootState) => state.blogs;

export const blogListEntitySelector = createSelector(
  selectFeature,
  (state: BlogState) => state.blogs.entity
)

export const blogListTotalCountSelector = createSelector(
  blogListEntitySelector,
  (entity: BlogListResponse ) => entity?.totalCount || 0
)

export const blogListSelector = createSelector(
  blogListEntitySelector,
  (entity: BlogListResponse) => entity?.data || []
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
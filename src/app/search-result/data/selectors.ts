import { createSelector } from '@ngrx/store';
import { RootState, SearchState } from '@core';
import { FetchResponse } from './models';
 
export const selectFeature = (state: RootState) => state.search;

export const selectSearchEntity = createSelector(
    selectFeature,
    (state: SearchState) => state.results.entity
)
export const selectSearchResults = createSelector(
    selectSearchEntity,
    (entity: FetchResponse) => entity?.data || []
)

export const selectTotalCount = createSelector(
    selectSearchEntity,
    (entity: FetchResponse) => entity?.totalCount || 0
)

export const isBusySelector = createSelector(
    selectFeature,
    (state: SearchState) => state.results.isLoading
)
import { createSelector } from '@ngrx/store';
import { RootState, SearchState } from '@core';
 
export const selectFeature = (state: RootState) => state.search;

export const selectSearchResults = createSelector(
    selectFeature,
    (state: SearchState) => state.results.entity
)

export const isBusySelector = createSelector(
    selectFeature,
    (state: SearchState) => state.results.isLoading
)
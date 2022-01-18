import { createSelector } from '@ngrx/store';
import { RootState, SearchState } from '@core';
 
export const selectFeature = (state: RootState) => state.search;

export const selectSearchResults = createSelector(
    selectFeature,
    (state: SearchState) => state.data
)

export const isBusySelector = createSelector(
    selectFeature,
    (state: SearchState) => state.isLoading
)
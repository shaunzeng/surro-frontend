import { createSelector } from '@ngrx/store';
import { RootState, SearchState } from '@core';
 
export const selectFeature = (state: RootState) => state.search;

export const selectSearchResults = createSelector(
    selectFeature,
    (state: SearchState) => !!state.data ? state.data.data : null,
)

export const selectBusy = createSelector(
    selectFeature,
    (state: SearchState) => state.isLoading,
)
import { createAction, props } from '@ngrx/store';
import { FetchResponse, FetchRequest } from './models';

export const FETCH_SEARCH_RESULTS = '[Search] Fetch Search Results';
export const FETCH_SEARCH_RESULTS_SUCCESS = '[Search] Fetch Search Results Success';

export const FecthSearchResults = createAction(
  FETCH_SEARCH_RESULTS,
  props<{request: FetchRequest}>()
);

export const FecthSearchResultsSuccess = createAction(
  FETCH_SEARCH_RESULTS_SUCCESS,
  props<{payload: FetchResponse}>()
);

import { Action, createReducer, on } from "@ngrx/store";
import { FecthSearchResultsSuccess, FecthSearchResults } from "./actions";
import { SearchState } from '@core';

export const searchFeatureKey = 'search';

const initialState: SearchState = {
    results: {
        entity: null,
        isLoading: false,
        loadedAt: null
    },
    filter: null
}

const searchReducer = createReducer(
    initialState,
    on(FecthSearchResults, (state, { request }) => ({...state, filter: request, results: {...state.results, isLoading: true}})),
    on(FecthSearchResultsSuccess, (state, { payload } ) => ({...state, results: { entity: payload, isLoading: false, loadedAt: new Date()}}))
)

export const sReducer = (state: SearchState | undefined, action : Action) => searchReducer(state, action);
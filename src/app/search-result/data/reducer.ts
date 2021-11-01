import { Action, createReducer, on } from "@ngrx/store";
import { FecthSearchResultsSuccess, FecthSearchResults } from "./actions";
import { SearchState } from '@core';

export const searchFeatureKey = 'search';

const initialState: SearchState = {
    data:null,
    zipcode: null,
    keyword: null,
    isLoading: false,
}

const searchReducer = createReducer(
    initialState,
    on(FecthSearchResults, (state, { keyword, zipcode }) => ({...state, keyword, zipcode, isLoading: true})),
    on(FecthSearchResultsSuccess, (state, response) => ({...state, data: response, isLoading: false}))
)

export const sReducer = (state: SearchState | undefined, action : Action) => searchReducer(state, action);
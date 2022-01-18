import { Action, createReducer, on } from "@ngrx/store";
import { FecthSearchResultsSuccess, FecthSearchResults } from "./actions";
import { SearchState } from '@core';

export const searchFeatureKey = 'search';

const initialState: SearchState = {
    data:null,
    zipcode: null,
    keyword: null,
    bizType: null,
    isLoading: false,
}

const searchReducer = createReducer(
    initialState,
    on(FecthSearchResults, (state, { keyword, zipcode, bizType }) => ({...state, keyword, zipcode, bizType, isLoading: true})),
    on(FecthSearchResultsSuccess, (state, { payload } ) => ({...state, data: payload, isLoading: false}))
)

export const sReducer = (state: SearchState | undefined, action : Action) => searchReducer(state, action);
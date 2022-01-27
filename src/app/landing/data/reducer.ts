import { Action, createReducer, on } from "@ngrx/store";
import { SetupZipcode, SubmitSearch } from "./actions";
import { LandingState } from '@core';

export const landingFeatureKey = 'landing';

const initialState: LandingState = {
    zipcode: null,
    keyword: null,
    bizType: null,
    blogPosts: null,
}

const landingReducer = createReducer(
    initialState,
    on(SetupZipcode, (state, { zipcode }) => ({...state, zipcode:zipcode})),
    on(SubmitSearch, (state, { keyword, zipcode, bizType }) => ({...state, keyword, zipcode, bizType}))
)

export const lReducer = (state: LandingState | undefined, action : Action) => landingReducer(state, action);
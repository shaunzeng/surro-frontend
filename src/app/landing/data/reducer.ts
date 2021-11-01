import { Action, createReducer, on } from "@ngrx/store";
import { SetupZipcode, SubmitSearch } from "./actions";
import { LandingState } from '@core';

export const landingFeatureKey = 'landing';

const initialState: LandingState = {
    zipcode: null,
    keyword: null
}

const landingReducer = createReducer(
    initialState,
    on(SetupZipcode, (state, { zipcode }) => ({...state, zipcode:zipcode})),
    on(SubmitSearch, (state, { keyword, zipcode }) => ({...state, keyword, zipcode}))
)

export const lReducer = (state: LandingState | undefined, action : Action) => landingReducer(state, action);
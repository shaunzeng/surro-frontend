import { Action, createReducer, on } from "@ngrx/store";
import { SetupZipcode, SubmitSearch } from "./actions";

export const landingFeatureKey = 'landing';

export interface State {
    zipcode: string,
    keyword: string
}

const initialState: State = {
    zipcode: null,
    keyword: null
}

const landingReducer = createReducer(
    initialState,
    on(SetupZipcode, (state, { zipcode }) => ({...state, zipcode:zipcode})),
    on(SubmitSearch, (state, { keyword, zipcode }) => ({...state, keyword, zipcode}))
)

export const lReducer = (state: State | undefined, action : Action) => landingReducer(state, action);
import { Action, ActionReducerMap, createReducer, on } from "@ngrx/store";
import { SetupZipcode } from "./actions";

export const landingFeatureKey = 'landing';

export interface State {
    zipcode:string,
}

const initialState: State = {
    zipcode:null,
}

const landingReducer = createReducer(
    initialState,
    on(SetupZipcode, (state, { zipcode }) => ({...state, zipcode:zipcode}))
)

export const lReducer = (state: State | undefined, action : Action) => landingReducer(state, action);
import { Action, ActionReducerMap, createReducer } from "@ngrx/store";

export const landingFeatureKey = 'landing';

export interface State {
    zipcode:string,
    searchKeyword:string
}

const initialState: State = {
    zipcode:null,
    searchKeyword:null
}

const landingReducer = createReducer(
    initialState,
)

export const lReducer = (state:State | undefined, action : Action) => landingReducer(state, action);
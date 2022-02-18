import { Action, createReducer, on } from "@ngrx/store";
import { ProfileState } from '@core';

export const profileFeatureKey = 'profile';

const initialState: ProfileState = {
    reviews: {
        entity: null,
        isLoading: false,
        loadedAt: null
    },
    profile: {
        entity: null,
        isLoading: false,
        loadedAt: null
    },
    stats:{
        entity: null,
        isLoading: false,
        loadedAt: null
    }
}

const profileReducer = createReducer(
    initialState,
)

export const pReducer = (state: ProfileState | undefined, action : Action) => profileReducer(state, action);
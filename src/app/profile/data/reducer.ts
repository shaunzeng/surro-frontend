import { Action, createReducer, on } from "@ngrx/store";
import { ProfileState } from '@core';
import { fetchProfile, fetchProfileSuccess, submitReviewSuccess } from "./actions";

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
    on(submitReviewSuccess, handleSubmitReviewSuccess),
    on(fetchProfile, handleFetchProfile),
    on(fetchProfileSuccess, handleFetchProfileSuccess)
)

export const pReducer = (state: ProfileState | undefined, action : Action) => profileReducer(state, action);

function handleSubmitReviewSuccess(state: ProfileState, payload) {
    return { ...state }
}

function handleFetchProfile(state: ProfileState, payload) {
    return {
        ...state,
        profile: {
            ...state.profile,
            isLoading: true
        }
    }
}
function handleFetchProfileSuccess(state: ProfileState, payload) {
    return {
        ...state,
        profile: {
            entity: payload,
            isLoading: false,
            loadedAt: new Date()
        }
    }
} 
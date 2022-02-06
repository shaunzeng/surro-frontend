import { Action, createReducer, on } from "@ngrx/store";
import { FetchRcentComments, FetchRcentCommentsSuccess, FetchTrendingBlogs, FetchTrendingBlogsSuccess, SetupZipcode, SubmitSearch } from "./actions";
import { LandingState } from '@core';

export const landingFeatureKey = 'landing';

const initialState: LandingState = {
    zipcode: null,
    keyword: null,
    bizType: null,
    trendingBlogs: {
        entity: null,
        isLoading: false,
        loadedAt: null
    },
    recentComments: {
        entity: null,
        isLoading: false,
        loadedAt: null,
    }
}

const landingReducer = createReducer(
    initialState,
    on(SetupZipcode, (state, { zipcode }) => ({...state, zipcode:zipcode})),
    on(SubmitSearch, (state, { keyword, zipcode, bizType }) => ({...state, keyword, zipcode, bizType})),
    on(FetchTrendingBlogs, (state) => ({...state, trendingBlogs: { ...state.trendingBlogs, isLoading: true}})),
    on(FetchTrendingBlogsSuccess, (state, payload) => ({...state, trendingBlogs: { entity: payload, isLoading: false, loadedAt: new Date()}})),
    on(FetchRcentComments, (state) => ({...state, recentComments: { ...state.trendingBlogs, isLoading: true}})),
    on(FetchRcentCommentsSuccess, (state, { payload }) => ({...state, recentComments: { entity: payload, isLoading: false, loadedAt: new Date()}})),
)

export const lReducer = (state: LandingState | undefined, action : Action) => landingReducer(state, action);
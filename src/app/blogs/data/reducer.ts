import { Action, createReducer, on } from "@ngrx/store";
import { fetchBlogDetails, fetchBlogDetailsSuccess, fetchBlogList, fetchBlogListSuccess, fetchCommentsByPostId, fetchCommentsByPostIdSuccess} from "./actions";
import { BlogState } from '@core';

export const blogFeatureKey = 'blogs';

const initialState: BlogState = {
    blogs: {
        entity: null,
        isLoading: false,
        loadedAt: null
    },
    details: {
        entity: null,
        isLoading: false,
        loadedAt: null
    },
    comments:{
        entity: null,
        isLoading: false,
        loadedAt: null
    }
}

const blogReducer = createReducer(
    initialState,
    on(fetchBlogList, (state) => ({...state, blogs:{ entity: null, isLoading: true, loadedAt: null}})),
    on(fetchBlogListSuccess, (state, payload ) => ({...state, blogs: {entity: payload, isLoading: false, loadedAt: new Date()}})),
    on(fetchBlogDetails, (state) => ({ ...state, details: { entity: null, isLoading: true, loadedAt: null}})),
    on(fetchBlogDetailsSuccess, (state, payload ) => ({...state, details: { entity: payload, isLoading: false, loadedAt: new Date()}})),
    on(fetchCommentsByPostId, (state) => ({...state, comments: {entity: null, isLoading: true, loadedAt: null}})),
    on(fetchCommentsByPostIdSuccess, (state, payload) => ({...state, comments: { entity: payload, isLoading: false, loadedAt: new Date()}}))
)

export const bReducer = (state: BlogState | undefined, action : Action) => blogReducer(state, action);
import { Action, createReducer, on } from "@ngrx/store";
import { 
    deleteCommentByIdSuccess, 
    fetchBlogDetails, 
    fetchBlogDetailsSuccess, 
    fetchBlogList, 
    fetchBlogListSuccess, 
    fetchCommentsByPostId, 
    fetchCommentsByPostIdSuccess, 
    likeComment, 
    postCommentSuccess, 
    unlikeComment 
} from "./actions";
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
    on(fetchCommentsByPostId, (state) => ({...state, comments: { ...state.comments, isLoading: true, loadedAt: null}})),
    on(fetchCommentsByPostIdSuccess, (state, payload) => ({...state, comments: { entity: payload, isLoading: false, loadedAt: new Date()}})),
    on(postCommentSuccess, handlePostCommentSuccess),
    on(deleteCommentByIdSuccess, handleDeleteCommentSuccess),
    on(likeComment, handleLikeComment),
    on(unlikeComment, handleUnlikeComment)
)

export const bReducer = (state: BlogState | undefined, action : Action) => blogReducer(state, action);

function handlePostCommentSuccess(state: BlogState, payload) {
    return {
        ...state,
        comments: {
            ...state.comments,
            entity:{
                ...state.comments.entity,
                data: [payload, ...(state.comments.entity.data || [])],
            },
            loadedAt: new Date()
        }
    }
}

function handleDeleteCommentSuccess(state: BlogState, payload) { 
    return {
        ...state,
        comments: {
            ...state.comments,
            entity: {
                ...state.comments.entity,
                data: state.comments.entity.data.filter(c => c.id !== payload.id)
            },
            loadedAt: new Date()
        }
    }
}

function handleLikeComment(state: BlogState, payload) {
    return {
        ...state,
        comments: {
            ...state.comments,
            entity: {
                ...state.comments.entity,
                data: state.comments.entity.data.map((comment) => {
                    if (comment.id === payload.id) {
                        const newComment = { ...comment };
                        newComment.likes++;
                        newComment.likedByYou = true;
                        return newComment;
                    }

                    return comment;
                })
            }
        }
    };
}

function handleUnlikeComment(state, payload) {
    return {
        ...state,
        comments: {
            ...state.comments,
            entity: {
                ...state.comments.entity,
                data: state.comments.entity.data.map((c) => {
                    if (c.id === payload.id) {
                        const newComment = { ...c };
                        newComment.likes--;
                        newComment.likedByYou = false;
                        return newComment;
                    }

                    return c;
                })
            }
        }
    };
}
import { createAction, props } from '@ngrx/store';

export const SUBMIT_REVIEW = '[Profile] Submit Review';
export const SUBMIT_REVIEW_SUCCESS = '[Profile] Submit Review Success';
export const FETCH_PROFILE = '[Profile] Fetch Profile';
export const FETCH_PROFILE_SUCCESS = '[Profile] Fetch Profile Success';

export const submitReview = createAction(
    SUBMIT_REVIEW,
    props<{rating: number, review: string}> ()
);

export const submitReviewSuccess = createAction(
    SUBMIT_REVIEW_SUCCESS,
    props<any> ()
);

export const fetchProfile = createAction(
    FETCH_PROFILE,
    props<{id: string}>()
)

export const fetchProfileSuccess = createAction(
    FETCH_PROFILE_SUCCESS,
    props<any>()
)
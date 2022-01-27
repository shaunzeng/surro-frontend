import { createAction, props } from '@ngrx/store';
import { BlogListResponse } from './models';

export const GET_BLOG_LIST = '[Blog] Get Blog List';
export const GET_BLOG_LIST_SUCCESS = '[Blog] Got Blog List';
export const GET_BLOG_DETAILS = '[Blog] Get Blog Details';
export const GET_BLOG_DETAILS_SUCCESS = '[Blog] Got Blog';
export const GET_COMMENTS = '[Blog] Get Comments';
export const GET_COMMENTS_SUCCESS = '[Blog] Got Comments';

export const fetchBlogList = createAction(
  GET_BLOG_LIST,
);

export const fetchBlogListSuccess = createAction(
  GET_BLOG_LIST_SUCCESS,
  props<BlogListResponse>()
);

export const fetchBlogDetails = createAction(
  GET_BLOG_DETAILS,
  props<{id: string}>()
)

export const fetchBlogDetailsSuccess = createAction(
  GET_BLOG_DETAILS_SUCCESS,
  props<any>()
);

export const fetchCommentsByPostId = createAction(
  GET_COMMENTS,
  props<{id: string}>()
)

export const fetchCommentsByPostIdSuccess = createAction(
  GET_COMMENTS_SUCCESS,
  props<any>()
)

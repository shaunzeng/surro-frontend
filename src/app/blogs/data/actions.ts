import { createAction, props } from '@ngrx/store';
import { BlogListRequest, BlogListResponse } from './models';

export const GET_BLOG_LIST = '[Blog] Get Blog List';
export const GET_BLOG_LIST_SUCCESS = '[Blog] Got Blog List';
export const GET_BLOG_DETAILS = '[Blog] Get Blog Details';
export const GET_BLOG_DETAILS_SUCCESS = '[Blog] Got Blog';
export const GET_COMMENTS = '[Blog] Get Comments';
export const GET_COMMENTS_SUCCESS = '[Blog] Got Comments';
export const POST_COMMENT = '[Blog] Post Comment';
export const POST_COMMENT_SUCCESS = '[Blog] Post Comment Success';
export const DELETE_COMMENT_BY_ID = '[Blog] Delete Comment';
export const DELETE_COMMENT_BY_ID_SUCCESS = '[Blog] Delete Comment Success';
export const LIKE_COMMENT = '[Blog] Like a Comment';
export const LIKE_COMMENT_SUCCESS = '[Blog] Liked a comment';
export const UNLIKE_COMMENT = '[Blog] Unlike a Comment';
export const UNLIKE_COMMENT_SUCCESS = '[Blog] Unliked a comment';

export const fetchBlogList = createAction(
  GET_BLOG_LIST,
  props<BlogListRequest> ()
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
  props<{id: string, page?: number, perPage?: number }>()
)

export const fetchCommentsByPostIdSuccess = createAction(
  GET_COMMENTS_SUCCESS,
  props<any>()
)

export const postComment = createAction(
  POST_COMMENT,
  props<{comment: string, postId: string, parentId?: string}>()
)

export const postCommentSuccess = createAction(
  POST_COMMENT_SUCCESS,
  props<any>()
)

export const deleteCommentById = createAction(
  DELETE_COMMENT_BY_ID,
  props<{id: string}> ()
)

export const deleteCommentByIdSuccess = createAction(
  DELETE_COMMENT_BY_ID_SUCCESS,
  props<{id: string}> ()
)

export const likeComment = createAction(
  LIKE_COMMENT,
  props<{id: string}> ()
)

export const likeCommentSuccess = createAction(
  LIKE_COMMENT_SUCCESS,
  props<{id: string}> ()
)

export const unlikeComment = createAction(
  UNLIKE_COMMENT,
  props<{id: string}> ()
)

export const unlikeCommentSuccess = createAction(
  UNLIKE_COMMENT_SUCCESS,
  props<{id: string}> ()
)

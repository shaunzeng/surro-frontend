import { createAction, props } from '@ngrx/store';

export const SETUP_ZIPCODE = '[Landing] Setup Zipcode';
export const SUBMIT_SEARCH = '[Landing] Submit Search';
export const FETCH_TRENDING_BLOGS = '[Landing] Fetch Trending Blogs';
export const FETCH_RECENT_COMMENTS= '[Landing] Fetch Recent Comments';
export const FETCH_TRENDING_BLOGS_SUCCESS = '[Landing] Got trending blogs';
export const FETCH_RECENT_COMMENTS_SUCCESS = '[Landing] Got Recent Comments';


export const SetupZipcode = createAction(
  SETUP_ZIPCODE,
  props<{ zipcode: string }>()
);

export const SubmitSearch = createAction(
  SUBMIT_SEARCH,
  props<{ keyword?: string, zipcode: string, bizType?: string}>()
);

export const FetchTrendingBlogs = createAction(
  FETCH_TRENDING_BLOGS,
)

export const FetchTrendingBlogsSuccess = createAction(
  FETCH_TRENDING_BLOGS_SUCCESS,
  props<any>()
)

export const FetchRcentComments = createAction(
  FETCH_RECENT_COMMENTS,
)

export const FetchRcentCommentsSuccess = createAction(
  FETCH_RECENT_COMMENTS_SUCCESS,
  props<{payload: any}>()
)
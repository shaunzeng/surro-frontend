import { createAction, props } from '@ngrx/store';

export const SETUP_ZIPCODE = '[Landing] Setup Zipcode';
export const SUBMIT_SEARCH = '[Landing] Submit Search';
export const FETCH_BLOGS_PREVIEW = '[Landing] Fetch Blogs';

export const SetupZipcode = createAction(
  SETUP_ZIPCODE,
  props<{ zipcode: string }>()
);

export const SubmitSearch = createAction(
  SUBMIT_SEARCH,
  props<{ keyword?: string, zipcode: string, bizType?: string}>()
);

export const FetchBlogsPreview = createAction(
  FETCH_BLOGS_PREVIEW,
)
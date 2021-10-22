import { createAction, props } from '@ngrx/store';

export const SetupZipcode = createAction(
  '[Landing] Setup Zipcode',
  props<{ zipcode: string }>()
);
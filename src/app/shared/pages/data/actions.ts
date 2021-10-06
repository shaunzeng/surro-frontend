import { createAction, props } from '@ngrx/store';
import { User } from './models';

export const USER_SETUP = '[User] Setup';
export const USER_LOGOUT = '[User] Logout';

export const setupUser = createAction(
    USER_SETUP,
    props<User>()
);

export const logout = createAction(
    USER_LOGOUT
);
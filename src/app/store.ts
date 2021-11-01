import { ActionReducerMap, MetaReducer, Action, createReducer, on} from '@ngrx/store';
import { createAction, props } from '@ngrx/store';
import { User, RootState } from '@core';

const initialState : User = {
    email:null,
    firstName:null,
    lastName:null,
    id:null,
    bookmarks:null,
    img:null,
    userType:null,
    accountType:null,
    isLoggedIn:false,
    zipcode:null
}

export const USER_SETUP = '[User] Setup';
export const USER_LOGOUT = '[User] Logout';

export const setupUser = createAction(
    USER_SETUP,
    props<User>()
);

export const logout = createAction(
    USER_LOGOUT
);

const cReduer = createReducer(
    initialState,
    on(setupUser, (state, payload) => ({
        ...payload,
        isLoggedIn:true
    })),
    on(logout, (state) => ({
        ...initialState
    }))
)

const userReducer = (state: User | undefined, action : Action) => cReduer(state, action);

export const reducers : ActionReducerMap<RootState> = {
    user: userReducer,
    landing:null,
    search:null
}

export const metaReducers: MetaReducer<RootState>[] = []
import { ActionReducerMap, MetaReducer, Action, createReducer, on} from '@ngrx/store';
import { createAction, props } from '@ngrx/store';

export interface User {
    email:string,
    firstName:string,
    lastName:string,
    id:string,
    bookmarks:string[],
    img:string[],
    isLoggedIn:boolean,
    userType:string,
    accountType:string
}

export interface RootState {
    user: User
}


const initialState : User = {
    email:null,
    firstName:null,
    lastName:null,
    id:null,
    bookmarks:null,
    img:null,
    userType:null,
    accountType:null,
    isLoggedIn:false
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

const userReducer = (state:User | undefined, action : Action) => cReduer(state, action);

export const reducers : ActionReducerMap<RootState> = {
    user: userReducer
}

export const metaReducers: MetaReducer<RootState>[] = []
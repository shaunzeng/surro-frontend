import { ActionReducerMap, MetaReducer, Action, createReducer, on} from '@ngrx/store';
import * as actions from './actions';

export interface User {
    email:string,
    firstName:string,
    lastName:string,
    id:string,
    bookmarks:string[],
    img:string[],
    isLoggedIn:boolean
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
    isLoggedIn:false
}

const cReduer = createReducer(
    initialState,
    on(actions.setupUser, (state, payload) => ({
        ...payload,
        isLoggedIn:true
    })),
    on(actions.logout, (state) => ({
        ...initialState
    }))
)

const userReducer = (state:User | undefined, action : Action) => cReduer(state, action);


export const reducers : ActionReducerMap<RootState> = {
    user: userReducer
}

export const metaReducers: MetaReducer<RootState>[] = []
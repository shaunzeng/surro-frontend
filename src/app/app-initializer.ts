import { LangService } from "./core/services/lang.service";
import { Store } from "@ngrx/store";
import { actions } from "@shared";
import { AuthService } from "./core/services/auth.service";

export const appInitializer = (
    langService: LangService, 
    authService: AuthService,
    store: Store) => async () => {

    langService.init();

    return authService
            .getUser()
            .then(nextHandler(store))
            .catch(errorHandler)
}   

const nextHandler = (store) => (data) => {
    if (data['visitor']) {
        console.log('Visitor');
    } else {
        console.log('Welcome back ', data.firstName);
        store.dispatch(actions.setupUser(data));
    }     
}

const errorHandler = (err) => {
    throw 'Error : ' + err.error;
}
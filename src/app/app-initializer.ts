import { HttpClient } from "@angular/common/http";
import { catchError, take, tap } from "rxjs/operators";
import { LangService } from "./core/services/lang.service";
import { environment as env} from "@env";
import { Store } from "@ngrx/store";
import { setupUser } from "./actions";
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
        console.log('logged in user');
        store.dispatch(setupUser(data));
    }     
}

const errorHandler = (err) => {
    throw 'Error : ' + err.error;
}
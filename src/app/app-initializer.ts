import { HttpClient } from "@angular/common/http";
import { catchError, take, tap } from "rxjs/operators";
import { LangService } from "./core/services/lang.service";
import { environment as env} from "@env";
import { Store } from "@ngrx/store";
import { setupUser } from "./actions";

export const appInitializer = (langService: LangService, http: HttpClient, store : Store) => async () => {
    langService.init();
    return http
            .get(`${env.apiUrl}/user`)
            .pipe(
                take(1),
                tap({next:nextHandler(store)}),
                catchError(errorHandler)
            )
            .toPromise();
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
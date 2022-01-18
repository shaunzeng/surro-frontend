import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';

@Injectable()
export class GlobalErrorHandler extends ErrorHandler {

    constructor(private zone: NgZone) {
        super();
    }

    handleError(error: any) {
        super.handleError(error);
        // Check if it's an error from an HTTP response
        if (!(error instanceof HttpErrorResponse)) {
            error = error.rejection; // get the error object
        }
        
        this.zone.run(() =>{
            const appErrEle = document.querySelector('.app-error');

            if (appErrEle) {
                appErrEle.classList.remove('hidden');
            }
        });

        console.error('Error from global error handler', error);
    }
}
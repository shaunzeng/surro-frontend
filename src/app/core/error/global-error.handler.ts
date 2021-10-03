import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Inject, Injectable, Injector, NgZone } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    constructor(private zone: NgZone, private injector:Injector) {}

    handleError(error: any) {
        // Check if it's an error from an HTTP response
        if (!(error instanceof HttpErrorResponse)) {
            error = error.rejection; // get the error object
        }
        /*
        this.zone.run(() =>
            console.warn('Something went wrong')
        );
*/
        console.error('Error from global error handler', error);
    }
}
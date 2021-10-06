import {
    HttpHandler,
    HttpRequest,
    HttpEvent,
    HttpInterceptor,
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
  
  @Injectable()
  export class HttpLoadingInterceptor implements HttpInterceptor {
    constructor() {}
  
    intercept(
      request: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      return next.handle(request) as Observable<HttpEvent<any>>;
    }
  }
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUrlService } from './api-url.service';


export abstract class ApiService extends ApiUrlService{

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        withCredentials: true, 
      }; 
    
    constructor(public http: HttpClient) { super() }

    executeGetWithParams<T>(path: string, params: {[key:string]:any} = {}) : Observable<T>{
        return this.executeGet(this.applyParams(path, params));
    }

    executeGet<TResponse>(url: string): Observable<TResponse> {
        return this.http.get<TResponse>(url, this.httpOptions);
    }

    executePostWithParams<TRequest, TResponse>(path: string, payload: TRequest, params: {[key:string]: any} = {}): Observable<TResponse> {
        return this.executePost(this.applyParams(path, params), payload);
    }

    executePost<TRequest, TResponse>(url: string, payload: TRequest): Observable<TResponse> {
        return this.http.post<TResponse>(url, payload, this.httpOptions);
    }


}
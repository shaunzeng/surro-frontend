import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment as env } from '@env';
import { take, tap } from 'rxjs/operators';
import { PreviewRequest, ContentRequest, ApiModels } from './api.models';

@Injectable({ providedIn: 'root' })
export class SearchService extends ApiService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true, 
  }; 

  constructor(private http: HttpClient) {
    super();
  }

  searchZip(input: string) {
    return this.http
    .get(`${env.apiUrl}/search/zipcode/${input}`, this.httpOptions)
    .pipe(take(1))
    .toPromise();
  }

  searchContent(request: ContentRequest) {
    return this.http
    .get(`${env.apiUrl}/search/content`, {
      ...this.httpOptions,
      params: this.getParams(request)
    })
    .pipe(take(1))
    .toPromise();
  }

  searchPreview(request: PreviewRequest) {
    return this.http
    .get(`${env.apiUrl}/search/preview`, {
      ...this.httpOptions,
      params: this.getParams(request)
    })
    .pipe(take(1))
    .toPromise();
  }

  private getParams(request: ApiModels ): HttpParams {

    let httpParams = new HttpParams();

    Object.keys(request).forEach( k => {
      if (!!request[k]) {
        httpParams = httpParams.set(k, request[k]);
      }
    });

    return httpParams;
  }

}

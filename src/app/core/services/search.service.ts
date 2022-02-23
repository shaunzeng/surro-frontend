import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment as env } from '@env';
import { take } from 'rxjs/operators';
import { PreviewRequest, ContentRequest, ApiModels } from './api.models';

@Injectable({ providedIn: 'root' })
export class SearchService extends ApiService {

  constructor(public http: HttpClient) {
    super(http);
  }

  searchZip(input: string) {
    return this.http
    .get(`${env.apiUrl}/search/zipcode/${input}`, this.httpOptions)
    .pipe(take(1))
    .toPromise();
  }

  searchContent(request: ContentRequest) {
    return this.http
    .post(`${env.apiUrl}/search/content`, 
    this.sanitizeRequest(request),
    { ...this.httpOptions })
    .pipe(take(1))
  }

  searchPreview(request: PreviewRequest) {
    return this.http
    .get(`${env.apiUrl}/search/preview`, {
      ...this.httpOptions,
      params: this.getHttpParams(request)
    })
    .pipe(take(1))
    .toPromise();
  }
}

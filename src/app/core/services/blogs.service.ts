import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment as env } from '@env';
import { take } from 'rxjs/operators';
import { BlogListRequest, BlogListResponse } from './api.models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BlogsService extends ApiService {

  constructor(public http: HttpClient) {
    super(http);
  }

  getBlogsPreview(request?: BlogListRequest) {
    return this.http
    .get(`${env.apiUrl}/blog/list`, {
      ...this.httpOptions,
      params: request ? this.getHttpParams(request) : null
    })
    .pipe(take(1));
  }

  getBlogDetails(id: string) {
    return this.http
    .get(`${env.apiUrl}/blog/${id}`, {
      ...this.httpOptions,
    })
    .pipe(take(1));
  }

  getComments(postId: string) {
    return this.http
    .get(`${env.apiUrl}/comment/${postId}`, {
      ...this.httpOptions,
    })
    .pipe(take(1));
  }
}
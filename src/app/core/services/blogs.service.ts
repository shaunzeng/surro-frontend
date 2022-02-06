import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment as env } from '@env';
import { take } from 'rxjs/operators';
import { 
  BlogListRequest, 
  GetCommentsRequest, 
  GetCommentsResponse, 
  PostCommentRequest, 
  Comment,
  LikeCommentRequest, 
  BlogListResponse
} from './api.models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BlogsService extends ApiService {

  constructor(public http: HttpClient) {
    super(http);
  }

  getBlogsPreview(request?: BlogListRequest): Observable<BlogListResponse> {
    return this.http
    .get<BlogListResponse>(`${env.apiUrl}/blog/list`, {
      ...this.httpOptions,
      params: request && Object.keys(request).length > 0 ? this.getHttpParams(request) : null
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

  getLatestComments(): Observable<any> {
    return this.http
    .get<any>(`${env.apiUrl}/comment/getLatestComments`, {
      ...this.httpOptions
    })
    .pipe(take(1))
  }

  getComments(request: GetCommentsRequest): Observable<GetCommentsResponse> {
    return this.http
    .get<GetCommentsResponse>(`${env.apiUrl}/comment/getComments`, {
      ...this.httpOptions,
      params: request && Object.keys(request).length > 0 ? this.getHttpParams(request) : null
    })
    .pipe(take(1));
  }

  postComment(request: PostCommentRequest): Observable<Comment> {
    return this.http
    .post<Comment>(`${env.apiUrl}/comment/addComment`,
    request,
    { ...this.httpOptions })
    .pipe(take(1))
  }

  deletCommentById(request: { id: string }) {
    return this.http
    .post(`${env.apiUrl}/comment/deleteComment`,
    request,
    { ...this.httpOptions })
    .pipe(take(1))
  }

  likeComment(request: LikeCommentRequest) {
    return this.http
    .post(`${env.apiUrl}/comment/likeComment`,
    request,
    { ...this.httpOptions })
    .pipe(take(1))
  }

  unlikeComment(request: LikeCommentRequest) {
    return this.http
    .post(`${env.apiUrl}/comment/unlikeComment`,
    request,
    { ...this.httpOptions })
    .pipe(take(1))
  }
}
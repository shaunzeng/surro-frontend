import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment as env } from '@env';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProfileService extends ApiService {

  constructor(public http: HttpClient) {
    super(http);
  }

  submitReview(request: {rating: number, review: string}): Observable<any> {
    return this.http
    .post(`${env.apiUrl}/profile/postReview`, 
    this.sanitizeRequest(request),
    { ...this.httpOptions })
    .pipe(take(1))
  }

  fetchProfile(request: {id: string}): Observable<any> {
    return this.http
    .get(`${env.apiUrl}/profile/getProfile/${request.id}`, this.httpOptions)
    .pipe(take(1))
  }

}
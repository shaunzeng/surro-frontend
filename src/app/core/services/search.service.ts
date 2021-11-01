import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment as env } from '@env';
import { take } from 'rxjs/operators';



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
    .get(`${env.apiUrl}/search/zip/${input}`, this.httpOptions)
    .pipe(take(1))
    .toPromise();
  }

  searchContent(keyword: string, zipcode: string) {
    return this.http
    .post(`${env.apiUrl}/search/content`, { keyword: keyword, zipcode: zipcode}, this.httpOptions )
    .pipe(take(1))
    .toPromise();
  }

}

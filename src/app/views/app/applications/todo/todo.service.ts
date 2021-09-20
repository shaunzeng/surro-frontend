import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IServiceResponse } from 'src/app/data/service-response';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ITodo {
  id: number;
  title: string;
  detail: string;
  category: string;
  status: string;
  label: string;
  labelColor: string;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }


  getTodoItems(): Observable<ITodo[]> {
    const url = `${environment.apiUrl}/todos`;
    return this.http.get(url)
      .pipe(
        map((res: IServiceResponse<ITodo>) => {
          // console.log("response[todo.service][getTodoItems]", res);
          return res.data;
        })
      );
  }

}

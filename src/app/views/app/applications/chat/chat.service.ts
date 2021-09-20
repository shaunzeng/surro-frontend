import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IServiceResponse } from 'src/app/data/service-response';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface IChatContact {
  id: number;
  title: string;
  img: string;
  date: string;
}

export interface IChatConversation {
  id: number;
  users: number[];
  lastMessageTime: string;
  date: string;
  messages: IChatMessage[];
}

export interface IChatMessage {
  sender: number;
  time: string;
  text: string;
}

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private http: HttpClient) {}

  searchContacts(
    userId: number,
    searchKey: string
  ): Observable<IChatContact[]> {
    const url = `${environment.apiUrl}/contacts?search=${searchKey}`;
    return this.http.get(url).pipe(
      map((res: IServiceResponse<IChatContact>) => {
        // console.log("response[chat.service][searchContacts]", res);
        return res.data.map((c) => {
          return {
            ...c,
            img: c.img.replace('profile-pic-', 'profiles/'),
          };
        });
      })
    );
  }

  getContacts(): Observable<IChatContact[]> {
    const url = `${environment.apiUrl}/contacts`;
    return this.http.get(url).pipe(
      map((res: IServiceResponse<IChatContact>) => {
        // console.log("response[chat.service][getContacts]", res);
        return res.data.map((c) => {
          return {
            ...c,
            img: c.img.replace('profile-pic-', 'profiles/'),
          };
        });
      })
    );
  }
  getConversations(userId: number): Observable<IChatConversation[]> {
    const url = `${environment.apiUrl}/conversations`;
    return this.http.get(url).pipe(
      map((res: IServiceResponse<IChatConversation>) => {
        // console.log("response[chat.service][getConversations]", res);
        return res.data;
      })
    );
  }
}

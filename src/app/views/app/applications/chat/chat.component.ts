import { Component, OnInit, OnDestroy, ViewChild,  ChangeDetectorRef, Renderer2 } from '@angular/core';
import { ChatService, IChatContact, IChatConversation } from './chat.service';
import { PerfectScrollbarComponent } from 'ngx-perfect-scrollbar';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit, OnDestroy {

  @ViewChild('scroll') scrollRef: PerfectScrollbarComponent;

  contacts: IChatContact[];
  conversations: IChatConversation[];
  currentUserId = 1;

  selectedConversation: IChatConversation;

  contacts$: Observable<IChatContact[]>;

  searchTerms = new Subject<string>();
  searchKeyword = '';
  message = '';

  constructor(private chatService: ChatService, private changeDetectorRef: ChangeDetectorRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'no-footer');
    this.getContacts();

    this.contacts$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.chatService.searchContacts(this.currentUserId, term)),
    );
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'no-footer');
  }


  search(term: string): void {
    this.searchKeyword = term;
    this.searchTerms.next(term);
  }


  getContacts(): void {
    this.chatService.getContacts()
      .subscribe(contacts => {
        this.contacts = contacts;
        this.getConversations();
      });
  }

  getConversations(): void {
    this.chatService.getConversations(this.currentUserId)
      .subscribe(conversations => {
        this.conversations = conversations;
        this.selectedConversation = this.conversations[0];
        this.changeDetectorRef.detectChanges();
        if (this.scrollRef) {
          this.scrollRef.directiveRef.scrollToBottom();
        }
      });
  }
  selectConversation(conversationId: number): void {
    this.selectedConversation = this.conversations.find(x => x.id === conversationId);
    if (this.scrollRef) {
      setTimeout(() => { this.scrollRef.directiveRef.scrollToBottom(); }, 100);
    }
  }


  getOtherUser(users: number[]): IChatContact {
    const otherId = users.find(x => x !== this.currentUserId);
    return this.contacts.find(x => x.id === otherId);
  }
  getUser(id: number): IChatContact {
    if (id === this.currentUserId) {
      return {
        id,
        title: 'Sarah Kortney',
        img: '/assets/img/profiles/l-1.jpg',
        date: '5 minutes ago'
      };
    }
    return this.contacts.find(x => x.id === id);
  }

  sendMessage(): void {
    if (this.message.length > 0) {
      const time = this.getCurrentTime();
      this.selectedConversation.messages.push({ sender: this.currentUserId, text: this.message, time });
      this.selectedConversation.lastMessageTime = time;
      if (this.scrollRef) {
        setTimeout(() => { this.scrollRef.directiveRef.scrollToBottom(); }, 100);
      }
      this.message = '';
    }
  }

  messageInputKeyUp(event: KeyboardEvent): void {
    if (event.key === 'Enter') { this.sendMessage(); }
  }

  getCurrentTime(): string {
    const now = new Date();
    return this.pad(now.getHours(), 2) + ':' + this.pad(now.getMinutes(), 2);
  }

  // tslint:disable-next-line:variable-name
  pad(number, length): string {
    let str = '' + number;
    while (str.length < length) {
      str = '0' + str;
    }
    return str;
  }
}

import {
    Component,
    Input,
    ViewChild,
    EventEmitter,
    Output
  } from '@angular/core';
  import { NgForm } from '@angular/forms';

  interface PageClickEvent {
      page: number,
      itemsPerPage: number,
  }

  @Component({
    selector: 'app-blog-comments',
    templateUrl: './comments.component.html',
    styleUrls:['./comments.component.scss']
  })
  export class CommentsComponent {

    @Input() data: any;
    @Input() currentUserId: string;

    @Output() onRemoveComment: EventEmitter<string> = new EventEmitter();
    @Output() onLikeComment: EventEmitter<string> = new EventEmitter();
    @Output() onUnlikeComment: EventEmitter<string> = new EventEmitter();

    constructor( ) {}

    onDeleteComment(id: string){
      this.onRemoveComment.emit(id);
    }

    onLike(id: string){
      this.onLikeComment.emit(id);
    }

    onUnlike(id: string){
      this.onUnlikeComment.emit(id);
    }
  }
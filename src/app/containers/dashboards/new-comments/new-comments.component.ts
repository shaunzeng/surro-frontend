import { Component,  Input } from '@angular/core';
import comments, { IComment } from 'src/app/data/comments';

@Component({
  selector: 'app-new-comments',
  templateUrl: './new-comments.component.html'
})
export class NewCommentsComponent  {

  @Input() displayRate = false;
  @Input() class = '';

  data: IComment[] = comments;
  constructor() { }



}

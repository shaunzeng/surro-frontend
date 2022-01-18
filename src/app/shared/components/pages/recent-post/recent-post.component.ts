import { Component,  Input } from '@angular/core';

@Component({
  selector: 'app-recent-post',
  templateUrl: './recent-post.component.html'
})
export class RecentPostComponent  {
  @Input() data;

  constructor() { }

}

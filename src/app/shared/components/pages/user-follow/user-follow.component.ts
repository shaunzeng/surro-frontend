import { Component,  Input } from '@angular/core';

@Component({
  selector: 'app-user-follow',
  templateUrl: './user-follow.component.html'
})
export class UserFollowComponent {
  @Input() data;
  constructor() { }


}

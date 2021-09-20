import { Component} from '@angular/core';
import follow, { IFollow } from '../../../data/follow';

@Component({
  selector: 'app-profile-who-to-follow',
  templateUrl: './profile-who-to-follow.component.html'
})
export class ProfileWhoToFollowComponent  {
  data: IFollow[] = follow.slice(0, 5);
  constructor() { }



}

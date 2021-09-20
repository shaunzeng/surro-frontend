import { Component } from '@angular/core';
import recentPost, { IRecentPost } from '../../../data/recent-posts';

@Component({
  selector: 'app-profile-recent-posts',
  templateUrl: './profile-recent-posts.component.html'
})
export class ProfileRecentPostsComponent {
  data: IRecentPost[] = recentPost.slice(0, 5);

  constructor() { }



}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFollowComponent } from './user-follow/user-follow.component';
import { RecentPostComponent } from './recent-post/recent-post.component';
import { PostComponent } from './post/post.component';
import { ComponentsPlayerModule } from './../player/components.player.module';

@NgModule({
  declarations: [
  UserFollowComponent,
  RecentPostComponent,
  PostComponent
],
  imports: [
    CommonModule,
    ComponentsPlayerModule
  ],
  providers: [],
  exports: [
    UserFollowComponent,
    RecentPostComponent,
    PostComponent
  ]
})

export class ComponentsPagesModule { }

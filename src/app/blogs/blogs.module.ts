import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BlogsRoutingModule } from './blogs.routing';
import { TranslateModule } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BlogsContainer } from './containers/blog-list/blogs.container';
import { ListComponent } from './components/list/list.component';
import { BlogDetailsContainer } from './containers/blog-details/blog-details.container';
import { ArticleComponent } from './components/article/article.component';
import { CommentsComponent } from './components/comments/comments.component';
import { blogFeatureKey, bReducer } from './data/reducer';
import { BlogEffects } from './data/effects';

@NgModule({
  declarations: [BlogsContainer, ListComponent, BlogDetailsContainer, ArticleComponent, CommentsComponent],
  imports: [
    StoreModule.forFeature(blogFeatureKey, bReducer),
    EffectsModule.forFeature([BlogEffects]),
    TranslateModule.forChild(),
    SharedModule,
    BlogsRoutingModule,
  ],
  providers: [],
})
export class BlogsModule {}
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LandingRoutingModule } from './landing.routing';
import { LandingContainer } from './landing.container';
import { landingFeatureKey , lReducer } from './data/reducer';
import { TranslateModule } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';
import { BlogsContainer } from './components/blogs/blogs.container';
import { CommentsContainer } from './components/comments/comments.container';
import { EffectsModule } from '@ngrx/effects';
import { LandingEffects } from './data/effects';

@NgModule({
  declarations: [LandingContainer, BlogsContainer, CommentsContainer],
  imports: [
    StoreModule.forFeature(landingFeatureKey,lReducer),
    EffectsModule.forFeature([LandingEffects]),
    TranslateModule.forChild(),
    SharedModule,
    LandingRoutingModule,
  ],
  providers: [],
})
export class LandingModule {}
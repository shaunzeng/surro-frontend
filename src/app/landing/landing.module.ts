import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LandingRoutingModule } from './landing.routing';
import { LandingContainer } from './landing.container';
import { landingFeatureKey , lReducer } from './data/reducer';
import { TranslateModule } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';
import { BlogsContainer } from './components/blogs/blogs.container';

@NgModule({
  declarations: [LandingContainer, BlogsContainer],
  imports: [
    StoreModule.forFeature(landingFeatureKey,lReducer ),
    TranslateModule.forChild(),
    SharedModule,
    LandingRoutingModule,
  ],
  providers: [],
})
export class LandingModule {}
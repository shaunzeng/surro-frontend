import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProfileRoutingModule } from './profile.routing';
import { TranslateModule } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProfileContainer } from './containers/profile/profile.container';
import { ProfileClinicContainer } from './containers/clinic/clinic.container';
import { ProfileAgencyContainer } from './containers/agency/agency.container';
import { AddReviewComponent } from './components/add-review-prompt/add-review.component';
import { ReviewComponent } from './components/review/review.component';
import { PhotoComponent } from './components/photo/photo.component';
import { profileFeatureKey, pReducer } from './data/reducer';
import { Profileffects } from './data/effects';

@NgModule({
  declarations: [
    ProfileContainer,
    ProfileClinicContainer,
    ProfileAgencyContainer,
    AddReviewComponent,
    ReviewComponent,
    PhotoComponent
  ],
  imports: [
    StoreModule.forFeature(profileFeatureKey, pReducer),
    EffectsModule.forFeature([Profileffects]),
    TranslateModule.forChild(),
    SharedModule,
    ProfileRoutingModule
  ],
  providers: [],
})
export class ProfileModule {}
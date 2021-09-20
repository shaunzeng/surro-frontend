import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile.routing';
import { ProfileComponent } from './profile.component';
import { ProfileSocialComponent } from './profile-social/profile-social.component';
import { ProfilePortfolioComponent } from './profile-portfolio/profile-portfolio.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TranslateModule } from '@ngx-translate/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PagesContainersModule } from '../../../../containers/pages/pages.containers.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';

@NgModule({
  declarations: [ProfileComponent, ProfileSocialComponent, ProfilePortfolioComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    TranslateModule,
    TabsModule.forRoot(),
    LayoutContainersModule,
    BsDropdownModule.forRoot(),
    PagesContainersModule
  ]
})
export class ProfileModule { }

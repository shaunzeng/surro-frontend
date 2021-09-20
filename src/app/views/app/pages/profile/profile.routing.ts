import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileSocialComponent } from './profile-social/profile-social.component';
import { ProfileComponent } from './profile.component';
import { ProfilePortfolioComponent } from './profile-portfolio/profile-portfolio.component';

const routes: Routes = [
  {
    path: '', component: ProfileComponent,
    children: [
      { path: '', redirectTo: 'social', pathMatch: 'full' },
      { path: 'social', component: ProfileSocialComponent },
      { path: 'portfolio', component: ProfilePortfolioComponent  },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }

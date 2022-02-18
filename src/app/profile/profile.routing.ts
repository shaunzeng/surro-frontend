import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileContainer } from './containers/profile/profile.container';
import { ProfileClinicContainer } from './containers/clinic/clinic.container';
import { ProfileAgencyContainer } from './containers/agency/agency.container';

const routes: Routes = [
    { 
      path: '',
      component: ProfileContainer,
      children:[
          {
              path: 'CLINIC/:id',
              component: ProfileClinicContainer,
              canActivate:[]
          },{
              path: 'AGENCY/:id',
              component: ProfileAgencyContainer,
              canActivate:[]
          }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
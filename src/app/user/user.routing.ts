import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileContainer } from './containers/user-profile.container';
import { UserAccountContainer } from './containers/user-account.container';
const routes: Routes = [
    { 
      path: '',
      children:[{
          path:'',
          pathMatch:'full',
          redirectTo:'profile'
      }, {
          path:'profile/:userid',
          component:UserProfileContainer
      }, {
          path:'account/:userid',
          component:UserAccountContainer
      }]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
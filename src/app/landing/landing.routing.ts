import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingContainer } from './landing.container';

const routes: Routes = [
    { 
      path: '',
      component: LandingContainer,
      children:[
          {
              path:"login",
              canLoad:[],
              //component:LoginComponent
          },
          {
              path:'signup',
              canLoad:[],
             // component:SignUpComponent
          }
      ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
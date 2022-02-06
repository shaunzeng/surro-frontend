import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { 
  ForgetPasswordComponent, 
  NotFoundComponent, 
  LoginComponent, 
  RegisterComponent 
} from '@shared';

import { 
  isAuthenticated, 
  isNotAuthenticated 
} from '@core'



const routes: Routes = [
  { path: '', pathMatch:"full", loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)},
  { path: 'search', loadChildren: () => import('./search-result/search-result.module').then(m => m.SearchResultsModule)},
  { path: 'blogs',  loadChildren: () => import('./blogs/blogs.module').then(m => m.BlogsModule)},
  { path: 'user',            canActivate:[isAuthenticated], loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  { path: 'login',           canActivate:[isNotAuthenticated], component: LoginComponent},
  { path: 'register',        canActivate:[isNotAuthenticated], component: RegisterComponent},
  { path: 'forget-password', canActivate:[isNotAuthenticated], component: ForgetPasswordComponent},
  { path: '**',              component:NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/notFound/notFound.component';
import { LoginComponent } from './core/login/login.component';
import { RegisterComponent } from './core/register/register.component';
import { isAuthenticated, isNotAuthenticated } from '@core';

const routes: Routes = [
  { path: '', pathMatch:"full", loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)},
  { path: 'user', canActivate:[isAuthenticated], loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  { path: 'login', canActivate:[isNotAuthenticated], component: LoginComponent},
  { path: 'register', canActivate:[isNotAuthenticated], component: RegisterComponent},
  { path: '**', component:NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

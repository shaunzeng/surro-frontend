import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './core/error/error.component';
import { LoginComponent } from './core/login/login.component';
import { RegisterComponent } from './core/register/register.component';

const routes: Routes = [
  { path: '', pathMatch:"full", loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)},
  { path: 'user', canActivate:[], loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  { path: 'login', canActivate:[], component: LoginComponent},
  { path: 'register', canActivate:[], component: RegisterComponent},
  { path: '**', component:ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

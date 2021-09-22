import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { UnauthorizedComponent } from './components/unathorized/unauthorized.component';
import { ErrorComponent } from './components/error/error.component';
import { TopnavComponent } from './layout/nav/navigation.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { StateButtonComponent } from './components/state-button/state-button.component';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { RegisterComponent } from './components/register/register.component';
import { PopoverModule } from 'ngx-bootstrap/popover';

@NgModule({
  declarations: [
    ErrorComponent, 
    UnauthorizedComponent, 
    TopnavComponent,
    FooterComponent,
    LoginComponent,
    StateButtonComponent,
    RegisterComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    TranslateModule,
    PerfectScrollbarModule,
    FormsModule,
    SimpleNotificationsModule,
    PopoverModule,
  ],
  exports: [
    PerfectScrollbarModule,
    RouterModule,
    ErrorComponent,
    TopnavComponent,
    UnauthorizedComponent,
    FooterComponent,
    LoginComponent,
    StateButtonComponent,
    RegisterComponent,
    TranslateModule,
    CommonModule,
  ],
})
export class SharedModule {}

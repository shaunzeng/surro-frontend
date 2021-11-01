import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { BootstrapModule } from './components/bootstrap/bootstrap.module';
import { ComponentsStateButtonModule } from './components/state-button/components.state-button.module';
import { ComponentsCardsModule } from './components/cards/components.cards.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { HeaderFooterLayoutComponent } from './layout/header-footer/header-footer.layout';
import { BodyOnlyLayoutComponent } from './layout/body-only/body-only.layout';
import { HeadroomModule } from '@ctrl/ngx-headroom';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/notFound/notFound.component';
import { RegisterComponent } from './pages/register/register.component';
import { UnauthorizedComponent } from './pages/unathorized/unauthorized.component';
import { TopnavComponent } from './layout/nav/navigation.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { SearchSwitcherDirective } from './directives/search-switcher.directive';
import { NgSelectModule } from '@ng-select/ng-select';
import { LoaderComponent } from './components/loader.component';

@NgModule({
  declarations: [
    HeaderFooterLayoutComponent,
    BodyOnlyLayoutComponent,
    ForgetPasswordComponent,
    LoginComponent,
    NotFoundComponent,
    RegisterComponent,
    UnauthorizedComponent,
    FooterComponent,
    TopnavComponent,
    SearchSwitcherDirective,
    LoaderComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    PerfectScrollbarModule,
    FormsModule,
    ComponentsStateButtonModule,
    ComponentsCardsModule,
    BootstrapModule,
    TranslateModule,
    TabsModule.forRoot(),
    SimpleNotificationsModule.forRoot(),
    PopoverModule.forRoot(),
    HeadroomModule,
    NgSelectModule
  ],
  exports: [
    RouterModule,
    CommonModule,
    PerfectScrollbarModule,
    FormsModule,
    ComponentsStateButtonModule,
    ComponentsCardsModule,
    BootstrapModule,
    TabsModule,
    SimpleNotificationsModule,
    PopoverModule,
    HeaderFooterLayoutComponent,
    BodyOnlyLayoutComponent,
    ForgetPasswordComponent,
    LoginComponent,
    NotFoundComponent,
    RegisterComponent,
    UnauthorizedComponent,
    FooterComponent,
    TopnavComponent,
    SearchSwitcherDirective,
    NgSelectModule,
    LoaderComponent
  ],
})
export class SharedModule {}

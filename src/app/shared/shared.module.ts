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

@NgModule({
  declarations: [
    HeaderFooterLayoutComponent,
    BodyOnlyLayoutComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    PerfectScrollbarModule,
    FormsModule,
    ComponentsStateButtonModule,
    ComponentsCardsModule,
    BootstrapModule,
    TabsModule.forRoot(),
    SimpleNotificationsModule.forRoot(),
    PopoverModule.forRoot(),
    HeadroomModule
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
    BodyOnlyLayoutComponent
  ],
})
export class SharedModule {}

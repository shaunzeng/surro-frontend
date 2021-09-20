import { NgModule } from '@angular/core';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ContentComponent } from './content/content.component';
import { DefaultComponent } from './default/default.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { DashboardsComponent } from './dashboards.component';
import { DashboardsRoutingModule } from './dashboards.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardsContainersModule } from 'src/app/containers/dashboards/dashboards.containers.module';
import { ComponentsCardsModule } from 'src/app/components/cards/components.cards.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';

@NgModule({
  declarations: [AnalyticsComponent, ContentComponent, DefaultComponent, EcommerceComponent, DashboardsComponent],
  imports: [
    SharedModule,
    LayoutContainersModule,
    DashboardsContainersModule,
    DashboardsRoutingModule,
    ComponentsCardsModule
  ]
})
export class DashboardsModule { }

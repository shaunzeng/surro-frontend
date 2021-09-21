import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ComponentsCarouselModule } from 'src/app/components/carousel/components.carousel.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { LandingRoutingModule } from './landing.routing';
import { LandingContainer } from './landing.container';

@NgModule({
  declarations: [LandingContainer],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsCarouselModule,
    TabsModule.forRoot(),
    LandingRoutingModule,
    ScrollToModule.forRoot(),
  ],
  providers: [],
})
export class LandingModule {}
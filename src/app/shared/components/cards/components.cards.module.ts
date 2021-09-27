import { NgModule } from '@angular/core';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { GradientCardComponent } from './gradient-card/gradient-card.component';
import { GradientWithRadialProgressCardComponent } from './gradient-with-radial-progress-card/gradient-with-radial-progress-card.component';
import { PostCardComponent } from './post-card/post-card.component';
import { RadialProcessCardComponent } from './radial-process-card/radial-process-card.component';


@NgModule({
  declarations: [
    GradientCardComponent,
    GradientWithRadialProgressCardComponent,
    PostCardComponent,
    RadialProcessCardComponent
  ],
  imports: [
    RoundProgressModule,
  ],
  providers: [],
  exports: [
    GradientCardComponent,
    GradientWithRadialProgressCardComponent,
    PostCardComponent,
    RadialProcessCardComponent
  ]
})

export class ComponentsCardsModule { }

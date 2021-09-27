import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LandingRoutingModule } from './landing.routing';
import { LandingContainer } from './landing.container';
import { CoreModule } from '../core/core.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [LandingContainer],
  imports: [
    TranslateModule.forChild(),
    SharedModule,
    CoreModule,
    LandingRoutingModule,
  ],
  providers: [],
})
export class LandingModule {}
import { NgModule } from '@angular/core';
import { UIRoutingModule } from './ui.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { UiComponent } from './ui.component';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';

@NgModule({
  declarations: [UiComponent],
  imports: [
    SharedModule,
    UIRoutingModule,
    LayoutContainersModule
  ]
})
export class UiModule { }

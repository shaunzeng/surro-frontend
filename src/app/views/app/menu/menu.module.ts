import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MenuComponent } from './menu.component';
import { MenuTypesComponent } from './menu-types/menu-types.component';
import { MenuRoutingModule } from './menu.routing';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';

@NgModule({
  declarations: [MenuComponent, MenuTypesComponent],
  imports: [
    SharedModule,
    MenuRoutingModule,
    LayoutContainersModule
  ]
})
export class MenuModule { }

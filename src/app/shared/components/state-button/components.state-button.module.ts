import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateButtonComponent } from './state-button.component';
import { PopoverModule } from 'ngx-bootstrap/popover';

@NgModule({
  declarations: [
    StateButtonComponent
  ],
  imports: [
    CommonModule,
    PopoverModule.forRoot()
  ],
  providers: [],
  exports: [
    StateButtonComponent
  ]
})

export class ComponentsStateButtonModule { }

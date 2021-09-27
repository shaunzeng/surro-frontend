import { NgModule } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { SortableModule } from 'ngx-bootstrap/sortable';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { ButtonsModule } from 'ngx-bootstrap/buttons';


@NgModule({
  declarations: [],
  imports: [
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    SortableModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot()
  ],
  exports: [
    AccordionModule,
    AlertModule,
    ButtonsModule,
    CollapseModule,
    BsDropdownModule,
    ModalModule,
    PaginationModule,
    PopoverModule,
    ProgressbarModule,
    SortableModule,
    TabsModule,
    TooltipModule,
    TypeaheadModule
  ]
})
export class BootstrapModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as FormsModuleAngular, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TemplateBasicComponent } from './template-basic/template-basic.component';
import { TemplateCommonComponent } from './template-common/template-common.component';
import { ReactiveBasicComponent } from './reactive-basic/reactive-basic.component';
import { ReactiveCommonComponent } from './reactive-common/reactive-common.component';
import { ReactiveExternalComponent } from './reactive-external/reactive-external.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { LayoutsValidationComponent } from './layouts/layouts-validation.component';
import { TooltipPositionsComponent } from './tooltip-positions/tooltip-positions.component';

@NgModule({
  declarations: [
    TemplateBasicComponent,
    TemplateCommonComponent,
    ReactiveBasicComponent,
    ReactiveCommonComponent,
    ReactiveExternalComponent,
    LayoutsValidationComponent,
    TooltipPositionsComponent
],
  imports: [
    CommonModule,
    FormsModuleAngular,
    ReactiveFormsModule,
    TranslateModule,
    NgSelectModule,
    BsDatepickerModule,
    TimepickerModule
  ],
  providers: [],
  exports: [
    TemplateBasicComponent,
    TemplateCommonComponent,
    ReactiveBasicComponent,
    ReactiveCommonComponent,
    ReactiveExternalComponent,
    LayoutsValidationComponent,
    TooltipPositionsComponent
  ]
})

export class FormValidationsContainersModule { }

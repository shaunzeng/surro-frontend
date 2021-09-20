import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputsComponent } from './custom-inputs/custom-inputs.component';
import { SelectComponent } from './select/select.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { TimepickerComponent } from './timepicker/timepicker.component';
import { DropzoneComponent } from './dropzone/dropzone.component';
import { SliderComponent } from './slider/slider.component';
import { RatingComponent } from './rating/rating.component';
import { SwitchComponent } from './switch/switch.component';
import { FormsModule as FormsModuleAngular, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { NouisliderModule } from 'ng2-nouislider';
import { TranslateModule } from '@ngx-translate/core';
import { RatingModule } from 'ngx-bootstrap/rating';


@NgModule({
  declarations: [
    CustomInputsComponent,
    SelectComponent,
    TypeaheadComponent,
    DatepickerComponent,
    TimepickerComponent,
    DropzoneComponent,
    SliderComponent,
    RatingComponent,
    SwitchComponent],
  imports: [
    CommonModule,
    FormsModuleAngular,
    NgSelectModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    RatingModule.forRoot(),
    DropzoneModule,
    NouisliderModule,
    TranslateModule
  ],
  providers: [],
  exports: [
    CustomInputsComponent,
    SelectComponent,
    TypeaheadComponent,
    DatepickerComponent,
    TimepickerComponent,
    DropzoneComponent,
    SliderComponent,
    RatingComponent,
    SwitchComponent
  ]
})

export class FormsContainersModule { }

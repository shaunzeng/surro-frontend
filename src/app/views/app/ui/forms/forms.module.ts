import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { ValidationsComponent } from './validations/validations.component';
import { FormsComponent } from './forms.component';
import { FormsRoutingModule } from './forms.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsContainersModule } from 'src/app/containers/forms/forms.containers.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { WizardComponent } from './wizard/wizard.component';
import { FormValidationsContainersModule } from 'src/app/containers/form-validations/form.validations.containers.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';
import { WizardsContainersModule } from 'src/app/containers/wizard/wizards.containers.module';


@NgModule({
  declarations: [ComponentsComponent, LayoutsComponent, ValidationsComponent, FormsComponent, WizardComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsRoutingModule,
    FormsContainersModule,
    NgSelectModule,
    BsDatepickerModule,
    FormValidationsContainersModule,
    LayoutContainersModule,
    WizardsContainersModule
  ]
})
export class FormsModule { }

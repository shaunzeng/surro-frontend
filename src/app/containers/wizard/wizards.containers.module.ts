import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as FormsModuleAngular } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ArchwizardModule } from 'angular-archwizard';

import { WizardEndStepComponent } from './end-step/wizard-end-step.component';
import { WizardValidationComponent } from './validation/wizard-validation.component';
import { WizardIconsComponent } from './icons/wizard-icons.component';
import { WizardVerticalComponent } from './vertical/wizard-vertical.component';
import { WizardBasicComponent } from './basic/wizard-basic.component';

@NgModule({
  declarations: [
    WizardBasicComponent,
    WizardEndStepComponent,
    WizardValidationComponent,
    WizardIconsComponent,
    WizardVerticalComponent
  ],
  imports: [
    CommonModule,
    FormsModuleAngular,
    TranslateModule,
    ArchwizardModule
  ],
  providers: [],
  exports: [
    WizardBasicComponent,
    WizardEndStepComponent,
    WizardValidationComponent,
    WizardIconsComponent,
    WizardVerticalComponent
  ]
})

export class WizardsContainersModule { }

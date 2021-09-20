import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { ComponentsComponent } from './components/components.component';
import { ValidationsComponent } from './validations/validations.component';
import { WizardComponent } from './wizard/wizard.component';

const routes: Routes = [
    {
        path: '', component: FormsComponent,
        children: [
            { path: '', redirectTo: 'layouts', pathMatch: 'full' },
            { path: 'layouts', component: LayoutsComponent },
            { path: 'components', component: ComponentsComponent },
            { path: 'validations', component: ValidationsComponent },
            { path: 'wizard', component: WizardComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormsRoutingModule { }

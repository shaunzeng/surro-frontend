import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UiComponent } from './ui.component';

const routes: Routes = [
  {
    path: '', component: UiComponent,
    children: [
      { path: '', redirectTo: 'forms', pathMatch: 'full' },
      { path: 'datatables', loadChildren: () => import('./datatables/datatables.module').then(m => m.DatatablesModule) },
      { path: 'components', loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule) },
      { path: 'forms', loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UIRoutingModule { }

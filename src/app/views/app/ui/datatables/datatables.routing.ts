import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatatablesComponent } from './datatables.component';
import { FullpageComponent } from './fullpage/fullpage.component';
import { ScrollableComponent } from './scrollable/scrollable.component';
import { ResponsiveComponent } from './responsive/responsive.component';

const routes: Routes = [
    {
        path: '', component: DatatablesComponent,
        children: [
            { path: '', redirectTo: 'fullpage', pathMatch: 'full' },
            { path: 'fullpage', component: FullpageComponent },
            { path: 'scrollable', component: ScrollableComponent },
            { path: 'responsive', component: ResponsiveComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DatatablesRoutingModule { }



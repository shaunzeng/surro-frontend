import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';
import { MenuTypesComponent } from './menu-types/menu-types.component';

const routes: Routes = [
    {
        path: '', component: MenuComponent,
        children: [
            { path: '', redirectTo: 'types', pathMatch: 'full' },
            { path: 'types', component: MenuTypesComponent },
            { path: 'levels', loadChildren: () => import('./menu-levels/menu-levels.module').then(m => m.MenuLevelsModule) },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MenuRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuLevelsComponent } from './menu-levels.component';
import { ThirdLevel1Component } from './third-level1/third-level1.component';
import { ThirdLevel2Component } from './third-level2/third-level2.component';
import { ThirdLevel3Component } from './third-level3/third-level3.component';

const routes: Routes = [
    {
        path: '', component: MenuLevelsComponent,
        children: [
            { path: '', redirectTo: 'third-level-1', pathMatch: 'full' },
            { path: 'third-level-1', component: ThirdLevel1Component },
            { path: 'third-level-2', component: ThirdLevel2Component },
            { path: 'third-level-3', component: ThirdLevel3Component },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MenuLevelsRoutingModule { }

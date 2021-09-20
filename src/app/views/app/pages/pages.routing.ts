import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      { path: '', redirectTo: 'product', pathMatch: 'full' },
      { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},
      { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)},
      { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)},
      { path: 'miscellaneous', loadChildren: () => import('./miscellaneous/miscellaneous.module').then(m => m.MiscellaneousModule)}
    ]
  }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }




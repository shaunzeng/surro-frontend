import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogComponent } from './blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

const routes: Routes = [
  {
    path: '', component: BlogComponent,
    children: [
      { path: '', redirectTo: 'blog-list', pathMatch: 'full' },
      { path: 'blog-list', component: BlogListComponent },
      { path: 'blog-detail', component: BlogDetailComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsContainer } from './blogs.container';

const routes: Routes = [
    { 
      path: '',
      component: BlogsContainer,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
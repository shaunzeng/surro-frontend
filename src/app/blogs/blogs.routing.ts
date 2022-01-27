import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsContainer } from './containers/blog-list/blogs.container';
import { BlogDetailsContainer } from './containers/blog-details/blog-details.container';

const routes: Routes = [
    { 
      path: '',
      component: BlogsContainer,
    },
    {
      path:':id',
      component: BlogDetailsContainer
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
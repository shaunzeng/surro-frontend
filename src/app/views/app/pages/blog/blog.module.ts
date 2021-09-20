import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogComponent } from './blog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog.routing';
import { EllipsisModule } from 'ngx-ellipsis';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagesContainersModule } from 'src/app/containers/pages/pages.containers.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';

@NgModule({
  declarations: [BlogListComponent, BlogDetailComponent, BlogComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    LayoutContainersModule,
    EllipsisModule,
    PaginationModule,
    PagesContainersModule,
    PaginationModule.forRoot()
  ]
})
export class BlogModule { }

import { NgModule } from '@angular/core';
import { GlideComponent } from './glide/glide.component';
import { CommonModule } from '@angular/common';
import { GlideThumbsComponent } from './glide-thumbs/glide-thumbs.component';

@NgModule({
  declarations: [
    GlideComponent,
    GlideThumbsComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    GlideComponent,
    GlideThumbsComponent
  ]
})

export class ComponentsCarouselModule { }

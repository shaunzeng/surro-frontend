import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BlogsRoutingModule } from './blogs.routing';
import { TranslateModule } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BlogsContainer } from './blogs.container';


@NgModule({
  declarations: [BlogsContainer],
  imports: [
    TranslateModule.forChild(),
    SharedModule,
    BlogsRoutingModule,
  ],
  providers: [],
})
export class BlogsModule {}
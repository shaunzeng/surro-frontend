import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { SearcherResultsContainer } from './search-result.container';
import { SearchResultsRoutingModule } from './search-result.routing';

@NgModule({
  declarations: [SearcherResultsContainer],
  imports: [
    TranslateModule.forChild(),
    SharedModule,
    SearchResultsRoutingModule
  ],
  providers: [],
})
export class SearchResultsModule {}
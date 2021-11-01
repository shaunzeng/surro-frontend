import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { SearcherResultsContainer } from './search-result.container';
import { SearchResultsRoutingModule } from './search-result.routing';
import { EffectsModule } from '@ngrx/effects';
import { SearchEffects } from './data/effects';
import { StoreModule } from '@ngrx/store';
import { searchFeatureKey, sReducer } from './data/reducer';

@NgModule({
  declarations: [SearcherResultsContainer],
  imports: [
    TranslateModule.forChild(),
    StoreModule.forFeature(searchFeatureKey, sReducer),
    EffectsModule.forFeature([SearchEffects]),
    SharedModule,
    SearchResultsRoutingModule
  ],
  providers: [],
})
export class SearchResultsModule {}
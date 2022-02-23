import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { TranslateModule } from '@ngx-translate/core';
import { SearcherResultsContainer } from './search-result.container';
import { SearchResultsRoutingModule } from './search-result.routing';
import { ListHeaderComponent } from './components/list-header/list-header.component';
import { EffectsModule } from '@ngrx/effects';
import { SearchEffects } from './data/effects';
import { StoreModule } from '@ngrx/store';
import { searchFeatureKey, sReducer } from './data/reducer';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { FilterComponent } from './components/filter/filter.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';

@NgModule({
  declarations: [
    SearcherResultsContainer,
    ListHeaderComponent,
    SideMenuComponent,
    FilterComponent,
    ProfileCardComponent
  ],
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
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearcherResultsContainer } from './search-result.container';

const routes: Routes = [
    { 
      path: '',
      component: SearcherResultsContainer,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchResultsRoutingModule { }
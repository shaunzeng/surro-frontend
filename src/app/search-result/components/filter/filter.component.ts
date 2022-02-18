import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BIZ_TYPES, STATES } from '../../data/constants';
import { SearcherResultsContainer } from '../../search-result.container';
@Component({
  selector: 'app-list-filter-menu',
  templateUrl: './filter.component.html',
  styleUrls:['./filter.component.scss']
})
export class FilterComponent {

    categories = BIZ_TYPES;
    states = STATES;

    _filter: any;
    get filter(){
        return this._filter;
    }

    set filter(val) {
        console.log('set filter ?');
        this._filter = val;
    }
    component: SearcherResultsContainer;
    @Output() filterchanged: EventEmitter<void> = new EventEmitter();
    @Output() resetFilter: EventEmitter<void> = new EventEmitter();

    constructor(public bsModalRef: BsModalRef){}

    onCategoryChange(e: string) {
        this.filter.category = e;
        this.component.onFilterchange();
    }

    onLocationChange(e: string) {
        this.filter.locations[e] = !this.filter.locations[e];
        this.component.onFilterchange();
    }

    onCostTierChange(e: string) {
        this.filter.cost[e] = !this.filter.cost[e];
        this.component.onFilterchange();
    }

    onResetFilter(){
        this.component.onResetFilter();
    }
}
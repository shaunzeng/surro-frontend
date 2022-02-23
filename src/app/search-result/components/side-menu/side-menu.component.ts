import { Component, EventEmitter, Input, Output } from '@angular/core';
//import { BsModalRef } from 'ngx-bootstrap/modal';
import { BIZ_TYPES, STATES } from '../../data/constants';

@Component({
  selector: 'app-list-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls:['./side-menu.component.scss']
})
export class SideMenuComponent {

    categories = BIZ_TYPES;
    states = STATES;

    @Input() filter: any;
    @Output() filterchanged: EventEmitter<void> = new EventEmitter();
    @Output() resetFilter: EventEmitter<void> = new EventEmitter();

    constructor(/*public bsModalRef: BsModalRef*/) {}

    onCategoryChange(e: string) {
        this.filter.category = e;
        this.onFilterChange();
    }

    onLocationChange(e: string) {
        this.filter.locations[e] = !this.filter.locations[e];
        this.onFilterChange();
    }

    onCostTierChange(e: string) {
        this.filter.cost[e] = !this.filter.cost[e];
        this.onFilterChange();
    }

    onFilterChange() {
        this.filterchanged.emit();
    }

    onResetFilter(){
        this.resetFilter.emit();
    }
}
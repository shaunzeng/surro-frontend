import { Component} from '@angular/core';

@Component({
  selector: 'app-sortable',
  templateUrl: './sortable.component.html'
})
export class SortableComponent  {
  itemsRow = [1, 2, 3, 4];
  itemsBasic = [1, 2, 3, 4];
  itemsHandles = [1, 2, 3, 4];

  itemsUpdates = [1, 2, 3, 4];
  optionsUpdates = {};
  updates = [];

  constructor() {
    this.optionsUpdates = {
      onUpdate: (event: any) => {
        this.updates.push(this.itemsUpdates.slice());
      }
    };
  }

}

import { Component,  ViewChild, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html'
})
export class ListHeaderComponent {
  displayOptionsCollapsed = false;

  @Input() showOrderBy = true;
  @Input() showSearch = false;
  @Input() showItemsPerPage = true;
  @Input() showDisplayMode = true;
  @Input() displayMode = 'list';
  @Input() selectAllState = '';
  @Input() itemsPerPage = 10;
  @Input() itemOptionsPerPage = [5, 10, 20];
  @Input() itemOrder = { label: 'Distance', value: 'distance' };
  @Input() itemOptionsOrders = [{ label: 'Distance', value: 'distance' }];

  @Output() changeDisplayMode: EventEmitter<string> = new EventEmitter<string>();
  @Output() addNewItem: EventEmitter<any> = new EventEmitter();
  @Output() selectAllChange: EventEmitter<any> = new EventEmitter();
  @Output() searchKeyUp: EventEmitter<any> = new EventEmitter();
  @Output() itemsPerPageChange: EventEmitter<any> = new EventEmitter();
  @Output() changeOrderBy: EventEmitter<any> = new EventEmitter();

  @ViewChild('search') search: any;
  constructor() { }



  onSelectDisplayMode(mode: string): void {
    this.displayMode = mode;
    this.changeDisplayMode.emit(mode);
  }
  
  selectAll(event): void  {
    this.selectAllChange.emit(event);
  }

  onChangeItemsPerPage(item): void  {
    this.itemsPerPage = item;
    this.itemsPerPageChange.emit(item);
  }

  onChangeOrderBy(item): void  {
    this.itemOrder = item;
    this.changeOrderBy.emit(item);
  }

  onSearchKeyUp($event): void {
    this.searchKeyUp.emit($event);
  }
}
import { Component, OnInit, ElementRef, HostListener, ViewChild, AfterContentInit } from '@angular/core';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { ApiService, IProduct } from '../../../../../data/api.service';

@Component({
  selector: 'app-scrollable',
  templateUrl: './scrollable.component.html'
})
export class ScrollableComponent implements OnInit, AfterContentInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  ColumnMode = ColumnMode;
  headerHeight = 30;
  rowHeight = 60;
  itemsPerPage = 15;
  currentPage = 0;

  isLoading: boolean;
  rows: IProduct[] = [];
  columns = [
    { prop: 'title', name: 'Title' },
    { prop: 'sales', name: 'Sales' },
    { prop: 'category', name: 'Category' },
    { prop: 'id', name: 'Id' }
  ];
  screenHeight: number;
  selected = [];
  temp = [];
  SelectionType = SelectionType;
  selectAllState = '';
  endOfTheList = false;

  constructor(private apiService: ApiService, private el: ElementRef) { }

  ngOnInit(): void {
    this.onScroll(null);
  }

  ngAfterContentInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?): void{
    this.screenHeight = window.innerHeight;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event?): void {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    const max = document.documentElement.scrollHeight;
    this.getScreenSize();
    if ((!this.isLoading && pos === max) || (!this.isLoading && event === null)) {
      const limit = this.itemsPerPage;
      this.currentPage++;
      this.loadPage(limit);
    }
  }

  loadPage(limit: number): void {
    this.isLoading = true;
    this.apiService.getProducts(limit, this.currentPage).subscribe(
      data => {
        if (data.status) {
          this.isLoading = false;
          const rows = [...this.rows, ...data.data];
          this.rows = rows;
          this.temp = [...this.rows, ...data.data];
          this.setSelectAllState();
        } else {
          this.endOfTheList = true;
        }
      },
      error => {
        this.isLoading = false;
      }
    );
  }

  updateFilter(event): void{
    const val = event.target.value.toLowerCase().trim();
    const count = this.columns.length;
    const keys = Object.keys(this.temp[0]);
    const temp = this.temp.filter(item => {
      for (let i = 0; i < count; i++) {
        if ((item[keys[i]] && item[keys[i]].toString().toLowerCase().indexOf(val) !== -1) || !val) {
          return true;
        }
      }
    });
    this.rows = temp;
    this.table.offset = 0;
  }

  onSelect({ selected }): void {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
    this.setSelectAllState();
  }

  setSelectAllState(): void {
    if (this.selected.length === this.rows.length) {
      this.selectAllState = 'checked';
    } else if (this.selected.length !== 0) {
      this.selectAllState = 'indeterminate';
    } else {
      this.selectAllState = '';
    }
  }

  selectAllChange($event): void{
    if ($event.target.checked) {
      this.selected = [...this.rows];
    } else {
      this.selected = [];
    }
    this.setSelectAllState();
  }
}

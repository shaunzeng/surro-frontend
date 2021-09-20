import { Component} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent  {
  totalItems = 64;
  currentPage = 4;

  currentPageEvent = 4;
  page: number;

  limitsMaxSize = 5;
  limitsTotalItems = 175;
  limitsCurrentPage = 1;


  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  pageChanged(event: any): void {
    this.page = event.page;
  }


  constructor() { }


}

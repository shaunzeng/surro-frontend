import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  Renderer2,
} from '@angular/core';
import { AddNewSurveyModalComponent } from 'src/app/containers/applications/add-new-survey-modal/add-new-survey-modal.component';
import { SurveyService, ISurvey } from './survey.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
})
export class SurveyComponent implements OnInit, OnDestroy {
  adminRoot = environment.adminRoot;

  columns = [
    { prop: 'title', name: 'Title' },
    { prop: 'sales', name: 'Sales' },
    { prop: 'stock', name: 'Stock' },
    { prop: 'category', name: 'Category' },
    { prop: 'id', name: 'Id' },
  ];
  itemsPerPage = 10;
  itemOptionsPerPage = [5, 10, 20];
  selected = [];
  selectAllState = '';
  itemOrder = 'Title';
  itemOptionsOrders = ['Title', 'Category', 'Status', 'Label'];
  displayOptionsCollapsed = false;

  surveyItems: ISurvey[] = [];

  @ViewChild('addNewModalRef', { static: true })
  addNewModalRef: AddNewSurveyModalComponent;

  constructor(
    private surveyService: SurveyService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'right-menu');
    this.getItems();
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'right-menu');
  }

  getItems(): void{
    this.surveyService.getSurveyItems().subscribe((items) => {
      this.surveyItems = items;
    });
  }

  showAddNewModal(): void {
    this.addNewModalRef.show();
  }

  isSelected(p: ISurvey): boolean {
    return this.selected.findIndex((x) => x.id === p.id) > -1;
  }
  onSelect(item: ISurvey): void {
    if (this.isSelected(item)) {
      this.selected = this.selected.filter((x) => x.id !== item.id);
    } else {
      this.selected.push(item);
    }
    this.setSelectAllState();
  }

  setSelectAllState(): void {
    if (this.selected.length === this.surveyItems.length) {
      this.selectAllState = 'checked';
    } else if (this.selected.length !== 0) {
      this.selectAllState = 'indeterminate';
    } else {
      this.selectAllState = '';
    }
  }

  selectAll($event): void {
    if ($event.target.checked) {
      this.selected = [...this.surveyItems];
    } else {
      this.selected = [];
    }
    this.setSelectAllState();
  }
}

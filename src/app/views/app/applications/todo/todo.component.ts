import { Component, OnInit, ViewChild, OnDestroy, Renderer2 } from '@angular/core';
import { AddNewTodoModalComponent } from 'src/app/containers/applications/add-new-todo-modal/add-new-todo-modal.component';
import { TodoService, ITodo } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent implements OnInit, OnDestroy {
  columns = [
    { prop: 'title', name: 'Title' },
    { prop: 'sales', name: 'Sales' },
    { prop: 'stock', name: 'Stock' },
    { prop: 'category', name: 'Category' },
    { prop: 'id', name: 'Id' }
  ];
  itemsPerPage = 10;
  itemOptionsPerPage = [5, 10, 20];
  selected = [];
  selectAllState = '';
  itemOrder = 'Title';
  itemOptionsOrders = ['Title', 'Category', 'Status', 'Label'];
  displayOptionsCollapsed = false;

  todoItems: ITodo[] = [];

  @ViewChild('addNewModalRef', { static: true }) addNewModalRef: AddNewTodoModalComponent;

  constructor(private todoService: TodoService, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'right-menu');
    this.getItems();
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'right-menu');
  }

  getItems(): void {
    this.todoService.getTodoItems()
      .subscribe(items => {
        this.todoItems = items;
      });
  }

  showAddNewModal(): void {
    this.addNewModalRef.show();
  }

  isSelected(p: ITodo): boolean {
    return this.selected.findIndex(x => x.id === p.id) > -1;
  }
  onSelect(item: ITodo): void {
    if (this.isSelected(item)) {
      this.selected = this.selected.filter(x => x.id !== item.id);
    } else {
      this.selected.push(item);
    }
    this.setSelectAllState();
  }

  setSelectAllState(): void {
    if (this.selected.length === this.todoItems.length) {
      this.selectAllState = 'checked';
    } else if (this.selected.length !== 0) {
      this.selectAllState = 'indeterminate';
    } else {
      this.selectAllState = '';
    }
  }

  selectAll($event): void {
    if ($event.target.checked) {
      this.selected = [...this.todoItems];
    } else {
      this.selected = [];
    }
    this.setSelectAllState();
  }


}

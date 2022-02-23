import {
    Component,
    OnInit,
    HostListener,
    Input,
    Output,
    EventEmitter
  } from '@angular/core';
  import { Store } from '@ngrx/store';

  @Component({
    selector: 'app-blogs-list-card',
    templateUrl: './list.component.html',
    styleUrls:['./list.component.scss']
  })
  export class ListComponent {


    @Input() data: any;

    constructor() {}
  
  }
import { Component } from '@angular/core';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html'
})
export class LayoutsComponent  {

  constructor() { }


  addTagFn = addedName => ({name: addedName, tag: true});

}

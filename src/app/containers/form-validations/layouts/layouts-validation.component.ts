import { Component } from '@angular/core';

@Component({
  selector: 'app-layouts-validation',
  templateUrl: './layouts-validation.component.html'
})
export class LayoutsValidationComponent  {

  constructor() { }



  addTagFn(addedName): { name: any; tag: true } {
    return { name: addedName, tag: true };
  }

}

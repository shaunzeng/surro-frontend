import { Component} from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html'
})
export class CollapseComponent {

  constructor() { }
  isCollapsed = false;
  isCollapsed2 = false;
  isCollapsedAnimated = false;

  isCollapsedEvents = false;
  messageEvents: string;

  isOpen = true;

  isInlineCollapsed = false;

  collapsed(): void {
    this.messageEvents = 'collapsed';
  }

  collapses(): void {
    this.messageEvents = 'collapses';
  }



}

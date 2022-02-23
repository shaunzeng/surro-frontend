import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-profile-card',
  templateUrl: './profile-card.component.html',
})
export class ProfileCardComponent {
    rate = 3;

    @Input() profile;
    @Input() displayMode = 'list';
    @Input() index;

    @Output() onOpenDetails: EventEmitter<string> = new EventEmitter();

    constructor(){}
}
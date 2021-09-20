import { Component, Input } from '@angular/core';
import profileStatuses, { IProfileStatus } from 'src/app/data/profile-statuses';

@Component({
  selector: 'app-profile-statuses',
  templateUrl: './profile-statuses.component.html'
})
export class ProfileStatusesComponent {

  @Input() class = '';

  data: IProfileStatus[] = profileStatuses;
  constructor() { }



}

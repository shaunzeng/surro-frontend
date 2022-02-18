import {
    Component,
    OnInit
  } from '@angular/core';
import { Store } from '@ngrx/store';
  
  @Component({
    selector: 'app-profile',
    templateUrl: './profile.container.html',
    styleUrls:['./profile.container.scss']
  })
  export class ProfileContainer implements OnInit {
  
    constructor( private store: Store ) {}
  
    ngOnInit(): void {

    }
}
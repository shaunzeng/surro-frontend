import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from '@env';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html'
})
export class UnauthorizedComponent implements OnInit, OnDestroy {
  adminRoot = environment.adminRoot;

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('background');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('background');
  }

}

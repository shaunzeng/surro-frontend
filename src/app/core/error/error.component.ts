import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from '@env';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html'
})
export class ErrorComponent implements OnInit, OnDestroy {
  root = environment.adminRoot;

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('background');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('background');
  }

}
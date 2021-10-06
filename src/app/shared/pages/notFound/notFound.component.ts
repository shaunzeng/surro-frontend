import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from '@env';

@Component({
  selector: 'app-not-found',
  templateUrl: './notFound.component.html'
})
export class NotFoundComponent implements OnInit, OnDestroy {
  root = environment.adminRoot;

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('background');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('background');
  }

}
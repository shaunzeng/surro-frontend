import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Renderer2, AfterViewInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { environment as env} from '@env';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

@Injectable()
export class AppComponent implements OnInit, AfterViewInit {

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.renderer.addClass(document.body, 'show');
    }, 1000);
    setTimeout(() => {
      this.renderer.addClass(document.body, 'default-transition');
    }, 1500);
  }
}

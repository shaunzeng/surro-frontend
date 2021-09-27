import {
  Component,
  OnInit,
  Renderer2,
  OnDestroy,
  HostListener,
  ElementRef,
} from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';


@Component({
  selector: 'app-home',
  templateUrl: './landing.container.html',
  styleUrls:['./landing.component.scss']
})
export class LandingContainer implements OnInit, OnDestroy {
  topic:string = "IVF CLINICS";

  constructor(
      private renderer: Renderer2, 
      private elRef: ElementRef, 
  ) {}

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    
  }

  @HostListener('window:resize', ['$event'])
  onResize(event): void {

  }

  @HostListener('window:click', ['$event'])
  onClick(event): void {

  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event): void {

  }
}
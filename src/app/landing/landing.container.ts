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
      private scrollToService: ScrollToService
  ) {}

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'no-footer');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'no-footer');
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

  scrollTo(target): void {
    const config: ScrollToConfigOptions = {
      target,
      offset: -150
    };

    this.scrollToService.scrollTo(config);
  }
}
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
    templateUrl: './landing.container.html'
  })
  export class LandingContainer implements OnInit, OnDestroy {
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
      const homeRect = this.elRef.nativeElement
        .querySelector('.home-row')
        .getBoundingClientRect();
  
      const homeSection = this.elRef.nativeElement.querySelector(
        '.landing-page .section.home'
      );
      homeSection.style.backgroundPositionX = homeRect.x - 580 + 'px';
  
      const footerSection = this.elRef.nativeElement.querySelector(
        '.landing-page .section.footer'
      );
      footerSection.style.backgroundPositionX = event.target.innerWidth - homeRect.x - 2000 + 'px';
  
      if (event.target.innerWidth >= 992) {
        this.renderer.removeClass(
          this.elRef.nativeElement.querySelector('.landing-page'),
          'show-mobile-menu'
        );
      }
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
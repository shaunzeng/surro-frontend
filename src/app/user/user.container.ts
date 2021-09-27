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
    selector: 'app-user',
    templateUrl: './user.container.html',
    styleUrls:['./user.component.scss']
  })
  export class UserContainer implements OnInit, OnDestroy {

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
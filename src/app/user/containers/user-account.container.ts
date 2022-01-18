import {
    Component,
    OnInit,
    Renderer2,
    OnDestroy,
    HostListener,
    ElementRef,
  } from '@angular/core';
  import { getThemeColor, setThemeColor } from '../../utils/util';
  
  
  @Component({
    selector: 'app-user-account',
    templateUrl: './user-account.container.html',
  })
  export class UserAccountContainer implements OnInit, OnDestroy {

    isDarkModeActive = false;

    constructor(
        private renderer: Renderer2, 
        private elRef: ElementRef, 
    ) {
      this.isDarkModeActive = getThemeColor().indexOf('dark') > -1 ? true : false;
    }
  
    ngOnInit(): void {
  
    }
  
    ngOnDestroy(): void {
      
    }

    onDarkModeChange(event): void {
      let color = getThemeColor();
      if (color.indexOf('dark') > -1) {
        color = color.replace('dark', 'light');
      } else if (color.indexOf('light') > -1) {
        color = color.replace('light', 'dark');
      }
      setThemeColor(color);
      setTimeout(() => {
        window.location.reload();
      }, 200);
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
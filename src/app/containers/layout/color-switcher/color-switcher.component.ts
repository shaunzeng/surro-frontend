import { Component,  Renderer2, HostListener } from '@angular/core';
import { getThemeColor, setThemeColor, getThemeRadius, setThemeRadius } from 'src/app/utils/util';

@Component({
  selector: 'app-color-switcher',
  templateUrl: './color-switcher.component.html',
})
export class ColorSwitcherComponent  {
  colors: string[] = [
    'bluenavy',
    'blueyale',
    'blueolympic',
    'greenmoss',
    'greenlime',
    'purplemonster',
    'orangecarrot',
    'redruby',
    'yellowgranola',
    'greysteel',
  ];
  selectedColor: string = getThemeColor();
  isOpenSwitcher = false;
  toggleClass = 'theme-colors';
  radius = getThemeRadius();
  constructor(private renderer: Renderer2) {
    this.changeRadius(this.radius);
  }

  changeColor(color: string): void {
    this.selectedColor = color;
    setThemeColor(color);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }

  toggleSwitcher(event): void {
    this.isOpenSwitcher = !this.isOpenSwitcher;
    this.toggleClass = this.isOpenSwitcher
      ? 'theme-colors shown'
      : 'theme-colors hidden';
    event.stopPropagation();
  }

  changeRadius(radius): void {
    if (radius === 'flat') {
      this.renderer.removeClass(document.body, 'rounded');
    } else {
      this.renderer.addClass(document.body, 'rounded');
    }
    setThemeRadius(radius);
  }

  @HostListener('document:click', ['$event'])
  handleDocumentClick(event): void {
    this.isOpenSwitcher = false;
    this.toggleClass = 'theme-colors hidden';
  }
}

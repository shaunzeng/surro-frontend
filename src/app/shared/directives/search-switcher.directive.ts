import { AfterViewInit, Directive, ElementRef, EventEmitter, OnDestroy, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[app-search-switcher]'
})
export class SearchSwitcherDirective implements AfterViewInit, OnDestroy {
  texts = [{
    label: 'IVF Clinics',
    value: 'CLINIC'
  },{ 
    label: 'Agencies',
    value: 'AGENCY'
  }, {
    label: 'Egg+Sperm Banks',
    value: 'BANK'
  },{
     label: 'Egg Donors',
     value: 'EGG'
  },{
     label: 'Surrogates',
     value: 'SURROGATE'
  },{
    label: 'Attorneys',
    value: 'ATTORNEY'
  }];
  current = 0;
  gap = 6000;
  inter: any;
  listener: Function;

  @Output() textClicked = new EventEmitter<string>()
  
  constructor(private el: ElementRef, renderer: Renderer2) {
    this.listener = renderer.listen(el.nativeElement, 'click', this.clickHandler.bind(this))
  }

  ngAfterViewInit(){
    this.el.nativeElement.style.textDecoration = 'underline';
    this.el.nativeElement.style.cursor = 'pointer';

    this.startSwitching();
  }

  private clickHandler() {
    this.textClicked.emit(this.texts[this.current].value);
  }

  private startSwitching(){
    this.inter = setInterval(() => {
      this.current++;
      if (this.current >= this.texts.length) {
        this.current = 0;
      }
      this.el.nativeElement.innerHTML = this.texts[this.current].label;
    }, this.gap);
  }

  ngOnDestroy(){
    clearInterval(this.inter);
    this.listener();
  }
}
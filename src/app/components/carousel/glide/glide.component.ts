import {AfterContentInit, AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild} from '@angular/core';
import Glide from '@glidejs/glide';
import {LangService} from 'src/app/shared/lang.service';
import {SidebarService} from 'src/app/containers/layout/sidebar/sidebar.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-glide',
  templateUrl: './glide.component.html'
})
export class GlideComponent implements AfterContentInit, AfterViewInit, OnDestroy {
  @Input() settings;
  @ViewChild('glideRef', { static: true }) glideRef: ElementRef;
  @ViewChild('glideSlides', { static: true }) glideSlides: ElementRef;
  updateTimeout;
  glideCarousel;
  glideCount = [];
  direction = 'ltr';
  sidebarSubscription: Subscription;
  sidebar;

  constructor(private langService: LangService, private sidebarService: SidebarService) {
    this.direction = this.langService.direction;
    this.sidebarSubscription = this.sidebarService.getSidebar().subscribe(
      res => {
        if (this.sidebar) {
          if (this.sidebar.containerClassnames !== res.containerClassnames) {
            this.update();
          }
        }
        this.sidebar = res;
      },
      err => {
        console.error(`An error occurred: ${err.message}`);
      }
    );
  }

  ngAfterContentInit(): void {
    this.glideCount = Array(this.glideSlides.nativeElement.childNodes.length - 1).fill(1).map((x, i) => i);
    this.glideCarousel = new Glide(this.glideRef.nativeElement, { ...this.settings, direction: this.langService.direction });
    this.glideCarousel.mount();
  }

  ngAfterViewInit(): void {
    const event = document.createEvent('HTMLEvents');
    event.initEvent('resize', false, false);
    window.dispatchEvent(event);
  }

  update(): void {
    this.updateTimeout = setTimeout(() => {
      this.glideCarousel.update();
    }, 500);
  }

  onBulletClick(bulletIndex): void {
    this.glideCarousel.go('=' + bulletIndex);
  }

  ngOnDestroy(): void {
    clearTimeout(this.updateTimeout);
    this.updateTimeout = null;
    this.glideCarousel.destroy();
    this.sidebarSubscription.unsubscribe();
  }
}

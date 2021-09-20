import { Component, ViewChild, ElementRef, Input, AfterContentInit, AfterViewInit, OnDestroy } from '@angular/core';
import Glide from '@glidejs/glide';
import { LangService } from 'src/app/shared/lang.service';
import { SidebarService } from 'src/app/containers/layout/sidebar/sidebar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-glide-thumbs',
  templateUrl: './glide-thumbs.component.html'
})
export class GlideThumbsComponent implements  AfterViewInit, OnDestroy {

  @ViewChild('glideRef', { static: true }) glideRef: ElementRef;
  @ViewChild('glideThumbsRef', { static: true }) glideThumbsRef: ElementRef;
  @ViewChild('glideSlides', { static: true }) glideSlides: ElementRef;
  @ViewChild('glideThumbs', { static: true }) glideThumbs: ElementRef;

  @Input() settingsImages;
  @Input() settingsThumbs;
  @Input() images;
  @Input() thumbs;

  glideThumbCountMax = 5;
  glideCount = [];
  glideCarouselImages;
  glideCarouselThumbs;

  thumbsPerView;
  renderArrows = true;
  activeIndex = 0;
  updateTimeout;
  sidebarSubscription: Subscription;
  sidebar;

  constructor(private langService: LangService, private sidebarService: SidebarService) {
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


  updateThumbBreakpoints(): void {
    const thumbBreakpoints = this.settingsThumbs.breakpoints;
    const newBreakpoints = {};
    for (const prop in thumbBreakpoints) {
      if (thumbBreakpoints[prop]) {
        newBreakpoints[prop] = { perView: Math.min(thumbBreakpoints[prop].perView, this.glideCount.length) };
      }
    }
    this.settingsThumbs.breakpoints = newBreakpoints;
  }

  ngAfterViewInit(): void {
    this.glideCount = Array(this.glideSlides.nativeElement.childNodes.length).fill(1).map((x, i) => i);

    this.updateThumbBreakpoints();
    this.glideCarouselImages = new Glide(this.glideRef.nativeElement,
      { ...this.settingsImages, direction: this.langService.direction });
    this.glideCarouselThumbs = new Glide(this.glideThumbsRef.nativeElement,
      { ...this.settingsThumbs, direction: this.langService.direction });

    this.glideCarouselThumbs.on('resize', () => { this.thumbsResize(); });
    this.glideCarouselImages.on('swipe.end', () => { this.imagesSwipeEnd(); });

    this.glideCarouselImages.mount();
    this.glideCarouselThumbs.mount();

    this.thumbsResize();
  }

  thumbsResize(): void {
    const perView = Math.min(this.glideCarouselThumbs.settings.perView, this.glideCount.length);
    this.thumbsPerView = perView;
    if (this.glideCount.length <= perView) {
      this.renderArrows = false;
    }
    this.glideCarouselImages.update();
    this.glideCarouselThumbs.update();
  }

  onThumbClick(index): void {
    this.activeIndex = index;
    this.glideCarouselImages.go('=' + index);
  }

  imagesSwipeEnd(): void {
    const gap = this.glideCarouselThumbs.index + this.thumbsPerView;
    this.activeIndex = this.glideCarouselImages.index;
    if (this.activeIndex >= gap) {
      this.glideCarouselThumbs.go('>');
    }
    if (this.activeIndex < this.glideCarouselThumbs.index) {
      this.glideCarouselThumbs.go('<');
    }
  }

  ngOnDestroy(): void {
    clearTimeout(this.updateTimeout);
    this.updateTimeout = null;

    this.glideCarouselImages.destroy();
    this.glideCarouselThumbs.destroy();
    this.sidebarSubscription.unsubscribe();
  }

  update(): void {
    this.updateTimeout = setTimeout(() => {
      this.glideCarouselThumbs.update();
      this.glideCarouselImages.update();
    }, 500);
  }
}

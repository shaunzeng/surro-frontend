import { Component,  Input, ViewChild } from '@angular/core';
import { GlideComponent } from 'src/app/components/carousel/glide/glide.component';

interface IIconCardItem {
  title: string;
  icon: string;
  value: number;
}

@Component({
  selector: 'app-icon-cards-carousel',
  templateUrl: './icon-cards-carousel.component.html'
})
export class IconCardsCarouselComponent  {
  @Input() class = 'icon-cards-row';
  @ViewChild('carousel', { static: false }) carousel: GlideComponent;
  data: IIconCardItem[] = [
    { title: 'dashboards.pending-orders', icon: 'iconsminds-clock', value: 14 },
    { title: 'dashboards.completed-orders', icon: 'iconsminds-basket-coins', value: 32 },
    { title: 'dashboards.refund-requests', icon: 'iconsminds-arrow-refresh', value: 74 },
    { title: 'dashboards.new-comments', icon: 'iconsminds-mail-read', value: 25 }
  ];

  constructor() {

  }



}

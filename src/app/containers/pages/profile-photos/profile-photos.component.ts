import { Component} from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-profile-photos',
  templateUrl: './profile-photos.component.html'
})
export class ProfilePhotosComponent {
  album = [
    {
      src: '/assets/img/products/marble-cake.jpg',
      thumb: '/assets/img/products/marble-cake-thumb.jpg'
    },
    {
      src: '/assets/img/products/parkin.jpg',
      thumb: '/assets/img/products/parkin-thumb.jpg'
    },
    {
      src: '/assets/img/products/fruitcake.jpg',
      thumb: '/assets/img/products/fruitcake-thumb.jpg'
    },
    {
      src: '/assets/img/products/tea-loaf.jpg',
      thumb: '/assets/img/products/tea-loaf-thumb.jpg'
    },
    {
      src: '/assets/img/products/napoleonshat.jpg',
      thumb: '/assets/img/products/napoleonshat-thumb.jpg'
    },
    {
      src: '/assets/img/products/magdalena.jpg',
      thumb: '/assets/img/products/magdalena-thumb.jpg'
    }
  ];
  constructor(private lightbox: Lightbox) {
  }

  openLightbox(index: number): void {
    this.lightbox.open(this.album, index, {centerVertically: true, positionFromTop: 0, disableScrolling: true, wrapAround: true});
  }

  close(): void {
    this.lightbox.close();
  }




}

import { Component} from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-profile-gallery',
  templateUrl: './profile-gallery.component.html'
})
export class ProfileGalleryComponent  {

  gallerySmall = [
    {
      src: 'img/products/tea-loaf.jpg',
      thumb: '/assets/img/products/tea-loaf-thumb.jpg',
    },
    {
      src: '/assets/img/products/magdalena.jpg',
      thumb: '/assets/img/products/magdalena-thumb.jpg',
    },
    {
      src: '/assets/img/products/marble-cake.jpg',
      thumb: '/assets/img/products/marble-cake-thumb.jpg',
    },
    {
      src: '/assets/img/products/parkin.jpg',
      thumb: '/assets/img/products/parkin-thumb.jpg',
    },
    {
      src: '/assets/img/products/napoleonshat.jpg',
      thumb: '/assets/img/products/napoleonshat-thumb.jpg',
    },
    {
      src: '/assets/img/products/fruitcake.jpg',
      thumb: '/assets/img/products/fruitcake-thumb.jpg',
    },
  ];

  galleryXlarge = [
    {
      src: '/assets/img/products/fruitcake.jpg',
      thumb: '/assets/img/products/fruitcake.jpg',
    },
    {
      src: '/assets/img/products/marble-cake.jpg',
      thumb: '/assets/img/products/marble-cake.jpg',
    }
  ];

  galleryLarge = [
    {
      src: '/assets/img/products/parkin.jpg',
      thumb: '/assets/img/products/parkin-thumb.jpg',
    },
    {
      src: '/assets/img/products/magdalena.jpg',
      thumb: '/assets/img/products/magdalena-thumb.jpg',
    },
    {
      src: '/assets/img/products/napoleonshat.jpg',
      thumb: '/assets/img/products/napoleonshat-thumb.jpg',
    },
    {
      src: '/assets/img/products/marble-cake.jpg',
      thumb: '/assets/img/products/marble-cake-thumb.jpg',
    }
  ];

  constructor(private lightbox: Lightbox) { }



  openLightbox(gallery, index: number): void {
    this.lightbox.open(gallery, index, { centerVertically: true, positionFromTop: 0, disableScrolling: true, wrapAround: true });
  }

}

import {
    Component, Input, OnInit,
  } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-profile-photo',
  templateUrl: './photo.component.html',
  styleUrls:['./photo.component.scss']
})
export class PhotoComponent {

    @Input() album: any[] = [
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

    constructor( private lightbox: Lightbox ) {}

    openLightbox(index: number): void {
        this.lightbox.open(this.album, index, {centerVertically: true, positionFromTop: 0, disableScrolling: true, wrapAround: true});
    }

}
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

    @Input() album: any[] = [];

    constructor( private lightbox: Lightbox ) {}

    openLightbox(index: number): void {
        this.lightbox.open(this.album, index, {centerVertically: true, positionFromTop: 0, disableScrolling: true, wrapAround: true});
    }

}
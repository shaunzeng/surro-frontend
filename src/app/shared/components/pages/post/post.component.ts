import { Component,  Input } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html'
})
export class PostComponent {
  @Input() data;

  constructor(private lightbox: Lightbox) { }


  openLightbox(src: string): void {
    this.lightbox.open([{ src, thumb: '' }], 0, { centerVertically: true, positionFromTop: 0, disableScrolling: true, wrapAround: true });
  }

}

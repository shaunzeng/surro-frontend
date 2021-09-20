import { Component} from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html'
})
export class BlogContentComponent  {

  constructor(private lightbox: Lightbox) { }



  openLightbox(src: string): void {
    this.lightbox.open([{ src, thumb: '' }], 0, { centerVertically: true, positionFromTop: 0, disableScrolling: true, wrapAround: true });
  }

}

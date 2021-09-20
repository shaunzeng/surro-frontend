import { Component} from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-profile-user-portfolio',
  templateUrl: './profile-user-portfolio.component.html'
})
export class ProfileUserPortfolioComponent {

  constructor(private lightbox: Lightbox) { }



  openLightbox(src: string): void {
    this.lightbox.open([{ src, thumb: '' }], 0, { centerVertically: true, positionFromTop: 0, disableScrolling: true, wrapAround: true });
  }
}

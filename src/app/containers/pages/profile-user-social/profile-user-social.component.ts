import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-profile-user-social',
  templateUrl: './profile-user-social.component.html'
})
export class ProfileUserSocialComponent  {

  constructor(private lightbox: Lightbox) { }



  openLightbox(src: string): void {
    this.lightbox.open([{ src, thumb: '' }], 0, { centerVertically: true, positionFromTop: 0, disableScrolling: true, wrapAround: true });
  }
}

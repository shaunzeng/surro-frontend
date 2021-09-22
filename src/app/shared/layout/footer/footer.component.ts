import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent  {

  urlsToHide = ['/login', '/register'];
  isHidden = false;

  constructor(private router: Router) {
    router
    .events
    .pipe(filter(e => e instanceof NavigationEnd))
    .subscribe((e: NavigationEnd) => {
      if (this.urlsToHide.includes(e.url) ) {
        this.isHidden = true;
      } else {
        this.isHidden = false;
      }
    })
   }

}

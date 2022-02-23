import {
    Component,
    OnInit,
  } from '@angular/core';
import { Store } from '@ngrx/store';
import { submitReview } from '../../data/actions';
  
@Component({
    selector: 'app-agency',
    templateUrl: './agency.container.html',
    styleUrls:['./agency.container.scss']
})
export class ProfileAgencyContainer implements OnInit {
    rate = 2;

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
      ]
    
    constructor(
        private store: Store
    ) {}
  
    ngOnInit(): void {

    }

    onSubmitReview(e: {rating: number, review: string}) {
      this.store.dispatch(submitReview(e));
    }

    onSubmitMessage(e: {name: string, email: string, concerns: string[], message: string}) {
      console.log('requested conversation : ', e);
    }

    onSendHelp(e: any){
      console.log('sent help');
    }
}
import {
    Component,
    Input,
    OnInit,
  } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChartService } from '@shared';
import {
  conversionChartData
} from '../../../data/charts';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.container.html',
  styleUrls:['./clinic.container.scss']
})
export class ProfileClinicContainer implements OnInit {

    control = true;

    chartDataConfig: ChartService;
    conversionChartData = conversionChartData;
    
    rate = 4;

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
        private store: Store,
        private chartService: ChartService,
        
        
    ) {
      this.chartDataConfig = this.chartService;
    }
  
    ngOnInit(): void {

    }

    onSubmitReview(data) {
      console.log('got data ? ', data);
    }
}
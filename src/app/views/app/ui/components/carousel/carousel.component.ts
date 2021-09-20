import { Component} from '@angular/core';
import { carouselData, ICarouselItem } from 'src/app/data/carousels';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html'
})
export class CarouselComponent  {
  carouselItems: ICarouselItem[] = carouselData;



}

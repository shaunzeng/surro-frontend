import { Component} from '@angular/core';
import priceData, { IPrice } from 'src/app/data/prices';
import { LangService } from 'src/app/shared/lang.service';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html'
})
export class PricesComponent {

  locale = '';

  data: IPrice = priceData;

  constructor(private langService: LangService) {
    this.locale = this.langService.languageShorthand;
   }



}

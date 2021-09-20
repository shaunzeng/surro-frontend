import { Component, Input } from '@angular/core';
import { ChartService } from '../../../components/charts/chart.service';
import {
  polarAreaChartData
} from '../../../data/charts';

@Component({
  selector: 'app-product-categories-polar-area',
  templateUrl: './product-categories-polar-area.component.html'
})
export class ProductCategoriesPolarAreaComponent  {
  @Input() chartClass = 'dashboard-donut-chart';

  chartDataConfig: ChartService;
  polarAreaChartData = polarAreaChartData;

  constructor(private chartService: ChartService) {
    this.chartDataConfig = this.chartService;
  }



}

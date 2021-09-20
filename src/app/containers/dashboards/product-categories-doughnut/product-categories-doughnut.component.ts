import { Component } from '@angular/core';
import { ChartService } from '../../../components/charts/chart.service';
import {
  doughnutChartData
} from '../../../data/charts';

@Component({
  selector: 'app-product-categories-doughnut',
  templateUrl: './product-categories-doughnut.component.html'
})
export class ProductCategoriesDoughnutComponent  {

  chartDataConfig: ChartService;
  doughnutChartData = doughnutChartData;

  constructor(private chartService: ChartService) {
    this.chartDataConfig = this.chartService;
  }



}

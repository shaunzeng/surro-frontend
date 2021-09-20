import { Component } from '@angular/core';
import { ChartService } from '../../../components/charts/chart.service';
import {
  lineChartData
} from '../../../data/charts';

@Component({
  selector: 'app-sales-chart-card',
  templateUrl: './sales-chart-card.component.html'
})
export class SalesChartCardComponent  {

  chartDataConfig: ChartService;

  lineChartData = lineChartData;

  constructor(private chartService: ChartService) {
    this.chartDataConfig = this.chartService;
  }



}

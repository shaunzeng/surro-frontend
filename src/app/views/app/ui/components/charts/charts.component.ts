import { Component} from '@angular/core';
import { ChartService } from '../../../../../components/charts/chart.service';
import {
  polarAreaChartData,
  lineChartData,
  areaChartData,
  conversionChartData,
  scatterChartData,
  barChartData,
  radarChartData,
  pieChartData,
  doughnutChartData
} from '../../../../../data/charts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html'
})
export class ChartsComponent  {

  chartDataConfig: ChartService;

  polarAreaChartData = polarAreaChartData;
  lineChartData = lineChartData;
  areaChartData = areaChartData;
  conversionChartData = conversionChartData;
  scatterChartData = scatterChartData;
  barChartData = barChartData;
  radarChartData = radarChartData;
  pieChartData = pieChartData;
  doughnutChartData = doughnutChartData;

  constructor(private chartService: ChartService) {
    this.chartDataConfig = this.chartService;
  }



}

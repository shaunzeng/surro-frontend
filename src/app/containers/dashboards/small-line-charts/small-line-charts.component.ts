import { Component,  Input } from '@angular/core';
import { ChartService } from 'src/app/components/charts/chart.service';
import {
  smallChartData1,
  smallChartData2,
  smallChartData3,
  smallChartData4
} from 'src/app/data/charts';

@Component({
  selector: 'app-small-line-charts',
  templateUrl: './small-line-charts.component.html'
})
export class SmallLineChartsComponent  {

  @Input() itemClass = 'dashboard-small-chart';
  chartDataConfig: ChartService;

  smallChartData1 = smallChartData1;
  smallChartData2 = smallChartData2;
  smallChartData3 = smallChartData3;
  smallChartData4 = smallChartData4;

  constructor(private chartService: ChartService) {
    this.chartDataConfig = this.chartService;
  }



}

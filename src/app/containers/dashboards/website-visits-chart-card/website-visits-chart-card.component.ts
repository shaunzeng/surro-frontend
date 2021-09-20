import { Component,  Input } from '@angular/core';
import { ChartService } from '../../../components/charts/chart.service';
import {
  areaChartData
} from '../../../data/charts';

@Component({
  selector: 'app-website-visits-chart-card',
  templateUrl: './website-visits-chart-card.component.html'
})
export class WebsiteVisitsChartCardComponent  {
  @Input() class = '';
  @Input() control = true;

  chartDataConfig: ChartService;

  areaChartData = areaChartData;

  constructor(private chartService: ChartService) {
    this.chartDataConfig = this.chartService;
  }



}

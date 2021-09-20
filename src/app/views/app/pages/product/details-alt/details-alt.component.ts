import { Component} from '@angular/core';
import { smallChartData1, smallChartData2, smallChartData3, smallChartData4, areaChartData } from 'src/app/data/charts';
import { ChartService } from 'src/app/components/charts/chart.service';

@Component({
  selector: 'app-details-alt',
  templateUrl: './details-alt.component.html'
})
export class DetailsAltComponent {
  chartDataConfig: ChartService;
  smallChartData1 = smallChartData1;
  smallChartData2 = smallChartData2;
  smallChartData3 = smallChartData3;
  smallChartData4 = smallChartData4;
  areaChartData = areaChartData;

  constructor(private chartService: ChartService) {
    this.chartDataConfig = this.chartService;
  }



}

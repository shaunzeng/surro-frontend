import { Component, Input, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartService } from '../chart.service';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html'
})
export class DoughnutChartComponent implements AfterViewInit, OnDestroy {

  @Input() shadow = false;
  @Input() options;
  @Input() data;
  @Input() class = 'chart-container';
  @ViewChild('chart', { static: true }) chartRef: ElementRef;

  chart: Chart;

  public constructor(private chartService: ChartService) { }

  ngAfterViewInit(): void {
    if (this.shadow) {
      Chart.defaults.doughnutWithShadow = Chart.defaults.doughnut;
      Chart.controllers.doughnutWithShadow = Chart.controllers.doughnut.extend({
        // tslint:disable-next-line:typedef
        draw(ease) {
          Chart.controllers.doughnut.prototype.draw.call(this, ease);
          const chartCtx = this.chart.chart.ctx;
          chartCtx.save();
          chartCtx.shadowColor = 'rgba(0,0,0,0.15)';
          chartCtx.shadowBlur = 10;
          chartCtx.shadowOffsetX = 0;
          chartCtx.shadowOffsetY = 10;
          chartCtx.responsive = true;
          Chart.controllers.doughnut.prototype.draw.apply(this, arguments);
          chartCtx.restore();
        }
      });
    }

    const chartRefEl = this.chartRef.nativeElement;
    const ctx = chartRefEl.getContext('2d');
    this.chart = new Chart(ctx, {
      type: this.shadow ? 'doughnutWithShadow' : 'doughnut',
      data: this.data,
      options: this.options,
      plugins: [this.chartService.centerTextPlugin]
    });
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}

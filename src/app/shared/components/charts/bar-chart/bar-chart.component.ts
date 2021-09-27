import { Component, Input, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html'
})
export class BarChartComponent implements AfterViewInit, OnDestroy {

  @Input() shadow = false;
  @Input() options;
  @Input() data;
  @Input() class = 'chart-container';
  @ViewChild('chart', { static: true }) chartRef: ElementRef;

  chart: Chart;

  public constructor() { }

  ngAfterViewInit(): void {
    if (this.shadow) {
      Chart.defaults.global.datasets.barWithShadow = Chart.defaults.global.datasets.bar;
      Chart.defaults.barWithShadow = Chart.defaults.bar;
      Chart.controllers.barWithShadow = Chart.controllers.bar.extend({
        // tslint:disable-next-line:typedef
        draw(ease) {
          Chart.controllers.bar.prototype.draw.call(this, ease);
          const chartCtx = this.chart.ctx;
          chartCtx.save();
          chartCtx.shadowColor = 'rgba(0,0,0,0.2)';
          chartCtx.shadowBlur = 7;
          chartCtx.shadowOffsetX = 5;
          chartCtx.shadowOffsetY = 7;
          chartCtx.responsive = true;
          Chart.controllers.bar.prototype.draw.apply(this, arguments);
          chartCtx.restore();
        }
      });
    }

    const chartRefEl = this.chartRef.nativeElement;
    const ctx = chartRefEl.getContext('2d');
    this.chart = new Chart(ctx, {
      type: this.shadow ? 'barWithShadow' : 'bar',
      data: this.data,
      options: this.options
    });
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}

import { Component, Input, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html'
})
export class LineChartComponent implements AfterViewInit, OnDestroy {

  @Input() shadow = false;
  @Input() options;
  @Input() data;
  @Input() class = 'chart-container';
  @ViewChild('chart', { static: true }) chartRef: ElementRef;

  chart: Chart;

  public constructor() { }

  ngAfterViewInit(): void {
    if (this.shadow) {
      Chart.controllers.lineWithShadow = Chart.controllers.line;
      Chart.controllers.lineWithShadow = Chart.controllers.line.extend({
        // tslint:disable-next-line:typedef
        draw(ease) {
          Chart.controllers.line.prototype.draw.call(this, ease);
          const chartCtx = this.chart.ctx;
          chartCtx.save();
          chartCtx.shadowColor = 'rgba(0,0,0,0.15)';
          chartCtx.shadowBlur = 10;
          chartCtx.shadowOffsetX = 0;
          chartCtx.shadowOffsetY = 10;
          chartCtx.responsive = true;
          chartCtx.stroke();
          Chart.controllers.line.prototype.draw.apply(this, arguments);
          chartCtx.restore();
        }
      });
    }

    const chartRefEl = this.chartRef.nativeElement;
    const ctx = chartRefEl.getContext('2d');
    this.chart = new Chart(ctx, {
      type: this.shadow ? 'lineWithShadow' : 'line',
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

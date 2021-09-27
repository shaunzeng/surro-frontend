import { Component, Input, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-polar-chart',
  templateUrl: './polar-chart.component.html'
})
export class PolarChartComponent implements AfterViewInit, OnDestroy {

  @Input() shadow = false;
  @Input() options;
  @Input() data;
  @Input() class = 'chart-container';
  @ViewChild('chart', { static: true }) chartRef: ElementRef;

  chart: Chart;

  public constructor() { }

  ngAfterViewInit(): void {
    if (this.shadow) {
      Chart.defaults.polarWithShadow = Chart.defaults.polarArea;
      Chart.controllers.polarWithShadow = Chart.controllers.polarArea.extend({
        // tslint:disable-next-line:typedef
        draw(ease) {
          Chart.controllers.radar.prototype.draw.call(this, ease);
          const chartCtx = this.chart.chart.ctx;
          chartCtx.save();
          chartCtx.shadowColor = 'rgba(0,0,0,0.2)';
          chartCtx.shadowBlur = 7;
          chartCtx.shadowOffsetX = 0;
          chartCtx.shadowOffsetY = 7;
          chartCtx.responsive = true;
          Chart.controllers.radar.prototype.draw.apply(this, arguments);
          chartCtx.restore();
        }
      });
    }

    const chartRefEl = this.chartRef.nativeElement;
    const ctx = chartRefEl.getContext('2d');
    this.chart = new Chart(ctx, {
      type: this.shadow ? 'polarWithShadow' : 'polarArea',
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

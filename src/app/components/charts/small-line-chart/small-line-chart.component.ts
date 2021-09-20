import { Component, Input, ViewChild, ElementRef, AfterViewInit, OnDestroy, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-small-line-chart',
  templateUrl: './small-line-chart.component.html'
})

export class SmallLineChartComponent implements AfterViewInit, OnDestroy, AfterViewChecked {

  @Input() shadow = false;
  @Input() options;
  @Input() data;
  @Input() class = 'chart-container';
  @ViewChild('chart', { static: true }) chartRef: ElementRef;

  currentValue = '';
  currentLabel = '';
  chart: Chart;

  constructor(private cdr: ChangeDetectorRef) { }
  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }

  ngAfterViewInit(): void {
    Chart.controllers.lineWithLine = Chart.controllers.line;
    Chart.controllers.lineWithLine = Chart.controllers.line.extend({
      // tslint:disable-next-line:typedef
      draw(ease) {
        Chart.controllers.line.prototype.draw.call(this, ease);
        if (this.chart.tooltip._active && this.chart.tooltip._active[0]) {
          const activePoint = this.chart.tooltip._active[0];
          const chartCtx = this.chart.ctx;
          const x = activePoint.tooltipPosition().x;
          const topY = this.chart.scales['y-axis-0'].top;
          const bottomY = this.chart.scales['y-axis-0'].bottom;
          chartCtx.save();
          chartCtx.beginPath();
          chartCtx.moveTo(x, topY);
          chartCtx.lineTo(x, bottomY);
          chartCtx.lineWidth = 1;
          chartCtx.strokeStyle = 'rgba(0,0,0,0.1)';
          chartCtx.stroke();
          chartCtx.restore();
        }
      }
    });

    const thisRef = this;

    const chartRefEl = this.chartRef.nativeElement;
    const ctx = chartRefEl.getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'lineWithLine',
      data: this.data,
      options: {
        ...this.options, tooltips: {
          intersect: false,
          enabled: false,
          // tslint:disable-next-line:typedef
          custom(tooltipModel) {
            if (tooltipModel && tooltipModel.dataPoints) {
              const yLabel = tooltipModel.dataPoints[0].yLabel;
              const xLabel = tooltipModel.dataPoints[0].xLabel;
              const label = tooltipModel.body[0].lines[0].split(':')[0];
              thisRef.changeState(yLabel, label + '-' + xLabel);
            }
          }
        }
      },
      plugins: [
        {
          // tslint:disable-next-line:typedef
          afterInit(chart, options) {
            const yLabel = chart.data.datasets[0].data[0];
            const xLabel = chart.data.labels[0];
            const label = chart.data.datasets[0].label;
            thisRef.changeState(yLabel, label + '-' + xLabel);
          }
        }
      ]
    });
  }

  changeState(yLabel: string, xLabel: string): void {
    this.currentValue = yLabel;
    this.currentLabel = xLabel;
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}

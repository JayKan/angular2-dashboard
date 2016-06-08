import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bar-chart-widget',
  template:`
  <div id="barChart"></div>
  `,
  styles: [`
  #barChart {
        height: 140px;
  }
  `]
})
export class BarChartWidget implements OnInit {
  ngOnInit(): void {
    c3.generate({
      bindto: '#barChart',
      data: {
        columns: [
          [10, 40, 20, 90, 35, 70, 10, 50, 20, 80, 60, 10, 20, 40, 70, 65]
        ],
        type: 'bar'
      },
      bar: {
        width: {
          ratio: 0.5 // this makes bar width 50% of length between ticks
        }
      },
      color: {
        pattern: ['#DB5B57']
      },
      legend: {
        show: false
      },
      axis: {
        x: {
          show: false
        },
        y: {
          show: false
        }
      }
    });
  }
}
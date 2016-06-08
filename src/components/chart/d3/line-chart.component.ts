import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'line-chart-widget',
  template: `
  <div id="lineChart"></div>
  `,
  styles: [`
  #lineChart {
      height: 226px;
  }
  `]
})
export class LineChartWidget implements OnInit {
  constructor() {}

  ngOnInit(): void {
    c3.generate({
      bindto: '#lineChart',
      data: {
        columns: [
          ['New user', 30, 200, 100, 400, 150, 250],
          ['Returning user', 50, 120, 210, 140, 115, 425],
          ['Referral user', 40, 150, 98, 300, 175, 100]
        ]
      },
      color: {
        pattern: ['#3CA2E0','#5CB85C','#F1B35B']
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
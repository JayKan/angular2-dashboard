import { Component, ViewEncapsulation, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ChartContainer, randomScalingGenerator, randomColor } from '../common/common';

@Component({
  selector: 'pie-chart-cmp',
  encapsulation: ViewEncapsulation.None,
  directives: [ChartContainer],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <chart-container [headerStyle]="'info'">
    <container-title>
      <h3>Pie Chart <small>from Chart.js</small></h3>
    </container-title>
    
    <container-body>
      <canvas id="pie-chart"></canvas>
    </container-body>
    
    <container-footer>
      <button (click)="randomize()">Randomize</button>
      <button (click)="addDataset()">Add Dataset</button>
      <button (click)="removeDataset()">Remove Dataset</button>    
    </container-footer>
  </chart-container>
  `
})

export class PieChartComponent implements OnInit {
  pieChartConfig: any;
  chart: Chart;

  constructor() {

    this.pieChartConfig = {
      type: 'pie',
      data: {
        datasets: [
          {
            data: [
              randomScalingGenerator(),
              randomScalingGenerator(),
              randomScalingGenerator(),
              randomScalingGenerator(),
              randomScalingGenerator(),
            ],
            backgroundColor: [
              '#F7464A',
              '#46BFBD',
              '#FDB45C',
              '#949FB1',
              '#4D5360',
            ],
          },
          {
            data: [
              randomScalingGenerator(),
              randomScalingGenerator(),
              randomScalingGenerator(),
              randomScalingGenerator(),
              randomScalingGenerator(),
            ],
            backgroundColor: [
              '#F7464A',
              '#46BFBD',
              '#FDB45C',
              '#949FB1',
              '#4D5360',
            ],
          },
          {
            data: [
              randomScalingGenerator(),
              randomScalingGenerator(),
              randomScalingGenerator(),
              randomScalingGenerator(),
              randomScalingGenerator(),
            ],
            backgroundColor: [
              '#F7464A',
              '#46BFBD',
              '#FDB45C',
              '#949FB1',
              '#4D5360',
            ],
          }
        ],
        labels: [
          'Red',
          'Green',
          'Yellow',
          'Grey',
          'Dark Grey'
        ]
      },
      options: {
        responsive: true,
        legend: {
          position: 'bottom'
        },
      },
    };
  }

  ngOnInit(): void {
    let element:any = document.getElementById('pie-chart');
    let context = element.getContext('2d');
    this.chart = new Chart(context, this.pieChartConfig);
  }

  randomize(): void {
    this.pieChartConfig.data.datasets
        .forEach(dataset => {
          dataset.data = dataset.data.map(() => randomScalingGenerator())
        });
    this.chart.update();
  }

  addDataset(): void {
    let newDataset = {
      backgroundColor: [randomColor(0.7), randomColor(0.7), randomColor(0.7), randomColor(0.7), randomColor(0.7)],
      data: [randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator()]
    };
    this.pieChartConfig.data.datasets.push(newDataset);
    this.chart.update();
  }

  removeDataset(): void {
    this.pieChartConfig.data.datasets.splice(0, 1);
    this.chart.update();
  }
}
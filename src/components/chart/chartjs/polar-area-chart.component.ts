import { Component, ViewEncapsulation, OnInit, ChangeDetectionStrategy } from 'angular2/core';
import { ChartContainer, randomScalingGenerator, randomColor } from '../common/common';

@Component({
  selector: 'polar-area-chart-widget',
  template: `
  <chart-container [headerStyle]="'danger'">
    <container-title>
      <h3>Polar Area Chart <small>from Chart.js</small></h3>
    </container-title>
    
    <container-body>
      <canvas id="polar-area-chart"></canvas>
    </container-body>
    
    <container-footer>
      <button (click)="randomize()">Randomize</button>
      <button (click)="addData()">Add Data</button>
      <button (click)="removeData()">Remove Data</button>
    </container-footer>
  </chart-container>
  `,
  directives: [ChartContainer],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PolarAreaChartWidget implements OnInit {
  polarChartConfig:any;
  chart: Chart;

  constructor() {
    this.polarChartConfig = {
      type: 'polarArea',
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
            label: 'My dataset' // for legend
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
        title: {
          display: true,
          text: 'Polar Area Chart'
        },
        scale: {
          ticks: {
            beginAtZero: true
          },
          reverse: false
        },
        animateRotate: false
      }
    }
  }

  ngOnInit():void {
    let element:any = document.getElementById('polar-area-chart');
    let context = element.getContext('2d');
    this.chart = new Chart(context, this.polarChartConfig);
  }

  randomize():void {
    this.polarChartConfig.data.datasets
        .forEach(dataset => {
          dataset.data = dataset.data.map(() => randomScalingGenerator());
          dataset.backgroundColor = dataset.backgroundColor.map(() => randomColor(0.1));
        });
    this.chart.update();
  }

  addData():void {
    if (this.polarChartConfig.data.datasets.length > 0) {
      this.polarChartConfig.data.datasets
          .forEach(dataset => {
            dataset.data.push(randomScalingGenerator());
            dataset.backgroundColor.push(randomColor(-0.2));
          });
      this.chart.update();
    }
  }

  removeData():void {
    // remove the label first
    this.polarChartConfig.data.labels.pop();
    this.polarChartConfig.data.datasets
        .forEach(dataset => {
          dataset.data.pop();
          dataset.backgroundColor.pop();
        });
    this.chart.update();
  }
}
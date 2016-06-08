import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ChartContainer, randomScalingGenerator, randomColor } from '../common/common';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

@Component({
  selector: 'line-chart-cmp',
  template:`
  <chart-container [headerStyle]="'warning'">
    <container-title>
      <h3>Multiple Lines Chart <small>from Chart.js</small></h3>
    </container-title>
    
    <container-body>
      <canvas id="line-chart"></canvas>
    </container-body>
    
    <container-footer>
      <button (click)="randomize()">Randomize</button>
      <button (click)="addDataset()">Add Dataset</button>
      <button (click)="removeDataset()">Remove Dataset</button>
      <button (click)="addData()">Add Data</button>
      <button (click)="removeData()">Remove Data</button>
    </container-footer>
  </chart-container>
  `,
  encapsulation: ViewEncapsulation.None,
  directives: [ChartContainer],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LineChartComponent implements OnInit {

  lineChartConfig: any;
  chart: Chart;

  constructor() {
    this.lineChartConfig = {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
          label: "1st dataset",
          data: [randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator()],
          fill: false,
          borderDash: [5, 5]
        }, {
          label: "2nd dataset",
          data: [randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator()],
          fill: false,
          borderDash: [5, 5]
        }, {
          label: "3rd dataset",
          data: [randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator()],
          fill: false,
        }, {
          label: "4th dataset",
          data: [randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator()],
          fill: false,
        }]
      },
      options: {
        responsive: true,
        legend: {
          position: 'bottom'
        },
        hover: {
          mode: 'label'
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: false,
              labelString: 'Month'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: false,
              labelString: 'Value'
            }
          }]
        },
        title: {
          display: true,
          text: 'Lines Chart Title'
        }
      }
    };

    this.lineChartConfig.data.datasets
      .forEach(dataset => {
        const background = randomColor(0.5);
        dataset.borderColor = background;
        dataset.backgroundColor = background;
        dataset.pointBorderColor = background;
        dataset.pointBackgroundColor = background;
        dataset.pointBorderWidth = 1;
      })
    ;
  }
  
  ngOnInit(): void {
    let chart: any = document.getElementById('line-chart');
    let context = chart.getContext('2d');
    this.chart = new Chart(context, this.lineChartConfig);
  }

  randomize(): void {
    this.lineChartConfig.data.datasets
      .forEach(dataset => {
        dataset.data = dataset.data.map(() => {
          return randomScalingGenerator();
        });
      });
    this.chart.update();

  }

  addDataset(): void {
    const background = randomColor(0.5);
    let newDataset = {
      label: this.lineChartConfig.data.datasets.length + 'rd' + ' Dataset',
      borderColor: background,
      backgroundColor: background,
      pointBorderColor: background,
      pointBackgroundColor: background,
      pointBorderWidth: 1,
      fill: false,
      data: []
    };

    for (let i = 0, j = this.lineChartConfig.data.labels.length; i < j; i+=1) {
      newDataset.data.push(randomScalingGenerator());
    }

    this.lineChartConfig.data.datasets.push(newDataset);
    this.chart.update();
  }

  removeDataset(): void {
    this.lineChartConfig.data.datasets.splice(0, 1);
    this.chart.update();
  }

  addData(): void {
    if (this.lineChartConfig.data.datasets.length > 0) {
      let month = MONTHS[this.lineChartConfig.data.labels.length % MONTHS.length];
      this.lineChartConfig.data.labels.push(month);
      this.lineChartConfig.data.datasets
        .forEach(dataset => dataset.data.push(randomScalingGenerator()));
      this.chart.update()
    }
  }

  removeData(): void {
    // remove the label first
    this.lineChartConfig.data.labels.splice(-1, 1);
    this.lineChartConfig.data.datasets
      .forEach(dataset => dataset.data.pop());
    this.chart.update();
  }
}
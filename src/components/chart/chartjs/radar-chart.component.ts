import {Component, ViewEncapsulation, OnInit} from 'angular2/core';
import {ChartContainer, randomScalingGenerator, randomColor} from '../common/common';

interface ChartConfig {
  type:string;
  data:{}
  options:{}
}

@Component({
  selector: 'radar-chart-widget',
  template: `
  <chart-container [headerStyle]="'success'">
    <container-title>
      <h3>Radar Chart <small>from Chart.js</small></h3>
    </container-title>
    
    <container-body>
      <canvas id="radar-chart"></canvas>
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
  directives: [ChartContainer],
  encapsulation: ViewEncapsulation.None
})
export class RadarChartWidget implements OnInit {
  radarChartConfig:any;
  chart:Chart;

  constructor() {
    this.radarChartConfig = {
      type: 'radar',
      data: {
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [
          {
            label: '1st dataset',
            backgroundColor: 'rgba(220,220,220,0.2)',
            pointBackgroundColor: 'rgba(220,220,220,1)',
            data: [randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator()]
          },
          {
            label: 'Hidden dataset',
            hidden: true,
            data: [randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator()],
          },
          {
            label: "2nd dataset",
            backgroundColor: "rgba(151,187,205,0.2)",
            pointBackgroundColor: "rgba(151,187,205,1)",
            hoverPointBackgroundColor: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator()]
          }
        ]
      },
      options: {
        legend: {
          position: 'bottom',
        },
        title: {
          display: true,
          text: 'Radar Chart Title'
        },
        scale: {
          reverse: false,
          ticks: {
            beginAtZero: true
          }
        }
      }
    };
  }

  ngOnInit():void {
    let element: any = document.getElementById('radar-chart');
    let context = element.getContext('2d');
    this.chart = new Chart(context, this.radarChartConfig);
  }

  randomize():void {
    this.radarChartConfig.data.datasets
      .forEach(dataset => {
        dataset.data = dataset.data.map(() => randomScalingGenerator());
      });
    this.chart.update();
  }

  addDataset():void {
    let newDataset = {
      label: this.radarChartConfig.data.datasets.length + 'th' + ' Dataset',
      borderColor: randomColor(0.4),
      backgroundColor: randomColor(0.5),
      pointBorderColor: randomColor(0.7),
      pointBackgroundColor: randomColor(0.5),
      pointBorderWidth: 1,
      data: []
    };

    for (let i = 0, j = this.radarChartConfig.data.labels.length; i < j; i+=1) {
      newDataset.data.push(randomScalingGenerator());
    }

    this.radarChartConfig.data.datasets.push(newDataset);
    this.chart.update();
  }

  removeDataset():void {
    this.radarChartConfig.data.datasets.splice(0, 1);
    this.chart.update();
  }

  addData():void {
    if (this.radarChartConfig.data.datasets.length) {
      this.radarChartConfig.data.datasets
        .forEach(dataset => dataset.data.push(randomScalingGenerator()));
      this.chart.update();
    }
  }

  removeData():void {
    if (this.radarChartConfig.data.datasets.length) {
      // remove the label first
      this.radarChartConfig.data.labels.pop();

      this.radarChartConfig.data.datasets
        .forEach(dataset => dataset.data.pop());

      this.chart.update();
    }
  }

}
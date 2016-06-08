import { Component, ViewEncapsulation, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ChartContainer, randomScalingGenerator, randomColor } from '../common/common';

@Component({
  selector: 'bubble-chart-widget',
  template:`
  <chart-container [headerStyle]="'primary'">
    <container-title>
      <h3>Bubble Chart <small>from Chart.js</small></h3>     
    </container-title>
      
    <container-body>    
      <canvas id="bubble-chart"></canvas>     
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
#bubble-chart {
    moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}
button {
    font-size: 10px;
}
  `]
})
export class BubbleChartWidget implements OnInit {

  bubbleChartData: any;
  chart: Chart;

  addedCount: number = 0;
  DEFAULT_DATASET_SIZE: number = 7;

  constructor() {
    this.bubbleChartData = {
      animation: {
        duration: 10000
      },
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: randomColor(0.4),
          data: [{
            x: randomScalingGenerator(),
            y: randomScalingGenerator(),
            r: Math.abs(randomScalingGenerator()) / 5,
          }, {
            x: randomScalingGenerator(),
            y: randomScalingGenerator(),
            r: Math.abs(randomScalingGenerator()) / 5,
          }, {
            x: randomScalingGenerator(),
            y: randomScalingGenerator(),
            r: Math.abs(randomScalingGenerator()) / 5,
          }, {
            x: randomScalingGenerator(),
            y: randomScalingGenerator(),
            r: Math.abs(randomScalingGenerator()) / 5,
          }, {
            x: randomScalingGenerator(),
            y: randomScalingGenerator(),
            r: Math.abs(randomScalingGenerator()) / 5,
          }, {
            x: randomScalingGenerator(),
            y: randomScalingGenerator(),
            r: Math.abs(randomScalingGenerator()) / 5,
          }, {
            x: randomScalingGenerator(),
            y: randomScalingGenerator(),
            r: Math.abs(randomScalingGenerator()) / 5
          }]
        },
        {
          label: "My Second dataset",
          backgroundColor: randomColor(0.4),
          data: [{
            x: randomScalingGenerator(),
            y: randomScalingGenerator(),
            r: Math.abs(randomScalingGenerator()) / 5,
          }, {
            x: randomScalingGenerator(),
            y: randomScalingGenerator(),
            r: Math.abs(randomScalingGenerator()) / 5,
          }, {
            x: randomScalingGenerator(),
            y: randomScalingGenerator(),
            r: Math.abs(randomScalingGenerator()) / 5,
          }, {
            x: randomScalingGenerator(),
            y: randomScalingGenerator(),
            r: Math.abs(randomScalingGenerator()) / 5,
          }, {
            x: randomScalingGenerator(),
            y: randomScalingGenerator(),
            r: Math.abs(randomScalingGenerator()) / 5,
          }, {
            x: randomScalingGenerator(),
            y: randomScalingGenerator(),
            r: Math.abs(randomScalingGenerator()) / 5,
          }, {
            x: randomScalingGenerator(),
            y: randomScalingGenerator(),
            r: Math.abs(randomScalingGenerator()) / 5,
          }]
        }
      ]
    };
  }

  ngOnInit(): void {
    let chart: any = document.getElementById('bubble-chart');
    let context = chart.getContext('2d');
    this.chart = new Chart(context, {
      type: 'bubble',
      data: this.bubbleChartData,
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Bubble Chart Title',
          position: 'top',
          padding: 10,
          fullWidth: true
        },
        legend: {
          display: true,
          position: 'bottom'
        }
      },
    });
  }

  randomize(): void {
    this.bubbleChartData.datasets.forEach(dataset => {
      dataset.backgroundColor = randomColor(0.4);
      dataset.data = dataset.data.map(() => {
        return {
          x: randomScalingGenerator(),
          y: randomScalingGenerator(),
          r: Math.abs(randomScalingGenerator() / 5)
        };
      });
    });
    this.chart.update();
  }

  addDataset(): void {
    this.addedCount+=1;
    let newDataset = {
      label: 'Newly added dataset ' + this.addedCount,
      backgroundColor: randomColor(0.4),
      data: []
    };

    for (let i = 0; i < this.DEFAULT_DATASET_SIZE; i+=1) {
      newDataset.data.push({
        x: randomScalingGenerator(),
        y: randomScalingGenerator(),
        r: Math.abs(randomScalingGenerator() / 5)
      });
    }
    this.bubbleChartData.datasets.push(newDataset);
    this.chart.update();
  }

  removeDataset(): void {
    this.bubbleChartData.datasets.splice(0, 1);
    this.chart.update();
  }

  addData(): void {
    if (this.bubbleChartData.datasets.length > 0) {
      for (let i = 0, j = this.bubbleChartData.datasets.length; i < j; i+=1) {
        this.bubbleChartData.datasets[i].data.push({
          x: randomScalingGenerator(),
          y: randomScalingGenerator(),
          r: Math.abs(randomScalingGenerator() / 5)
        });
      }
      this.chart.update();
    }
  }

  removeData(): void {
    this.bubbleChartData.datasets.forEach(dataset => dataset.data.pop());
    this.chart.update();
  }
}
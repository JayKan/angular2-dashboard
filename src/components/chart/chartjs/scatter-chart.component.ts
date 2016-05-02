import { Component, ViewEncapsulation, OnInit } from 'angular2/core';
import { ChartContainer, randomScalingGenerator, randomColor } from '../common/common';

@Component({
  selector: 'scatter-chart-widget',
  template: `
  <chart-container>
    <container-title>
      <h3>Scatter Chart <small>from Chart.js</small></h3>
    </container-title>
    
    <container-body>
      <canvas id="scatter-chart"></canvas>
    </container-body>
    
    <container-footer>
      <button (click)="randomize()">Randomize</button>
    </container-footer>
  </chart-container>
  `,
  directives: [ChartContainer],
  encapsulation: ViewEncapsulation.None
})
export class ScatterChartWidget implements OnInit {
  scatterChartConfig:any;
  chart:Chart;

  constructor() {
    this.scatterChartConfig = {
      type: 'scatter',
      data: {
        datasets: [
          {
            label: '1st dataset',
            backgroundColor: 'rgba(220,220,220,0.2)',
            pointBackgroundColor: 'rgba(220,220,220,1)',
            data: [
              {
                x: randomScalingGenerator(),
                y: randomScalingGenerator(),
              },
              {
                x: randomScalingGenerator(),
                y: randomScalingGenerator(),
              },
              {
                x: randomScalingGenerator(),
                y: randomScalingGenerator(),
              },
              {
                x: randomScalingGenerator(),
                y: randomScalingGenerator(),
              },
              {
                x: randomScalingGenerator(),
                y: randomScalingGenerator(),
              },
              {
                x: randomScalingGenerator(),
                y: randomScalingGenerator(),
              },
              {
                x: randomScalingGenerator(),
                y: randomScalingGenerator(),
              }
            ]
          },
          {
            label: '2nd dataset',
            backgroundColor: "rgba(151,187,205,0.2)",
            pointBackgroundColor: "rgba(151,187,205,1)",
            data: [
              {
                x: randomScalingGenerator(),
                y: randomScalingGenerator(),
              }, 
              {
                x: randomScalingGenerator(),
                y: randomScalingGenerator(),
              }, 
              {
                x: randomScalingGenerator(),
                y: randomScalingGenerator(),
              }, 
              {
                x: randomScalingGenerator(),
                y: randomScalingGenerator(),
              }, 
              {
                x: randomScalingGenerator(),
                y: randomScalingGenerator(),
              }, 
              {
                x: randomScalingGenerator(),
                y: randomScalingGenerator(),
              }, 
              {
                x: randomScalingGenerator(),
                y: randomScalingGenerator(),
              }
            ]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Scatter Chart Title'
        },
        legend: {
          position: 'bottom'
        },
        scales: {
          xAxes: [
            {
              position: 'top',
              gridLines: {
                zeroLineColor: 'rgba(151,187,205,0.8)'
              },
              scaleLabel: {
                display: true,
                labelString: 'x axis'
              }
            }
          ],
          yAxes: [
            {
              position: 'right',
              gridLines: {
                zeroLineColor: 'rgba(151,187,205,0.8)'
              },
              scaleLabel: {
                display: true,
                labelString: 'y axis'
              }
            }
          ]
        }
      }
    };
    
    this.scatterChartConfig.data.datasets
      .forEach(dataset => {
        dataset.pointBorderColor = 'rgba(232, 183, 105, 0.9)';
        dataset.pointBackgroundColor = 'rgba(232, 183, 105, 1)';
        dataset.pointBorderWidth = 1;
      });
  }

  ngOnInit():void {
    let element: any = document.getElementById('scatter-chart');
    let context = element.getContext('2d');
    this.chart = new Chart(context, this.scatterChartConfig);
  }

  randomize():void {
    this.scatterChartConfig.data.datasets
      .forEach(dataset => {
        dataset.data = dataset.data.map(() => {
          return {
            x: randomScalingGenerator(),
            y: randomScalingGenerator()
          };
        });
      });
    this.chart.update();
  }
}
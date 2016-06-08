import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {ChartContainer, randomScalingGenerator, randomColor} from '../common/common';

@Component({
  selector: 'combo-line-bar-widget',
  template: `
  <chart-container [headerStyle]="'primary'">
    <container-title>
      <h3>Combo Bar Line Chart <small>from Chart.js</small></h3>
    </container-title>
    
    <container-body>
      <canvas id="combo-line-bar"></canvas>  
    </container-body>
    
    <container-footer>
      <button (click)="randomize()">Randomize Data</button>
    </container-footer>
  </chart-container>
  `,
  directives: [ChartContainer],
  encapsulation: ViewEncapsulation.None
})
export class ComboLineBarWidget implements OnInit {
  lineBarChartConfig:any;
  chart:Chart;

  constructor() {
    this.lineBarChartConfig = {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            type: 'bar',
            label: 'Dataset 1',
            backgroundColor: 'rgba(151,187,205,0.5)',
            data: [randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator()],
            borderColor: 'white',
            borderWidth: 2
          },
          {
            type: 'line',
            label: 'Dataset 2',
            backgroundColor: 'rgba(151,187,205,0.5)',
            data: [randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator()],
            borderColor: 'white',
            borderWidth: 2
          },
          {
            type: 'bar',
            label: 'Dataset 3',
            backgroundColor: 'rgba(220,220,220,0.5)',
            data: [randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator(), randomScalingGenerator()]
          }
        ]
      },
      options: {
        responsive: true,
        legend: {
          position: 'bottom'
        },
        title: {
          display: true,
          text: 'Combo Bar Line Chart Title'
        }
      }
    }
  }

  ngOnInit():void {
    let element: any = document.getElementById('combo-line-bar');
    let context = element.getContext('2d');
    this.chart= new Chart(context, this.lineBarChartConfig);
  }

  randomize():void {
    this.lineBarChartConfig.data.datasets
        .forEach(dataset => {
          dataset.backgroundColor = randomColor(0.5);
          dataset.data = dataset.data.map(() => randomScalingGenerator());
        });
    this.chart.update();
  }
}
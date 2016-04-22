import { Component, OnInit } from 'angular2/core';

@Component({
  selector: 'pie-chart-widget',
  template:`  
  <div id="pieChart"></div>
  `,
  styles: [`
  #pieChart {
    height: 125px;
    margin:-12px 0 -15px;
  }
  `]
})
export class PieChartWidget implements OnInit {

  ngOnInit(): void {
    c3.generate({
      bindto: '#pieChart',
      data: {
        columns: [
          ['data1', 11],
          ['data2', 23],
          ['data3', 66]
        ],
        type: 'pie'
      },
      color: {
        pattern: ['#5CB85C', '#F0AD4E', '#3CA2E0']
      },
      legend: {
        show: false
      }
    });
  }

}
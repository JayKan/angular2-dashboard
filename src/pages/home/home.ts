import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StatsWidget } from '../../components/stats/stats';
import { TodoWidget } from '../../components/todo/todo';
import {
  LineChartWidget,
  PieChartWidget,
  BarChartWidget,
  WorldMapWidget
} from '../../components/chart/chart';

@Component({
  selector: 'home',
  templateUrl: 'pages/home/home.template.html',
  directives: [
    StatsWidget, 
    TodoWidget, 
    LineChartWidget,
    PieChartWidget,
    BarChartWidget,
    WorldMapWidget
  ],
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['pages/home/home.css']
})

export class HomeView implements OnInit {
  stats: Array<any>;
  
  ngOnInit(): void {
    this.stats = [
      { icon: 'cloud-upload', value: '88%', text: 'Server Uptime', bgClass: 'info', progressValue: '88' },
      { icon: 'heartbeat', value: '94%', text: 'Positive feedback', bgClass: 'success', progressValue: '94' },
      { icon: 'flag', value: '12,351', text: 'Posts flagged', bgClass: 'danger', progressValue: '72' },
    ];
  }
}
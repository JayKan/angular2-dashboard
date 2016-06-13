import { Component } from '@angular/core';
import {
  BubbleChartWidget,
  LineChartComponent,
  PieChartComponent,
  PolarAreaChartWidget,
  ComboLineBarWidget,
  RadarChartWidget,
  ScatterChartWidget,
} from '../../components/chart/chart';

@Component({
  selector: 'charts',
  templateUrl: 'pages/charts/charts.template.html',
  directives: [
    BubbleChartWidget,
    LineChartComponent,
    PieChartComponent,
    PolarAreaChartWidget,
    ComboLineBarWidget,
    RadarChartWidget,
    ScatterChartWidget,
  ]
})
export class ChartsView {
  
}
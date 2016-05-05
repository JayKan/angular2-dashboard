import { Component } from 'angular2/core';
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
  template:`
  <h4>Dashboard@Charts</h4>
  <div class="animate">
    <div class="row">
      <div class="col-md-6">
        <bubble-chart-widget></bubble-chart-widget>    
      </div>
      
      <div class="col-md-6">
        <line-chart-cmp></line-chart-cmp>
      </div>
    </div>
    
    <div class="row">
      <div class="col-md-6">
        <pie-chart-cmp></pie-chart-cmp>
      </div>      
      <div class="col-md-6">
        <polar-area-chart-widget></polar-area-chart-widget>
      </div>
    </div>
    
    <div class="row">
      <div class="col-md-6">
        <combo-line-bar-widget></combo-line-bar-widget>
      </div>
      
      <div class="col-md-6">
        <radar-chart-widget></radar-chart-widget>
      </div>
    </div>
    
    <div class="row">
      <div class="col-md-6">
        <scatter-chart-widget></scatter-chart-widget>
      </div>
    </div>
  </div>
   
  `,
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
import { Component, OnInit, ViewEncapsulation } from 'angular2/core';
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
  template: `
  <h4>Dashboard@Home</h4>
  <div class="animate">
    <div class="row">    
      <div class="col-lg-4 col-xl-3">
        <div class="home-stats">          
          <div *ngFor="#record of stats">
            <stats-widget
              [icon]="record.icon"
              [value]="record.value"
              [text]="record.text"
              [bgClass]="record.bgClass"
              [progressValue]="record.progressValue"
            >            
            </stats-widget>
          </div>                   
        </div>
      </div>
      
      <div class="col-lg-4 col-xl-6">
        <div class="card">
          <div class="card-block">
            <div class="chart-comment clearfix">
              <div class="text-primary pull-left margin-right-5">
                <b>
                  <span class="comment-header">55%</span><br />
                  <span class="comment-comment">Referral User&nbsp;</span>
                </b>
              </div>
              <div class="text-success pull-left margin-right-5">
                <b>
                  <span class="comment-header">25%</span><br />
                  <span class="comment-comment">Returning User&nbsp;</span>
                </b>
              </div>
              <div class="text-warning pull-left">
                <b>
                  <span class="comment-header">20%</span><br />
                  <span class="comment-comment">New User</span>
                </b>
              </div>
            </div>          
            <line-chart-widget></line-chart-widget>
          </div>
        </div>
      </div>
      
      <div class="col-lg-4 col-xl-3">
        <div class="card">
          <div class="card-block">           
            <bar-chart-widget></bar-chart-widget>
          </div>
        </div>
        
        <div class="card">
          <div class="card-block">
            <div class="row">
              <div class="col-sm-6 text-left">
                <div>
                  <span class="heading">Total View: </span><br />
                  <big class="text-primary">22068</big>
                </div>
              </div>
              
              <div class="col-sm-6">                
                <pie-chart-widget></pie-chart-widget>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-8">
        <div class="card">
          <div class="card-block">           
            <world-map-widget></world-map-widget>
          </div>
        </div>
      </div>     
      <div class="col-xs-12 col-sm-6 col-md-4">                             
        <todo-widget></todo-widget>
      </div>
    </div>
  </div>   
  `,
  directives: [
    StatsWidget, 
    TodoWidget, 
    LineChartWidget,
    PieChartWidget,
    BarChartWidget,
    WorldMapWidget
  ],
  encapsulation: ViewEncapsulation.None,
  styles: [`
   .card-block {
        padding: 0.875rem;
   }
   .text-primary {
        color: #2c3e50 !important;
   }
   .text-success {
        color: #5cb85c !important;
   }
   .text-warning {
        color: #f0ad4e !important;
   }
   .margin-right-5 {
        margin-right: 5px;
   }
   .chart-comment b {
        font-weight: 500;
   }
   #pieChart svg .c3-chart .c3-chart-arcs .c3-target text {
        display: none; 
   }
   .jqvmap-zoomin, .jqvmap-zoomout {
      background: #2c3e50;
      padding: 3px;
      width: 15px;
      height: 15px; 
  }
  `]
})

export class Home implements OnInit {
  stats: Array<any>;
  
  ngOnInit(): void {
    this.stats = [
      { icon: 'cloud-upload', value: '88%', text: 'Server Uptime', bgClass: 'info', progressValue: '88' },
      { icon: 'heartbeat', value: '94%', text: 'Positive feedback', bgClass: 'success', progressValue: '94' },
      { icon: 'flag', value: '12,351', text: 'Posts flagged', bgClass: 'danger', progressValue: '72' },
    ];
  }
}
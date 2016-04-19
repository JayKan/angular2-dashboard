import { Component, Input, ViewEncapsulation } from 'angular2/core';

@Component({
  selector: 'stats-widget',
  template: `
  <a class="stat card hvr-wobble-horizontal">
    <div class="stat-icon">
      <i class="fa fa-{{ icon }} fa-4x text-{{ bgClass }}"></i>
    </div>
    <div class="stat-label">
      <div class="label-header">
        {{ value }}
      </div>
      <progress class="progress progress-{{ bgClass }}" max="100" value="{{ progressValue }}">{{ progressValue }}%</progress>
      <div class="clearfix stat-detail">
        <div class="label-body">
          <i class="fa fa-arrow-circle-o-right pull-right text-muted"></i> {{ text }}
        </div>
      </div>
    </div>
  </a>    
  `,
  styles: [`
  progress {
    display: block;
    width: 100%;
  }
  .progress[value] {
    color: #0074d9;
    border: 0;
    appearance: none;
  }

  .progress[value]::-webkit-progress-bar {
      background-color: #eee;
  }
  
  .progress[value]::-webkit-progress-value::before {
      content: attr(value);
  }
  
  .progress[value]::-webkit-progress-value {
      background-color: #0074d9;
      border-top-left-radius: 0.25rem;
      border-bottom-left-radius: 0.25rem;
  }
  
  .progress[value="100"]::-webkit-progress-value {
      border-top-right-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
  }
  .progress-success[value]::-webkit-progress-value {
    background-color: #5cb85c;
  }

  .progress-success[value]::-moz-progress-bar {
    background-color: #5cb85c;
  }
  .progress-info[value]::-webkit-progress-value {
    background-color: #5bc0de;
  }

  .progress-info[value]::-moz-progress-bar {
    background-color: #5bc0de;
  }
  .progress-danger[value]::-webkit-progress-value {
    background-color: #de6764;
  }

  .progress-danger[value]::-moz-progress-bar {
      background-color: #de6764;
  }

  .card {  
      position: relative;
      display: block;
      margin-bottom: 0.625rem;
      background-color: #fff;
      border: 1px solid #e5e5e5; 
  }
  .text-info {
      color: #5bc0de !important;
  }
  .text-success {
      color: #5cb85c !important;
  }
  .text-danger {
      color: #de6764 !important;
  }
  a.stat {
      display: table !important;
      width: 100%;
      padding: 10px;
      height: 89px;
      margin-bottom: 10px;
      text-align: left;
  }
  a.stat:hover {
      text-decoration: none;
 
  }
  
  a.stat .stat-icon, a.stat .stat-label {
      display: table-cell;
      vertical-align: middle;
  }
  
  a.stat .stat-icon {
      margin-top: 5px;
      width: 75px;
  }
  
  a.stat .stat-label .label-header {
      color: #666;
      font-size: 22px;
      font-weight: 200;
  }
  
  a.stat .stat-label .progress {
      height: 5px;
      margin-bottom: 0;
  }
  
  a.stat .stat-detail {
      margin-top: 10px;
      font-size: 14px;
      color: #666;
  }
  
  a.stat .stat-detail i {
      margin-top: 5px;
  }
  
  /* Wobble Horizontal */
  @-webkit-keyframes hvr-wobble-horizontal {
      16.65% {
          -webkit-transform: translateX(8px);
          transform: translateX(8px);
      }
      33.3% {
          -webkit-transform: translateX(-6px);
          transform: translateX(-6px);
      }
      49.95% {
          -webkit-transform: translateX(4px);
          transform: translateX(4px);
      }
      66.6% {
          -webkit-transform: translateX(-2px);
          transform: translateX(-2px);
      }
      83.25% {
          -webkit-transform: translateX(1px);
          transform: translateX(1px);
      }
      100% {
          -webkit-transform: translateX(0);
          transform: translateX(0);
      }
  }
  @keyframes hvr-wobble-horizontal {
      16.65% {
          -webkit-transform: translateX(8px);
          transform: translateX(8px);
      }
      33.3% {
          -webkit-transform: translateX(-6px);
          transform: translateX(-6px);
      }
      49.95% {
          -webkit-transform: translateX(4px);
          transform: translateX(4px);
      }
      66.6% {
          -webkit-transform: translateX(-2px);
          transform: translateX(-2px);
      }
      83.25% {
          -webkit-transform: translateX(1px);
          transform: translateX(1px);
      }
      100% {
          -webkit-transform: translateX(0);
          transform: translateX(0);
      }
  }
  .hvr-wobble-horizontal {
      display: inline-block;
      vertical-align: middle;
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      box-shadow: 0 0 1px transparent;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      -moz-osx-font-smoothing: grayscale;
  }
  
  .hvr-wobble-horizontal:hover, .hvr-wobble-horizontal:focus, .hvr-wobble-horizontal:active {
      -webkit-animation-name: hvr-wobble-horizontal;
      animation-name: hvr-wobble-horizontal;
      -webkit-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-timing-function: ease-in-out;
      animation-timing-function: ease-in-out;
      -webkit-animation-iteration-count: 1;
      animation-iteration-count: 1;
  }
  
  `],
  encapsulation: ViewEncapsulation.None
})
export class StatsWidget {
  @Input() icon: string;
  @Input() value: string;
  @Input() text: string;
  @Input() bgClass: string;
  @Input() progressValue: string;
}
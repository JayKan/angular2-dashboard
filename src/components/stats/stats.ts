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
  styleUrls: ['components/stats/stats.style.css'],
  encapsulation: ViewEncapsulation.None
})
export class StatsWidget {
  @Input() icon: string;
  @Input() value: string;
  @Input() text: string;
  @Input() bgClass: string;
  @Input() progressValue: string;
}
import { Component, OnInit, ViewEncapsulation } from 'angular2/core';
import { StatsWidget } from '../../components/stats/stats';

@Component({
  selector: 'home',
  template: `
  <h4>Dashboard@Home</h4>
  <div class="animate">
    <div class="row home-row">    
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
    </div>
  </div>   
  `,
  directives: [StatsWidget],
  encapsulation: ViewEncapsulation.None
})

export class Home implements OnInit {
  stats: Array<any>;

  ngOnInit(): void {
    this.stats = [
      { icon: 'cloud-upload', value: '88%', text: 'Server Uptime', bgClass: 'info', progressValue: '88' },
      { icon: 'heartbeat', value: '94%', text: 'Positive feedback', bgClass: 'success', progressValue: '94' },
      { icon: 'flag', value: '12,351', text: 'Posts flagged', bgClass: 'danger', progressValue: '72' },
    ]
  }


}
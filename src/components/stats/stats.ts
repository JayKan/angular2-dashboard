import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'stats-widget',
  templateUrl: 'components/stats/stats.template.html',
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
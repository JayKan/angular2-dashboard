import { Component, ViewEncapsulation } from '@angular/core';
import { TimelineWidget } from '../../components/timeline/timeline';

@Component({
  selector: 'timeline-demo',
  encapsulation: ViewEncapsulation.None,
  directives: [TimelineWidget],
  template: ` 
  <timeline-widget></timeline-widget>
  `
})
export class TimelineView {
  
}
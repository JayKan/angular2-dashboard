import {Component, OnInit, ElementRef, ViewEncapsulation } from 'angular2/core';

declare var jQuery;

@Component({
  selector: 'calendar-widget',
  template: `
  <div class="calendar-container text-center">
    <div id="calendar"></div>
  </div>  
  `,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['components/calendar/calendar.style.css']
})

export class CalendarWidget implements OnInit {

  constructor(private _el: ElementRef) {}
  ngOnInit(): void {
    let calendar: any = jQuery(this._el.nativeElement).find('#calendar');
    calendar.fullCalendar({
      dayClick: function(calEvent, jsEvent, view) {
        alert('Event: ' + calEvent.title);
        alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
        alert('View: ' + view.name);
      }
    });
  }
}
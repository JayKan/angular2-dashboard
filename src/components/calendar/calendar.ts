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
  styles: [`
.calendar-container {
    margin-top: 10px;
}
.calendar-container .fc-toolbar {
    margin: 0 -12px 0 -12px;
    padding: 0 12px;
    background: #1a252f;
    height: 32px;
}
.calendar-container .fc-toolbar .fc-left h2 {
    font-size: 12px !important;
    font-weight: 500;
    margin-bottom: 0 !important;
    text-transform: uppercase;
    padding-top: 9px;
}
.calendar-container .fc-toolbar .fc-right .fc-today-button {
    display: none;
}

.calendar-container .fc-toolbar .fc-button-group {
    font-size: 15px;
    display: flex;
}

.calendar-container .fc-toolbar .fc-button-group .fc-button {
    background: transparent;
    box-shadow: none;
    border: none;
    padding: 0;
}

.calendar-container .fc-toolbar .fc-button-group .fc-button:focus {
    outline: none;
}

.calendar-container .fc-toolbar .fc-button-group .fc-icon {
    color: #FFF;
    font-size: 10px;
}

.calendar-container .fc-view-container {
    padding-top: 8px;
}

.calendar-container .fc-view-container * {
    border: none;
}

.calendar-container .fc-view-container .fc-head {
    border-color: transparent;
}

.calendar-container .fc-view-container .fc-head .fc-row {
    border-color: transparent;
}

.calendar-container .fc-view-container .fc-head .fc-row .fc-day-header {
    border-color: transparent;
    font-size: 10px;
}

.calendar-container .fc-view-container .fc-body {
    font-size: 10px;
}

.calendar-container .fc-view-container .fc-body .fc-day-grid-container {
    overflow: hidden;
}

.calendar-container .fc-view-container .fc-body .fc-content-skeleton {
    padding-bottom: 0;
}

.calendar-container .fc-view-container .fc-body .fc-row {
    min-height: 10px;
}

.calendar-container .fc-view-container .fc-body .fc-row .fc-day-number {
    padding-right: 6px;
    padding-top: 2px;
}

.calendar-container .fc-view-container .fc-body .fc-row .fc-today {
    font-weight: 700;
    background: #1a252f;
}
.calendar-container .fc td.fc-today {
    border-style: none;
}    
  `]
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
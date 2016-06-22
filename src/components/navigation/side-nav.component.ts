import { Component, ViewEncapsulation, ElementRef, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated'
import { CalendarWidget } from '../calendar/calendar';
import { UserProfileWidget, NewsFeedWidget } from '../user/user';

declare var jQuery: any;

@Component({
  selector: 'side-nav',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'components/navigation/side-nav.component.html',
  directives: [
    ROUTER_DIRECTIVES, 
    CalendarWidget, 
    UserProfileWidget,
    NewsFeedWidget
  ],
  styleUrls: ['components/navigation/side-nav.style.css']
})

export class SideNavComponent implements OnInit {
  
  constructor(private _el: ElementRef,
              private _route: Router) {}
  
  ngOnInit(): void {
    let element = jQuery(this._el.nativeElement).find('#sidebar');
    let mainContainer = jQuery('.main-container');
    jQuery(window).bind('resize', function() {
      if (jQuery(this).width() < 769 && element.hasClass('sidebar-left-zero')) {
        element.removeClass('sidebar-left-zero');
        mainContainer.removeClass('main-container-ml-zero');
      }
    });
  }
  
  isActive(instruction: string[]): boolean {
    return this._route.isRouteActive(this._route.generate(instruction));
  }
}
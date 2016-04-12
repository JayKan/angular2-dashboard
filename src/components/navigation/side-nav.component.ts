import { Component, ViewEncapsulation } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
  selector: 'side-nav',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'components/navigation/side-nav.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class SideNavComponent {
  constructor(){}
}
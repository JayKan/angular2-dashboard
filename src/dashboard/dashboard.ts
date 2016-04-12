import { Component, ViewEncapsulation } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { TopNavComponent } from '../components/navigation/navigation';

@Component({
  selector: 'dashboard',
  template: `
    <top-nav></top-nav>
    <section class="main-container">
      <h1>View Component Content</h1>
      <!--<router-outlet></router-outlet>-->
    </section>
  `,
  directives: [ROUTER_DIRECTIVES, TopNavComponent],
  encapsulation: ViewEncapsulation.None,
})

// @RouteConfig([
  // { path: '/', component: HomeComponent, name: 'Home', use}
// ])
export class DashboardComponent {
  constructor() {

  }
}
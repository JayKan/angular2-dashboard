import { Component, ViewEncapsulation } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
  selector: 'dashboard',
  template: `
    <section class="main-container">
      <router-outlet></router-outlet>
    </section>
  `,
  directives: [ROUTER_DIRECTIVES],
  encapsulation: ViewEncapsulation.None,
})

@RouteConfig([
  // { path: '/', component: HomeComponent, name: 'Home', use}
])
export class DashboardComponent {
  
}
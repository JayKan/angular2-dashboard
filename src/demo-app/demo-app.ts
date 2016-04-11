import { Component, ViewEncapsulation } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { LoginComponent } from '../components/login/login';

@Component({
  selector: 'demo-app',
  template: `
    <h2>Admin Dashboard</h2>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS],
  encapsulation: ViewEncapsulation.None
})

@RouteConfig([
  { path: '/login', component: LoginComponent, name: 'Login', useAsDefault: true }
])
export class DemoApp {
  
}
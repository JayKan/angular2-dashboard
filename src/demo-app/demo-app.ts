import { Component, ViewEncapsulation } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { LoginComponent } from '../components/login/login';
import { RegistrationComponent } from '../components/registration/registartion';
import { DashboardComponent } from '../dashboard/dashboard';

@Component({
  selector: 'demo-app',
  template: `  
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS],
  encapsulation: ViewEncapsulation.None,
  styles: [`
  body {
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;  
  }  
  `]
})

@RouteConfig([
  { path: '/login',         component: LoginComponent,          name: 'Login',        useAsDefault: true  },
  { path: '/registration',  component: RegistrationComponent,   name: 'Registration'                      },
  { path: '/dashboard/...', component: DashboardComponent,      name: 'Dashboard'                         }
])
export class DemoApp {}
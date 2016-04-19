import { Component, ViewEncapsulation } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { TopNavComponent, SideNavComponent } from '../components/navigation/navigation';
import { Home } from '../pages/home/home';

@Component({
  selector: 'dashboard',
  template: `
    <top-nav></top-nav>
    <side-nav></side-nav>
    <section class="main-container">     
      <router-outlet></router-outlet>
    </section>
  `,
  directives: [ROUTER_DIRECTIVES, TopNavComponent, SideNavComponent],
  encapsulation: ViewEncapsulation.None,
  styles: [`
     .main-container {
        margin-left: 235px;
        margin-top: 50px;
        padding: 10px;
        transition: all .2s ease-in-out;
        overflow: hidden;
        background: #ECF0F1;
     }
     @media screen and (max-width: 768px) {
        .main-container {
          margin-left: 0 !important;
        }
     }
  `]
})

@RouteConfig([
  { path: '/', component: Home, name: 'Home', useAsDefault: true }
])
export class DashboardComponent {
  constructor() {

  }
}
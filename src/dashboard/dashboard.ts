import { Component, ViewEncapsulation } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { TopNavComponent, SideNavComponent } from '../components/navigation/navigation';
import { HomeView } from '../pages/home/home';
import { TypographyView } from '../pages/typography/typography';
import { ChartsView } from '../pages/charts/charts';
import { TablesView } from '../pages/tables/tables';
import { GridsView } from '../pages/grids/grids';
import { MailView } from '../pages/mails/mails';

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
  { path: '/',            component: HomeView,        name: 'Home',       useAsDefault: true  },
  { path: '/typography',  component: TypographyView,  name: 'Typography'                      },
  { path: '/charts',      component: ChartsView,      name: 'Charts'                          },
  { path: '/tables',      component: TablesView,      name: 'Tables'                          },
  { path: '/grids',       component: GridsView,       name: 'Grids'                           },
  { path: '/mail',        component: MailView,        name: 'Mail'                            }
])
export class DashboardComponent {

  constructor() {}
}
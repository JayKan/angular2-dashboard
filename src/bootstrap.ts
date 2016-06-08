import { bootstrap } from '@angular/platform-browser-dynamic';
import { DemoApp } from './demo-app/demo-app';
import { ROUTER_PROVIDERS } from '@angular/router';

bootstrap(DemoApp, [ROUTER_PROVIDERS])
  .then(success => console.log('Bootstrap success'))
  .catch(error => console.error(error))
;

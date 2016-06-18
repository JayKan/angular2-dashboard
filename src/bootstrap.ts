import { bootstrap } from '@angular/platform-browser-dynamic';
import { DemoApp } from './demo-app/demo-app';
import { ROUTER_PROVIDERS } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

bootstrap(DemoApp, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS
])
.then(success => console.log('Bootstrap success'))
.catch(error => console.error(error));

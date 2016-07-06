import { bootstrap } from '@angular/platform-browser-dynamic';
import { DemoApp } from './demo-app/demo-app';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HTTP_PROVIDERS } from '@angular/http';
import { CUSTOM_EVENTS_PLUGINS } from './plugins/plugins';

bootstrap(DemoApp, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  // CUSTOM_EVENTS_PLUGINS, // Todo some issues with the custom dom events plugin
])
.then(success => console.log('Bootstrap success'))
.catch(error => console.error(error));

import { bootstrap } from 'angular2/platform/browser';
import { DemoApp } from './demo-app/demo-app';

bootstrap(DemoApp, [])
  .then(success => console.log('Bootstrap success'))
  .catch(error => console.error(error))
;
